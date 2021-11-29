let radInput = document.getElementById('rad');
let result = document.getElementById('result');

function diameterCalc() {
    let rad = parseFloat(radInput.value);
    result.innerText = 'Diameter of circle: ' + 2 * rad; 
}

function perimeterCalc() {
    let rad = parseFloat(radInput.value);
    result.innerText = 'Perimeter of circle: ' + 2 * Math.PI * rad; 
}

function areaCalc() {
    let rad = parseFloat(radInput.value);
    result.innerText = 'Area of circle: ' + Math.pow(rad, 2) * Math.PI; 
}