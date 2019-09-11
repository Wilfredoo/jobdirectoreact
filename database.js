const spicedPg = require("spiced-pg");
let dbUrl;
if (process.env.DATABASE_URL !== undefined) {
    dbUrl = process.env.DATABASE_URL;
} else {
    let secrets = require("./secrets.json");
    dbUrl = `postgres:${secrets.dbUser}:${secrets.dbPassword}@localhost:5433/jobdirecto`;
}
const db = spicedPg(dbUrl);
var bcrypt = require("bcryptjs");

exports.publishJob = function(
    facebookId,
    restname,
    jobtype,
    hourpay,
    typepay,
    schedule,
    contact,
    address,
    area,
    phone,
    extrainfo,
    urgent
) {
    return db
        .query(
            `
        INSERT INTO jobs
        (facebookId, restname, jobtype, hourpay, typepay, schedule, contact, address, area, phone, extrainfo, urgent, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        returning *;
        `,
            [
                facebookId,
                restname,
                jobtype,
                hourpay,
                typepay,
                schedule,
                contact,
                address,
                area,
                phone,
                extrainfo,
                urgent,
                "job"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishJobNoUser = function(
    restname,
    jobtype,
    hourpay,
    typepay,
    schedule,
    contact,
    address,
    area,
    phone,
    extrainfo,
    urgent
) {
    return db
        .query(
            `
        INSERT INTO jobs
        (restname, jobtype, hourpay, typepay, schedule, contact, address, area, phone, extrainfo, urgent, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        returning *;
        `,
            [
                restname,
                jobtype,
                hourpay,
                typepay,
                schedule,
                contact,
                address,
                area,
                phone,
                extrainfo,
                urgent,
                "job"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishJob2 = function(
    facebookId,
    restname,
    jobtype,
    hourpay,
    typepay,
    schedule,
    contact,
    address,
    area,
    phone,
    extrainfo,
    urgent
) {
    return db
        .query(
            `
        INSERT INTO jobs2
        (facebookId, restname, jobtype, hourpay, typepay, schedule, contact, address, area, phone, extrainfo, urgent, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        returning *;
        `,
            [
                facebookId,
                restname,
                jobtype,
                hourpay,
                typepay,
                schedule,
                contact,
                address,
                area,
                phone,
                extrainfo,
                urgent,
                "job"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishJobNoUser2 = function(
    restname,
    jobtype,
    hourpay,
    typepay,
    schedule,
    contact,
    address,
    area,
    phone,
    extrainfo,
    urgent
) {
    return db
        .query(
            `
        INSERT INTO jobs2
        (restname, jobtype, hourpay, typepay, schedule, contact, address, area, phone, extrainfo, urgent, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        returning *;
        `,
            [
                restname,
                jobtype,
                hourpay,
                typepay,
                schedule,
                contact,
                address,
                area,
                phone,
                extrainfo,
                urgent,
                "job"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishPerson = function(
    facebookId,
    personName,
    personStatus,
    personSkill,
    personExperience,
    personSchedule,
    personArea,
    personNumber,
    personExtraInfo
) {
    return db
        .query(
            `
        INSERT INTO personas
        (facebookId, personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        returning *;
        `,
            [
                facebookId,
                personName,
                personStatus,
                personSkill,
                personExperience,
                personSchedule,
                personArea,
                personNumber,
                personExtraInfo,
                "person"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishPersonNoUser = function(
    personName,
    personStatus,
    personSkill,
    personExperience,
    personSchedule,
    personArea,
    personNumber,
    personExtraInfo
) {
    return db
        .query(
            `
        INSERT INTO personas
        ( personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        returning *;
        `,
            [
                personName,
                personStatus,
                personSkill,
                personExperience,
                personSchedule,
                personArea,
                personNumber,
                personExtraInfo,
                "person"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishPerson2 = function(
    facebookId,
    personName,
    personStatus,
    personSkill,
    personExperience,
    personSchedule,
    personArea,
    personNumber,
    personExtraInfo
) {
    return db
        .query(
            `
        INSERT INTO personas2
        (facebookId, personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        returning *;
        `,
            [
                facebookId,
                personName,
                personStatus,
                personSkill,
                personExperience,
                personSchedule,
                personArea,
                personNumber,
                personExtraInfo,
                "person"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.publishPersonNoUser2 = function(
    personName,
    personStatus,
    personSkill,
    personExperience,
    personSchedule,
    personArea,
    personNumber,
    personExtraInfo
) {
    return db
        .query(
            `
        INSERT INTO personas2
        ( personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo, postType)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        returning *;
        `,
            [
                personName,
                personStatus,
                personSkill,
                personExperience,
                personSchedule,
                personArea,
                personNumber,
                personExtraInfo,
                "person"
            ]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.findOrCreateFacebookUser = function(id, name) {
    return exports.getFacebookUser(id).then(user => {
        if (user) {
            return user;
        }
        return db
            .query(
                `
                  INSERT INTO users
                  (id, name)
                  VALUES ($1, $2)
                  returning *;
                  `,
                [id, name]
            )
            .then(function(results) {
                return results.rows;
            });
    });
};

exports.getFacebookUser = function(id) {
    return db.query(`SELECT * FROM users WHERE id = $1`, [id]).then(results => {
        return results.rows[0];
    });
};

exports.setPremium = function(id) {
    return db
        .query(`UPDATE users SET premium = true WHERE id = $1`, [id])
        .then(results => {
            return results.rows[0];
        });
};

exports.getUserStatus = function(facebookId) {
    return db
        .query(`SELECT premium FROM users WHERE id = $1`, [facebookId])
        .then(results => {
            console.log("should get user status: ", results.rows[0].premium);
            return results.rows[0].premium;
        });
};

exports.getJobInfo = function(id) {
    return db.query(`SELECT * FROM jobs WHERE id = $1`, [id]).then(results => {
        return results.rows[0];
    });
};

exports.reportPost = function(id, clickerid) {
    console.log("an apple a day");
    return db
        .query(
            `UPDATE jobs SET whoreported = array_append(whoreported, $2) WHERE id = $1;
        ;`,
            [id, clickerid]
        )
        .then(function(results) {
            console.log(results.rows);
            return results.rows;
        });
};

exports.whoHasReported = function(id) {
    console.log("gimme that array");
    return db
        .query(
            `SELECT whoreported FROM jobs WHERE id = $1;
        ;`,
            [id]
        )
        .then(function(results) {
            console.log(results.rows);
            return results.rows;
        });
};

exports.deleteJob = function(id) {
    return db
        .query(
            `
    DELETE FROM jobs WHERE id = $1;`,
            [id]
        )
        .then(results => {});
};

exports.deletePersonPost = function(id) {
    return db
        .query(`DELETE FROM personas WHERE id = $1;`, [id])
        .then(results => {});
};

// exports.deletePost = function(id) {
//     db.any('select moveJob($1)', [id]);
// };

exports.getPeopleInfo = function(id) {
    return db
        .query(`SELECT * FROM personas WHERE id = $1`, [id])
        .then(results => {
            return results.rows[0];
        });
};

exports.getDate = function(id) {
    return db
        .query(`SELECT created_at FROM jobs WHERE id = $1`, [id])
        .then(results => {
            return results.rows[0];
        });
};

exports.getJobforCorrect = function(id) {
    return db
        .query(
            `SELECT id, restname, jobtype, hourpay, typepay, schedule, contact, address, phone FROM jobs WHERE id = $1`,
            [id]
        )
        .then(results => {
            return results.rows[0];
        });
};

exports.getJobs = function() {
    return db
        .query(
            `SELECT *
        FROM jobs
        ORDER BY id DESC
        LIMIT 100
        ;`
        )
        .then(results => {
            return results.rows;
        });
};

exports.getServices = function() {
    return db
        .query(
            `SELECT *
        FROM services
        ORDER BY id DESC
        LIMIT 100
        ;`
        )
        .then(results => {
            return results.rows;
        });
};

exports.getPeople = function() {
    return db
        .query(
            `SELECT *
        FROM personas
        ORDER BY id DESC
        LIMIT 100
        ;`
        )
        .then(results => {
            return results.rows;
        });
};

exports.hashPassword = function(plainTextPassword) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainTextPassword, salt, function(err, hash) {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
};

exports.cancelUrgency = function() {
    return db
        .query(
            `
        INSERT INTO temporalAnalytics
        (cancelUrgency)
        VALUES ($1)
        RETURNING *;
        `,
            ["X"]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.wantsToPay = function() {
    return db
        .query(
            `
        INSERT INTO temporalAnalytics
        (wantsToPay)
        VALUES ($1)
        RETURNING *;
        `,
            ["X"]
        )
        .then(function(results) {
            return results.rows;
        });
};

exports.getLoginId = function(email) {
    return db
        .query(`SELECT id FROM users WHERE email = $1`, [email])
        .then(function(result) {
            return result.rows[0].id;
        });
};
