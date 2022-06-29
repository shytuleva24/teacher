// $(function(){
//     const $menu = $('#menu')
//     $('#iconMenu').on('click', function(event){
//         $menu.toggle()
//     }) 
// }) 

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

hamburger.onclick = function () {
    menu.classList.toggle ("active-burger");
    hamburger.classList.toggle ("hamburger-open");
}



