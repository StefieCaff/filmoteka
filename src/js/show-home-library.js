
const showHome = () => {
    console.log('showHome()');
    
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
    console.log('showLibrary()');
    
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

export { showHome, showLibrary };