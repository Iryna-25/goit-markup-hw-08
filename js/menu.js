(() => {
    const refs = {
      openMenuBtn: document.querySelector('.nav__icon--menu'),
      closeMenuBtn: document.querySelector('.nav__icon--cross'),
      menu: document.querySelector('.nav__btn'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();