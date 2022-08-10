
// Start Variables
var header = document.getElementById("loop");
var btns = header.getElementsByClassName("btn");
var arrow = document.getElementById("button");
var logo = document.getElementById("logo");
var my_kasper = document.getElementById("kasper");
var home = document.getElementById("hm");
// End Variables


// Start Functions
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }


logo.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");    
        home.classList.add("active");
    }
}
arrow.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");    
        home.classList.add("active");
    }
}

my_kasper.onclick = function () {
    for (let i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");    
        home.classList.add("active");
    }
}


window.onscroll = function () {
    console.log(this.scrollY);

    if (this.scrollY >= 400) {
        arrow.style.opacity = '1';
    }
    else {
        arrow.style.opacity = '0';
        }
};
// End Functions