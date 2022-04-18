function start(){
    console.log("start() function started.");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    
   index = 0;
   
   //Update display is yellow where on his it was blue, that may be our issue.
    timer = setInterval(updateDisplay, time_interval);

    document.getElementById("startButton").disabled = true;
    console.log("start button disabled");
    document.getElementById("stopButton").disabled = false;
    console.log("stop button enabled");
}

function stop(){
    console.log("stop() function started.");

    clearInterval(timer);

    document.getElementById("stopButton").disabled = true;
    console.log("stop button disabled");
    document.getElementById("startButton").disabled = false;
    console.log("stop button enabled");
}




// we need a timer to count down from 50 to zero by 5
//he said in class any way would be acceptable for full points so we will be trying a while loop.

var currTime = 50;
var doomsDay = 5000;
var i = 5;



function blastOffTimer() {
    console.log("blastOffTimer() started");

    var currTime = 50;
    var doomsDay = 5000;
    var i = 5;

    document.getElementById("blastOffText").innerHTML = currTime;
    console.log(currTime);
    currTime = currTime - i;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;


    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!!";
        currTime = currTime - i;
    }, doomsDay);
    doomsDay = doomsDay + 5000;

}


function playCraps() {
    // all within these brackets are the function.
    console.log("playCraps() started...");
    // just a good sign the funciton is running
    var die1 = (6 * Math.random()) + 1;
    // the +1 is there due to usiing floor method of rounding to make the 0 value go away and give all values 0 to 6
    var roundDie1 = Math.floor(die1);
    // using the floor method to round this one which rounds down
    console.log("The die1 rounded number is: " + roundDie1);
    // text that is stored within console for rounded die 1

    document.getElementById("die1Res").innerHTML = "Results for die 1: " + roundDie1;
    // this writes visually on site the what the rounded result of die 1 is.

    var die2 = 6 * Math.random();
    // since we are using the ceil method of rounding the code is fine being more simple to get all values 1 to 6
    var roundDie2 = Math.ceil(die2);
    // the ceil value is used to round up
    console.log("The die2 rounded number is: " + roundDie2);
    // text stored within the console for rounded value of die 2

    document.getElementById("die2Res").innerHTML = "Results for die 2: " + roundDie2;
    //this writes visually on the site for what the rounded result of die 2 is.
    var sum = roundDie1 + roundDie2
    // this adds the two dice together for a new varible
    console.log("Sum of die is" + sum)
    // this stores the sum within the console.

    document.getElementById("sumRes").innerHTML = "Sum of the two dice:" + sum;
    // this writes the sum varible visually onto the site

    if (sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps Results: Craps you lose!";
        // this if statement varifies a loss and writes onto the site visable as such.


    }
    else if (roundDie1 == roundDie2 && roundDie1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "Doubles, you win!!!";
        // This else if varifies a win by making sure it is a doubles of an even number then writes so visually on the site.
    }


    else {
        document.getElementById("crapsRes").innerHTML = "Craps Results: Tie, please try again.";
        // This varifies a tie and writes as much onto the site visually.
    }
}

function betterCtndown() {
    // this is a loop to make the countown better and more consise. 
    console.log("Better countdown has started.")
    currTime = 50
    for (var i = 0; i < 11; i = i + 1) {
        // the 2 lines above are just setting up varibles for the loop.
        console.log(i);
        setTimeout(function () {
            document.getElementById("blastOffText").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("blastOffText").innerHTML = "Blastoff!!!"
                // if currTime is 0, then it will say blastoff.
            }
            else if (currTime < 25) {
                document.getElementById("blastOffText").innerHTML = "Warning Less than 1/2 way to launch, time left= " + currTime;
                // Abouve changes the text to include the time warning to launch. 



            }
            currTime = currTime - 5;
            // above subtracts time for each instance of the timer.


        }, 5000 * i);
        // Above sets all the timers at the same time but with the power of multiplication causes them to go off 5 seconds apart.

    }


}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("lavender-town-music.mp3")
    mySound.play();
}

function sound(srcFile){
    this.sound= document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}