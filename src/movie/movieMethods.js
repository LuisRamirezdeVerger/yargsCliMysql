const Movie = require("./movieModels");

// Add movie
exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);
    console.log(`Movie -> "${movieObj.title}" has join our DB!`);
  } catch (err) {
    console.log(err);
  }
};

// List all movies
exports.listMovies = async () => {
  try {
    console.log(await Movie.findAll({}));
    console.log("^ Those, are our movies! ^");
  } catch (err) {
    console.log(err);
  }
};

// Update movie
exports.updateMovie = async (movieObj) => {
  try {
    await Movie.update(
      { actor: movieObj.actor, genre: movieObj.genre },

      {
        where: { title: movieObj.title },
      }
    );
    console.log(
      `Movie -> "${movieObj.title}" updated, those are the new results: Actor = ${movieObj.actor} and Genre = ${movieObj.genre}`
    );
  } catch (err) {
    console.log(err);
  }
};

// Delete movie
exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.destroy({
      where: { title: movieObj.title },
    });
    console.log(`"${movieObj.title}" has been deleted from our DB!`);
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
