function darkMode() {
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

function newGame() {
    var resetButton = document.getElementById("new-game-btn").addEventListener("click", function(){
        var inputFields = document.querySelectorAll(".input");
        var totalRow = document.querySelectorAll(".sums");
        for (var i = 0; i < inputFields.length; i++){
            inputFields[i].value = '';
        }
        for (var i = 0; i < totalRow.length; i++){
            totalRow[i].innerHTML = "0";
        }
    })
}

function clearScores() {
    var clearButton = document.getElementById("clear-scores-btn").addEventListener('click', function() {
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