async function e(e){fetch(e).then((e=>e.json())).then((e=>{console.log(e.results)}))}const r=()=>{console.log("showHome()");const e=document.querySelector(".header"),r=document.querySelector(".current-home"),t=document.querySelector(".current-library"),c=document.querySelector(".form"),o=document.querySelector(".library-btns");e.classList.remove("header-library"),r.classList.add("current-link"),t.classList.remove("current-link"),c.classList.remove("hidden"),o.classList.add("hidden")},t=()=>{console.log("showLibrary()");const e=document.querySelector(".header"),r=document.querySelector(".current-home"),t=document.querySelector(".current-library"),c=document.querySelector(".form"),o=document.querySelector(".library-btns");e.classList.add("header-library"),r.classList.remove("current-link"),t.classList.add("current-link"),c.classList.add("hidden"),o.classList.remove("hidden")},c=document.querySelector("form#search-form"),o=document.querySelector("input#search-query"),a=document.querySelector("a#toggleHome"),n=document.querySelector("a#toggleLibrary");e("https://api.themoviedb.org/3/trending/all/day?api_key=cc8aceddc1acb4be5d6024b16563f8b2&language=en-US&page=1&include_adult=false&total_pages=100"),c.addEventListener("submit",(r=>{r.preventDefault();const t=o.value;t?(console.log(t),e("https://api.themoviedb.org/3/search/movie?api_key=cc8aceddc1acb4be5d6024b16563f8b2&language=en-US&query="+t+"&page=1&include_adult=false")):e("https://api.themoviedb.org/3/trending/all/day?api_key=cc8aceddc1acb4be5d6024b16563f8b2")})),a.addEventListener("click",(e=>{e.preventDefault(),r()})),n.addEventListener("click",(e=>{e.preventDefault(),t()}));
//# sourceMappingURL=index.0f558901.js.map
