/**
 * Carousel
**/


const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let index = 0;

let interval = setInterval(run, 5000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if(index > img.length - 2) {
        img[index].classList.remove('big');
        img[index].classList.add('normal');
        index = 0;
    } else if(index < -1) {
        index = img.length - 2;
    }

    imgs.style.transform = `translateX(${-index * 400}px)`;

    img[index+1].classList.remove('normal');
    img[index+1].classList.add('big');
    img[index].classList.remove('big');
    img[index].classList.add('normal');
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 5000);
}

leftBtn.addEventListener('click', () => {
    index--;
    if(index === -1) {
        imgs.style.transform = `translateX(${-index * 400}px)`;
        img[1].classList.remove('big');
        img[1].classList.add('normal');
        img[0].classList.remove('normal');
        img[0].classList.add('big');
    } else {
        changeImage();
        img[index+2].classList.remove('big');
        img[index+2].classList.add('normal');
    }
    resetInterval();
});

rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval();
});