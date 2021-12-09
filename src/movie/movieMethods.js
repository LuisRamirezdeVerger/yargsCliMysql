const Movie = require("./movieModels");

const addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);
    return `${movieObj.title}Movie created into our DB!`;
  } catch (err) {
    console.log(err);
  }
};

// exports.addMovie = async (movieObj) => {
//     try {
//       await Movie.create(movieObj);
//       return `${movieObj.title}Movie created into our DB!`;
//     } catch (err) {
//       console.log(err);
//     }
// };

exports.listMovies = async () => {
  try {
    console.log(await Movie.findAll({}));
  } catch (err) {
    console.log(err);
  }
};
