$(document).ready(function() {

    var score = 0;

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

            score = 0;
            randomNumber = Math.round(Math.random() * 50) + 25;
            
            $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);
            $("#total-score").html("SCORE: " +score);
        });

    };


  function randomImgValue (){

    $("#blue-planet").on("click", function(event) {
        score = score + bluePlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

        
    $("#red-planet").on("click", function(event) {
        score = score + redPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

    $("#yellow-planet").on("click", function(event) {
        score = score + yellowPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });
    
    $("#green-planet").on("click", function(event) {
        score = score + greenPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

    };

    randomImgValue();
    // randomNumber();
    // console.log(randomImgValue);

    function updatePoints(){
 
    if (score === targetNumber) {
        wins++;
        $(".wins").html("Wins: " + wins++);
    }
    // if score exceeds
    else if (score > targetNumber) {
        // Then they are alerted with a loss.
        losses++;
        $(".losses").html("Losses: " + losses++);
    }
    
    };

    resetGame();
    updatePoints();


});
