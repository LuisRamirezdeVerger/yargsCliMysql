const {
  addMovie,
  listMovies,
  deleteMovie,
  updateMovie,
  listActor,
} = require("./movie/movieMethods");

const command = process.argv[2];

const app = async () => {
  switch (command) {
    case "add":
      addMovie({
        title: process.argv[3],
        actor: process.argv[4],
        genre: process.argv[5],
      });
      break;
    case "list":
      listMovies();
      break;
    case "listActor":
      listActor();
      break;
    case "update":
      updateMovie({
        title: process.argv[3],
        actor: process.argv[4],
        genre: process.argv[5],
      });
      break;
    case "delete":
      deleteMovie({
        title: process.argv[3],
      });
      break;

    default:
      break;
  }
};

app();
