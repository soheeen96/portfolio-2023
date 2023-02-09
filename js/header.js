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
