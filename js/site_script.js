// Partners Images
var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partner'>";
var closeList = "</li>";

// Create Loop
for (var i = 0; i < 6; i++) {
  fileNames.push("partner" + (i + 1));
  photos.push("<img src='images/partners/" + fileNames[i] + ".png'>");
  image = openList + photos[i] + closeList;
  imageList.push(image);
}
// Display all six images codes stored in the array
//document.getElementById("album").innerHTML = imageList;
document.getElementById("partners").innerHTML = imageList.join(" ");

//To make Partner section responsive
function myFunction() {
  var x = document.getElementById("partners");
  if (x.className === "partner") {
    x.className += " responsive";
  } else {
    x.className = "partner";
  }
}
