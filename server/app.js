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
  if (req.query.name !== undefined) {
    let name = req.query.name;
    console.log("Name query recieved:", name);
    knex
      .select("*")
      .from("movies")
      .where('title', 'ilike', `%${name}%`)
      .orderBy('id', 'asc')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            "Could not get movies by name"
        })
      )
  } else if (req.query.custom === true) {

  }else {
    console.log('Time for movies')
    knex
      .select("*")
      .from("movies")
      .orderBy('id', 'asc')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            "Something went wrong with movie data retrieval."
        })
      )
  }

})

app.post("/movies", (req, res) => {
  let movie = req.body;
  console.log("Recieved movie data to add:", movie)

  knex("movies")
    .insert(movie)
    .returning(["id"])
    .then(() => res.status(201).json({
      message:
        "Movie Added"
    }))
    .catch(err => console.log(err))
})

app.delete("/movies/:id", (req, res) => {
  console.log("Recieved request to delete movie ID:", req.params.id);

  knex("movies")
    .select("*")
    .where({id: req.params.id, default: false})
    .del()
    .then(() => res.status(204).send())
    .catch(err => console.log(err))
})

app.patch("/movies/:id/watched", (req,res) => {
  console.log("Recieved request to changed watched status of movie ID:", req.params.id);

  knex("movies")
  .select("*")
  .where({id: req.params.id})
  .update({
    watched: knex.raw('NOT ??',  ['watched'])
  })
  .then(() => res.status(204).send())
  .catch(err => console.log(err))
})

app.patch("/movies/:id/toWatch", (req,res) => {
  console.log("Recieved request to changed watchlist status of movie ID:", req.params.id);

  knex("movies")
  .select("*")
  .where({id: req.params.id})
  .update({
    toWatch: knex.raw('NOT ??',  ['toWatch'])
  })
  .then(() => res.status(204).send())
  .catch(err => console.log(err))
})


module.exports = app;