let typingContainer=document.createElement("div");
typingContainer.className="typing-container";

let text="welcome to js training journey";
let typingText=document.createElement("p");
typingText.className="typing-text";
typingContainer.appendChild(typingText)

let typingCursor=document.createElement("p");
typingCursor.className="typing-cursor";
typingCursor.textContent="|";
typingContainer.appendChild(typingCursor)

document.body.appendChild(typingContainer)

let index=0;
function type(){
    if(index < text.length){
        typingText.textContent += text[index];
        index++;
        setTimeout(type,200);
    }else{
        typingCursor.style.display="none";
    }
}
window.addEventListener("load",type);