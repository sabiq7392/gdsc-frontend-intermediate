/**
 * @typedef {Object} Movie
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {number[]} genre_ids
 * @property {number} id
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {Date | string} release_date
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vode_count
 */

/**
 * @typedef {Object} TMDBResponse
 * @property {number} page
 * @property {Movie[]} results
 * @property {number} total_pages
 * @property {number} total_results
 */

const API_KEY = "014c4718610f20a7f4469ed76fe4eb73";
const IMG_URL = "https://image.tmdb.org/t/p/original";

const app = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

    /** @type {TMDBResponse} */
    const data = await response.json();

    const movies = data.results;

    movies.forEach((movie) => {
      document.body.innerHTML += `
        <div>
          <img src="${IMG_URL}/${movie.poster_path}" width="100" />
          <h2>${movie.title}</h2>
        </div>
      `;
    });   
  } catch (error) {
    console.error(error);
  }
};

app();