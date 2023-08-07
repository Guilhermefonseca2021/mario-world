const mario = document.querySelector('.mario');
const tuner = document.querySelector('.tuner');

console.log(mario)

const marioJump = () => {
    mario.classList.add('mario-jump');
    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500)
}

const loop = setInterval(() => {

    // realize a colisao ( deslocamento da esquerda e depois por altura)
    const tunerPosition = tuner.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(tunerPosition <= 110 && tunerPosition > 0 & marioPosition < 50) {
        tuner.style.animation = 'none';
        tuner.style.left = tunerPosition + 'px';

        mario.style.animation = 'none';
        mario.style.bottom = marioPosition + 'px';

        mario.src = './assets/Mario_Death.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '30px'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', marioJump) 