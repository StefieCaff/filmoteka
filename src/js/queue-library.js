import { refs } from './refs';
import localPagination from './paginationLocalStorage';

import { loadFromLocalStorage } from './local-storage';
import {
  createMarkupWhenLocalStorageEmpty,
  createMarkupWatchedMovies
} from './watched-library';

import { renderBtn } from './API/get-movie-trailer';
const KEY_QUEUE_MOVIES = 'queueMovies';

let globalCurrentpage = 0;

if (refs.btnLibraryQueue) {
  refs.btnLibraryQueue.addEventListener('click', onOpenQueueLibrary);
}

export let localQueueMovies;

export function onOpenQueueLibrary() {
  refs.btnLibraryQueue.classList.add('library__btn--active');
  refs.btnLibraryQueue.classList.add('button-active')
  refs.btnLibraryWatched.classList.remove('library__btn--active');
  refs.btnLibraryWatched.classList.remove('button-active')
  const paginationBox = document.querySelector('.pagination-library-container');
  localQueueMovies = loadFromLocalStorage(KEY_QUEUE_MOVIES);

  if (!localQueueMovies || !Object.keys(localQueueMovies).length) {
    const markupNothing = createMarkupWhenLocalStorageEmpty();
    refs.libraryGallery.innerHTML = markupNothing;
    paginationBox.innerHTML = '';
  } else {
    localPagination(Object.keys(localQueueMovies).length, 1);
    const moviesArray = Object.values(localQueueMovies);
    
    let moviesToRender = '';
    if (window.innerWidth >= 1280) {
      moviesToRender = moviesArray.slice(0, 9);
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      moviesToRender = moviesArray.slice(0, 8);
    }
    if (window.innerWidth < 768) {
      moviesToRender = moviesArray.slice(0, 4);
    }
    //console.log(moviesToRender);
    const markup = moviesToRender.map(createMarkupWatchedMovies).join('');

    if (refs.libraryGallery) {
      refs.libraryGallery.innerHTML = markup;

      renderBtn();
    }
  }
}

