$(document).ready(function() {

//----------------------------Variables------------------------

var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * 112) + 40;
var score = 0;

var winGame = "";
var jewels = 0;
var jeweltwo = 0;
var jewelthree = 0;
var jewelfour = 0;
var random = Math.floor(Math.random() * 12) + 1;
var randomtwo = Math.floor(Math.random() * 12) + 2;
var randomthree = Math.floor(Math.random() * 12) + 3;
var randomfour = Math.floor(Math.random() * 12) + 4;
var html;



//--------------------------------Functions------------------------
function reset() {
    score = 0;
    $("#scoreBox").html(score);
    randomNumber = Math.floor(Math.random() * 112) + 40;
    $("#randomNumberBox").html(randomNumber);
    random = Math.floor(Math.random() * 12) + 1;
    randomtwo = Math.floor(Math.random() * 12) + 2;
    randomthree = Math.floor(Math.random() * 12) + 3;
    randomfour = Math.floor(Math.random() * 12) + 4;
}

//to start game and be able to reset later
function initalizeGame() {
  
    $("#randomNumberBox").html(randomNumber);
    
  //---------------On Click to All Jewel Buttons---------------------------
    $("#jewel-1").on("click", function() {

        if (random !== 0){
            jewels=random
            jewels++
        }

        console.log(jewels);

        score += jewels;
        
        if(score === randomNumber){

            wins++;
            alert("Good Job You Win!")
            reset();
            
        }else if(score >= randomNumber) {
       
            losses++;
            alert("Oh No! Try again")
            reset();
            
        };

        $("#scoreBox").html(score);

        var html =

        "<p>Wins: " + wins + "</p>" +
        "<p> Losses: " + losses + "</p>";

        document.querySelector("#winBox").innerHTML = html;

        });
        
//----------------------Jewel 2 ------------------------------

        $("#jewel-2").on("click", function() {

            if (randomtwo !== 0){
                jeweltwo=randomtwo
                jeweltwo++
            }
            console.log(jeweltwo);

            score += jeweltwo;

            if(score === randomNumber){

             wins++
             alert("Good Job You Win!")
             reset();

            }else if(score >= randomNumber) {

            losses++
            alert("Oh No! Try again")
            reset();
                
            };

            $("#scoreBox").html(score);

            var html =

            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
    
            document.querySelector("#winBox").innerHTML = html;

            });

//-------------------------- Jewel 3 -----------------------------
            $("#jewel-3").on("click", function() {

                if (randomthree !== 0){
                    jewelthree=randomthree
                    jewelthree++
                }

                console.log(jewelthree);

                score += jewelthree;

                if(score === randomNumber){

                    wins++
                    alert("Good Job You Win!")
                    reset();

                }else if(score >= randomNumber) {

                losses++
                alert("Oh No! Try again")
                reset();

                };

                $("#scoreBox").html(score);

                var html =

                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>";
        
                document.querySelector("#winBox").innerHTML = html;

                });
//-----------------------------Jewel 4 ----------------------------------------
                $("#jewel-4").on("click", function() {

                if (randomfour !== 0){
                    jewelfour=randomfour
                    jewelfour++
                 }
                console.log(jewelfour);

                score += jewelfour;
                            
                if(score === randomNumber){

                wins++
                alert("Good Job You Win!")
                reset();

                }else if(score >= randomNumber) {

                losses++
                alert("Oh No! Try again")
                reset();

                };

                $("#scoreBox").html(score);

                var html =

                "<p>Wins:  " + wins + "</p>" +
                "<p> Losses: " + losses + "</p>";
        
                document.querySelector("#winBox").innerHTML = html;
                    });
                    
                }
//----------------------------------------------------------------------
  
initalizeGame()


if(score === randomNumber){

    wins++
   initalizeGame()
   }else if(score >= randomNumber) {

   losses++
   initalizeGame()
       
   };

});