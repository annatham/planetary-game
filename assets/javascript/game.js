$(document).ready(function() {

    var totalScore = 0;

    var wins = 0;
    var losses = 0;

    // Random number
    var randomNumber = Math.round(Math.random() * 50) + 25;

    var targetNumber = $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);

    // value for images

    var bluePlanet = Math.round(Math.random() * 10) + 1;
    var redPlanet = Math.round(Math.random() * 10) + 1;
    var yellowPlanet = Math.round(Math.random() * 10) + 1;
    var greenPlanet = Math.round(Math.random() * 10) + 1;
    
 
    function resetGame(){

        $("#reset").on("click", function(event) {

            totalScore = 0;
            randomNumber = Math.round(Math.random() * 50) + 25;

            $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);
            $("#total-score").html("SCORE: " +totalScore);
        });

    };
    resetGame();


  function randomImgValue (){

    $("#blue-planet").on("click", function(event) {
        totalScore = totalScore + bluePlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

    });

        
    $("#red-planet").on("click", function(event) {
        totalScore = totalScore + redPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

    });

    $("#yellow-planet").on("click", function(event) {
        totalScore = totalScore + yellowPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

    });
    
    $("#green-planet").on("click", function(event) {
        totalScore = totalScore + greenPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

    });

    };

    randomImgValue();
    // randomNumber();
    // console.log(randomImgValue);

    $(".planet-images").on(click, function(){
    
        if (totalScore === targetNumber) {
            wins++;
            $(".wins").html("Wins: " + wins++);
        }
        // if score exceeds
        else if (totalScore > targetNumber) {
            // Then they are alerted with a loss.
            losses++;
            $(".losses").html("Losses: " + losses++);
        }
        
    });



});
