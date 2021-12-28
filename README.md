# Nest Microservices 

An example of implmentation of Nest with microservices using TCP.
The project is splitted into a gateway (Rest webservice) that includes a SwaggerUI, and a product_microservice that 
includes operations (INSERT, SELECT) from a Postgres databse on Heroku managed by the ORM TypeORM provided by NestJS

## Quick start

1.  Make sure that you have docker  installed on your machine.
2.  Clone this repository
3.  Move to the appropriate directory
4.  Start your project using: `docker-compose up --build`
5.  Open http://localhost:3000/api

