
let homeTeam = document.getElementById('score1');
let guestTeam = document.getElementById('score2');
let currentStatus = document.getElementById('currentStatus');
let winningArrow = document.getElementById('winningArrow');

let homeScore = 0;
let guestScore = 0;
let scoreName;
const maxScore = 10;
//Home team

function homePlusOne() {
    homeScore = homeScore + 1;
    homeTeam.textContent = homeScore;
    console.log(homeScore);
    scoreName = "home"; 
    checkScore(scoreName);
    whoIsWinning();
//  console.log("plus one: " + homeScore);
} 

function homePlusTwo() {
    homeScore = homeScore + 2;
    homeTeam.textContent = homeScore;
    scoreName = "home";
    checkScore(scoreName);
    whoIsWinning();
//  console.log("plus two: " + homeScore);
}

function homePlusTree() {
    homeScore = homeScore + 3;
    homeTeam.textContent = homeScore;
    scoreName = "home";
    checkScore(scoreName);
    whoIsWinning();
//  console.log("plus tree: " + homeScore);
}

//Away teame

function guestPlusOne() {
    guestScore = guestScore + 1;
    guestTeam.textContent = guestScore;
    console.log(homeScore);
    scoreName = "guest";
    checkScore(scoreName);
    whoIsWinning();
//  console.log("plus one: " + guestScore);
} 

function guestPlusTwo() {
    guestScore = guestScore + 2;
    guestTeam.textContent = guestScore;
    scoreName = "guest";
    checkScore(scoreName);
    whoIsWinning();
//  console.log("plus two: " + guestScore);
}

function guestPlusTree() {
    guestScore = guestScore + 3;
    guestTeam.textContent = guestScore;
    scoreName = "guest";
    checkScore(scoreName);
    whoIsWinning();
 // console.log("plus tree: " + guestScore);
}

//Arrow & winner function
function whoIsWinning() {
    if(homeScore > guestScore) {
        currentStatus.textContent = "Home is winning";
        currentStatus.style.color = "white";
        winningArrow.style.cssText = "transform:rotate(0.50turn);transition:250ms ease-in;";
        whoWon();
        homeTeam.style.color = "Green";
        guestScore.style.color = "#F94F6D";
    } if (guestScore > homeScore) {
        currentStatus.textContent = "Guest is winning";
        currentStatus.style.color = "white";
        winningArrow.style.cssText = "transform:rotate(0turn);transition:250ms ease-in;";
        guestTeam.style.color = "Green";
        homeTeam.style.color = "#F94F6D";
        whoWon();
    } else {
        currentStatus.textContent = "Draw again";
        winningArrow.style.cssText = "transform:rotate(-0.25turn);transition:250ms ease-in;";
        homeTeam.style.color = "#F94F6D";
        guestTeam.style.color = "#F94F6D";
    }

}

function whoWon() {
    if (homeScore >= maxScore) {
        currentStatus.textContent = "Home won!"
        document.querySelectorAll('button.aButton').forEach(elem => {
            elem.disabled = true;
            elem.style.cssText = "background-color: #7788A7; color: white;"
        })
    }
    if (guestScore >= maxScore) {
        currentStatus.textContent = "Guest won!"
        document.querySelectorAll('button.aButton').forEach(elem => {
            elem.disabled = true;
            elem.style.cssText = "background-color: #7788A7; color: white;"
        })
       // let btnn = document.createElement("button");
       // btnn.innerHTML = "reset";
       // let hh = document.querySelector(".sectionWinner");
       // hh.appendChild(btnn);
       // btnn.setAttribute("id", "resetBtn");
       // document.getElementById('resetBtn').onclick = function () {
       //     resetAll();
       // }
    }

}
document.getElementById('resetBtn');

function resetAll() {
homeScore = 0;
guestScore = 0;
homeTeam.textContent = 0;
guestTeam.textContent = 0;
currentStatus.textContent = "Currently a draw";
winningArrow.style.cssText = "transform:rotate(-0.25turn);transition:250ms ease-in;";
document.querySelectorAll('button.aButton').forEach(elem => {
    elem.disabled = false;
    elem.style.cssText = "background-color: #19244D; color: #7788A7;"})
}


