let tank = document.getElementById("tank");
let down = document.getElementById("downBtn");
let left = document.getElementById("leftBtn");
let right = document.getElementById("rightBtn");
let up = document.getElementById("upBtn");
let verticalDistance = 19;

down.addEventListener('click', moveDown);
left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
down.addEventListener('click', moveUp);

function moveDown(){
    distance += 19;
    tank.style["top"] = distance + "px";
}

function moveLeft(){
    distance += 19;
    tank.style["right"] = distance + "px";
}

function moveRight(){
    distance += 19;
    tank.style["left"] = distance + "px";
}

function moveUp(){
    distance += 19;
    tank.style["bottom"] = distance + "px";
}