'use strict';
const API_KEY = '5d2b04e2bf5b9f6332a8ed8acde1f340';

// requesting genres by type tv or movie;

const listOfGenres = async (type) => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    const c = await x.json();
    return c;
  } catch (error) {
    console.log(error);
  }
};

// requesting top rated movies or tv shows, page number
const searchTopRated = async (type = 'movie', pageNumber = 1) => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/${type}/top_rated?&api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    const c = await x.json();
    return c;
  } catch (error) {
    console.log(error);
  }
};

// movies or tv shows by search value

const searchByValue = async (type, searchVal, pageNumber = 1) => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${searchVal}&api_key=${API_KEY}&page=${pageNumber}`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    // console.log(x);
    const c = await x.json();
    // console.log(c);
    return c;
  } catch (error) {
    console.log(error);
  }
};

// trending type - all/movies/tv  period - day/week

const searchTrending = async (type = 'all', period = 'week') => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/${period}?api_key=${API_KEY}`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    const c = await x.json();
    return c;
  } catch (error) {
    console.log(error);
  }
};

// search by genre (id) and type

// use id,id === and
// use id|id === or
const searchByGenres = async (type, genreId, rating, pageNumber = 1) => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}&vote_average.gte=${rating}&page=${pageNumber}`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    // console.log(x);
    const c = await x.json();
    return c;
  } catch (error) {
    console.log(error);
  }
};

// getting full poster url
const getPoster = async (url, width = 500) => {
  if (!url) return `https://i.im.ge/2022/03/09/lyUsWa.png`;
  // poster with 500 width; + path;
  try {
    const img = await fetch(`https://image.tmdb.org/t/p/w${width}${url}`, {
      method: 'GET',
      mode: 'cors',
    });
    if (img.ok !== true) return `https://i.im.ge/2022/03/09/lyUsWa.png`;
    if (img.status === 404) return `https://i.im.ge/2022/03/09/lyUsWa.png`;

    return `https://image.tmdb.org/t/p/w${width}${url}`;
  } catch (error) {
    console.log(error);
  }
};

const searchVideos = async (id, media) => {
  try {
    const x = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    if (!x.ok) throw new Error('Bad url, please try again 📛');
    if (x.status === 404) throw new Error('Page not found ❌');
    // console.log(x);
    const c = await x.json();
    // console.log(c);
    return c;
  } catch (error) {
    console.log(error);
  }
};

export {
  getPoster,
  searchByGenres,
  searchTrending,
  searchByValue,
  searchTopRated,
  listOfGenres,
  searchVideos,
};
