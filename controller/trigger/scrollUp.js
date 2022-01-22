// Scroll up function
$('#btn-back-to-top').on('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

window.onscroll = function () {
  if ($(window).scrollTop() > 50 || $(document).scrollTop() > 50) {
    $('#btn-back-to-top').show();
  } else {
    $('#btn-back-to-top').hide();
  }
};
