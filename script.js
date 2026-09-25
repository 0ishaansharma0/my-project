const flexContainer = document.querySelector(".flex-container");

function createGrid(number){

    let squareSize = 700 / number;
    for (let i = 1; i <= number; i++){
        for (let j = 1; j <= number; j++){
            const inner = document.createElement("div");
            inner.style.opacity = "1";
            inner.classList.add("square");
            inner.style.width = `${squareSize}px`;
            inner.style.height = `${squareSize}px`;
            inner.addEventListener("mouseenter", () => {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                inner.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                let opacity = Number(inner.style.opacity);
                opacity -= 0.1;

                inner.style.opacity = opacity;
            })
            flexContainer.appendChild(inner);

        }
    }
}

createGrid(16);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", ()=>{
    const input = prompt("How many squares per side?");
    const number = Number(input);

    if (input === null || number < 1 || number > 100 || !Number.isInteger(number)){
        alert("Enter a whole number between 1 and 100.");
        return;
    }
    flexContainer.innerHTML = "";
    createGrid(number);
});