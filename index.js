const button = document.getElementById('btn');
const con = document.querySelector('.container');
const menu = document.getElementById('imageMenu');

button.addEventListener('click', () => {
    con.classList.toggle('active');
    if(menu.src.endsWith("menuImage/right-arrow.png")){
        menu.src = "menuImage/arrow-down-sign-to-navigate.png"
    }
    else{
        menu.src = "menuImage/right-arrow.png"
    }
});