let questions = document.querySelectorAll(".question");
let icons = document.querySelectorAll(".question span:last-child");
let answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
    question.addEventListener("click", (e) => {
        let quest = e.currentTarget;
        let icon = quest.querySelector("span:last-child");
        let ans = quest.nextElementSibling;

        if (quest.classList.contains("active")) {
            quest.classList.remove("active");
            icon.textContent = "+";
            ans.classList.remove("show");
        } else {
            questions.forEach(q => q.classList.remove("active"));
            icons.forEach(i => i.textContent = "+");
            answers.forEach(a => a.classList.remove("show"));

            quest.classList.add("active");
            icon.textContent = "-";
            ans.classList.add("show");
        }
    });
});
