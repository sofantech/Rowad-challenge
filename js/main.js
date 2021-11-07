let toggleBtn=document.querySelector(".togle-icon");
let main_nav=document.querySelector(".main-nav");
if (toggleBtn) {
    toggleBtn.onclick=function () {
        main_nav.classList.toggle("active");
    
        
    }
}
