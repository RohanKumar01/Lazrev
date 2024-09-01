function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "15vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");
  var relemImg = document.querySelectorAll("#righ-elem1 img");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 80,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      bordeRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      bordeRadius: "30px",
    });
  });
}

function page4Videonimation() {
  var sections = document.querySelectorAll(".sec-right");
  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // console.log("In mous enter", elem.childNodes[3]);
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      // console.log("In mouse leave", elem.childNodes[3]);

      elem.childNodes[3].load();
    });
  });
}
function page6Animation() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1.2,
    // stagger: {
    //   amount: -0.5,
    // },
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "body",
      // markers: true,  //MArkrs to see strt and end of scroll trigger
      start: "top 80%",
      end: "top 0%",
      scrub: true,
    },
  });
}

// var section1 = document.querySelectorAll("#header")[0];
// console.log(section1);
// var flag = false;
// section1.addEventListener("click", function () {
//   document.querySelector("#header i").style.transform = "rotate(180deg)";
//   if (flag) {
//     document.querySelector("#header i").style.transform = "rotate(180deg)";
//   }
//   flag = true;
// });
navAnimation();
page2Animation();
page3VideoAnimation();
page4Videonimation();
page6Animation();
