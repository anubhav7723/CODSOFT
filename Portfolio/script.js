let skill=document.querySelector("#skills");
let skillContent=document.querySelector(".skills-content");

let exp=document.querySelector("#exp");
let expContent=document.querySelector(".exp-content");

let edu=document.querySelector("#edu");
let eduContent=document.querySelector(".edu-content");

skill.addEventListener("click",()=>{
    skillContent.classList.remove("hide");
    expContent.classList.add("hide");
    eduContent.classList.add("hide");
    skillAnimation();
})

exp.addEventListener("click",()=>{
    expContent.classList.remove("hide");
    eduContent.classList.add("hide");
    skillContent.classList.add("hide");
    expAnimation();
})

edu.addEventListener("click",()=>{
    eduContent.classList.remove("hide");
    skillContent.classList.add("hide");
    expContent.classList.add("hide");
    eduAnimation();
})

function skillAnimation(){
    gsap.from(skillContent,{
        opacity:0,
        x:150,
        delay:0.2,
        duration:0.7
    })
}
function expAnimation(){
    gsap.from(expContent,{
        opacity:0,
        x:150,
        delay:0.2,
        duration:0.7
    })
}
function eduAnimation(){
    gsap.from(eduContent,{
        opacity:0,
        x:150,
        delay:0.2,
        duration:0.7
    })
}

