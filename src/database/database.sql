CREATE DATABASE CityDB

CREATE TABLE city (
    name text NOT NULL,
    latitude decimal  NOT NULL,
    longitude decimal NOT NULL,
    CONSTRAINT city_pkey PRIMARY KEY (name)
)