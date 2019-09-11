DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS personas;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS users;

CREATE TABLE services(
    id SERIAL PRIMARY KEY,
    serviceOwner VARCHAR(300),
    serviceOffered VARCHAR(300),
    serviceArea VARCHAR(300),
    serviceNumber VARCHAR(1300),
    serviceExtraInfo VARCHAR(1300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE personas2
ADD facebookid VARCHAR(300);

ALTER TABLE personas2
ADD postType VARCHAR(300);

ALTER TABLE users
ADD premium VARCHAR(300);

UPDATE users
SET premium = true;

ALTER TABLE users
UPDATE premium VARCHAR(300) SET DEFAULT false;

ALTER TABLE users ALTER premium SET DEFAULT false;

ALTER TABLE users ALTER COLUMN premium SET DEFAULT false;

ALTER TABLE jobs ADD COLUMN whoReported bigint[];

ALTER TABLE users
ADD postCounter SMALLINT SET DEFAULT 2;

ALTER TABLE users ALTER COLUMN postcounter SET DEFAULT 2;

ALTER TABLE jobs
ADD redFlags SMALLINT;


ALTER TABLE personas
ADD facebookid VARCHAR(300);

ALTER TABLE personas
ADD postType VARCHAR(300);

ALTER TABLE services
ADD postType VARCHAR(300);


ALTER TABLE services
ADD facebookid VARCHAR(300);


ALTER TABLE users
ADD created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;





CREATE TABLE users(
id VARCHAR(100),
name VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE jobs(
    id SERIAL PRIMARY KEY,
    facebookId VARCHAR(300),
    restName VARCHAR(300),
    jobType VARCHAR(255),
    hourPay VARCHAR(255),
    typePay VARCHAR(255) ,
    schedule VARCHAR(255),
    contact VARCHAR(255) ,
    address VARCHAR(255),
    phone VARCHAR(255),
    area VARCHAR(255),
    extrainfo VARCHAR(255),
    urgent VARCHAR(255),
    postType VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs2(
    id SERIAL PRIMARY KEY,
    facebookId VARCHAR(300),
    restName VARCHAR(300),
    jobType VARCHAR(255),
    hourPay VARCHAR(255),
    typePay VARCHAR(255) ,
    schedule VARCHAR(255),
    contact VARCHAR(255) ,
    address VARCHAR(255),
    phone VARCHAR(255),
    area VARCHAR(255),
    extrainfo VARCHAR(255),
    urgent VARCHAR(255),
    postType VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE deletedJobs(
    id SERIAL PRIMARY KEY,
    facebookId VARCHAR(300),
    restName VARCHAR(300),
    jobType VARCHAR(255),
    hourPay VARCHAR(255),
    typePay VARCHAR(255) ,
    schedule VARCHAR(255),
    contact VARCHAR(255) ,
    address VARCHAR(255),
    phone VARCHAR(255),
    area VARCHAR(255),
    extrainfo VARCHAR(255),
    urgent VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE personas(
    id SERIAL PRIMARY KEY,
    personName VARCHAR(300),
    personStatus VARCHAR(300),
    personSkill VARCHAR(300),
    personExperience VARCHAR(1300),
    personSchedule VARCHAR(1300),
    personArea VARCHAR(300),
    personNumber VARCHAR(300),
    personExtraInfo VARCHAR(1300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE personas2(
    id SERIAL PRIMARY KEY,
    personName VARCHAR(300),
    personStatus VARCHAR(300),
    personSkill VARCHAR(300),
    personExperience VARCHAR(1300),
    personSchedule VARCHAR(1300),
    personArea VARCHAR(300),
    personNumber VARCHAR(300),
    personExtraInfo VARCHAR(1300),
facebookid VARCHAR(300),
postType VARCHAR(300),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE temporalAnalytics(
    id SERIAL PRIMARY KEY,
    wantsToPay VARCHAR(300),
    doesNotWantToPay VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- jobs
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Tribeca bagels', 'Cocinero', '14', 'cash', 'lunes a viernes tardes hasta cerrar', 'juana marcos', '127 East 7th New York, NY 10009', '(646) 850-5345', 'manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Bubbas Bistro', 'Cocinero con experiencia', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove RdStaten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Lobster Joint', 'Preparador', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty StNew York, NY 10281', '(212) 981-8577', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Lobster Joint', 'Mesera', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty StNew York, NY 10281', '(212) 981-8577', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Daltons Bar Grill', 'Mesera', '15', 'Cash', 'lunes, martes, miercoles sabados y domingos', 'juan', '60 E 65th St.New York, NY 10065', '(212) 288-0033', 'Manhattan', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('East village deli', 'Lavaplatos', '13', 'ambos', 'fines de semana', 'maria', '2071 Clove RdStaten Island, NY 10304', '(718) 524-7174', 'Staten Island', 'false');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, urgent) VALUES ('Molo Ristorante', 'Pizzero', '16', 'Check', 'lunes marte y miercoles', 'nicola', '225 Liberty StNew York, NY 10281', '(212) 981-8577', 'Manhattan', 'true');


-- urgent jobs
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, extrainfo, urgent) VALUES ('Negocio Ejemplo', 'cocinero de linea', '', '', 'part time o full time hay', '', '', '', 'Manhattan', 'se le entrena si tiene poca experiencia, se busca gente que pueda empezar de inmediato', 'true');
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, extrainfo, urgent) VALUES ('Wallys Deli', 'deli/ grill person', '', '', 'full time', 'Wally', '3345 broadway', '(917) 405-8424', 'Manhattan', 'debe tener experiencia porque es un deli ocupado', 'true');
INSERT INTO personas (personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo) VALUES ('Juan Carlos', 'seeksJob', 'Dishwasher o preparador', 'he travajado de dishwasher 2 años y tengo poquita experiencia de preparador comida americana aprendo rapido pero', 'en manhattan o brooklyn me queda cerca', 'puedo todos los dias manana tarde o noche', '646-240-3249', 'soy responsable con mi travajo, no bebo');


-- dont touch these
INSERT INTO jobs (restName, jobType, hourPay, typePay, schedule, contact, address, phone, area, extrainfo, urgent) VALUES ('', '', '', '', '', '', '', '', '', '', 'true');
INSERT INTO personas (personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo) VALUES ('', '', '', '', '', '', '', '');
INSERT INTO services (serviceOwner, serviceOffered, serviceNumber, serviceArea, serviceExtraInfo) VALUES ('', '', '', '', '');
-- dont touch these


-- people seeking job
INSERT INTO personas (personName, personStatus, personSkill, personExperience, personSchedule, personArea, personNumber, personExtraInfo) VALUES ('EDWIN', 'seeksJob', 'construccion y reparaciones', '', '', 'brooklyn', '347314 1824', '');


-- someone offering services
INSERT INTO services (serviceOwner, serviceOffered, serviceNumber, serviceArea, serviceExtraInfo) VALUES ('', '', '', '', '');
