
// import getMovies from './js/api-s/get-movies';
// import getById from './js/api-s/get-by-id';

//import './js/paginationLocalStorage';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { scrollFunction } from './js/button-up';

import { onClickBtnWatchGallery } from './js/API/get-movie-trailer';
import { renderTrendingMovies } from './js/API/get-trending';

import { onOpenQueueLibrary } from './js/queue-library';
import { loadWatchedMoviesFromLocalStorage } from './js/watched-library';
import {onOpenWatchedLibrary } from './js/watched-library';
import { onLibraryGallery } from './js/open-modal-library';

import { showHome, showLibrary } from './js/show-elements-s';
import { refs } from './js/refs'
import './js/gallery';
import { clearGallery } from './js/supportFunctions';

// launch spinner on boot
spinnerPlay();

//-----------------event listeners----------------------

/// ending spinner when loading
window.addEventListener('load', function (e) {
  spinnerStop();
 
});

// trigger up button on scroll
window.addEventListener('scroll', scrollFunction);


// switch home and library headers
refs.homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  showHome();
  clearGallery(refs.galleryMovies);
  renderTrendingMovies();
});

refs.libraryLinkHeader.addEventListener('click', (e) => {
  e.preventDefault();
  showLibrary();
  clearGallery(refs.galleryMovies);
  loadWatchedMoviesFromLocalStorage();
});

// trailers on load
refs.galleryMovies.addEventListener('click', onClickBtnWatchGallery);