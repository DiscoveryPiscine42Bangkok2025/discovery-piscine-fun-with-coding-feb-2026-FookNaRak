$(document).ready(function() {
    $("#changeBtn").click(function() {
        const randomColor = getRandomColor();
        $("body").css("background-color", randomColor);
    });
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}