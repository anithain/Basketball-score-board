let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let match = document.getElementById("newMatch")
let teamOne = 0
//homescore
function addone(){
    teamOne+=1
    homeScore.textContent= teamOne
}
function addtwo(){
    teamOne+=2
    homeScore.textContent= teamOne
}
function addthree(){
    teamOne+=3
    homeScore.textContent= teamOne
}

//guestscore
let teamTwo =0
function addOne(){
    teamTwo+=1
    guestScore.textContent= teamTwo
}
function addTwo(){
    teamTwo+=2
    guestScore.textContent= teamTwo
}
function addThree(){
    teamTwo+=3
    guestScore.textContent= teamTwo
}

function newmatch(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    teamOne = 0
    teamTwo = 0
}
