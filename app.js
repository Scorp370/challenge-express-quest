require("dotenv").config();



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

const { validateMovie, validateUser } = require("./validators");
const { hashPassword, verifyPassword, verifyToken } = require("./auth.js");

// public routes
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);


app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUsersById);
app.get("/api/users", userHandlers.getUserByEmailWithPasswordAndPassToNext); 
app.post("/api/users", hashPassword, validateUser, userHandlers.postUsers);

app.post(
  "/api/login",
  userHandlers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);


//protected routes
app.use(verifyToken);

app.put("/api/movies/:id", validateMovie, movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.post("/api/movies", verifyToken, movieHandlers.postMovie)

app.put("/api/users/:id", validateUser, userHandlers.updateUsers);
app.delete("/api/users/:id", userHandlers.deleteUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
