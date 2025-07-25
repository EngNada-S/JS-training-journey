let submit = document.getElementById("submit");
let resultContainer = document.querySelector(".result");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let startDate = new Date(document.getElementById("start-date").value)
    let endDate = new Date(document.getElementById("end-date").value);

    if (!isNaN(startDate) && !isNaN(endDate)) {
        
        //time between them in milisecond
        let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

        //time between them in days
        let numOfDays = timeDiff / (24 * 60 * 60 * 1000);

        resultContainer.innerHTML = `difference between the two dates is <span class="result-date">${numOfDays}</span> days`;
    }
})