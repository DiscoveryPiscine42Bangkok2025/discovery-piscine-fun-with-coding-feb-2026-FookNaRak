$(document).ready(function() {
  let size = 200;
  let colors = ["red", "green", "blue"];
  let colorIndex = 0;

  $("#balloon").click(function() {
    size += 10;

    if (size > 420) {
      size = 200;
      colorIndex = 0;
    } else {
      colorIndex = (colorIndex + 1) % colors.length;
    }

    updateBalloon();
  });

  $("#balloon").mouseleave(function() {
    size -= 5;
    if (size < 200) size = 200;

    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    updateBalloon();
  });

  function updateBalloon() {
    $("#balloon").css("width", size + "px");
    $("#balloon").css("height", size + "px");
    $("#balloon").css("background-color", colors[colorIndex]);
  }
});