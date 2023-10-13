window.addEventListener('load', main);

let input = document.querySelector('.input');
let display = document.querySelector('.display');
let seconds = document.querySelector('.seconds');
let point = document.querySelector('.point');
let timeLeft = document.querySelector('.timeLeft');
let statusGame = document.querySelector('.statusGame');

let score = 0;
let isPlay = true; // Bắt đầu trò chơi
let time = 15;

let arrayText = [
    "Bald Eagle",
    'Peacock',
    'Swallow',
    'Rooster',
    'Penguin',
    'Nightingale',
    'Pigeon',
    'Owl',
    'Duck',
    'Hawk',
];

function displayText(arrayText) {
    let index = (Math.floor(Math.random() * arrayText.length));
    display.innerHTML = arrayText[index];
}

//Check text
function checkWorks(){
    let displayWords = display.textContent;
    if(input.value === displayWords){
        // ++score;
        console.log(input.value)
        // ++time;
        input.value = "";
        statusGame.innerHTML = 'Chính xác!!!';
        return true;
    }else{
        statusGame.innerHTML = 'Chưa chính xác!!!';
        return false;
    }
}
//check Time
function countDown(){
    if(time > 0){
        // Giam thoi gian choi xuong
        --time;
        // console.log(time);
        timeLeft.innerHTML = time;
    }else if(time === 0){
        // statusGame.innerHTML = 'Game Over!!!';
        isPlay = false;
    }
}
//Start Game
function startGame() {
    if (checkWorks() && isPlay) {
        // isPlay = true;
        time += 5;
        ++score;
        timeLeft.innerHTML = time;
        point.innerHTML = score;
        displayText(arrayText);
    }else{
        statusGame.innerHTML = 'Game Over!!!';
    }
}
//End Game

function main() {
    displayText(arrayText);
    setInterval(countDown, 1000);
    input.addEventListener('input', startGame);
};