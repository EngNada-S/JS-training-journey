let whiteContainer = document.querySelector(".white-keys");
let blackContainer = document.querySelector(".black-keys");

window.onload = function () {
    // Add 14 white keys
    for (let i = 1; i <= 14; i++) {
        let white = document.createElement("div");
        white.className = "white-key";
        let num = i + 10;
        white.onclick = () => new Audio(`audio/key${num}.mp3`).play();
        whiteContainer.appendChild(white);
    }

    // Add 10 black keys with thier positions
    const blackPositions = [1, 2, 4, 5, 6, 8, 9, 11, 12, 13];

    for (let i = 0; i < blackPositions.length; i++) {
        let black = document.createElement("div");
        black.className = "black-key";
        let position = `(3em + 2px) * ${blackPositions[i]} - 0.75em`;
        black.style.left = `calc(${position})`;
        let num = i+1 < 10 ? "0" + (i+1) : (i+1);
        black.onclick = () => new Audio(`audio/key${num}.mp3`).play();
        blackContainer.appendChild(black);
    }
}
