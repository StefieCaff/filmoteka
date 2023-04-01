import * as basicLightbox from 'basiclightbox';
import Stefie from '../images/team/Stefie.jpg';
import Angelina from '../images/team/Angelina.jpg';
import Duma from '../images/team/Duma.jpg';

import { refs } from './refs';
// console.log(refs.link);

const objects = [
  {
    name: 'Stefanie Caffarel',
    photo: Stefie,
    role: 'Team Lead',
    git: 'https://github.com/StefieCaff',
  },
  {
    name: 'Angelina Andronov',
    photo: Angelina,
    role: 'Main developer',
    git: 'https://github.com/andangelina',
  },
  {
    name: 'Duma Caffarel',
    photo: Duma,
    role: 'Developer',
    git: 'https://github.com/StefieCaff',
  },  
];

const markup = 
  ` 
    <div class="modal__container">
      <a><button class="modal__close" type="button" aria-label="close modal">
        <div class="modal__close-first"></div>
        <div class="modal__close-second"></div>
      </button></a>
      <div class="modal-wrap team">
        <div class="team__wrap">
          <h1 class="team__title">Dream Team</h1>
          <ul class="team__list">
            <li class="team__item">
              <img
                src="${Stefie}"
                alt="Stefanie Caffarel"
                class="team__item-img"
              />
              <div class="team__item-data">
                <p class="team__item-name">Stefanie Caffarel</p>
                <p class="team__item-role">Team Lead</p>
                <div class="team__item-wrap">
                  <a
                    href="https://github.com/StefieCaff"
                    target="_blank"
                    title="Link to Git Hub"
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                      alt=""
                      class="team__item-icon"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li class="team__item">
              <img
                src="${Angelina}"
                alt="Angelina Andronov"
                class="team__item-img"
              />
              <div class="team__item-data">
                <p class="team__item-name">Angelina Andronov</p>
                <p class="team__item-role">Main Developer</p>
                <div class="team__item-wrap">
                  <a
                    href="https://github.com/andangelina"
                    target="_blank"
                    title="Link to Git Hub"
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                      alt=""
                      class="team__item-icon"
                    />
                  </a>
                </div>
              </div>
            </li>
            <li class="team__item">
              <img
                src="${Duma}"
                alt="Duma Caffarel"
                class="team__item-img"
              />
              <div class="team__item-data">
                <p class="team__item-name">Duma Caffarel</p>
                <p class="team__item-role">Developer</p>
                <div class="team__item-wrap">
                  <a href="https://github.com/StefieCaff" target="_blank"  title="Link to Git Hub">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
                      alt=""
                      class="team__item-icon"
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
const body = document.querySelector('body');

refs.link.addEventListener('click', openModalTeam);

export function openModalTeam(event) {
  event.preventDefault();
  const modalTeam = basicLightbox.create(markup);
  modalTeam.show();
  if (modalTeam.show()) {
    body.style.overflow = 'hidden';
  }
  const modalClose = document.querySelector('.modal__close');

  modalClose.addEventListener('click', event => {
    modalTeam.close();
  });
  window.addEventListener('keydown', closeModalTeam);
  window.addEventListener('click', clickOutsideModal);
  
  function closeModalTeam(event) {
    if (event.code !== 'Escape') {
      return;
    }

    modalTeam.close();
    window.removeEventListener('keydown', closeModalTeam);
  }

  function clickOutsideModal(event) {
    if (event.target.classList.value === 'basicLightbox__placeholder') {
      modalTeam.close();
      body.style.overflow = 'scroll';
      window.removeEventListener('click', clickOutsideModal);
    }
  }
}


export function openModalTeam() {

  const modalTeam = basicLightbox.create(markup, {
    onShow: (modalTeam) => {
      modalTeam.element().querySelector('a').onclick = modalTeam.close
    }
  })

  modalTeam.show()

}