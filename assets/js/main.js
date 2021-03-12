// Burger
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});

const smoothLinks = document.querySelectorAll('.top');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('.top');

        document.querySelector(id).scrollIntoView({
            behavior: 'behavior',
            block: 'start'
        });
    });
};
