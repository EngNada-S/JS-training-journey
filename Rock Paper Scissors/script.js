const gameContainer = document.querySelector(".container"),
    userImage = document.querySelector(".user-image img"),
    compImage = document.querySelector(".comp-image img"),
    result = document.querySelector(".result"),
    gameOptions = document.querySelectorAll(".option");

gameOptions.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userImage.src="images/paper.png";
        compImage.src="images/paper.png";
        result.textContent="Loading...";

        gameOptions.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // user option
            let currentOption = e.target;
            let currentImg = currentOption.querySelector("img").src;
            userImage.src = currentImg;

            // computer option
            let compOptions = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            let randomNumber = Math.floor(Math.random() * gameOptions.length);
            compImage.src = compOptions[randomNumber];

            //game result
            let userValue = ["R", "P", "S"][index];
            let compValue = ["R", "P", "S"][randomNumber];
            let outcomes = {
                RR: "draw",
                RP: "User",
                RS: "Comp",
                PR: "User",
                PP: "draw",
                PS: "Comp",
                SR: "Comp",
                SP: "User",
                SS: "draw",
            };
            let outcomeValue = outcomes[`${userValue}${compValue}`];
            result.textContent = userValue == compValue ? "Match Draw" : outcomeValue + " won!!";
        }, 2000)
    })
})