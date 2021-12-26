// Hamburger menu interaction
$('.menuToggle').on('click', () => {
  $('.menuToggle').toggleClass('active'); // Toggle menu (from Hamburger)
  $('.menu-container').toggleClass('active'); // Toggle menu (from Hamburger)
  $('body').toggleClass('noscroll'); // Prevent body from scrolling
});

$('.fa-search').on('click', () => {
  $('.fa-spinner').toggleClass('d-none');
  $('.fa-search').toggle();

  location.reload(); // Used at the moment -> User will be redirect to a search page
});
$(function () {
  var lastScrollTop = 0,
    delta = 50;
  $(window).scroll(function () {
    var nowScrollTop = $(this).scrollTop();
    if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
      if (nowScrollTop > lastScrollTop) {
        // Scrolling down
        $('nav.navbar').addClass('shrink');
      } else {
        // Scrolling up
        $('nav.navbar').removeClass('shrink');
      }
      lastScrollTop = nowScrollTop;
    }
  });
});
