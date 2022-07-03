//new
var images = [
    "images/myellow.jpeg",
  "images/glowy.jpeg",
  "images/mredjs.jpeg",
  "images/",
  "images/",
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


// //women
// var images = [
//     "images/heels.jpeg",
//     "images/orange.jpeg",
//     "images/belt.jpeg",
//     "images/ pinky.jpeg",
//     "images/girshoe.jpeg"
//   ]
//   var imageHead = document.getElementById("women");
//   var i = 0;
//   setInterval(function() {
//       imageHead.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
//   }, 2000);

//   //men
//   var images = [
//     "images/puma.jpeg",
//     "images/",
//     "images/",
//     "images/hats.jpeg"
    
//   ]
//   var imageHead = document.getElementById("men");
//   var i = 0;
//   setInterval(function() {
//       imageHead.style.backgroundImage = "url(" + images[i] + ")";
//       i = i + 1;
//       if (i == images.length) {
//         i =  0;
//       }
//   }, 2000);
  
  
