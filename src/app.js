require("./db/connection");

const {
  addMovie,
  listMovies,
  deleteMovie,
  updateMovie,
} = require("./movie/movieMethods");

const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    const newMovie = {
      title: process.argv[3],
      actor: process.argv[4],
      genre: process.argv[5],
    };
    await connection(addMovie, newMovie);
  }
};

app();
