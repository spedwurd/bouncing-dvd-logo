let x = 1000, y = 1000;

function changeColor() {
  let a, b, c;
    a = Math.floor(Math.random() * 256);
    b  = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    document.getElementById('dvd').style.background = 'rgb(' + a + ',' + b + ',' + c + ')';;
}

function move() {
    document.getElementById('dvd').style.top = x + 'px'; 
    document.getElementById('dvd').style.left = y + 'px';
    x += changeX;
    y += changeY;
    if (x < -53) {
        changeX = 3;
    } else if (x >)
}

window.onload = changeColor;

// setInterval(move, 10);