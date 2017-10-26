
$(document).ready(function(){
    
    var questionAnswer = {};
    var questionsAnswered = [];
    $("#prev").hide();
    $("#submit").hide();
    $("#skip").hide();
    var rootRef = firebase.database().ref().child("Quizzes").child("Quiz 1").child("Questions");
        rootRef.on('value',function(snapshot) {
            var currentQuestion = 1;
            if(currentQuestion<=1){
                $("#prev").hide();
            }
            var i = 1;
            var nthquestion = 1;
            var totalQuestions ; //change this use length of json
            var queNumber = document.getElementById("queNumber");
            
            snapshot.forEach(function(childSnapshot) {
                var json = childSnapshot.val();
                questionAnswer["Question "+i] = json;
//                console.log(questionAnswer);
                i++;
            });
            
//            console.log(Object.keys(questionAnswer["Question 1"]).length);
            
            totalQuestions = Object.keys(questionAnswer).length;
//            console.log(totalQuestions);
            // Setting the value Question number
            
//            console.log(questionAnswer["Question "+currentQuestion]);
            i = 1;
            $(".questions").fadeOut(function(){
                    $(".questions").fadeIn();
                
                $("#skip").fadeIn();
                queNumber.innerHTML = nthquestion + "/" + totalQuestions;
            document.getElementById("q1").innerHTML= questionAnswer["Question "+currentQuestion]["Name"];
            for(var j = 0 ; j < Object.keys(questionAnswer["Question "+currentQuestion]).length ; j++){
                if(Object.keys(questionAnswer["Question "+currentQuestion])[j]!=="Name")
                {
                   var content = '<button id="op'+i+'" class="btn btn-outline-primary option" type = "button" value="'+j+'">'+questionAnswer["Question "+currentQuestion]["Option "+j]+'</button>';
            $("#opt-container").append(content); 
                }
                
            }
            });
            // Click on OPTIONS
            $(".options").click(function(){
                questionsAnswered.push(currentQuestion);
                console.log(questionsAnswered);
                currentQuestion++;
                if(currentQuestion>1){
          $("#prev").show();
        }
                if (currentQuestion === totalQuestions){
                    $("#submit").fadeIn();
                }
                nthquestion++;
                
                $(".questions").fadeOut(function(){
                    $(".questions").fadeIn();
                    $("#skip").fadeIn();
                    queNumber.innerHTML = nthquestion + "/" + totalQuestions;
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
            
            // Click On SKIP
                        $("#skip").click(handleClick);
            function handleClick(){
                currentQuestion++;
                console.log("current question: "+currentQuestion);
            if(currentQuestion===totalQuestions+1)
                currentQuestion = 1;
        var isAnswered = false;
                for(var z = 0 ; z < questionsAnswered.length ; z++){
                    console.log("for chal rha hai");
                    if(currentQuestion === questionsAnswered[z]){
                        isAnswered = true;
                        console.log("if chal rha hai");
                    }
                }
                if(isAnswered){

//                    currentQuestion++;
                    handleClick();
                }
                            
                else{
//                currentQuestion++;
                if (currentQuestion === totalQuestions){
                    $("#submit").fadeIn();
                }
                queNumber.innerHTML = nthquestion + "/" + totalQuestions;
                $(".questions").fadeOut(function(){
                    $(".questions").fadeIn();
                    $("#skip").fadeIn();
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
                
                
            
                }
    }
            
            
        });
    
    
    
    
});
