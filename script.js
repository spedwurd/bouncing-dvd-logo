// i broke it trying to add multiple dvd functionality 😭

let x = 1, y = 1, changeX = 3, changeY = 3;

function changeColor(dvd) {
  console.log(dvd);
  let a, b, c;
    a = Math.floor(Math.random() * 256);
    b  = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    dvd.style.background = 'rgb(' + a + ',' + b + ',' + c + ')';
    /* (clone dvd)
    let p = document.getElementById('dvd');
    let p_prime = p.cloneNode(true);
    console.log(p_prime.id); 
    p.after(p_prime);
    */
}

function run() {
    for (let dvd of document.getElementsByClassName('dvd')) {
        move(dvd)
    }
}

function move(dvd) {
    dvd.style.top = y + 'px'; 
    dvd.style.left = x + 'px';
    x += changeX;
    y += changeY;
    if (y < -50) {
        changeY = 3;
        changeColor(dvd);
    } else if (y > window.innerHeight-200) {
        changeY = -3;
        changeColor(dvd);
    }
    if (x < -50) {
        changeX = 3;
        changeColor(dvd);
    } else if (x > window.innerWidth-400) {
        changeX = -3;
        changeColor(dvd);
    }
}

console.log(document.getElementsByClassName('dvd'));
window.onload = changeColor(document.getElementById('dvd'));
setInterval(run, 10);
/*
todo:
make a button that adds new dvds in (they need their own separate x-y/changex-y)
would prob be a loop going through the getElementbyClassNames, running move()/changecolor() individually
*/