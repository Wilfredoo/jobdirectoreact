const spicedPg = require("spiced-pg");
let secrets;
let dbUrl;
if (process.env.NODE_ENV === "production") {
  secrets = process.env;
  dbUrl = secrets.DATABASE_URL;
} else {
  secrets = require("./secrets.json");
  dbUrl = `postgres:${secrets.dbUser}:${
    secrets.dbPassword
  }@localhost:5433/jobdirecto`;
}
const db = spicedPg(dbUrl);
var bcrypt = require("bcryptjs");

exports.publishJob = function(
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
  console.log("look Job");
  return db
    .query(
      `
        INSERT INTO jobs
        (restname, jobtype, hourpay, typepay, schedule, contact, address, area, phone, extrainfo, urgent)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
        urgent
      ]
    )
    .then(function(results) {
      return results.rows;
    });
};

exports.publishPerson = function(
  personName,
  personStatus,
  personSkill,
  personExperience,
  personSchedule,
  personArea,
  personNumber,
  personExtraInfo
) {
  console.log("look person!");
  return db
    .query(
      `
        INSERT INTO personas
        (personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
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
        personExtraInfo
      ]
    )
    .then(function(results) {
      return results.rows;
    });
};

exports.getJobInfo = function(id) {
  return db.query(`SELECT * FROM jobs WHERE id = $1`, [id]).then(results => {
    return results.rows[0];
  });
};

exports.getPeopleInfo = function(id) {
  return db
    .query(`SELECT * FROM personas WHERE id = $1`, [id])
    .then(results => {
      console.log("is experience here", results);
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

exports.showHashPw = function(email) {
  return db
    .query(`SELECT password FROM users WHERE email = $1`, [email])
    .then(function(result) {
      return result.rows[0] && result.rows[0].password;
    });
};

exports.checkPassword = function(
  textEnteredInLoginForm,
  hashedPasswordFromDatabase
) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(textEnteredInLoginForm, hashedPasswordFromDatabase, function(
      err,
      doesMatch
    ) {
      if (err) {
        reject(err);
      } else {
        resolve(doesMatch);
      }
    });
  });
};

exports.registerUser = function(email, hashedpw) {
  return db
    .query(
      `
        INSERT INTO users
        (email, password)
        VALUES ($1, $2)
        RETURNING *;
        `,
      [email, hashedpw]
    )
    .then(function(results) {
      return results.rows;
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
