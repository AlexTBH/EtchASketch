const main = document.getElementById("container");

//button to change gridSize
const refreshMe = document.createElement("button");
refreshMe.innerHTML = "Set Rows & Columns!";
refreshMe.classList.add("buttons");

//button to change mouserover color when clicked
const randomRgb = document.createElement("button")
randomRgb.innerHTML = "Random Color!";
randomRgb.classList.add("buttons");
randomRgb.setAttribute("id", "rain");

//button to choose the color black
const blackButton = document.createElement("button");
blackButton.innerHTML = "Black Color!";
blackButton.classList.add("buttons");
blackButton.setAttribute("id", "blackButton");

//button for the erase
const eraser = document.createElement("button");
eraser.innerHTML = "Eraser!";
eraser.classList.add("buttons");

//create a div to append the buttons to
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttonStyle");


//Mouseover color will be black when the page loads on the first time
let currentMode = "black";

//Changing the variable for currentmode on click
randomRgb.onclick = () => setCurrentMode("randomColor");
blackButton.onclick = () => setCurrentMode("black");
eraser.onclick = () => setCurrentMode("eraser");

//adding event listener to the button so the user can change the grid.
refreshMe.addEventListener("click", userInput);

//Hierachy of the dom
document.body.appendChild(buttonsDiv);
buttonsDiv.appendChild(refreshMe);
buttonsDiv.appendChild(blackButton);
buttonsDiv.appendChild(randomRgb);
buttonsDiv.appendChild(eraser);
document.body.appendChild(main);

//function to create the grid
function createGrid(column, row) {
    main.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
    main.style.gridTemplateRows = `repeat(${row}, 1fr)`;

        for (let i=0; i<column*row; i++) {
            let grid = document.createElement("div");
            grid.classList.add("gridStyle");
            grid.addEventListener("mouseover", colorChange);

            main.appendChild(grid);
    }
} 

//function to change the variable on button click.
function setCurrentMode(mode) {
    currentMode = mode;
}

//changing color depending on what the currentmode is
function colorChange(e) {
    if (currentMode === 'randomColor') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === "black") {
        e.target.style.backgroundColor = "black";
    } else if (currentMode === "eraser") {
        e.target.style.backgroundColor = "white";
    }
}

//function to let the user change the current grid
function userInput() {
    main.innerHTML = "";
    let row = prompt("Enter the amount of rows you would like");
    let column = prompt("Enter the amount of columns you would like");
    
    createGrid(column, row);
}


createGrid(16, 16);
