var colorCode = document.querySelector("h3.color-code");
var color1 = document.querySelector("input.color1");
var color2 = document.querySelector("input.color2");
var body = document.querySelector("body#gradient");
var button = document.querySelector("button.random");

function showColorCode() {
    colorCode.textContent = "background: " + body.style.background + ";";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    showColorCode();
}

function generateRandomHexColor() {
    var hexColor = "#";
    for (var i = 0; i < 3; i++) {
        var hex = (Math.round(Math.random() * 255)).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        hexColor = hexColor + hex;
    }
    return hexColor;
}

function setRandomGradient() {
    color1.value = generateRandomHexColor();
    color2.value= generateRandomHexColor();
    setGradient();
}

setGradient()

showColorCode()

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient)
