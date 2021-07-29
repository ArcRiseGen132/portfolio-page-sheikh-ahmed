$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //menu toggle
  // $('menu-btn').param(function () {
  //   $('navbar .menu').toggleClass("active");
  // })
});
