$(document).ready(function () {
  $(".m03 .tab li").click(function () {
    let idx = $(this).index();
    $(".m03 .container .box").removeClass("on");
    $(".m03 .container .box").eq(idx).addClass("on");
  });

  $(".m03 .box1 .left li").click(function () {
    $(".m03 .box1 .left li").removeClass("on");
    $(this).addClass("on");

    const idx1 = $(this).index();
    $(".m03 .box1 .right li").removeClass("on");
    $(".m03 .box1 .right li").eq(idx1).addClass("on");
  });

  $(".m03_overlay").hide();
  $(".m03 .box2 .left li").click(function () {
    $(".m03 .box2 .left li").removeClass("on");
    $(this).addClass("on");

    const idx2 = $(this).index();
    $(".m03 .box2 .right li").removeClass("on");
    $(".m03 .box2 .right li").eq(idx2).addClass("on");
  });

  $(".m03_overlay").click(function () {
    $(".m03 .box1 .left li").eq(0).removeClass("on");
    $(".m03 .box2 .left li").eq(0).removeClass("on");
    $(".m03 .box1 .right li").eq(0).removeClass("on");
    $(".m03 .box2 .right li").eq(0).removeClass("on");
  });
});

gsap.registerPlugin(ScrollTrigger);

$(window).load(function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".loading",
      start: "top 50%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  tl.to(".loading", {
    height: 0,
    opacity: 0,
    duration: 0.5,
    delay: 2,
    stagger: 0.3,
  }).to(".wrap", {
    height: "auto",
    opacity: 1,
    duration: 0.7,
    stagger: 0.3,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".m01",
      start: "top 50%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  tl.to(".m01 .tit-cover", {
    x: "100%",
    borderRadius: "0",
    duration: 1,
    stagger: 0.3,
  }).to(".m01 h4 span", {
    y: "0",
    borderRadius: "0",
    duration: 0.7,
    stagger: 0.3,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".m02",
      start: "top 60%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  tl.to(".m02", {
    width: "100%",
    borderRadius: "0",
    duration: 0.7,
    stagger: 0.3,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".m03",
      start: "top 15%",
      end: "bottom 20%",
      //markers: true,
      toggleActions: "play none none none",
    },
  });
  tl.to(".m03 .right .img", {
    animationName: "img-scrollup",
    duration: 0.7,
    stagger: 0.3,
  });

  $(".m04 .imgs1 img").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: ".m04",
        start: "top center",
        endTrigger: $("#footer"),
        end: "bottom bottom",
        scrub: 3,
        //markers: true,
      },
      top: -400,
      opacity: 0.2,
    });
  });

  $(".m04 .imgs2 img").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: ".m04",
        start: "top center",
        endTrigger: $("#footer"),
        end: "bottom bottom",
        scrub: 3,
      },
      top: -300,
      opacity: 0.2,
    });
  });

  $(".m04 .imgs3 img").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: ".m04",
        start: "top center",
        endTrigger: $("#footer"),
        end: "bottom bottom",
        scrub: 3,
      },
      top: -500,
      opacity: 0.2,
    });
  });

  $(".m04 .imgs4 img").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: ".m04",
        start: "top center",
        endTrigger: $("#footer"),
        end: "bottom bottom",
        scrub: 3,
      },
      top: -400,
      opacity: 0.2,
    });
  });

  $(".m04 .imgs5 img").each(function (q) {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: ".m04",
        start: "top center",
        endTrigger: $("#footer"),
        end: "bottom bottom",
        scrub: 3,
      },
      top: -400,
      opacity: 0.2,
    });
  });
});
