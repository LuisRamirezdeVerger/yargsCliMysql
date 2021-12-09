const { update } = require("./movieModels");
const Movie = require("./movieModels");

// ADD A NEW MOVIE
exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);
    return `${movieObj.title}Movie created into our DB!`;
  } catch (err) {
    console.log(err);
  }
};

// LIST ALL THE MOVIES IN OUR DB
exports.listMovies = async () => {
  try {
    console.log(await Movie.findAll({}));
    console.log("Those are our movies!");
  } catch (err) {
    console.log(err);
  }
};

// UPDATE 1 MOVIE
exports.updateMovie = async (movieObj) => {
  try {
    await Movie.update(
      { actor: movieObj.actor, genre: movieObj.genre },

      {
        where: { title: movieObj.title },
      }
    );
    console.log("Movie updated!");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.delete.bulkDelete({
      tableName: "Movies",
      where: { title: movieObj.title },
    });
    console.log("Movie deleted!");
  } catch (err) {
    console.log(err);
  }
};
// exports.addMovie = async (movieObj) => {
//     try {
//       await Movie.create(movieObj);
//       return `${movieObj.title} Movie created into our DB!`;
//     } catch (err) {
//       console.log(err);
//     }
// };
