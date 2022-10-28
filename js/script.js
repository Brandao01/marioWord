const mario = document.querySelector('.mario');
const pipe = document.querySelector('.tubo');

const pulo =() => {
    mario.classList.add('jump');

    // para dar mais de um pulo dentro dos milesegundos
    // setTimeout(funcao, tempo );
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


// para nao ficar rodando ao infinito  zere ele
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    // quando e como jogo acaba 
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        // para o tubo aonde está
        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        // para o mario aonde está
        mario.style.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`;

        mario.src = '../imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // aqui para o loop
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo);