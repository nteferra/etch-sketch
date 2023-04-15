let color = 'black';

function createGrid(x) {
    let board = document.querySelector('.board');
    let boxes = board.querySelectorAll('div');
    boxes.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${x} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${x} , 1fr)`;
    for (let i = 0; i < (x*x); i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        } );
        square.className = 'squares';
        board.insertAdjacentElement("beforeend", square);
    }


}

createGrid(16)

function changeSize(input) {
    input = document.getElementById('input').value;
    if (input >= 2 && input <= 100) {
        createGrid(input)
    } else {
        alert("Please enter a number between 2-100")
    };
    console.log(input)
}

function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {

}