var targetNumber = 0;
var wins = 0;
var losses = 0;
var total = 0;

// On page load, do the following
window.onload = function() {

//Set var targetNumber with math function
    var randomTarget = Math.floor(Math.random() * ((120-19)+1) + 19);
    targetNumber = randomTarget + targetNumber;

//Show var targetNumber in goal id.
    $('#goal').text(targetNumber);

//Show wins at 0
    $('#wins').text('Wins: ' + wins);

//Show losses at 0
    $('#losses').text('Losses: ' + losses);

//Set attribute values to each crystal

var blueCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    blueCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    blueCrystal.attr("src", "./assets/images/blue_crystal.jpg");
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    blueCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(blueCrystal);
    console.log(blueCrystal);

var greenCrystal = $("<img>");
    greenCrystal.addClass("crystal-image");
    greenCrystal.attr("src", "./assets/images/green_crystal.jpg");
    greenCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystals").append(greenCrystal);
    console.log(greenCrystal);

var redCrystal = $("<img>");
    redCrystal.addClass("crystal-image");
    redCrystal.attr("src", "./assets/images/red_crystal.jpg");
    redCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystals").append(redCrystal);
    console.log(redCrystal);

var whiteCrystal = $("<img>");
    whiteCrystal.addClass("crystal-image");
    whiteCrystal.attr("src", "./assets/images/white_crystal.jpg");
    whiteCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $("#crystals").append(whiteCrystal);
    console.log(whiteCrystal);

//Show guess total at 0
    $('#score').text(total);

}

//experiment start

$("#crystals").on("click", ".crystal-image", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    console.log("test");
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    total += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $('#score').text(total);
    if (total === targetNumber) {
        alert("You win!");
      }
      else if (total >= targetNumber) {
        alert("You lose!!");
      }
})







    //$("#blue").on("click", stopwatch.recordLap);
    //$("#green").on("click", stopwatch.stop);
    //$("#red").on("click", stopwatch.reset);
    //$("#white").on("click", stopwatch.start);
  //};
//$(function(){
    //Math.floor(Math.random() * 12) + 1;
    //Math.floor(Math.random() * ((120-19)+1) + 19);
 
 //});
