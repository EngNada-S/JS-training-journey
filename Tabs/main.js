let tabsList=document.querySelectorAll(".tabs-list li");
let tabsContent=document.querySelectorAll(".tabs-content div");

tabsList.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        tabsList.forEach(li=> li.classList.remove("active"));
        tabsContent.forEach(content => content.style.display="none");

        e.target.classList.add("active");
        document.querySelector(e.target.dataset.content).style.display="block";
    })
})