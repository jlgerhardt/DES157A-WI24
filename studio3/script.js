(function(){
    'use strict'
    console.log('reading JS');

    // //This gets the current player: 
    // gameData.players[gameData.index]

    // //This gets the first die and the second die: 
    // gameData.dice[gameData.roll1-1]
    // gameData.dice[gameData.roll2-1]

    // //This gets the score of the current player: 
    // gameData.score[gameData.index]

    // //This gets the index, or turn
    // gameData.index

    // //This gets the individual dice values and the added dice value
    // gameData.roll1
    // gameData.roll2
    // gameData.rollSum

    // //This gets the winning threshold
    // gameData.rollSum

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const p1score = document.querySelector('#p1score');
    const p2score = document.querySelector('#p2score');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        })
        setUpTurn();
    })

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){

            throwDice();

        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
            // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += `<p>Oh snap! Snake eyes!</p>`
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }

        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points! </h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            }
            else {
                showCurrentScore();
            }
        }

        function showCurrentScore() {
            p1score.innerHTML = `<p><strong>${gameData.players[0]} has
            ${gameData.score[0]} points! </strong></p>`;
            p2score.innerHTML = `<p><strong>${gameData.players[1]} has
            ${gameData.score[1]} points! </strong></p>`;
        }
    }




})();