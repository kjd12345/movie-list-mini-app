const express = require("express");
const cors = require("cors");
const app = express();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
  res.status(200).send("It's me, the server.")
})

app.get("/movies", (req, res) => {
  knex
    .select("*")
    .from("movies")
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          "Something went wrong with movie data retrieval."
      })
    )
})

module.exports = app;