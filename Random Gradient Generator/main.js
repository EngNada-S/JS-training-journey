let generate = document.getElementById("generate");
let copy = document.getElementById("copy");
let gradientPreview = document.querySelector(".gradient-preview");
let gradientCode = document.querySelector(".gradient-code");

generate.addEventListener("click", function () {
    let gradient = GenerateGradient();
    gradientPreview.style.backgroundImage = gradient;
    gradientCode.textContent = gradient;
})

copy.addEventListener("click", function () {
    let code = gradientCode.textContent.trim();
    if (code === "") return;
    navigator.clipboard.writeText(code)
        .then(() => {
            showCopyMessage("Gradient copied!");
        })
        .catch(() => {
            showCopyMessage("Failed to copy!");
        });
});

function GenerateGradient() {
    let deg = Math.floor(Math.random() * 361);
    let color1 = RandomColor();
    let color2 = RandomColor();

    return `linear-gradient(${deg}deg,${color1},${color2})`
}

function RandomColor() {
    let hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * hex.length);
        color += hex[randomNum];
    }
    return color;
}

function showCopyMessage(text) {
    let msg = document.querySelector(".copy-message");
    msg.textContent = text;
    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 2000);
}