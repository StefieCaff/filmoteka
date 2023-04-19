
import { spinnerPlay, spinnerStop } from './js/spinner';
import { scrollFunction } from './js/button-up';

import { openModalTeam } from './js/open-modal-team';

import { onClickBtnWatchGallery } from './js/API/get-movie-trailer';
import { renderTrendingMovies } from './js/API/get-trending';
import { handlerPagination } from './js/pagination';
import { handlerLocalPagination } from './js/paginationLocalStorage';
import './js/open-modal-library';
import './js/gallery';

import { /*onOpenWatchedLibrary,*/ loadWatchedMoviesFromLocalStorage } from './js/watched-library';
// import { onOpenQueueLibrary } from './js/queue-library';

import { showHome, showLibrary } from './js/show-elements-s';
import { refs } from './js/refs'
import { clearHTML } from './js/supportFunctions';

const galleryPaginationBox = document.querySelector('.pagination-gallery-container');
const paginationBox = document.querySelector('.pagination-library-container');
// launch spinner and trending movies on page load
spinnerPlay();

//-----------------event listeners----------------------

/// ending spinner when loading
window.addEventListener('load', function (e) {
  spinnerStop(); 
});

// trigger up button on scroll
window.addEventListener('scroll', scrollFunction);



/*switch home and library headers and gallery*/

//click to home
refs.homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  showHome();
  clearHTML(refs.galleryMovies);
  renderTrendingMovies();
  galleryPaginationBox.classList.remove('hidden');
  paginationBox.classList.add('hidden');
});

//click to library
refs.libraryLinkHeader.addEventListener('click', (e) => {
  e.preventDefault();
  showLibrary();
  clearHTML(refs.galleryMovies);
  loadWatchedMoviesFromLocalStorage();
  galleryPaginationBox.classList.add('hidden');
  paginationBox.classList.remove('hidden');
});

// trailers on load
refs.galleryMovies.addEventListener('click', onClickBtnWatchGallery);

//open footer team modal
refs.link.addEventListener('click', openModalTeam);