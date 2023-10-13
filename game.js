

const gB = document.getElementById("game-body");
const $l = document.getElementById("lives");
var fruitId = 0;

const img = [

  "avocado.png",
  "Banana.png",
  "cherry.png",
  "grape.png",
  "greenapple.png",
  "mango.png",
  "orange.png",
  "pear.png",
  "pinniple.png",
  "redapple.png",
  "stawberry.png",

];

const Explosion = new Audio("./assets/assets_shotgun.wav");
Explosion.volume = 0.2;
gB.onclick = () => {
  Explosion.pause();
  Explosion.currentTime = 0;
  Explosion.play();
};

const backgroundSound = new Audio("./assets/funny.mp3");
backgroundSound.play();
backgroundSound.loop = true;

const maxlives = 3;
var lives = maxlives;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function makefruit() {
  const randomImage = img[getRandomInt(0, img.length)];
  gB.innerHTML += `<img src="./assets/${randomImage}" class="fruit-image" id="fruit${fruitId}">`;
  let fruit = document.getElementById("fruit" + fruitId);
  fruit.style.transform = `translateX(${getRandomInt(20, 80)}vw)`;
  fruit.style.animationDuration = `${getRandomInt(2, 6)}s`;
  fruit.onclick = () => {
    fruitDestruct(fruit);
  };
}

function checkCollision(fruit) {
  if (fruit.getBoundingClientRect().top <= 0) {
    lives--;
    console.log(lives);
   
    $l.textContent = lives;
    return true;
  }
  return false;
}

function fruitDestruct(fruit) {
  fruit.style.display = "none";
  fruitId++;
  score+=1;
  document.getElementById("score").innerText = score;
  makefruit();
}

makefruit();






function startTimer() {
  var timer = document.getElementById("timer");
  let time = 90;
  let timerId = setInterval(() => {
    time--;
    timer.innerHTML = time;
    let fruit = document.getElementById("fruit" + fruitId);
    if(fruit && checkCollision(fruit)===true){
      fruitDestruct(fruit);
      fruit = document.getElementById("fruit" + fruitId);
    }

    if (lives === 0) {
      clearInterval(timerId);
      location.href = "./game-over.html";
    }

  }, 1000);
}

startTimer();

let score = 0;
const targetScore = 20;
function updateScore() {
    document.getElementById("score").textContent = score;
};

updateScore(); 
checkWin();












