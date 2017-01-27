//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
var newHeight = $("html").height() + "px";
$(".header").css("height", newHeight);
$(".content").css("top", newHeight);
}

//Fade header on scroll
$(window).scroll(function(){
    $(".header h1").css("opacity", 1 - $(window).scrollTop() / 500);
  });