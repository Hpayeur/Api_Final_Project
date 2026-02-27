const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);
const express = require("express");
const mongodb = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      "\x1d[34m%s\x1d[0m",
      `Connected to DB and listening on ${PORT}`,
    );
  }
});

//Goals and Tasks for the project

// A simple server hosted on port 3000 or any other server of your choice
// Folder structure for your routes, controllers, models and servers
// At least one route for the upcoming project that will only include the text output of "Hello from my route" or something of similar layout. That means that you should be able to show one route working with the node modules you need
// There should be no node_modules uploaded alongside the project, you should be able to git clone the project and run npm install to install the required modules to show the single route
// You should have at least started your frontend portion as well.
