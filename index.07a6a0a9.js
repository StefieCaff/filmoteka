!function(){function e(e){return e&&e.__esModule?e.default:e}document.querySelector(".gallery__list"),document.querySelector(".header__form"),document.querySelector(".modal__content"),document.querySelector(".modal"),document.querySelector(".backdrop"),document.querySelector(".modal-close"),document.querySelector(".header__notification"),document.querySelector(".js-add-watched"),document.querySelector("js-add-queue"),document.querySelector(".btn-up-wrapper"),document.querySelector(".btn-up-wrapper__btn"),document.querySelector("body"),document.querySelector(".footer__link"),document.querySelector(".backdrop-trailer"),document.querySelector(".js-library-link"),document.querySelector(".queue__btn"),document.querySelector(".watched__btn"),document.querySelector(".library__btn-list"),document.querySelector(".library-gallery__list"),document.querySelector("form#search-form"),document.querySelector("input#search-query"),document.querySelector("a#toggleHome"),document.querySelector("a#toggleLibrary"),document.querySelector(".watched-btn"),document.querySelector(".queue-btn");var t={};function r(e,t,r,n,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var i=e.apply(t,n);function a(e){r(i,o,c,a,u,"next",e)}function u(e){r(i,o,c,a,u,"throw",e)}a(void 0)}))}};var n={},o=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,c=Object.create(o.prototype),i=new j(n||[]);return c._invoke=function(e,t,r){var n=d;return function(o,c){if(n===f)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw c;return P()}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var a=x(i,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(e,r,i),c}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",y="completed",m={};function p(){}function v(){}function g(){}var b={};u(b,c,(function(){return this}));var w=Object.getPrototypeOf,S=w&&w(w(O([])));S&&S!==r&&n.call(S,c)&&(b=S);var q=g.prototype=p.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,c,i,a){var u=s(e[o],e,c);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,a)}),(function(e){r("throw",e,i,a)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,a)}))}a(u.arg)}var o;this._invoke=function(e,n){function c(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(c,c):c()}}function x(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,x(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var c=o.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return v.prototype=g,u(q,"constructor",g),u(g,"constructor",v),v.displayName=u(g,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,a,"GeneratorFunction")),e.prototype=Object.create(q),e},e.awrap=function(e){return{__await:e}},_(L.prototype),u(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,c){void 0===c&&(c=Promise);var i=new L(l(t,r,n,o),c);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(q),u(q,a,"Generator"),u(q,c,(function(){return this})),u(q,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(n);try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var c=function(){document.querySelector(".form__error").classList.remove("hidden")},i=function(){document.querySelector(".form__error").classList.add("hidden")};function a(e){return u.apply(this,arguments)}function u(){return(u=e(t)(e(n).mark((function t(r){var o,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,console.log(a.results),0!==a.results.length?i():c(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}var l=document.querySelector("form#search-form"),s=document.querySelector("input#search-query"),d=document.querySelector("a#toggleHome"),h=document.querySelector("a#toggleLibrary"),f=(document.querySelector(".watched-btn"),document.querySelector(".queue-btn"),"api_key=cc8aceddc1acb4be5d6024b16563f8b2"),y="https://api.themoviedb.org/3",m="https://api.themoviedb.org/3/trending/all/day?"+f,p="&language=en-US&page=1&include_adult=false&total_pages=100";"movie/".concat("","?");a(m+p),l.addEventListener("submit",(function(e){e.preventDefault();var t=s.value.trim();t?(console.log(t),a("https://api.themoviedb.org/3/search/movie?api_key=cc8aceddc1acb4be5d6024b16563f8b2&language=en-US&query="+t+"&page=1&include_adult=false")):a(m+p)})),d.addEventListener("click",(function(e){var t,r,n,o,c;e.preventDefault(),t=document.querySelector(".header"),r=document.querySelector(".current-home"),n=document.querySelector(".current-library"),o=document.querySelector(".form"),c=document.querySelector(".library-btns"),t.classList.remove("header-library"),r.classList.add("current-link"),n.classList.remove("current-link"),o.classList.remove("hidden"),c.classList.add("hidden")})),h.addEventListener("click",(function(e){var t,r,n,o,c,i;e.preventDefault(),t=document.querySelector(".header"),r=document.querySelector(".current-home"),n=document.querySelector(".current-library"),o=document.querySelector(".form"),c=document.querySelector(".library-btns"),i=document.querySelector(".form__error"),t.classList.add("header-library"),r.classList.remove("current-link"),n.classList.add("current-link"),o.classList.add("hidden"),c.classList.remove("hidden"),i.classList.add("hidden")}))}();
//# sourceMappingURL=index.07a6a0a9.js.map