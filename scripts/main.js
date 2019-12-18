//Sums the scores and shows then in the Total field.
function listenInputs(){
    // var playerScore = document.getElementById('r1-p1')
    var p1Score = document.querySelectorAll(".p1");
    var scoreTally = document.querySelectorAll(".scores");
    for (var i = 0; i < scoreTally.length; i++){
        scoreTally[i].onkeyup = function(){
            var p1Total = 0;
            for (var i = 0; i < p1Score.length; i++) {
                p1Total += Number(p1Score[i].value);
            }
            document.getElementById("sum-p1").innerHTML = p1Total;
        }
    }
}

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
    var allRows = ""
    var tableRow = ""
    var rounds = 11
    var players = 7

    for (var i = 0; i < rounds + 1; i++) {
        var currentRound = i + 1
        if (i < 11) {
            tableRow = '<tr><th scope="row">' + currentRound + '</th>'
        } else {
            tableRow += '<tr class="total-score"><th scope="row">Total</th>'
        }
        
        for (var j = 0; j < players; j ++) {
            var currentPlayer = j + 1
            if (i < 11) {
                tableRow += '<td><input type="number" class="form-control p' + currentPlayer + ' scores" id="r' + currentRound + '-p' + currentPlayer + '"></td>'
                if (i == rounds && currentPlayer == players) {
                    tableRow += '</tr>'
                }
            } else {
                tableRow += '<td id="sum-p' + currentPlayer + '">0</td>'
                if (i == 12) {
                    tableRow += '</tr>'
                }
            } 
        }

        allRows += tableRow
    }

    document.getElementById("table-body").innerHTML = allRows
}

listenInputs()
createTableHead()
createTableBody()
