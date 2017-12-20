function submitAnswers(){
    var total = 5;
    var score = 0;

    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
// Validation
    
    for(i = 1; i
    <= total;i++){
    
    if(eval('q'+i) == null || eval('q'+i) == ''){
    $(".quizinfo").html('You missed question number ' + i);
    $('#bullshit').hide();
    //$(".quizinfo").show().delay(4000).hide('fast');
    //$('.quizinfo').show();
    //alert('You missed question '+ i);
    return false;
    }
  }
    
    // Set Correct Answers
    
    var answers = ["b","a","d","b","d"];
    
    // Check Answers
    
    for(i = 1; i <= total;i++){
    if(eval('q'+i) == answers[i - 1]){ //(i- 1)gets answers to start a 0 so first question is not missed out
    score++; // add a point if answer is correct 
    }
   }
    
// Display Results
var results = document.getElementById('results');
    /* text box at top when quix is completed */
// output rank
if ( score === 5) {
    results.innerHTML = '<h1 class="text-success">You scored <span>'+score+'</span> out of <span>'+total+'</span></br> YOU ARE AMAZING</h1>';
    $(".quizinfo").hide();
    $('#bullshit').show(); 
    } else if ( score >= 3 ) {
    results.innerHTML = '<h1 class="text-primary">You scored <span>'+score+'</span> out of <span>'+total+'</span></br> YOU ARE GOOD</h1>';
    $(".quizinfo").hide();
    $('#bullshit').show(); 
    } else if ( score >= 1) {
    results.innerHTML = '<h1 class="text-warning">You scored <span>'+score+'</span> out of <span>'+total+'</span></br> YOU ARE AVERAGE</h1>';
    $(".quizinfo").hide();
    $('#bullshit').show(); 
    } else {
    results.innerHTML = '<h1 class="text-danger">You scored <span>'+score+'</span> out of <span>'+total+'</span></br> YOU NEED TO REVISE MORE</h1>';
    $(".quizinfo").hide();
    $('#bullshit').show(); 
    }
    //alert('You scored '+score+' out of ' +total);
    return false;
}
    