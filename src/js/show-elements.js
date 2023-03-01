
const showHome = () => {
     const headerLibrary = document.querySelector('.header')
    const currentHome = document.querySelector('.current-home')
    const currentLibrary = document.querySelector('.current-library');
    const homeForm = document.querySelector(".form")
    const libraryBtns = document.querySelector('.library-btns');
    
    headerLibrary.classList.remove("header-library");
    currentHome.classList.add("current-link");
    currentLibrary.classList.remove("current-link");
    homeForm.classList.remove("hidden");
    libraryBtns.classList.add("hidden");
};

const showLibrary = () => {
    const headerLibrary = document.querySelector('.header')
    const currentHome = document.querySelector('.current-home')
    const currentLibrary = document.querySelector('.current-library');
    const homeForm = document.querySelector(".form")
    const libraryBtns = document.querySelector('.library-btns');
    
    headerLibrary.classList.add("header-library");
    currentHome.classList.remove("current-link");
    currentLibrary.classList.add("current-link");
    homeForm.classList.add("hidden");
    libraryBtns.classList.remove("hidden");
}

const showError = () => {
    const noMovies = document.querySelector('.form__error');
    noMovies.classList.remove('hidden');  
}

const hideError = () => {
    const noMovies = document.querySelector('.form__error');
    noMovies.classList.add('hidden');
}

const activeBtn = () => {
const  activeBtn= document.querySelector('.button');
    activeBtn.classList.add('button-active');
}

const inactiveBtn = () => {
const  activeBtn= document.querySelector('.button');
    activeBtn.classList.remove('button-active');
}



export { showHome, showLibrary, showError, hideError, activeBtn, inactiveBtn };