function myFunction() {
    var x = document.getElementById("nav1");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}
var i = 0;
var txt = `Hey there! Welcome to my portfolio`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

let my = () => {
  if (i < txt.length) {
    document.getElementById("my").innerHTML += txt.charAt(i);
    i++;
  }
  setTimeout(my, speed);
}
my()