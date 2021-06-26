AOS.init()

const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.header__links')

hamburger.addEventListener('click', function() {
  menu.classList.toggle('open')
  hamburger.classList.toggle('open')
})