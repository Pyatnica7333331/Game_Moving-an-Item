import Game from './game';

const game = new Game();
game.drawTable();
const gameStart = game.startGame.bind(game);
setInterval(gameStart, 1000);
