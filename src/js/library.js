import { spinnerPlay, spinnerStop } from './js/spinner';

import { openModalTeam } from './js/open-modal-team';

import './js/switch-bg-theme';

import { scrollFunction } from './js/button-up';

import { onCliсkBtnWatchGallery } from './js/API/get-movie-trailer';

import { onOpenQueueLibrary } from './js/queue-library';

import { onOpenWatchedLibrary } from './js/watched-library';

import { loadWatchedMoviesFromLocalStorage } from './js/watched-library';
import { onLibraryGallery } from './js/open-modal-library';
import { refs } from './js/refs';

///Запуск спінера при завантаженні launch spinner on boot
spinnerPlay();
window.addEventListener('load', function (e) {
  spinnerStop();
});
///Закінчення спінера при завантаженні ending spinner when loading

///Запуск кнопки вверх при скролі trigger up button on scroll
window.addEventListener('scroll', scrollFunction);

// При завантаженні сторінки My library рендериться картки з локал сторадж watchedMovies
//render library storage watchedMovies
window.addEventListener('load', loadWatchedMoviesFromLocalStorage);

refs.libraryGallery.addEventListener('click', onCliсkBtnWatchGallery);