//Promts for Home 
const positivePromptsHomeTeam = 
["Hometeam scored!", 
"Shit the Home team is on fire", 
"Howlly coow Home team", 
"wow.. Home team", 
"Naiceee goal!", 
"Oh ma gawd.. Amazing throw", 
"Well played Home team"];

function throwPositivePromptForHomeTeam() {
    let random = Math.floor(Math.random() * positivePromptsHomeTeam.length);
    hello = (positivePromptsHomeTeam[random]); 
    document.getElementById('commentator').textContent = hello;
}

//Prompts for Guest 
const positivePromptsGuestTeam = 
["Guest team scored!", 
"Guest team is on fire", 
"Go guest, go guest!", 
"Guest team have really practised on those ball throows", 
"Nice throw", 
"So saxy throw Home team!", 
"GG home team!"];

function throwPositivePromptForGuestTeam() {
    let random = Math.floor(Math.random() * positivePromptsGuestTeam.length);
    hello = (positivePromptsGuestTeam[random]);
    document.getElementById('commentator').textContent = hello;
}

//Prompts for Drawft
const promptsDraft = 
["Oh damn it´s a draft!", 
"Draft again", 
"Its close between home and guest!",  
"Its fu*king draft again ", 
"Draft..its a draft!", 
"OH DRAFT"];

function throwDraftPrompts() {
    let random = Math.floor(Math.random() * promptsDraft.length);
    hello = (promptsDraft[random]); 
    document.getElementById('commentator').textContent = hello;
}

//PromptChecker 
function checkScore(scoreName) {
    if (homeScore == guestScore) {
        throwDraftPrompts();
    }
    else if(scoreName == "home" ) {
        throwPositivePromptForHomeTeam();
    }
    else if (scoreName == 'guest') {
        throwPositivePromptForGuestTeam();
    }
}

//Guestions to ask 
const guestion = 
["What’s the first thing you’d do if you woke up one day and you were the opposite sex?", 
"What sexual activity do you consider totally off limits?", 
"Of the people in this room, who do you consider the sluttiest?",  
"What’s the most embarrassing thing your parents have caught you doing?", 
"What’s the biggest romantic fail you’ve ever experienced?", 
"What’s the weirdest thing you’ve done when you were alone?",
"Of the people in this room, who would you feel most comfortable with naked?",
"What’s the biggest secret you’ve ever kept from your parents?",
" What’s the biggest lie you’ve ever told without getting caught?",
"Of the people in this room, who do you most want to switch lives with and why?",
"What do you like most and least about your own appearance?",
"What do you like most and least about your personality?",
"When’s the last time you were flat-out rejected and how did you handle it?",
"What’s your biggest sexual fear?",
"What would you change about your life if you could?",
"What’s the most flirtatious thing you’ve ever done?",
"if you could make one wish right this second, what would it be?",
"What three adjectives best describe your vagina/penis?",
"What’s the one thing you’d do in bed with someone if you had no inhibitions whatsoever?",
"How many people can someone sleep with before you secretly judge them for their “number”?",
"At what age did you first inspect your private parts and how did you feel about them?",
"What did you think about the first (or last) time you masturbated?",
"What would you guess your parents’ favorite sexual position is, and why?",
"What’s the most surprising thing that’s ever turned you on?",
"What’s the grossest thing that’s come out of your body?",
"What’s the most disgusting thing you’ve ever done?",
"What’s the most disturbing fantasy or dream you’ve ever had?",
"What’s the cruelest thing you’ve ever done to a friend?",
"How do you really feel about anal sex?",
"What’s the biggest mistake you’ve ever made in bed?",
"Do you ever catch yourself thinking about doing it with someone of the same sex?",
"How far would you go to land the guy or girl of your dreams?"];

function throwGuestion() {
    let random = Math.floor(Math.random() * guestion.length);
    hello = (guestion[random]); 
    document.getElementById('guestion').textContent = hello;
}
// Fläskfile oscar
// Filé minjong 
// Gösfile 
// Stekt lax
// Öppenmeny - Barn