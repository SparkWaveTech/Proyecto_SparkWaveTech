const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () =>{
    menu.classList.add("visible");
})
close.addEventListener("click", () =>{
    menu.classList.remove("visible");
})