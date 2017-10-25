$(document).ready(function(){
    var q = 0;
    var rootRef = firebase.database().ref().child("Quizzes").child("Quiz 1").child("Questions");
    var options = [""];
var totalQuestions = $(questions).size();
var currentQuestion = 0;
var nthquestion = 1;
        var questions = ["aaaa"];
//    var questionUpload;
//    var answerUpload;
    
//    var optionUpload;
    
    rootRef.on('value',function(snapshot) {
        var numberOfOptions = 0;
        snapshot.forEach(function(childSnapshot) {
            var json = childSnapshot.val();
                numberOfOptions = Object.keys(json).length - 1;
                    });
//            console.log("hdkjhdkdcd" + snapshot);
            snapshot.forEach(function(childSnapshot) {
                var z = 0;
                
       questions[q] = childSnapshot.child("Name").val();
//        options[q][z] = childSnapshot.child("Name").val();
                for(z = 0 ; z<=numberOfOptions ; z++){
//                    options[q][z] = childSnapshot.child("Option "+z).val();
                    console.log(childSnapshot.child("Option "+z).val());
                }
                q++;
        document.getElementById("q1").innerHTML= questions[currentQuestion];
                for( var i = 0 ; i < options[currentQuestion].length ; i++)
        {
            console.log("iteration: "+i);
            var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+i+'">'+options[currentQuestion][i]+'</button>';
            $("#opt-container").append(content);
             
//            console.log("kheera: "+options[currentQuestion].length); 
//            optionUpload = options[currentQuestion][i];
//            console.log("kheere" + optionUpload.length);
    console.log(options[currentQuestion].length);


    
            $("#op"  + i ).click(function(){
//                questionUpload = questions[currentQuestion];
//            answerUpload = $(this).text();
//                upload();
//                console.log(questionUpload);
//            console.log(answerUpload);
        
        });
                
        }
                    });
        
        

        
    });
    $("#opt-container").html("");
                

    
    var queNumber = document.getElementById("queNumber");
    queNumber.innerHTML = nthquestion + "/" + totalQuestions;
    function incrementCurrentQuestion(){
        currentQuestion++;
    }
    if(currentQuestion<=1){
          $("#prev").hide();
}
    $(".options").click(function(){
        nthquestion++;
        queNumber.innerHTML = nthquestion + "/" + totalQuestions;
               $("#opt-container").html("");
        $(".questions").fadeOut(function(){
            
        
   incrementCurrentQuestion();  
            $(".questions").fadeIn();
         q1 = document.getElementById("q1").innerHTML= questions[currentQuestion];
          for( var i = 0 ; i < options[currentQuestion].length ; i++)
        {
//            console.log("iteration: "+i);
            var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+i+'">'+options[currentQuestion][i]+'</button>';
            $("#opt-container").append(content);
             
//            console.log("kheera: "+options[currentQuestion].length);
//                        optionUpload = options[currentQuestion][i];
//            console.log(optionUpload);
           $("#op"  + i ).click(function(){
//               questionUpload = questions[currentQuestion];
//            answerUpload = $(this).text();
//               upload();
//            console.log(answerUpload);
//               console.log(questionUpload);
            
        });  
            
        }
            });
//    $($questions.get(currentQuestion-1)).fadeOut(function(){
//        $($questions.get(currentQuestion)).fadeIn();
        if(currentQuestion!=0){
          $("#prev").show();
        }
//    });
//        var test = document.getElementById('select-option').value;
//    console.log("ndjskndsk" + test);
    });
//    for (var i = 0 ; i  < options[currentQuestion].length; i++ ){
       
//    }

//    document.getElementById("queNumber").innerHTML = currentQuestion + 1 + "/" + totalQuestions;
//$questions = $('.questions');
//$questions.hide();
//$($questions.get(currentQuestion)).fadeIn();
    $('#submit').hide(); 
$('#skip').click(function(){
     
    if(currentQuestion == totalQuestions - 2 ){
        $('#skip').fadeOut();
        $('#submit').fadeIn();
    }$("#opt-container").html("");
        $(".questions").fadeOut(function(){
            
        
   incrementCurrentQuestion();  
            $(".questions").fadeIn();
         q1 = document.getElementById("q1").innerHTML= questions[currentQuestion];
          for( var i = 0 ; i < options[currentQuestion].length ; i++)
        {
            console.log("iteration: "+i);
            var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+i+'">'+options[currentQuestion][i]+'</button>';
            $("#opt-container").append(content);
             
            console.log("kheera: "+options[currentQuestion].length);
            
            
        }
            });
//    $($questions.get(currentQuestion-1)).fadeOut(function(){
//        currentQuestion++;

//        currentQuestion++;


//        currentQuestion--;
//        $($questions.get(currentQuestion)).fadeIn();
//         $(".daddy").fadeIn();
                
//        alert(nthquestion);
//        $("#queNumber").fadeIn();
//    alert(currentQuestion);
        queNumber.innerHTML = nthquestion + "/" + totalQuestions;
//    });
    
    
  if(currentQuestion!=0){
          $("#prev").show();
}

  });
  
  $('#prev').click(function(){
            currentQuestion--;

      if(currentQuestion == totalQuestions - 1 ){
        $('#skip').fadeIn();
        $('#submit').fadeOut();
      }
      
      if(currentQuestion==0){
          $("#prev").fadeOut();
          
          
      }

    $($questions.get(currentQuestion+1)).fadeOut(function(){
        
      // document.getElementById("queNumber").innerHTML = currentQuestion + "/"+totalQuestions;
    
//        currentQuestion = currentQuestion - 1;
        $($questions.get(currentQuestion)).fadeIn();
      //  $(skip).show();
      // $(submit).hide();
       
    });
          console.log("ye wala "+currentQuestion);
            nthquestion--;
      queNumber.innerHTML = nthquestion + "/" + totalQuestions;
  });

    
   
        
});