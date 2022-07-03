var images = [
  "images/heels.jpeg",
  "images/orange.jpeg",
  "images/glowy.jpeg"
  
]
var imageHead = document.getElementById("new");
var i = 0;
setInterval(function() {
    imageHead.style.backgroundImage = "url(" + images[i] + ")";
    i = i + 1;
    if (i == images.length) {
      i =  0;
    }
}, 2000);
