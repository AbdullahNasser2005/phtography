let menuBtn = document.getElementById("menubtn")
let navbar = document.getElementById("navbar")


menuBtn.addEventListener("click", ()=>{
   
    navbar.classList.toggle("shrink")
})


AOS.init();
