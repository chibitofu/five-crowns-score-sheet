(function(FiveCrowns) {
    let searchParams = new URLSearchParams(window.location.search)
    var playerCount = 2;

    if (searchParams.has('players')) {
        playerCount = parseInt(searchParams.get('players'));
    }

    FiveCrowns.scoreBoard = function() {
        menuBar();
        createTableHead();
    }

    //found in menu.js
    function menuBar() {
        darkMode();
        newGame();
        clearScores();
    }

    function createListener() {
    //adds an event listener to each score field.
        for (var i = 0; i < playerCount; i++) {
            var currentPlayer = ".p" + (i + 1);
            var playerScores = document.querySelectorAll(currentPlayer);
            for (var j = 0; j < playerScores.length; j++) {
                playerScores[j].addEventListener('input', FiveCrowns.sumScores);
            }
        }
    }

    //sums the scores and shows then in the Total field.
    FiveCrowns.sumScores = function() {
        var currentPlayer = ".p" + (Number(this.name));
        var playerScores = document.querySelectorAll(currentPlayer);
        var scoreSum = 0;
        for (var i = 0; i < playerScores.length; i++) {
            var playerSum = "sum-p" + this.name;
            scoreSum += Number(playerScores[i].value);
        }
        document.getElementById(playerSum).innerHTML = scoreSum;
    }

    function createTableHead(){
        var rowName = '<th scope="col" class="name-col">Name</th>'
        document.getElementById("table-head-row").innerHTML = rowName + createPlayers()
    }

    function createPlayers(){
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

        //add one to rounds for the Total row
        for (var i = 0; i < rounds + 1; i++) {
            var tableRow = "";
            var currentRound = i + 1;
            if (i < rounds) {
                tableRow = '<tr><th scope="row" class="name-col">' + currentRound + '</th>'
            } else {
                tableRow = '<tr class="total-score"><th scope="row">Total</th>'
            }
            for (var j = 0; j < playerCount; j ++) {
                var currentPlayer = j + 1
                if (i < rounds) {
                    tableRow += '<td><input type="number" class="form-control p' + currentPlayer + ' scores input" id="r' + currentRound + '-p' + currentPlayer + '" name="' + currentPlayer + '"></td>'
                    //if it's the last player and round close the row
                    if (i == rounds && currentPlayer == playerCount) {
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

        createListener();
    }

    //loop through Total row to find who has the highest score.
    // function topPlayer() {
    //     var playerScores = document.querySelectorAll(".sums");
    //     for (var i = 0; i < playerScores.length; i++) {
    //         var score = playerScores[i].innerHTML;
    //     }
    // }

})(window.FiveCrowns = window.FiveCrowns || {});

$(document).ready(function() {
    if (window.location.pathname.includes('score-board'))
    FiveCrowns.scoreBoard();
});