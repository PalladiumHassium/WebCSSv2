var Button81 = document.getElementsByClassName("openButton")[80];

var dataAttributes81 = {
    element: "Roentgenium",
    image: "111.webp",
    text: "Roentgenium."
};

function openPopupWindow81() {
  var image = dataAttributes81.image;
  var text = dataAttributes81.text;
  var element = dataAttributes81.element;
  var windowName = "PopupWindow";
  var windowFeatures = "width=1000,height=800,scrollbars=yes";
  var imageSize = "width: 200px; height: auto;";

  var popupContent81 = "<div style='display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100%; text-align: center;'>"
                   + "<h1>" + element + "</h1>"
                   + "<img src='" + image + "' style='" + imageSize + "'>"
                   + "<p>" + text + "</p>"
                   + "</div>";

  var popupWindow = window.open("", windowName, windowFeatures);
  if (popupWindow) {
    popupWindow.document.write(popupContent81);
  } else {
    alert("Please allow pop-ups for this website.");
  }
}

Button81.addEventListener("click", openPopupWindow81);