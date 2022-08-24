const database = require("./database");

const users = [
    [
        {
          "id": 1,
          "title": "Citizen Kane",
          "director": "Orson Wells",
          "year": "1941",
          "color": "0",
          "duration": 120
        },
        {
          "id": 2,
          "title": "The Godfather",
          "director": "Francis Ford Coppola",
          "year": "1972",
          "color": "1",
          "duration": 180
        },
        {
          "id": 3,
          "title": "Pulp Fiction",
          "director": "Quentin Tarantino",
          "year": "1994",
          "color": "1",
          "duration": 180
        },
        {
          "id": 4,
          "title": "Apocalypse Now",
          "director": "Francis Ford Coppola",
          "year": "1979",
          "color": "1",
          "duration": 150
        },
        {
          "id": 5,
          "title": "2001 a space odyssey",
          "director": "Stanley Kubrick",
          "year": "1968",
          "color": "1",
          "duration": 160
        },
        {
          "id": 6,
          "title": "The Dark Knight",
          "director": "Christopher Nolan",
          "year": "2008",
          "color": "1",
          "duration": 150
        }
      ]
]



const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUsers,
  getUsersById,
};