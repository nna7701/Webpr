let loanInput = document.getElementById('loan');
let interestInput = document.getElementById('interest');
let yearInput = document.getElementById('year');
let result = document.getElementById('result');

function display() {
    let loan = parseFloat(loanInput.value);
    let interest = parseFloat(interestInput.value);
    let year = parseFloat(yearInput.value);
    result.innerText = 'The money you have to pay back: ' + (loan + year * (loan * interest / 100)) + '(million vnd)';
}