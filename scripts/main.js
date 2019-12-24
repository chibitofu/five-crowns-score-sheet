var FiveCrowns = (function() {
    var publicScope = {};

    publicScope.startGame = function() {
        getPlayerCount();
        menuBar();
    }
    
    //found in menu.js
    function menuBar() {
        darkMode();
    }
    
    function getPlayerCount() {
         document.getElementById('player-count-button').addEventListener('click', function() {
            var playerCount = document.getElementById('player-count-input').value;
            viewScoreBoard(playerCount);
        })
    }
    
    function viewScoreBoard(playerCount) {
    
        window.location.replace('views/score-board.html?players=' + playerCount);
    }

    return publicScope;
}());

$(document).ready(function() {
    if (window.location.pathname.includes('index')) {
        FiveCrowns.startGame();
    }
})