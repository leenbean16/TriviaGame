    let count = 0;

window.onload = function() {

    // when you get it right

    let rightAnswer = ["#answer3", "#answer8", "#answer12", "#answer13", "#answer18", "#answer23"]
    let result = ["#result1", "#result2", "#result3", "#result4", "#result5", "#result6"]
    for (let i = 0; i < rightAnswer.length; i++) {
        $(rightAnswer[i]).on('click', function() {
                $(result[i]).html("You got it right!");
            count++;
            console.log(count);
    $("#score").text(count)
    if(count > 5){
        $("#score").html("Winner");
        }
        });
    };
    console.log('Answer Key = ' + rightAnswer);
}
// when you get it wrong

let arraySection = 0;
let wrongAnswer = ["#answer1", "#answer2", "#answer4", "#answer5", "#answer6", "#answer7", "#answer9", "#answer10", "#answer11", "#answer14", "#answer15", "#answer16", "#answer17", "#answer19", "#answer20", "#answer21", "#answer22", "#answer24"]
let badPick = ["#badPick1", "#badPick2", "#badPick3", "#badPick4", "#badPick5", "#badPick6"]
for (let i = 0; i < badPick.length; i++) {
    for (let count = 0; count < 3; count++) {
        $(wrongAnswer[arraySection]).on('click', function() {
            $(badPick[i]).html("You got it wrong!");
        });
        console.log("Answer is " + wrongAnswer[arraySection] + " " + badPick[i]);

        arraySection++;
    };
    console.log('The wrong answers are = ' + wrongAnswer + ' ');
}

// timer
let number = 50;
let intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number -= 1;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("You're out of time!");
    }
}

function stop() {
    clearInterval(intervalId);
}
run();

// timer end
