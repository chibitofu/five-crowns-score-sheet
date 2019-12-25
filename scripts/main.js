var FiveCrowns = (function() {
    var publicScope = {};

    publicScope.startGame = function() {
        getPlayerCount();
        menuBar();
    }
    
    //found in menu.js
    function menuBar() {
        FiveCrowns.darkMode();
    }

    publicScope.darkMode = function() {
        var darkToggle = document.getElementById('dark-mode');
        //need to use jQuery because of bootstrap toggle.
        $('#dark-mode').change(function() {
            if (darkToggle.checked == true) {
                $('body').addClass('dark');
            } else {
                $('body').removeClass('dark');
            }
        })
    }
    
    publicScope.newGame = function() {
        var inputFields = document.querySelectorAll(".input");
        var totalRow = document.querySelectorAll(".sums");
        for (var i = 0; i < inputFields.length; i++){
            inputFields[i].value = '';
        }
        for (var i = 0; i < totalRow.length; i++){
            totalRow[i].innerHTML = "0";
        }

        window.location.href = '../index.html';
    }
    
    publicScope.clearScores = function() {
        document.getElementById("clear-scores-btn").addEventListener('click', function() {
            var scores = document.querySelectorAll(".scores");
            var totalRow = document.querySelectorAll(".sums");
            for (var i = 0; i < scores.length; i++){
                scores[i].value = '';
            }
            for (var i = 0; i < totalRow.length; i++){
                totalRow[i].innerHTML = "0";
            }
        })
    }

    function getPlayerCount() {
         document.getElementById('player-count-button').addEventListener('click', function() {
            var playerCount = document.getElementById('player-count-input').value;

            //just in case the user finds a way to break the input box.
            if (playerCount < 2){
                window.alert("Minimum amount of players is 2. Please enter a valid amount of players.")
            } else if(playerCount > 7) {
                window.alert("Maximum amount of players is 7. Please enter a valid amount of players.")
            } else {
                viewScoreBoard(playerCount);
            }
        })
    }
    
    function viewScoreBoard(playerCount) {
        window.location.href = 'views/score-board.html?players=' + playerCount;
    }

    return publicScope;
}());

$(document).ready(function() {
    if (window.location.pathname.includes('index')) {
        FiveCrowns.startGame();
    }
})