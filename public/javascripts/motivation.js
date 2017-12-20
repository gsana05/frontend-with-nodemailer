/* START OF NAVBAR OPACITY SCROLL */
$(document).ready(function() {
    $(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if (scroll > 250) {
    $(".navbar").css("background",
    "#3498DB");
    } else {  
    $(".navbar").css("background",
    "");
    }
  })
})
/* END OF NAVBAR OPACITY SCROLL */
    
/*start of dropdown-menu ICON*/
$(document).ready(function() {
    $("#wrapper").click(function() {
    $(".menu").toggleClass("close");
  });
});
/* end of dropdown-menu ICON*/
$(document).ready(function(){       
/* START OF GALLERY LIGGHTBOX */
$(document).ready(function($){
/* Creates a varaible that store a class from the css but NOT in HTML */
var $overlay = $('<div class="overlay"></div>')
/* Creates a varaible that store an image from html and css */
var $image = $("<img>");
/* Creates a varaible that store a class from the css but NOT in HTML */
var $caption = $("<p class='caption'></p>")
/* image goes over overlay */
$overlay.append($image);
/* text goes over overlay */
$overlay.append($caption);
/* overlay goes over web page body */
$('body').append($overlay);
/* click function */
$('.lightbox-gallery img').click(function(event) {
    event.preventDefault();
    /* gets the image */
    var imgsrc = $(this).attr("src");
    /* when you click on the image the function only works on that image and doesnt effect others */
    $image.attr('src', imgsrc);
    $overlay.fadeIn();   
    /* gets the text */
    var captionText = $(".lightbox-gallery img").attr("alt"); /* when you click on the image the function only works on that image and doesnt effect others */
    $caption.text(captionText); 
});
/* closes lightbox popup and goes back to gallery */
    $overlay.click(function () {
    $overlay.fadeOut();
  });
});
/* END OF GALLERY LIGGHTBOX */

});