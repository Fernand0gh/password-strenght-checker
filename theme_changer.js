document.getElementById("change_theme").addEventListener("click", theme_changer);

function setDarkMode(){
    document.body.style.backgroundColor = "rgb(42, 43, 46)"; //set black bg
    document.body.style.color = "white"; //set white font
}

function setLightMode(){
    document.body.style.backgroundColor = "white"; //set white bg
    document.body.style.color = "black"; //set black font
}

function theme_changer(){
    var dark_mode = document.body.style.backgroundColor === "rgb(42, 43, 46)"; //check if dark mode is on
    if(dark_mode){
        setLightMode();
    }
    if(!dark_mode){
        setDarkMode();
    }
}