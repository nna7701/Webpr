let monthInput = document.getElementById('month');
let result = document.getElementById('result');

function display(){
    let month = parseInt(monthInput.value);
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerText = '31 ngày';
            break;
        case 2:
            result.innerText ='29 ngày';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result.innerText = '30 ngày';
            break;
    }
}