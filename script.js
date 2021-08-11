let main = document.getElementById("container");

let refreshMe = document.createElement("button");
refreshMe.innerHTML = "Click here to refresh";
refreshMe.classList.add("buttonRefresh");

document.body.appendChild(refreshMe);
document.body.appendChild(main);

function createGrid() {
    for (let i=0; i<16*16; i++) {
        let grid = document.createElement("div");
        grid.setAttribute("id", "gridStyle");

        grid.addEventListener("mouseover", e => e.target.classList.add("changeColor"))

        main.appendChild(grid);

    }
    
} 





createGrid();