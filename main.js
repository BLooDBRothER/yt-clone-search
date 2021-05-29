
function toggleNav() {
    var x = window.matchMedia("(min-width: 1300px)");
    var nav_big = document.getElementById("toggle");
    var maintag = document.getElementById("cate");
    var butpad = document.getElementById("bt-pd");
    var vidsec = document.getElementById("vid-class")
    if (x.matches) {
        if (nav_big.className === "nav-big to-toggle") {
            nav_big.style.width = "0px";
            maintag.style.marginLeft = "0px";
            butpad.style.paddingLeft = "85px";
            vidsec.style.marginLeft = "-15px"
            nav_big.className += "toggle";
        }
        else {
            nav_big.style.width = "250px";
            maintag.style.marginLeft = "250px";
            butpad.style.paddingLeft = "10px";
            vidsec.style.marginLeft = "140px"
            nav_big.className = "nav-big to-toggle";
        }
    }
    else {
        if(maintag.style.marginLeft = "250px"){
            maintag.style.marginLeft = "0px";
            butpad.style.paddingLeft = "85px";
            vidsec.style.marginLeft = "-15px"
        }
        if (nav_big.className === "nav-big to-toggle") {
            nav_big.style.width = "0px";
            nav_big.className += "toggle";
        }
        else {
            nav_big.style.width = "250px";
            nav_big.className = "nav-big to-toggle";
        }
    }

}