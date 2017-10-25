
$(document).ready(function(){
    var questionAnswer = {};
    $("#prev").hide();
    var rootRef = firebase.database().ref().child("Quizzes").child("Quiz 1").child("Questions");
        rootRef.on('value',function(snapshot) {
            var currentQuestion = 1;
            if(currentQuestion<=1){
                $("#prev").hide();
            }
            var i = 1;
            var nthquestion = 1;
            var totalQuestions = 5; //change this use length of json
            var queNumber = document.getElementById("queNumber");
            queNumber.innerHTML = nthquestion + "/" + totalQuestions;
            snapshot.forEach(function(childSnapshot) {
                var json = childSnapshot.val();
                questionAnswer["Question "+i] = json;
                console.log(questionAnswer);
                i++;
            });
            
            console.log(Object.keys(questionAnswer["Question 1"]).length);
            console.log(questionAnswer["Question "+currentQuestion]);
            i = 1;
            document.getElementById("q1").innerHTML= questionAnswer["Question "+currentQuestion]["Name"];
            for(var j = 0 ; j < Object.keys(questionAnswer["Question "+currentQuestion]).length ; j++){
                if(Object.keys(questionAnswer["Question "+currentQuestion])[j]!=="Name")
                {
                   var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+j+'">'+questionAnswer["Question "+currentQuestion]["Option "+j]+'</button>';
            $("#opt-container").append(content); 
                }
                
            }
            
            $(".options").click(function(){
                currentQuestion++;
                if(currentQuestion>1){
          $("#prev").show();
        }
                nthquestion++;
                queNumber.innerHTML = nthquestion + "/" + totalQuestions;
                $(".questions").fadeOut(function(){
                    $(".questions").fadeIn();     
                    console.log(currentQuestion);
                    document.getElementById("q1").innerHTML= questionAnswer["Question "+currentQuestion]["Name"];
                    $("#opt-container").html("");
                    for(var j = 0 ; j < Object.keys(questionAnswer["Question "+currentQuestion]).length ; j++){
                if(Object.keys(questionAnswer["Question "+currentQuestion])[j]!=="Name")
                {
                   var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+j+'">'+questionAnswer["Question "+currentQuestion]["Option "+j]+'</button>';
            $("#opt-container").append(content); 
                }
                
            }
                    
                    });
                
                
            
                
            });
            
        });
    
    
});
