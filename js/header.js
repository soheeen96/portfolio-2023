//헤더 스크롤

const header = document.querySelector("header");
let lastScroll = 0;
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 5) {
    header.classList.remove("scroll-down");
    header.classList.remove("scroll-up");
  } else if (prevScrollpos > currentScrollPos) {
    header.classList.remove("scroll-up");
    header.className = "scroll-up";
  } else {
    header.classList.remove("scroll-down");
    header.className = "scroll-down";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function ($) {
  $("header a").click(function (event) {
    event.preventDefault();
    var hei = 40;
    if (window.innerWidth < 768) {
      hei = 30;
    }
    $("html,body").animate({ scrollTop: $(this.hash).offset().top - hei }, 500);
    return false;
  });

  $("header .mo_nav").click(function () {
    $(this).toggleClass("mo_nav_on");
    $("header .mo_menu").toggleClass("mo_menu_on");
  });

  $("header .mo_menu button").click(function () {
    $("header .mo_menu").removeClass("mo_menu_on");
  });
  $("header .mo_menu a").click(function () {
    $("header .mo_menu").removeClass("mo_menu_on");
  });
});
