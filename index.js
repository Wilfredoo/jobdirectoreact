const express = require("express");
const app = express();
const compression = require("compression");
const database = require("./database.js");
const cookieSession = require("cookie-session");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const passport = require("passport");
const cors = require("cors");
FacebookStrategy = require("passport-facebook").Strategy;
let fbSecret;
let callback_URL;
if (process.env.FACEBOOK_SECRET !== undefined) {
    fbSecret = process.env.FACEBOOK_SECRET;
    callback_URL = process.env.CALLBACK_URL;
} else {
    let secrets = require("./secrets.json");
    fbSecret = `${secrets.facebookSecret}`;
    callback_URL = "http://localhost:8080/facebook/callback";
}

app.use(
    cors({
        credentials: true,
        origin: "*"
    })
);
app.use(compression());
app.use(express.static("public"));

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(require("body-parser").json());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

passport.use(
    new FacebookStrategy(
        {
            clientID: 1227008554140703,
            clientSecret: fbSecret,
            // callbackURL: "http://localhost:8080/facebook/callback"
            // callbackURL: "https://www.jobdirecto.com/facebook/callback"
            callbackURL: callback_URL
        },
        function(accessToken, refreshToken, profile, done) {
            console.log("accessToken", accessToken);
            console.log("refreshToken", refreshToken);
            return database
                .findOrCreateFacebookUser(profile.id, profile.displayName)
                .then(user => {
                    done(null, profile);
                });
        }
    )
);

// console logs these user and user ids in the different functions, see wat happens
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/user", (req, res) => {
    res.json(req.user);
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

app.get("/loginFacebook", passport.authenticate("facebook"));

app.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        failureRedirect: "/login"
    }),
    function(req, res) {
        res.redirect("/");
    }
);

// here ends passport code

app.get("/getJobInfo", function(req, res) {
    res.json({
        data: req.session.job
    });
});

app.get("/getPersonInfo", function(req, res) {
    res.json({
        data: req.session.personAd
    });
});

app.get("/getServiceInfo", function(req, res) {
    res.json({
        data: req.session.service
    });
});

app.get("/getDate", function(req, res) {
    return database.getDate(req.session.jobId).then(data => {
        res.json({
            data
        });
    });
});

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.get("/getJobDetails/:id", function(req, res) {
    return database.getJobInfo(req.params.id).then(data => {
        res.json({
            data
        });
        req.session.restname = data.restname;
    });
});

app.get("/whoHasReported/:id", function(req, res) {
    return database.whoHasReported(req.params.id).then(data => {
        console.log("data where u", data);
        res.json({
            data
        });
    });
});

app.post("/reportPost/:id", function(req, res) {
    console.log("got here applepie", req.user.id);
    return database.reportPost(req.params.id, req.user.id).then(data => {
        res.json({
            data
        });
    });
});

app.get("/getServiceDetails/:id", function(req, res) {
    return database.getServiceInfo(req.params.id).then(data => {
        res.json({
            data
        });
        req.session.serviceOwner = data.serviceOwner;
    });
});

app.get("/getPeopleDetails/:id", function(req, res) {
    return database.getPeopleInfo(req.params.id).then(data => {
        res.json({
            data
        });
        req.session.personname = data.personname;
    });
});

app.get("/getJobforCorrect", function(req, res) {
    res.json({
        data: req.session.job
    });
});

app.get("/getJobs", function(req, res) {
    // req.session = null;
    return database.getJobs().then(data => {
        res.json({
            data
        });
    });
});

app.get("/getUserStatus", function(req, res) {
    if (req.user !== undefined) {
        return database.getUserStatus(req.user.id).then(data => {
            res.json({
                data
            });
        });
    }
});

app.get("/getServices", function(req, res) {
    // req.session = null;
    return database.getServices().then(data => {
        res.json({
            data
        });
    });
});

app.get("/getPeople", function(req, res) {
    // req.session = null;
    return database.getPeople().then(data => {
        res.json({
            data
        });
    });
});

app.post("/finalizePerson", (req, res) => {
    req.session.personAd = req.body;
    console.log("req body in finalize: ", req.body);
    if (req.user === undefined) {
        return database
            .publishPersonNoUser2(
                req.body.personName,
                req.body.personStatus,
                req.body.personSkill,
                req.body.personExperience,
                req.body.personSchedule,
                req.body.personArea,
                req.body.personNumber,
                req.body.personExtraInfo,
                req.session.userId
            )
            .then(() => {
                res.json({
                    success: true
                });
            });
    }
    return database
        .publishPerson2(
            req.user.id,
            req.body.personName,
            req.body.personStatus,
            req.body.personSkill,
            req.body.personExperience,
            req.body.personSchedule,
            req.body.personArea,
            req.body.personNumber,
            req.body.personExtraInfo,
            req.session.userId
        )
        .then(() => {
            res.json({
                success: true
            });
        });
});

