// FORM VALIDATION FORM VALIDATION FORM VALIDATION FORM VALIDATION
$(document).ready(function() {    
$("#register-form").validate({ 
    rules: {
    name: "required", 
    email: {
    required: true,
    minlength: 6 
    },
    comments: "required", 
    },
    messages: {
    name: "Please enter your Name", 
    email: {
    required: "Please provide email address",
    email:'please enter a <em>valid</em> address with "@"'
    },
    comments: "Please enter your comment",
    },
    

    submitHandler: function(form) {
    form.submit();
    }  
    }); 
});
    
    // disabling form submissions if there are invalid fields
    
    /*(function() {
    'use strict';
    
    window.addEventListener('load', function(){
    var form = document.getElementById('register-form');
    // puts form into variable 
    
    form.addEventListener('submit', function(event){ // when submit button is pressed event occurs
    
    if (form.checkValidity() ===
    false) { // checks input has been filled in Incorrectly IF so do below 
    event.preventDefault(); // prevent default actions
    event.stopPropagation(); //prevents parent handlers from being notified of the event
    }
    
    form.classList.add('was-validated');
    // change input border color to red(in-valid)
    }, false);
    }, false);
    })();*/
    
    
    
    
    //END OF FORM VALIDATION 