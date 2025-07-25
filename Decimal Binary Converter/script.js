let decimal = document.getElementById("decimal");
let binary = document.getElementById("binary");

decimal.addEventListener("input", (e) => {
    let decimalValue = e.currentTarget.value;
    if (e.currentTarget.value >= 0) {
        let binaryValue = parseInt(decimalValue).toString(2);
        binary.value = binaryValue;
    } else if (decimalValue == ""){
        binary.value="";
    }
})
binary.addEventListener("input", (e) => {
    let binaryValue = e.currentTarget.value;
    if (/^[01]+$/.test(binaryValue)) {
        let decimalValue = parseInt(binaryValue, 2);
        decimal.value = decimalValue;
    }else if(binaryValue==""){
        decimal.value="";
    }
})