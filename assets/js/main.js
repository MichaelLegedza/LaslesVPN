// Burger
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});


// Кнопка скрола
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


// header scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "15px";
    document.getElementById("header").style.borderBottom = "1px solid #dadde4";
  } else {
    document.getElementById("header").style.padding = "35px 20px";
    document.getElementById("header").style.borderBottom = "0";
  }
}





