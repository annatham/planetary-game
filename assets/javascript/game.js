$(document).ready(function() {

    // score
    var targetNumber = 0;
    var score = 0;

    var win = 0;
    var losses = 0;
    var planets;

    // Here we created code that selects a number either 10 or 11.
    var randomNumber = randomNumber();

    function randomNumber(){
        // generate random  number formula
        return Math.round(Math.random() * 50) + 25;
    };

    $(".blue-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
    });
    
    $(".red-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
    });
    
    $(".yellow-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
    });
    
    $(".green-planet").on("click", function(event) {
        console.log(Math.round(Math.random() * 10) + 1);
    });

    function randomImgValue() {
    };

    console.log(randomNumber);
    // randomImgValue();
    // randomNumber();
    console.log(randomImgValue);

    function resetGame(){

        score = 0;
        // Generate random crystal values.
        planets = randomImgValue();
        // Generate a random target number and render it to the page.
        randomNumber = randomNumber();
        
        $("#targer-number").text(randomNumber);
    }


    // Here we created an on-click event that responds to button clicks of the crystal image.
    (".planet-image").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var planetValue = ($(this).attr("data-planetvalue"));
        planetValue = parseInt(planetValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        score += planetValue;

        // Here we created some logic to "check" if the click counter matches the targetNumber.
        // Remember, this click event will be triggered with each click.
        // With each click the counter will increase by 10 and be re-evaluated against target.
        
        alert("Total: " + score);

        if (score === targetNumber) {
            alert("wInNeR! wInNeR! cHiCkEn DiNneR!")
            wins++;
        }

        // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
        else if (score > targetNumber) {
        // Then they are alerted with a loss.
            alert("lOsErRrRr!!");
            losses++;
        }

// tagetScor

// This is fine except the way our code is written every user will win first (when they hit 50).
// But will then lose immediately if they click again. Seems pointless right?
// To make this a game we need to create additional code to randomize the counter and targetScore.

    });
});