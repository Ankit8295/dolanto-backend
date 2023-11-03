CREATE DATABASE dolantoadmin;

-- homepage card table
CREATE TABLE homepageCards (
  id Int NOT NULL PRIMARY KEY, day VARCHAR, 
  card_id VARCHAR(1),
  cardDATA JSONB
);