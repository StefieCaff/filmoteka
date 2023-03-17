
// import getMovies from './js/api-s/get-movies';
// import getById from './js/api-s/get-by-id';

import { spinnerPlay, spinnerStop } from './js/spinner';
import { scrollFunction } from './js/button-up';

import { showHome, showLibrary } from './js/show-elements-s';

import { onClickBtnWatchGallery } from './js/API/get-movie-trailer';

import { onOpenQueueLibrary } from './js/queue-library';

import { onOpenWatchedLibrary } from './js/watched-library';

import { loadWatchedMoviesFromLocalStorage } from './js/watched-library';
import { onLibraryGallery } from './js/open-modal-library';

import { renderTrendingMovies } from './js/API/get-trending';

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


// render watched library storage 
refs.libraryLinkHeader.addEventListener('click', loadWatchedMoviesFromLocalStorage);


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
  refs.btnLibraryWatched.classList.add('button-active')
});

// trailers on load
refs.galleryMovies.addEventListener('click', onClickBtnWatchGallery);