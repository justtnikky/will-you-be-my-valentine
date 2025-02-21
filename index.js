const noButton = document.querySelector("#no");
const buttons = document.querySelector(".answer");
const yesButton = document.querySelector("#yes");
const textResult = document.querySelector("#question");

noButton.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY =  Math.random() * maxY;


    noButton.style.left = `${randomX}px`;
    noButton.style.right = `${randomY}px`;
    noButton.style.top = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

});

noButton.addEventListener("click", newText);
noButton.addEventListener("click", secondResult);
noButton.addEventListener("click", createHeart);

function newText() {
    noButton.textContent = "Yes!"
}

function secondResult() {
    textResult.textContent = "Yes? wow you must really love me:)";
}

yesButton.addEventListener("click", result);

function result() {
    textResult.textContent = "Aww good choice! We're gonna have a great time:)"
}

buttons.addEventListener("click", createHeart);

let isRaining = false; 
let interval;

buttons.addEventListener("click", () => { 
    if (!isRaining) { //only start once
        isRaining = true;
        numberofHearts = 0;
        clearInterval(interval);
        interval = setInterval(createHeart, 300);
    }
});

noButton.addEventListener("click", () => { 
    if (!isRaining) { //only start once
        isRaining = true;
        numberofHearts = 0;
        clearInterval(interval);
        interval = setInterval(createHeart, 300);
    }
});

let numberofHearts = 0;

function createHeart() {
    numberofHearts++;
    if(numberofHearts > 300)
        clearInterval(interval);
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;";
    heart.style.left = (Math.random() * 100) + "vw";
    
    
    document.body.appendChild(heart);

    
    
}



