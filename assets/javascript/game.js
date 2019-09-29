// establish target number

var targetNumber = 25;

// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#number-to-guess").text(targetNumber);


    //counter

    var counter = 0;

    // Here we created code that selects a number either 10 or 11.
    // We'll set this number at the start of the "game".
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var increment = numbers[Math.round(Math.random())];

    // Next we create a for loop to create crystals for every numbers.
    for (var i = 0; i < numbers.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/widget.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    }


    // Here we created an on-click event that responds to button clicks of the crystal image.
    $(".crystal-image").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // Here we created some logic to "check" if the click counter matches the targetNumber.
        // Remember, this click event will be triggered with each click.
        // With each click the counter will increase by 10 and be re-evaluated against target.
        
        alert("Total: " + counter);

        if (counter === targetNumber) {

            alert("wInNeR! wInNeR! cHiCkEn DiNneR!")
        }

        // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
        else if (counter >= targetNumber) {

        // Then they are alerted with a loss.
            alert("lOsErRrRr!!");
}

// tagetScor

// This is fine except the way our code is written every user will win first (when they hit 50).
// But will then lose immediately if they click again. Seems pointless right?
// To make this a game we need to create additional code to randomize the counter and targetScore.

});