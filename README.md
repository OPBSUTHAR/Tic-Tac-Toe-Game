Tic-Tac-Toe Game
Overview
This is a classic two-player Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game features a clean, modern interface with a responsive design, a dynamic status display, a winning line animation, and a draw overlay. Players take turns marking cells with 'X' or 'O' to achieve three in a row, column, or diagonal. The game includes a reset button to start a new game and displays the current player's turn or the game outcome.
Features

Responsive Design: Adapts to various screen sizes, including mobile devices.
Dynamic Status Updates: Shows the current player's turn, win, or draw status.
Winning Line Animation: Draws a colored line (red for X, blue for O) across the winning combination.
Draw Overlay: Displays a semi-transparent overlay when the game ends in a draw.
Interactive UI: Hover effects on cells and the reset button for better user experience.
Simple Reset Functionality: Allows players to start a new game with a single click.

Project Structure

index.html: The main HTML file containing the game structure.
style.css: Stylesheet for the game's appearance, including layout, colors, and animations.
script.js: JavaScript file handling game logic, event listeners, and winning line rendering.

Setup Instructions

Clone or Download: Download the project files or clone the repository to your local machine.
Open the Game:
Open index.html in a web browser (e.g., Chrome, Firefox, or Edge).
No additional dependencies or server setup are required, as the game runs entirely in the browser.


Play: Follow the on-screen instructions to play the game.

How to Play

The game starts with Player X's turn.
Players take turns clicking an empty cell to place their symbol ('X' or 'O').
The goal is to align three of your symbols horizontally, vertically, or diagonally.
If a player wins, a colored line highlights the winning combination, and the status updates.
If all cells are filled without a winner, a "Draw" overlay appears.
Click the "New Game" button to reset the board and start a new game.

Technical Details

HTML: Uses a grid layout for the 3x3 game board and SVG for the winning line.
CSS: Features a gradient background, responsive grid, hover effects, and a draw overlay with transitions.
JavaScript: Manages game state, checks for wins or draws, and dynamically draws the winning line using SVG coordinates.
Responsive Design: Uses media queries to ensure compatibility with smaller screens.

Dependencies

None. The game uses vanilla HTML, CSS, and JavaScript, with no external libraries or frameworks.

Future Enhancements

Add an AI opponent for single-player mode.
Implement a score tracker for multiple rounds.
Add sound effects for cell clicks, wins, and draws.
Allow customization of player symbols or colors.

