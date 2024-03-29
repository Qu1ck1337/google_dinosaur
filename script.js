const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const restart = document.getElementById("restart")


document.addEventListener("keydown", jump);

function jump() {
    if (!dino.classList.contains("jump")){
        dino.classList.add("jump");
    }
    setTimeout(function () {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        dino.classList.add("darkened")
        cactus.classList.add("darkened")
        cactus.classList.remove("cactus-move")
        restart.classList.remove("hidden")
        document.removeEventListener("keydown", jump)
        // alert("GAME OVER!!")
    }
}, 10)

function restartGame() {
    location.reload();
}