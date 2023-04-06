import { refs } from './refs';
import { clearHTML } from './supportFunctions';

const currentHome = document.querySelector('.current-home')
const currentLibrary = document.querySelector('.current-library');

const showHome = () => {
    refs.headerLibrary.classList.remove("header-library");
    currentHome.classList.add("current-link");
    currentLibrary.classList.remove("current-link");
    refs.formSearch.classList.remove("hidden");
    refs.libraryBtns.classList.add("hidden");
};

const showLibrary = () => {
    refs.headerLibrary.classList.add("header-library");
    currentHome.classList.remove("current-link");
    currentLibrary.classList.add("current-link");
    refs.formSearch.classList.add("hidden");
    refs.libraryBtns.classList.remove("hidden");
    refs.notification.classList.add('hidden');
}

const showError = () => {
  refs.notification.classList.remove('hidden');  
}

const hideError = () => {
  refs.notification.classList.add('hidden');
}

// const activeBtn = () => {
// const  activeBtn= document.querySelector('.button');
//     activeBtn.classList.add('button-active');
// }

// const inactiveBtn = () => {
// const  activeBtn= document.querySelector('.button');
//     activeBtn.classList.remove('button-active');
// }



export { showHome, showLibrary, showError, hideError };