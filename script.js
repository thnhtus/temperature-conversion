let celsius = document.getElementById("celsius");
let fahrenhiet = document.getElementById("fahrenhiet");

function celToFahr() {
    let output = (parseFloat(celsius.value) * 9/5) + 32;
    fahrenhiet.value = parseFloat(output.toFixed(2));
}


function fahrToCel() {
    let output = (parseFloat(fahrenhiet.value) - 32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2));
}