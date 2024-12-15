const title = document.getElementById("TITLE");

let textSplashes = [];

async function getSplashed() {
    const response = await fetch("static/files/textsplashes.json");
    const textSplashJSON = await response.json();
    textSplashes = textSplashJSON.textsplashes;
    changeTextSplash();
}

window.addEventListener('load', getSplashed);
title.addEventListener('click', changeTextSplash);

function changeTextSplash() {
    if (textSplashes.length === 0) {
        return;
    }
    let num = getRandomInt(0, Math.ceil(textSplashes.length + 3));
    if ((num <= textSplashes.length - 1) && !(title.innerHTML.includes(textSplashes[num]))) {
        title.innerHTML = "<h1> carter ellis:</br> <span style='color: rgb(168, 25, 25);'>" + textSplashes[num] + "</span> </h1>";
    }
    else if ((num <= textSplashes.length - 1)) {
        changeTextSplash();
    }
    else {
        title.innerHTML = "<h1> carter ellis </h1>";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}