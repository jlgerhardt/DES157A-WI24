(function() {
    'use strict'
    console.log('reading JS');

    const startGameBtn = document.getElementById('startgamebtn');
    const gameControl = document.querySelector('#gamecontrol');
    const game1 = document.querySelector('#game1');
    const game2 = document.querySelector('#game2');
    const actionArea = document.querySelector('#actions');
    const p1score = document.querySelector('#p1score');
    const p2score = document.querySelector('#p2score');
    const instructions = document.querySelector("#instructions");
    const chips1 = document.querySelector('#chips1');
    const chips2 = document.querySelector('#chips2');

    // unused sounds
    const cigdrag = new Audio('sounds/cigdrag.mp3');
    const solong = new Audio('sounds/solong.mp3');

    // used sounds
    const dealem = new Audio('sounds/dealem.mp3');
    const gamewin = new Audio('sounds/gamewin.mp3');
    const damncrap = new Audio('sounds/damncrap.mp3');
    const tarnation = new Audio('sounds/tarnation.mp3');
    const bgnoise = new Audio('sounds/bgnoise.mp3');

    window.addEventListener('load', function () {
        bgnoise.play();
        bgnoise.loop=true;
    });


    const gameData = {
        bluedice: [ 'dice/blue1die.png', 'dice/blue2die.png', 'dice/blue3die.png', 'dice/blue4die.png', 'dice/blue5die.png', 'dice/blue6die.png', ],
        reddice: [ 'dice/red1die.png', 'dice/red2die.png', 'dice/red3die.png', 'dice/red4die.png', 'dice/red5die.png', 'dice/red6die.png', ],
        // dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
        // 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['PLAYER 1', 'PLAYER 2'],
        score: [0, 0],
        bet: 10,
        money1: 20,
        money2: 20,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    };

    function startGame() {
        dealem.play();
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<a class="showing" id="quit">&#60; QUIT &#62;</a><a class="showing" id="rules">&#60; RULES &#62;</a>';
        showCurrentScore();
        setUpTurn();
        startBet();
    }

    // function to start the initial bet
    function startBet() {
        gameData.money1 = (gameData.money1 - 5);
        gameData.money2 = (gameData.money2 - 5);
        console.log(gameData.money1, gameData.money2);
        chips1.innerHTML = `<img src="chips/2chipbright.png" width="300" alt="chips1">`;
        chips2.innerHTML = `<img src="chips/2chipbright.png" width="300" alt="chips2">`;
    }


    // My attempt at resetting the game without location.reload

    // function quitGame() {
    //     clearGameAreas();
    //     stopPlaying();
    //     gameControl.innerHTML = 
    //     `<h2>Place your bets</h2>
    //     <section>    
    //         <div id="p1bet">
    //             <p><strong>PLAYER 1</strong></p>
    //             <p><strong>$ 10</strong></p>
    //         </div>
    //         <div id="p2bet">
    //             <p><strong>PLAYER 2</strong></p>
    //             <p><strong>$ 10</strong></p>
    //         </div>
    //     </section>
    //         <a id="startgamebtn">&#60; START &#62;</a>`;
    //     console.log('restart');
    // }

    // function stopPlaying() {
    //     p1score.innerHTML = '';
    //     p2score.innerHTML = '';
    //     actionArea.innerHTML = '';
    //     instructions.innerHTML = '';
    //     gameData.score = [0, 0];
    //     gameData.roll1 = 0;
    //     gameData.roll2 = 0;
    //     gameData.rollSum = 0;
    //     gameData.index = 0;
    // }

    startGameBtn.addEventListener("click", function() {
        startGame();

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
          document.getElementById('quit').className = 'showing'
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
        // if statement to use different colored dice
        if (gameData.index === 0) {
            currentPlayerArea.innerHTML = `<img src="${gameData.reddice[gameData.roll1-1]}"> <img src="${gameData.reddice[gameData.roll2-1]}">`;
        } else {
            currentPlayerArea.innerHTML = `<img src="${gameData.bluedice[gameData.roll1-1]}"> <img src="${gameData.bluedice[gameData.roll2-1]}">`;
        }
        // currentPlayerArea.innerHTML = `<img src="${gameData.reddice[gameData.roll1-1]}"> <img src="${gameData.reddice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        handleDiceOutcome();
    }

    function handleDiceOutcome() {

        if (gameData.rollSum === 2) {
            // Snake eyes
            tarnation.play();
            instructions.innerHTML += `<p>Oh snap! Snake eyes!</p>`;
            gameData.score[gameData.index] = 0;
            showCurrentScore();
            switchPlayer();
            setTimeout(function() {
                setUpTurn();
            }, 2000);  
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // One die is a 1
            damncrap.play();
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
                gameData.score[gameData.index] += 3;
                showCurrentScore();
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

    // code altered to properly show the amount of chips depending on the winner/loser
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            gamewin.play();
            showCurrentScore();
            gameControl.innerHTML = `<h2>${gameData.players[gameData.index]} wins $ ${gameData.bet} with ${gameData.score[gameData.index]} points!</h2>`;
            if ([gameData.index] == 0) {
                gameData.money1 += gameData.bet;
                chips1.innerHTML = `<img src="chips/4chipbright.png" width="300" alt="chips1">`;
            } else {
                gameData.money2 += gameData.bet;
                chips2.innerHTML = `<img src="chips/4chipbright.png" width="300" alt="chips2">`;
            }
            console.log(gameData.money1, gameData.money2);
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

    // code altered to display to different scores
    function showCurrentScore() {
        p1score.innerHTML = `<p class="p1"><strong>${gameData.players[0]}</strong></p><p class="score"><strong>${gameData.score[0]}</strong></p>`;
        p2score.innerHTML = `<p class="p2"><strong>${gameData.players[1]}</strong></p><p class="score"><strong>${gameData.score[1]}</strong></p>`;
    }



})();
