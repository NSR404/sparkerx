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
   },1000)
  });
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
  distance: "55px",
  duration: 1900,
  reset: false,
});

/*SCROLL HOME*/
// sr.reveal(".home-title", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".img-home", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
// sr.reveal(".about__img", {});
// sr.reveal(".about__subtitle", { delay: 400 });
// sr.reveal(".about__text", { delay: 400 });

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


ScrollReveal().reveal('.brand-nav',{ 
  origin : 'left' ,
  distance: "80px",
   duration: 1500,
   interval: 90 ,
   opacity: 0 ,
   delay: 0 ,
   reset: false,
   disktop:true ,
   mobile : true,
   easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
 });

// onload = new Nameclass();

/*SCROLL ABOUT*/ // scroll reveal home -
ScrollReveal().reveal('',{ 
  origin : 'left' ,
  distance: "100px",
   duration: 1500,
   interval: 90 ,
   opacity: 0 ,
   delay: 600 ,
   reset: false,
   disktop:true ,
   mobile : true,
   easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
 });

 ScrollReveal().reveal('.img-home  , .nav__item',{ 
  origin : 'right' ,
  distance: "55px",
   duration: 1400,
   interval: 40 ,
   opacity: 0 ,
   delay: 500 ,
   reset: false,
   disktop:true ,
   mobile : true,
   easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
 });

 ScrollReveal().reveal('.home-title , .about__img , .btn_contact , .about__text , .section-title , .footer__title , .icons_contact , .about__subtitle , .contact_item',{ 
  origin : 'bottom' ,
  distance: "50px",
   duration: 900,
   interval: 30 ,
   opacity: 0 ,
   delay: 400 ,
   reset: false,
   disktop:true ,
   mobile : true,
   easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
 });

 ScrollReveal().reveal('.scrollreveal',{ 
  origin : 'bottom' ,
  distance: "20px",
   duration: 1300,
   interval: 100 ,
   opacity: 0 ,
   delay: 400 ,
   reset: false,
   disktop:true ,
   mobile : true,
   easing :  'ease-in-out' ,    // ease , ease-in , ease-out , ease-in-out 
 });



 /* checking active filter */
// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
var buttonGroup = buttonGroups[i];
radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
buttonGroup.addEventListener( 'click', function( event ) {
// only work with buttons
if ( !matchesSelector( event.target, 'button' ) ) {
  return;
}
buttonGroup.querySelector('.active').classList.remove('active');
event.target.classList.add('active');
});
}




 


 