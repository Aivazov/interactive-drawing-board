const refs = {
  board: document.querySelector('#board'),
  SQUARES_NUMBER: 800,
  colors: [
    '#3fb8af',
    '#ffbaba',
    '#dad8a7',
    '#3498db',
    '#ff9e9d',
    '#e67e22',
    '#ff7b7b',
  ],
};

for (let i = 0; i < refs.SQUARES_NUMBER; i+=1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  refs.board.append(square);
}

getRandomColor();

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * refs.colors.length);
  return refs.colors[index];
}