$(document).ready(function() {
    menuBar();
    createListener();
})

//found in menu.js
function menuBar() {
    darkMode();
    newGame();
    clearScores();
}

//adds an event listener to each score field.
function createListener() {
    var playerCount = 7;
    for (var i = 0; i < playerCount; i++) {
        var currentPlayer = ".p" + (i + 1);
        var playerScores = document.querySelectorAll(currentPlayer);
        for (var j = 0; j < playerScores.length; j++) {
            playerScores[j].addEventListener('input', sumScores);
        }
    }
    createTableHead();
}

//sums the scores and shows then in the Total field.
function sumScores() {
    var currentPlayer = ".p" + (Number(this.name));
    var playerScores = document.querySelectorAll(currentPlayer);
    var scoreSum = 0;
    for (var i = 0; i < playerScores.length; i++) {
        var playerSum = "sum-p" + this.name;
        scoreSum += Number(playerScores[i].value);
    }
    document.getElementById(playerSum).innerHTML = scoreSum;
    createPlayers();
}

function createTableHead(){
    var rowName = '<th scope="col" class="name-col">Name</th>'
    document.getElementById("table-head-row").innerHTML = rowName + createPlayers()
}

function createPlayers(){
    var playerCount = 7
    var playerName = ''
    for (var i = 0; i < playerCount; i++){
        playerName += '<th scope="col"><input type="text" class="form-control input" id="player-' + (i + 1) + '"></th>';
    }
    createTableBody();
    return playerName;
}

function createTableBody() {
    var allRows = "";
    var rounds = 11;
    var players = 7;

    //add one to rounds for the Total row
    for (var i = 0; i < rounds + 1; i++) {
        var tableRow = "";
        var currentRound = i + 1;
        if (i < rounds) {
            tableRow = '<tr><th scope="row" class="name-col">' + currentRound + '</th>'
        } else {
            tableRow = '<tr class="total-score"><th scope="row">Total</th>'
        }
        for (var j = 0; j < players; j ++) {
            var currentPlayer = j + 1
            if (i < rounds) {
                tableRow += '<td><input type="number" class="form-control p' + currentPlayer + ' scores input" id="r' + currentRound + '-p' + currentPlayer + '" name="' + currentPlayer + '"></td>'
                //if it's the last player and round close the row
                if (i == rounds && currentPlayer == players) {
                    tableRow += '</tr>'
                }
            } else {
                tableRow += '<td id="sum-p' + currentPlayer + '" class="total-score sums">0</td>'
                //Adds closing table row at end of the table
                if (i == rounds + 1) {
                    tableRow += '</tr>'
                }
            } 
        }
        allRows += tableRow
    }
    document.getElementById("table-body").innerHTML = allRows
}

//loop through Total row to find who has the highest score.
// function topPlayer() {
//     var playerScores = document.querySelectorAll(".sums");
//     for (var i = 0; i < playerScores.length; i++) {
//         var score = playerScores[i].innerHTML;
//     }
// }