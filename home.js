let button=document.querySelectorAll("button");
let body=document.querySelector("body");
let h2=document.querySelector(".c3");

button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let color=btn.innerHTML;
        h2.innerText=`Background Color is ${color}`;
        body.style.backgroundColor=color;
    })
})
