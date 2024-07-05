var buttonColours = ["green", "red", "yellow", "blue"];

var gamePattern = [];

var userPattern = [];

var level = 0;

var started = false;

$(document).keypress(function(){
    if (!started){
        nextSequence();
        started = True;
    }
});

$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);

    playSound(userChosenColour);
    animateClick(userChosenColour);

    // check the player's clicked colour
    checkAnswer(userPattern.length-1);
});

function nextSequence(){

    level++;
    $("#level-title").text("Level " + level);

    userPattern = [];

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
};

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animateClick(colour){
    $("#" + colour).addClass("pressed");
    setTimeout(() => {
        $("#" + colour).removeClass("pressed");
    }, 100);
};

function checkAnswer(currentLevel){
    // checks the users clicked colour choice one by one to see if it matches the corresponding level until the current level is reached
    // if a colour is wrong, the game is ended right away
    // if colour is right, the game continues until the player has inputted the corresponding number of colours 
    if (userPattern[currentLevel] === gamePattern[currentLevel]){
        // alert("Correct!");
        // check to see if player has chosen all the colours
        // if all the colours have been input & are correct the game goes to the next level
        if (userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        playSound("wrong")

        $("#level-title").text("Game Over, Press Any Key to Restart");

        $("body").addClass("game-over")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);

        startOver();
    }
};

function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
};