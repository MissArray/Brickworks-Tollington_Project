BEGIN;

DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS main_topics CASCADE;
DROP TABLE IF EXISTS secondary_topics CASCADE;
DROP TABLE IF EXISTS link_events_topics CASCADE;


CREATE TABLE events (
event_id SERIAL PRIMARY KEY,
event_name TEXT NOT NULL,
event_description TEXT NOT NULL,
date_time TIMESTAMP,
event_location TEXT NOT NULL,
posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE main_topics (
main_topic_id SERIAL PRIMARY KEY,
main_topic TEXT NOT NULL,
main_topic_description TEXT NOT NULL
);

CREATE TABLE secondary_topics (
secondary_topic_id SERIAL PRIMARY KEY,
secondary_topic_description VARCHAR(50) DEFAULT ''
);

CREATE TABLE link_events_topics (
link_id SERIAL PRIMARY KEY,
link_event_id INTEGER REFERENCES events(event_id) NOT NULL,
link_primary_topic_id INTEGER REFERENCES main_topics(main_topic_id) NOT NULL,
link_secondary_topic_id INTEGER REFERENCES secondary_topics(secondary_topic_id) NOT NULL
);

/* Escape special characters by prefixing them with two single quotes*/
/* NB! The date & time format is YYYY-MM-DD HH:MM:SS*/

INSERT INTO events (event_name, event_description, date_time, event_location) VALUES
('Poverty Action', 'Get together to fight poverty', '2018-10-21 17:00:00', 'Caxton House'),
('Youth Action', 'Help youth get skills', '2018-10-11 16:30:00', 'Tollington House'),
('Get Green', 'Let''s plant a tree', '2018-02-01 14:00:00', 'Town Hall'),
('Pop-up shelter', 'Create pop-up shelters for the homeless for the winter months', '2018-11-06 18:00:00', 'St Mellitus Church');


INSERT INTO main_topics (main_topic, main_topic_description) VALUES
('poverty', 'Poverty'),
('homelessness', 'Homelessness'),
('youth', 'Youth'),
('elderly', 'Elderly'),
('employment', 'Employment'),
('environment', 'Environment');

INSERT INTO secondary_topics (secondary_topic_description) VALUES
(''),
('Poverty'),
('Homelessness'),
('Youth'),
('Elderly'),
('Employment'),
('Environment');

INSERT INTO link_events_topics (link_event_id, link_primary_topic_id, link_secondary_topic_id) VALUES
(1, 1, 1),
(2, 3, 6),
(3, 6, 1),
(4, 2, 1);

COMMIT;

