//Sums the scores and shows then in the Total field.
function createListener() {
    var playerCount = 7;
    for (var i = 0; i < playerCount; i++) {
        currentPlayer = ".p" + (i + 1);
        var playerScores = document.querySelectorAll(currentPlayer);
        for (var j = 0; j < playerScores.length; j++) {
            playerScores[j].addEventListener('input', sumScores);
        }
    }
}

function sumScores() {
    var currentPlayer = ".p" + (Number(this.name));
    var playerScores = document.querySelectorAll(currentPlayer);
    var scoreSum = 0;
    for (var i = 0; i < playerScores.length; i++) {
        var playerSum = "sum-p" + this.name;
        scoreSum += Number(playerScores[i].value);
        console.log(playerScores[i])
    }
    console.log(scoreSum)
    document.getElementById(playerSum).innerHTML = scoreSum; 
}
// function listenInputs(){
//     var scoreTally = document.querySelectorAll(".scores");
//     for (var i = 0; i < scoreTally.length; i++){
//         var currentPlayer = ".p" + (i + 1);
//         var score = document.querySelectorAll(currentPlayer);
//         console.log(currentPlayer)
//         scoreTally[i].onkeyup = function(){
//             var playerSum = "sum-p" + toString(1 + i);
//             var scoreSum = 0;
//             console.log(playerSum);

            
//             for (var i = 0; i < score.length; i++) {
//                 scoreSum += Number(score[i].value);
//             }
//             document.getElementById("sum-p1").innerHTML = scoreSum;
//         }
//     }
// }

function createTableHead(){
    var rowName = '<th scope="col">Name</th>'
    document.getElementById("table-head-row").innerHTML = rowName + createPlayers()
}

function createPlayers(){
    var playerCount = 7
    var playerName = ''
    for (var i = 0; i < playerCount; i++){
        playerName += '<th scope="col"><input type="text" class="form-control" id="player-' + (i + 1) + '"></th>\n';
    }
    return playerName;
}

function createTableBody() {
    var allRows = "";
    var rounds = 11;
    var players = 7;

    //add one to rounds for the total row
    for (var i = 0; i < rounds + 1; i++) {
        var tableRow = "";
        var currentRound = i + 1;
        if (i < rounds) {
            tableRow = '<tr><th scope="row">' + currentRound + '</th>'
        } else {
            tableRow = '<tr class="total-score"><th scope="row">Total</th>'
        }
        
        for (var j = 0; j < players; j ++) {
            var currentPlayer = j + 1
            if (i < rounds) {
                tableRow += '<td><input type="number" class="form-control p' + currentPlayer + ' scores" id="r' + currentRound + '-p' + currentPlayer + '" name="' + currentPlayer + '"></td>'
                //if it's the last player and round close the row
                if (i == rounds && currentPlayer == players) {
                    tableRow += '</tr>'
                }
            } else {
                tableRow += '<td id="sum-p' + currentPlayer + '">0</td>'
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

createTableHead()
createTableBody()
createListener()