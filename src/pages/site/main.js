import '../../pages/site/site';

window.addEventListener("scroll",(e)=>{
    document.querySelector(".background").style.backgroundSize = `${window.scrollY * 1.8 + 1600}px`
    document.querySelector("#H1").style.opacity = `${(-window.scrollY + 300) * .004}`
})