$(document).ready(function() {
    $(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if (scroll > -0) { 
    $(".navbarabout").css("background",
    "#3498DB");
    } else {
    $(".navbarabout").css("background", "#3498DB");
    }
  })
})
    
    /* END OF NAVBAR OPACITY SCROLL */