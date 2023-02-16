const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const message = document.querySelector('.message');
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turn = 'X';

function displayMessage(msg) {
    message.textContent = msg;
}

function checkWin(player) {
    return winCombinations.some(combination =>
        combination.every(index =>
            cells[index].classList.contains(player)
        )
    );
}

function handleClick(e) {
    const cell = e.target;
    if (cell.classList.contains('X') || cell.classList.contains('O')) {
        displayMessage('That cell is already taken!');
        return;
    }
    cell.classList.add(turn);
    if (checkWin(turn)) {
        displayMessage(`Player ${turn} wins!`);
        return;
    }
    if (Array.from(cells).every(cell => cell.classList.contains('X') || cell.classList.contains('O'))) {
        displayMessage('It\'s a tie!');
        return;
    }
    turn = turn === 'X' ? 'O' : 'X';
    displayMessage(`It's ${turn}'s turn.`);
}

function reset() {
    cells.forEach(cell => {
        cell.classList.remove('X', 'O');
    });
    displayMessage(`It's ${turn}'s turn.`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
displayMessage(`It's ${turn}'s turn.`);
