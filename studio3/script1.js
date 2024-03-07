(function() {
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game1 = document.querySelector('#game1');
    const game2 = document.querySelector('#game2');
    const actionArea = document.querySelector('#actions');
    const p1score = document.querySelector('#p1score');
    const p2score = document.querySelector('#p2score');
    const instructions = document.querySelector("#instructions");

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['PLAYER 1', 'PLAYER 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<a class="showing" id="quit">&#60; QUIT &#62;</a><a class="showing" id="rules">&#60; RULES &#62;</a>';
        showCurrentScore();
        document.getElementById('quit').addEventListener("click", function() {
            location.reload();
        })
        document.querySelector('#rules').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById('overlay').className = 'showing';
            document.getElementById('rules').className = 'hidden';
            document.getElementById('quit').className = 'hidden';
            });
        document.querySelector('.close').addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById('overlay').className = 'hidden';
            document.getElementById('rules').className = 'showing';
            document.getElementById('quit').className = 'showing';
        });

        setUpTurn();
    });

    document.querySelector('.close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
        });
      
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          document.getElementById('overlay').className = 'hidden';
          document.getElementById('rules').className = 'showing';
          document.getElementById('quit').className = 'showing';
        }
      });

    function setUpTurn() {
        instructions.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<a id="roll">&#60; ROLL &#62;</a>';

        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        const currentPlayerArea = gameData.index === 0 ? game1 : game2;
        currentPlayerArea.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        handleDiceOutcome();
    }

    function handleDiceOutcome() {

        if (gameData.rollSum === 2) {
            // Snake eyes
            instructions.innerHTML += `<p>Oh snap! Snake eyes!</p>`;
            gameData.score[gameData.index] = 0;
            showCurrentScore();
            switchPlayer();
            setTimeout(function() {
                setUpTurn();
            }, 2000);  
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // One die is a 1
            switchPlayer();
            instructions.innerHTML = `<p>You rolled a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(function() {
                // switchPlayer();
                setUpTurn();
            }, 2000); 
        } else {
            // Update score and present options
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<a id="rollagain">&#60; ROLL AGAIN &#62;</a> or <a id="pass">&#60; PASS &#62;</a>';

            document.getElementById('rollagain').addEventListener('click', function() {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function() {
                // passing gives the player +3
                // gameData.score[gameData.index] += 3;
                // showCurrentScore();
                switchPlayer();
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function switchPlayer() {
        gameData.index = gameData.index === 0 ? 1 : 0;
        setTimeout(clearGameAreas, 2000);
    }

    function clearGameAreas() {
        game1.innerHTML = '';
        game2.innerHTML = '';
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            showCurrentScore();
            gameControl.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            instructions.innerHTML = '';
            clearGameAreas(); 
            gameControl.innerHTML += "<a id='startgame'>Play again?</a>";
            document.getElementById('startgame').addEventListener('click', function() {
                location.reload();
            });
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        p1score.innerHTML = `<p class="p1"><strong>${gameData.players[0]}</p><p class="score">${gameData.score[0]}</strong></p>`;
        p2score.innerHTML = `<p class="p2"><strong>${gameData.players[1]}</p><p class="score">${gameData.score[1]}</strong></p>`;
    }

})();
