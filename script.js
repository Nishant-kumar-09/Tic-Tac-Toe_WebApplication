let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const gameBoardDivs = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function checkWinner() {
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} wins!`;
            return;
        }
    }
    if (!gameBoard.includes('')) {
        gameActive = false;
        message.innerText = "It's a tie!";
    }
}

function makeMove(index) {
    if (!gameActive || gameBoard[index] !== '') return;

    gameBoard[index] = currentPlayer;
    gameBoardDivs[index].innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    message.innerText = '';
    gameBoardDivs.forEach(cell => cell.innerText = '');
}
