$(function(){
  // btn_direction
  $(window).scroll(function(){
      var windowscroll = $(this).scrollTop()
      if(windowscroll > 500){
              $(".btn_direction").fadeIn(); 
      }
      else{
          $(".btn_direction").fadeOut();
      }
  })
  $(".btn_direction").on('click',function(){
   $("html").animate({
       scrollTop : 0
   },100);
  })

 
  
});
// $(function(){
//  $(window).scroll(function(){
//      var windowscroll = $(this).scrollTop()
//      if (windowscroll > 500) {
//       $('.btn_submit').fadeIn();

//      }
//      else{
//       $('.btn_submit').fadeIn();

//      }
//  })

//  $('.btn_uvbmit').on('click' , function() {
//   $("html").animate({
//     scrollTop : 0
//   },100)
//  })
// });
// ---------------------------------------------------------------
// document.getElementById('ff').innerHTML='jnn';
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".img-home", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });


// 
// class Nameclass{
//      constructor(){
//       //  this.
//      }
// }

// onload = new Nameclass();
