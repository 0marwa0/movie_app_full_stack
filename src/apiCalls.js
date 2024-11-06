export async function fetchTopRatedMovies(callback) {
  let result = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en&page=1"
  );

  let data = await result.json();
  callback(data.results);
  // console.log(data.results);
}

export async function fetchMovie(id, callback) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=01947fdc028668cbba608f3d08618bef`;

  let result = await fetch(url);

  let data = await result.json();
  console.log(data, "single movie");
  callback(data);
}
