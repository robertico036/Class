var next = 2;

function deal() {
   var image = document.getElementById("card");
   image.src = "cards/" + next++ +"D.jpg";
   image.style.width = "300px";
}

