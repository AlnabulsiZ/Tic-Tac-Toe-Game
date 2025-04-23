const cells = document.querySelectorAll('.cell');
const current = document.querySelector('.current-turn');
const overlayWindow = document.querySelector('#overlay');
const message = document.querySelector('.content');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const draw = document.querySelector('.draw');
const newRound = document.querySelector('.newRound');
const newGame = document.querySelector('.newGame');
const reset = document.querySelector('.reset');

let turn = true;
let player1 = {
    symbol: '<i id="x" class="material-icons" style="font-size: 55px;">close</i>',
    played: [],
    score: 0,
    draw: 0 /* for each player */
};

let player2 = {
    symbol: '<i class="material-icons" style="font-size: 48px;">radio_button_unchecked</i>',
    played: [],
    score: 0
};

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', () => {
        if (cells[i].innerHTML !== "") return; 

        if (turn) {
            addSymbol(player1, i);
            turn = false;
        } else if(!turn){
            addSymbol(player2, i);
            turn = true;
        }
        
        if (turn) {
            current.innerHTML = 'Turn <i id="x" class="material-icons">close</i>';
        } else {
            current.innerHTML = 'Turn <i class="material-icons">radio_button_unchecked</i>';
        }
        
        
    });
}
function addSymbol(player, i) {
    cells[i].innerHTML = player.symbol;
    player.played.push(i); 
    check=checkWin(player);

    if (check && player == player1) { 
        overlayWindow.style.display = 'flex'; 
        message.innerHTML = '<h4>Player1 (X) is the winner.</h4>';
        score1.innerHTML = ++player1.score;
    } else if (check && player == player2) {
        overlayWindow.style.display = 'flex'; 
        message.innerHTML = '<h4>Player2 (O) is the winner.</h4>';
        score2.innerHTML = ++player2.score;
    }
    else if (!check && player1.played.length + player2.played.length === 9) {
        overlayWindow.style.display = 'flex'; 
        message.innerHTML = '<h4>It\'s a Draw!</h4>';
        draw.innerHTML =  ++player1.draw;
    }
    newRound.addEventListener('click',()=>{
        resetRoundGame();
    });
    newGame.addEventListener('click',()=>{
        resetNewGame();
    });
    reset.addEventListener('click',()=>{
        resetRoundGame();
    });

}

function checkWin(player) {
    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winning) {
        if (
            player.played.includes(combo[0]) &&
            player.played.includes(combo[1]) &&
            player.played.includes(combo[2])
        ) {
            return true;
        }
    }
    return false;
}

function resetRoundGame() {
    
    player1.played = [];
    player2.played = [];
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    turn = true; 
    overlayWindow.style.display = 'none'; 
}

function resetNewGame() {
    
    player1.played = [];
    player2.played = [];
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    turn = true; 
    overlayWindow.style.display = 'none'; 
    player1.score=0;
    player2.score=0;
    player1.draw=0;
    score1.innerHTML = player1.score;
    score2.innerHTML = player2.score;
    draw.innerHTML = player1.draw;

    
}
