import { refs } from './refs';
import { clearHTML } from './supportFunctions';
import { getSearchMovies, renderMoviesGallery } from './API/search-movies';
import { spinnerPlay, spinnerStop } from './spinner';

let page = 1;

if (refs.formSearch) {
  refs.formSearch.addEventListener('submit', onFormSubmit);
}

export async function onFormSubmit(e) {
  e.preventDefault();
  spinnerPlay();

  refs.notification.textContent = '';

  const searchResult = e.target.elements.searchQuery.value.trim().toLowerCase();

  if (searchResult) {
    const storageValue = JSON.stringify(searchResult);
    localStorage.setItem('searchValue', storageValue);
    const storagePage = JSON.stringify(page);
    localStorage.setItem('page', storagePage);
    try {
      const markupPictures = await getSearchMovies(searchResult, page);

      if (markupPictures.length > 0) {
        clearHTML(refs.galleryMovies);
        renderMoviesGallery(markupPictures, refs.galleryMovies);
      } else {
        notification();
      }
    } catch (error) {
      notification();
    }
  } else {
    notification();
  }
  spinnerStop();
}

function notification() {
  refs.notification.textContent =
    'Sorry! Your search was unsuccessful. Please enter a new query.';
}
