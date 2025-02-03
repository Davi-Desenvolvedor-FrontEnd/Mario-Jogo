const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameover = document.querySelector(".game-over");
const iniciarBtn = document.querySelector(".iniciar");
const reiniciarBtn = document.querySelector(".reiniciar");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", jump);

let loop;

const startGame = () => {

  pipe.style.animation = "pipe-animation 1.8s infinite linear";
  iniciarBtn.style.display = "none";
  reiniciarBtn.style.display = "none";
  mario.style.marginLeft = "0";
  pipe.style.left = ""; // Reseta a posição do cano
  mario.style.bottom = ""; // Reseta a posição do Mario
  mario.style.animation = "";
  mario.src = "./imagens/mario.gif";
  mario.style.width = "150px";
  gameover.style.display = "none";

  loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.bottom = `${marioPosition}px`;  

      mario.src = "./imagens/game-over.png";
      mario.style.width = "75px";
      mario.style.marginLeft = "50px";
      mario.style.animation = "none";
      gameover.style.display = "block";
      reiniciarBtn.style.display = "block";

      clearInterval(loop);
    }
  }, 10);
};

reiniciarBtn.addEventListener("click", startGame);
iniciarBtn.addEventListener("click", startGame);
