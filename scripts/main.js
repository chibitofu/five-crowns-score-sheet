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
    var tableBody = document.getElementById("table-body")
    var rounds = 11
    for (var i = 0; i < rounds; i ++) {
        var tableRow = '<th scope="row">1</th>'

    }
    // <tr>
    //     <!-- Round 1 -->
    //     <th scope="row">1</th>
    //     <td><input type="number" class="form-control p1 scores" id="r1-p1"></td>
    //     <td><input type="number" class="form-control" id="r1-p2"></td>
    // </tr>
}

listenInputs()
createTableHead()

