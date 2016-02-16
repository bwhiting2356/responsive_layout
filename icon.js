var nav_showing = true;

function setup_button() {
    var button = document.getElementById("button");
    var nav = document.getElementById("fancy-nav");
    button.onclick = function() {
        if (nav_showing) {
            this.setAttribute("class", "button-off");
            nav.setAttribute("class", "nav-off");
            nav_showing = false;
        } else {
            this.setAttribute("class", "button-on");
            nav.setAttribute("class", "nav-on");
            nav_showing = true;
        }
    };      
}

window.onload = function() {
    setup_button();
}; 