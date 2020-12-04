
$('.cat-btn').click(function(){
  $('nav ul .cat-show').toggleClass("show");
  $('nav ul .first').toggleClass("rotate");
});
$('.bhk-btn').click(function(){
  $('nav ul .bhk-show').toggleClass("show1");
  $('nav ul .second').toggleClass("rotate");
});
$('.pg-btn').click(function(){
  $('nav ul .pg-show').toggleClass("show2");
  $('nav ul .third').toggleClass("rotate");
});
$('.floor-btn').click(function(){
  $('nav ul .floor-show').toggleClass("show3");
  $('nav ul .fourth').toggleClass("rotate");
});
$('.fur-btn').click(function(){
  $('nav ul .fur-show').toggleClass("show4");
  $('nav ul .fifth').toggleClass("rotate");
});
$('.pro-btn').click(function(){
  $('nav ul .pro-show').toggleClass("show5");
  $('nav ul .sixth').toggleClass("rotate");
});

$('nav ul li').click(function(){
  $(this).addCLass("active").siblings().removeClass("active");
});

//heart
// var t = document.getElementById("heart");
//   document.getElementById("btn-heart").addEventListener("click",changecolor);
//   function changecolor(){
//     if(t.classList.contains("heartinactive")){
//       document.getElementById("heart").classList.add("heartactive");
//       document.getElementById("heart").classList.remove("heartinactive");
//     }
//     else{
//       document.getElementById("heart").classList.add("heartinactive");
//       document.getElementById("heart").classList.remove("heartactive");
//     }
//   }
//   var x = document.getElementById("heart1");
//   document.getElementById("btn-heart1").addEventListener("click",changecolor);
//   function changecolor(){
//     if(x.classList.contains("heartinactive1")){
//       document.getElementById("heart1").classList.add("heartactive1");
//       document.getElementById("heart1").classList.remove("heartinactive1");
//     }
//     else{
//       document.getElementById("heart1").classList.add("heartinactive1");
//       document.getElementById("heart1").classList.remove("heartactive1");
//     }
//   }