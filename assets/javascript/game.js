$(document).ready(function() {

    var totalScore = 0;

    var wins = 0;
    var losses = 0;

    // Random number
    var randomNumber = Math.round(Math.random() * 50) + 25;

    // var targetNumber = randomNumber;

    $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);

    // value for images

    var bluePlanet = Math.round(Math.random() * 10) + 1;
    var redPlanet = Math.round(Math.random() * 10) + 1;
    var yellowPlanet = Math.round(Math.random() * 10) + 1;
    var greenPlanet = Math.round(Math.random() * 10) + 1;
    
 
    function resetGame(){

        totalScore = 0;
        
      $("#total-score").empty();

      randomNumber = Math.round(Math.random() * 50) + 25;

      $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);
      $("#total-score").html("SCORE: " +totalScore);

    };

    $("#reset").on("click", function(event) {

        totalScore = 0;
        randomNumber = Math.round(Math.random() * 50) + 25;

        $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);
        $("#total-score").html("SCORE: " +totalScore);
    });


    $("#blue-planet").on("click", function(event) {
        totalScore = totalScore + bluePlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

        checkScore();

    });

        
    $("#red-planet").on("click", function(event) {
        totalScore = totalScore + redPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

        checkScore();

    });

    $("#yellow-planet").on("click", function(event) {
        totalScore = totalScore + yellowPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

        checkScore();

    });
    
    $("#green-planet").on("click", function(event) {
        totalScore = totalScore + greenPlanet;
        totalScore++;
        $("#total-score").html("SCORE: " +totalScore);

        checkScore();

    });

    

    // randomNumber();
    // console.log(randomImgValue);

    function checkScore(){

        
        if (totalScore === randomNumber) {
            wins++;
            $("#wins").text("Wins: " +wins);
            resetGame();
            
        }
        // if score exceeds
        else if (totalScore > randomNumber) {
            losses++;
            $("#losses").text("Losses: " +losses);
            resetGame();
            
        }
        
    };




});
