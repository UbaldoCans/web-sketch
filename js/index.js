

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all')
    document.getElementById("show-menu").classList.toggle('show-lateral')

}

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);

        window.scrollTo(0, currentScroll - (currentScroll / 10));
    } 
}

buttonUp = document.getElementById("button-Up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 100){
        
    }
}