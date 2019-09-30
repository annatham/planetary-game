$(document).ready(function() {

    var targetNumber = 0;
    var score = 0;

    var wins = 0;
    var losses = 0;

    // Random number
    var randomNumber = Math.round(Math.random() * 50) + 25;

    $("#target-number").html("GUESS THIS NUMBER: " +randomNumber);

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

  

    $("#blue-planet").on("click", function(event) {
        console.log((Math.round(Math.random() * 10) + 1));
        score = score + bluePlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

        
    $("#red-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
        score = score + redPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

    $("#yellow-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
        score = score + yellowPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });
    
    $("#green-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
        score = score + greenPlanet;score++;
        $("#total-score").html("SCORE: " +score);

    });

    // };

    // randomImgValue();
    // randomNumber();
    // console.log(randomImgValue);


    var addWins = $("<h3>").html("Wins: " + wins);

    var addLosses = $("<h3>").html("Losses: " + losses);

    $(".wins").append(addWins);
    $(".losses").append(addLosses);


        
    $(".planet-images").on("click", function (event){ 

        if (score === targetNumber) {
            alert("wInNeR! wInNeR! cHiCkEn DiNneR!");
            wins++;
            resetGame();
        }
        // // if score exceeds
        // else if (score > targetNumber) {
        //     // Then they are alerted with a loss.
        //     alert("lOsErRrRr!!");
        //     losses++;
        //     resetGame();
        // }
    });
    
    
// $("#blue-planet").on("click", );
// $("#red-planet").on("click", );
// $("#yellow-planet").on("click", );
// $("#green-planet").on("click", );


});