app.post("/finalizeService", (req, res) => {
    req.session.service = req.body;
    res.json({
        success: true
    });
});

app.post("/cancelUrgency", function(req, res) {
    // delete req.session.urgent;
    req.session.job.urgent = "false";
    res.json({
        success: true
    });
});

app.post("/cancelPay", function(req, res) {
    // delete req.session.urgent;
    // req.session.per = "false";
    res.json({
        success: true
    });
});

app.post("/wantsToPay", (req, res) => {
    return database.wantsToPay().then(() => {
        res.json({
            success: true
        });
    });
});

app.post("/finalizeJob", (req, res) => {
    req.session.job = req.body;
    if (req.user === undefined) {
        return database
            .publishJobNoUser2(
                req.body.restname,
                req.body.jobtype,
                req.body.hourpay,
                req.body.typepay,
                req.body.schedule,
                req.body.contact,
                req.body.address,
                req.body.area,
                req.body.phone,
                req.body.extrainfo,
                req.body.urgent,
                req.session.userId
            )
            .then(() => {
                res.json({
                    success: true
                });
            });
    }
    return database
        .publishJob2(
            req.user.id,
            req.body.restname,
            req.body.jobtype,
            req.body.hourpay,
            req.body.typepay,
            req.body.schedule,
            req.body.contact,
            req.body.address,
            req.body.area,
            req.body.phone,
            req.body.extrainfo,
            req.body.urgent,
            req.session.userId
        )
        .then(() => {
            res.json({
                success: true
            });
        });
});

app.post("/publishJob", (req, res) => {
    req.session.job = null;

    if (req.user === undefined) {
        return database
            .publishJobNoUser(
                req.body.jobData.data.restname,
                req.body.jobData.data.jobtype,
                req.body.jobData.data.hourpay,
                req.body.jobData.data.typepay,
                req.body.jobData.data.schedule,
                req.body.jobData.data.contact,
                req.body.jobData.data.address,
                req.body.jobData.data.area,
                req.body.jobData.data.phone,
                req.body.jobData.data.extrainfo,
                req.body.jobData.data.urgent,
                req.session.userId
            )
            .then(() => {
                res.json({
                    success: true
                });
            });
    }
    return database
        .publishJob(
            req.user.id,
            req.body.jobData.data.restname,
            req.body.jobData.data.jobtype,
            req.body.jobData.data.hourpay,
            req.body.jobData.data.typepay,
            req.body.jobData.data.schedule,
            req.body.jobData.data.contact,
            req.body.jobData.data.address,
            req.body.jobData.data.area,
            req.body.jobData.data.phone,
            req.body.jobData.data.extrainfo,
            req.body.jobData.data.urgent,
            req.session.userId
        )
        .then(() => {
            res.json({
                success: true
            });
        });
});

app.post("/publishPerson", (req, res) => {
    req.session.personAd = null;
    console.log("req body in finalize: ", req.body);

    if (req.user === undefined) {
        return database
            .publishPersonNoUser(
                req.body.personData.data.personName,
                req.body.personData.data.personStatus,
                req.body.personData.data.personSkill,
                req.body.personData.data.personExperience,
                req.body.personData.data.personSchedule,
                req.body.personData.data.personArea,
                req.body.personData.data.personNumber,
                req.body.personData.data.personExtraInfo,
                req.session.userId
            )
            .then(() => {
                res.json({
                    success: true
                });
            });
    }
    return database
        .publishPerson(
            req.user.id,
            req.body.personData.data.personName,
            req.body.personData.data.personStatus,
            req.body.personData.data.personSkill,
            req.body.personData.data.personExperience,
            req.body.personData.data.personSchedule,
            req.body.personData.data.personArea,
            req.body.personData.data.personNumber,
            req.body.personData.data.personExtraInfo,
            req.session.userId
        )
        .then(() => {
            res.json({
                success: true
            });
        });
});

app.get("/deleteJob/:id", function(req, res) {
    console.log("delte job in index", req.session);

    return database.deleteJob(req.params.id).then(data => {
        res.json({
            data
        });
    });
});

app.get("/deletePersonPost/:id", function(req, res) {
    console.log("delte personpost in index", req.session);

    return database.deletePersonPost(req.params.id).then(data => {
        res.json({
            data
        });
    });
});

app.post("/setPremium", function(req, res) {
    console.log("set premium in index js", req.user.id);
    return database.setPremium(req.user.id).then(data => {
        res.json({
            data
        });
    });
});

app.get("/deleteService/:id", function(req, res) {
    console.log("delte service in index", req.session);
    return database.deleteService(req.params.id).then(data => {
        res.json({
            data
        });
        req.session.serviceOwner = data.serviceOwner;
    });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("*", function(req, res) {
    res.redirect("https://" + req.headers.host + req.url);
});

app.listen(process.env.PORT || 8080);
