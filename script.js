let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const cells = document.querySelectorAll('.cell');

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        render();
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if ((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)) {
        return true;
    }
    return false;
}

function checkDraw() {
    for (let row of board) {
        for (let cell of row) {
            if (cell === '') {
                return false;
            }
        }
    }
    return true;
}

function render() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i * 3 + j].innerText = board[i][j];
        }
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    render();
}
