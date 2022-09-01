# SaaS Starter


This repo is a boilerplate for creating SaaS products using MERN.

In this project, you will be presented with two structures:

## API:
  
  All the API structure is inside the backend folder.

  This is an API using the Node.js framework (Nest.js)[https://nestjs.com]. Nest by default uses typescript and we are adding the Graphql layer so we can interact with our DBs in a better way.

  We included a docker file to run our server.

 ## FRONTEND:

  All the FRONT-END structure is inside the frontend folder.

  This is a React.js project using (Next.js)https://nextjs.org/]. Next by default don't use typescript but we made sure to add that in our project. We also made sure that our project is compatible with Graphql.

  Because of SEO, we are using the Next.js SSR capabilities. 

  We also included a docker file to run our SSR server.

### DB

 For DB we are using mongo connected with Nest.js and Graphql. Be aware that we are using a fake mongo DB for tests (Check Here)[https://github.com/nodkz/mongodb-memory-server]

### DOCKER

 Both projects are covered by docker containers. Inside each project, you will find a Dockerfile read for dev and prod environments. At the root of this project, you will find a docker-compose file that can run everything in development mode and also create a MongoDB server.