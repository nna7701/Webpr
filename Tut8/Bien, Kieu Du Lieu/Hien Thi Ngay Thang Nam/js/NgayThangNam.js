let yearInput = document.getElementById('year');
let monthInput = document.getElementById('month');
let dateInput = document.getElementById('date');
let result = document.getElementById('result');

function display(){
    let year = yearInput.value;
    let month = monthInput.value;
    let date = dateInput.value;
    result.innerText = date + '-' + month + '-' + year;
    result.innerText = date + '-' + month + '-' + year;
}