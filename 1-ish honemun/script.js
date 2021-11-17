window.addEventListener("DOMContentLoaded",()=>{
    const loader=document.querySelector(".loader");
    setTimeout(function(){
        loader.style.opacity="0";
        setTimeout(function(){
loader.style.displey="none";
        },2000)
    },2000)
})
