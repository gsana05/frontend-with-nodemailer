/* start of laod page */
$(document).ready(function() {
    setTimeout(function () { /* SETTIMEOUT: controls when how long loading page lasts and when home page comes out */
    $('.wrapper').addClass('loaded');
    /* selects ".wrapper"(which is everything inside pre-loading page) and addclass("does whats inside these brackets") *//*'loaded' is in the css */
    }, 300); /* it does the above actions for this period of time */
    
    $('.navbar').hide().fadeIn(1000);
    /*hide navbar, hides for the delayed period of time, and navbar slides down */
    });
    
    /*$(window).load(function(){
    }); */

    
    /* end of load page */