// Burger
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

const offset = 200;
const scrollUp = document.querySelector('.scroll-up');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {};

window.addEventListener('scroll', () => {
  updateDashoffset();
  
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active')
  } else {
    scrollUp.classList.remove('scroll-up--active')
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
