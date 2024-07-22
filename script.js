let x = 1, y = 1, changeX = 3, changeY = 3;

function changeColor() {
  let a, b, c;
    a = Math.floor(Math.random() * 256);
    b  = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    document.getElementById('dvd').style.background = 'rgb(' + a + ',' + b + ',' + c + ')';;
}

function move() {
    document.getElementById('dvd').style.top = y + 'px'; 
    document.getElementById('dvd').style.left = x + 'px';
    x += changeX;
    y += changeY;
    if (y < -50) {
        changeY = 3;
        changeColor();
    } else if (y > window.innerHeight-200) {
        changeY = -3;
        changeColor();
    }
    if (x < -50) {
        changeX = 3;
        changeColor();
    } else if (x > window.innerWidth-400) {
        changeX = -3;
        changeColor();
    }
}

window.onload = changeColor;

setInterval(move, 10);
