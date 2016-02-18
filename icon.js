var nav_showing = false;
var button = document.getElementById("button");
var nav = document.getElementById("fancy-nav");

function hide_nav() {
    button.setAttribute("class", "button-off");
    nav.setAttribute("class", "nav-off");
    nav_showing = false;
}

function show_nav() {
    button.setAttribute("class", "button-on");
    nav.setAttribute("class", "nav-on");
    nav_showing = true;
}

function setup_button() {
    button.onclick = function() {
        if (nav_showing) {
            hide_nav();
        } else {
            show_nav();
        }
    };    
}

window.onload = function() {
    setup_button();
}; 