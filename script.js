let main = document.getElementById("container");


function createGrid() {
    for (let i=0; i<16*16; i++) {
        let grid = document.createElement("div");
        grid.setAttribute("id", "gridStyle");

        main.appendChild(grid);
    }
    
} 



createGrid();