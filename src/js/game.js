export function getRandomInd(index) {
  const indexNew = Math.floor(Math.random() * 16);
  if (index === indexNew) {
    getRandomInd(index);
  }
  return indexNew;
}

export default class Game {
  constructor() {
    this.field = document.querySelector('.field');
    this.index = getRandomInd(16);
    this.cells = [];
  }

  drawTable() {
    for (let i = 0; i < 16; i += 1) {
      const newCell = document.createElement('div');
      newCell.classList.add('cell');
      newCell.dataset.index = i;
      this.field.appendChild(newCell);
    }
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  startGame() {
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').remove();
    }
    const indexNew = getRandomInd(this.index);
    const goblin = document.createElement('div');
    goblin.classList.add('goblin');
    this.cells[indexNew].appendChild(goblin);
  }
}
