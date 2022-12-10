const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const gameOverMenu = document.querySelector('.game-over-menu');
const pointsMenu = document.querySelector('.points-menu');

let randomTime = Math.random() * 5000;
let isJumping = false;
let position = 12;
let isMenuActive = false;
let points = 0;

function clearAllIntervals() {
    const interval_id = window.setInterval(()=>{}, 999);
    for (let i = 0; i < interval_id; i++)
        window.clearInterval(i);
}

function handleKeyUp (event) {
    if(event.keyCode === 32) {
        if(!isJumping)
            jump();
    }
}

function jump () {
    isJumping = true;

    let upInterval = setInterval(function () {
        if(position >= 160) {
            clearInterval(upInterval);

            let downInterval = setInterval(function () {

                if(position <= 12){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 12;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            
            position += 12;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

function createCactus() {
    if(isMenuActive)
        return;

    const cactus = document.createElement('div');
    W = document.documentElement.clientWidth;
    let cactusPosition = W * 0.7;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);

    let leftInterval = setInterval(function () {
        if(cactusPosition < 8) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            points++;
            pointsMenu.innerHTML = "Счет: " + points;
        } else if(cactusPosition > 0 && cactusPosition < 50 && position < 50) {
            clearInterval(leftInterval);
            gameOverMenu.style.display = "block";
            isMenuActive = true;
            background.style.animationPlayState = 'paused';
            dino.src = `/dino-main/imgs/dino-lose.png`
            const cactus = document.querySelectorAll('.cactus');
            cactus.forEach(c => c.remove());
            clearAllIntervals();
        } else {
            cactusPosition -= 4;
            cactus.style.left = cactusPosition + "px";    
        }
    }, 20);
}

function dinoRun() {
    let dinoIndex = 0;

    setInterval(() => {
        dinoIndex = dinoIndex === 0 ? 1 : 0;
        if (!isJumping) {
            dino.src = `/dino-main/imgs/dino-run-${dinoIndex}.png`
        } else {
            dino.src = `/dino-main/imgs/dino.png`
        }
    }, 200) 


}

function startGame() {
    gameOverMenu.style.display = "none";
    background.style.animationPlayState = 'running';
    points = 0;
    pointsMenu.innerHTML = "Счет: 0";
    isMenuActive = false;
    isJumping = false;

    function timeoutFunction() {
        randomTime = Math.random() * 5000;
        createCactus();
        setTimeout(timeoutFunction, randomTime);
    }
    dinoRun()
    setTimeout(timeoutFunction, randomTime);
}

background.style.animationPlayState = 'paused';
document.addEventListener('keydown', handleKeyUp);
