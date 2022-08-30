require("dotenv").config();

<<<<<<< HEAD

=======
>>>>>>> beafddcfceee71433da66fbd7797b55c2e004a02
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");
<<<<<<< HEAD
const { validateMovie, validateUser } = require("./validators");
=======

>>>>>>> beafddcfceee71433da66fbd7797b55c2e004a02


app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
<<<<<<< HEAD
app.put("/api/movies/:id", validateMovie, movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.post("/api/movies", validateMovie, movieHandlers.postMovie);

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUsersById);
app.post("/api/users", validateUser, userHandlers.postUsers);
app.put("/api/users/:id", validateUser, userHandlers.updateUsers);
=======
app.post("/api/movies", movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUsersById);
app.post("/api/users", userHandlers.postUsers);
app.put("/api/users/:id", userHandlers.updateUsers);
>>>>>>> beafddcfceee71433da66fbd7797b55c2e004a02
app.delete("/api/users/:id", userHandlers.deleteUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
