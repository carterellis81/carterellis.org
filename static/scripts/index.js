const title = document.getElementById("TITLE");

const textSplashes = [
    "innovating the future",
    "investing in schizocoin",
    "currently not studying",
    "yes, that's my name",
    "willing to work for money",
    "donations accepted",
    "now non-GMO!",
    "now with extra GMOs!"
];

window.addEventListener('load', (event) => {
    let num = getRandomInt(0, Math.ceil(textSplashes.length * 1.3));
    if (num <= (textSplashes.length - 1)) {
        title.innerHTML = "<h1> carter ellis: <span style='color: red;'>" + textSplashes[num] + "</span> </h1>";
    }
    else {
        title.innerHTML = "<h1> carter ellis </h1>";
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}