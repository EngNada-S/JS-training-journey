let text=document.getElementById("text");
let counter=document.getElementById("counter");
let warningMsg=document.querySelector(".warning-msg");
let limit=100;

counter.innerHTML=`0/${limit}`;
text.addEventListener("input",function(){
    let textLength=this.value.length;
    counter.innerHTML=`${textLength}/${limit}`;

    if(textLength > limit){
        text.style.border="1px solid #d3321d";
        counter.style.color="#d3321d";
        warningMsg.classList.add("show");
    }else{
        text.style.border="1px solid #ddd";
        counter.style.color="#333";
        warningMsg.classList.remove("show");
    }
})