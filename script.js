let main = document.getElementById("container");

let refreshMe = document.createElement("button");
refreshMe.innerHTML = "Set Rows & Columns!";
refreshMe.classList.add("buttonRefresh");

document.body.appendChild(refreshMe);
document.body.appendChild(main);

function createGrid(column, row) {
    for (let i=0; i<column*row; i++) {
        let grid = document.createElement("div");
        main.style.gridTemplateColumns = "repeat(" + column + ", 1fr)";
        main.style.gridTemplateRows = "repeat(" + row + ", 1fr)";
        grid.setAttribute("id", "gridStyle");

        grid.addEventListener("mouseover", e => e.target.classList.add("changeColor"));

        main.appendChild(grid);
    }
} 

createGrid(16, 16);

function userInput() {
    main.innerHTML = "";
    let row = prompt("Enter the amount of rows you would like");
    let column = prompt("Enter the amount of columns you would like");
    

    createGrid(row, column);
}

refreshMe.addEventListener("click", userInput);