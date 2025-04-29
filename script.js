// Game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let winningCombo = null;

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// DOM elements
const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const winLineSvg = document.getElementById('win-line');
const drawOverlay = document.getElementById('draw-overlay');

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    // Check if cell is already filled or game is over
    if (gameBoard[index] !== '' || !gameActive) return;

    // Update game state
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('filled', currentPlayer.toLowerCase());

    // Check game status
    if (checkWin()) {
        statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        drawWinningLine();
        return;
    }

    if (checkTie()) {
        statusDisplay.textContent = "It's a Draw!";
        gameActive = false;
        drawOverlay.classList.add('show');
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

// Check for win and store winning combination
function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (combination.every(index => gameBoard[index] === currentPlayer)) {
            winningCombo = combination;
            return true;
        }
    }
    return false;
}

// Check for tie
function checkTie() {
    return gameBoard.every(cell => cell !== '');
}

// Draw winning line
function drawWinningLine() {
    if (!winningCombo) return;

    // Calculate coordinates for the line based on cell positions
    const startCell = cells[winningCombo[0]];
    const endCell = cells[winningCombo[2]];
    
    // Get bounding rectangles
    const boardRect = document.querySelector('.board').getBoundingClientRect();
    const startRect = startCell.getBoundingClientRect();
    const endRect = endCell.getBoundingClientRect();

    // Calculate relative coordinates within the board
    const x1 = ((startRect.left + startRect.width / 2) - boardRect.left) / boardRect.width * 100;
    const y1 = ((startRect.top + startRect.height / 2) - boardRect.top) / boardRect.height * 100;
    const x2 = ((endRect.left + endRect.width / 2) - boardRect.left) / boardRect.width * 100;
    const y2 = ((endRect.top + endRect.height / 2) - boardRect.top) / boardRect.height * 100;

    // Create SVG line
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${x1}%`);
    line.setAttribute('y1', `${y1}%`);
    line.setAttribute('x2', `${x2}%`);
    line.setAttribute('y2', `${y2}%`);
    line.setAttribute('stroke', currentPlayer === 'X' ? '#ff4d4d' : '#4d79ff');
    line.setAttribute('stroke-width', '8');
    line.setAttribute('stroke-linecap', 'round');

    // Clear previous line and append new one
    winLineSvg.innerHTML = '';
    winLineSvg.appendChild(line);
}

// Reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    winningCombo = null;
    statusDisplay.textContent = "Player X's Turn";
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('filled', 'x', 'o');
    });

    // Clear winning line and draw overlay
    winLineSvg.innerHTML = '';
    drawOverlay.classList.remove('show');
}