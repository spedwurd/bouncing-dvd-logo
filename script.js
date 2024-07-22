const x = [1], y = [1], changeX = [3], changeY = [3];
var rate = 3;

function changeColor(dvd) {
    let a, b, c;
    a = Math.floor(Math.random() * 256);
    b  = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    dvd.style.background = 'rgb(' + a + ',' + b + ',' + c + ')';
}

function clone() {
    console.log('bro what the sigma')
    let p = document.getElementById('alpha');
    let p_prime = p.cloneNode(true);
    p_prime.id = "beta";
    p.after(p_prime);
    x.push(Math.random() * (window.innerWidth-400));
    y.push(Math.random() * (window.innerHeight-200));
    changeX.push(3);
    changeY.push(3);
}

function run() {
    let current = 0;
    for (let dvd of document.getElementsByClassName('dvd')) {
        move(dvd, current);
        current++;
    }
}

function setSpeed() {
    let speed = document.getElementById('speed').value;
    rate = speed;
    for (let s in changeX) {
        changeX[s] *= (speed/changeX[s]);
    }
    for (let s in changeY) {
        changeY[s] *= (speed/changeY[s]);

    }
}

function move(dvd, current) {
    dvd.style.top = y[current] + 'px'; 
    dvd.style.left = x[current] + 'px';
    x[current] += changeX[current];
    y[current] += changeY[current];
    if (y[current] <= -50) {
        console.log('bruuuh');
        console.log(y[current]);
        changeY[current] = rate;
        changeColor(dvd);
    } else if (y[current] > window.innerHeight-200) {
        changeY[current] = rate * -1;
        changeColor(dvd);
    }
    if (x[current] <= -50) {
        changeX[current] = rate;
        changeColor(dvd);
    } else if (x[current] > window.innerWidth-400) {
        changeX[current] = rate*-1;
        changeColor(dvd);
    }
}
document.getElementById('dvd')
// window.onload = changeColor(document.getElementById('dvd'));
setInterval(run, 10);
/*
todo:
make a button that adds new dvds in (they need their own separate x-y/changex-y)  DOOONE
would prob be a loop going through the getElementbyClassNames, running move()/changecolor() individually
*/