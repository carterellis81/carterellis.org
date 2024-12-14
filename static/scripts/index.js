const title = document.getElementById("TITLE");

const textSplashes = [
    "innovating the future",
    "investing in schizocoin",
    "currently not studying",
    "yes, that's my name",
    "willing to work for money",
    "donations accepted",
    "now non-GMO!",
    "now with extra GMOs!",
    "up at an unreasonable time",
    "please don't roast me",
    "no, you can't change your password",
    "BE-AR SHIN KO ZHAY ZHOU",
    "chat, is this rizz?",
    "please don't kill my parents",
    "carter ellis: carter ellis:",
    "chat, is this not rizz?",
    "now photorealistic",
    "water enthusiast",
    "fighting for drugs in the war on drugs",
    "mechanically inclined",
    "please remind me to mew at 6pm",
    "i dunno, but alaska",
    "in my brainrot era",
    "might win a grammy",
    "this hawk big enough for the tuah us",
    "4am essay writer",
    "sponsored by RTX<sup>tm</sup>",
    "god bless you with mountains of gold and silver",
    "god teach not to interrupt dragon-tiger fight",
    "<a href='https://birdsarentreal.com/'>Birds Aren't Real</a>",
    "built Rome in a day",
    "[redacted]",
    "[DATA-EXPUNGED]",
    "[ Removed by Reddit ]",
    "404: Page Not Found",
    "500: Internal Server Error",
    "#milliondollarbaby",
    "yappdollar enjoyer",
    "follow for more livestock tips",
    "this is a carterellis production",
    "follow me on snapstagram",
    "moby means big",
    " ",
    "pensive rn",
    "we gotta rock down to </br> electric avenue",
    "the war on merit killed my son",
    "phd candidate in dillydallying",
    "groundbreaking research on breaking ground",
    "send dudes. im in a fight rn",
    "the last message was a lie",
    "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>click</a> for special reward!",
    "happy as an unladen swallow",
    "just another love song",
    'hawk 1: *hits window* </br> hawk 2: "AHH!"',
    "hoinka bazoingers",
    "currently 2:23 am",
    "why do they call it oven when you of in the cold food of out hot eat the food",
    "'.org' stands for Dorothy Organ",
    "are you ready?",
    "honorary wild kratt",
    "sleepypilled snoozmaxxing",
    "'cracking open a boy with the cold ones' -vampire texting his wife about where he is",
    "burger king foot lettuce",
    "chat someone clip that",
    "if you're seeing this, it's already too late",
    "visiting this website is illegal under the founding documents of NATO",
    "type 'YES' to affirm!",
    "billy o'tea",
    "everybody knows that you're insane",
    "but i feel nothing, am i better yet?",
    "computer.hack()",
    "i wander through the desert, of the mind, with no hope",
    "oh what you do to me, no one knows",
    "ime am in ur walls",
    "the feds are on their way",
    "osama bin laden had this website saved on his computer",
    "there's no chance a shrimp fried this rice",
    "pouring river water into your socks: it's cheap, it's easy, and it's free",
    "someone remind me",
    "this entry has been altered by the glorius government of Kazakhstan",
    "all hail octavia!",
    "just threw a car battery into the ocean AMA",
    "AITA for murdering my teenage wife in broad daylight?",
    "ayo?",
    "you might know me as His Excellency Haitham al Ghais XIV",
    "rose tinted eyes color my sorrow a shade of wine",
    "i went to the same high school as dave grohl",
];

window.addEventListener('load', changeTextSplash);
title.addEventListener('click', changeTextSplash)

function changeTextSplash() {
    let num = getRandomInt(0, Math.ceil(textSplashes.length + 3));
    if ((num <= textSplashes.length - 1) && !(title.innerHTML.includes(textSplashes[num]))) {
        title.innerHTML = "<h1> carter ellis: <span style='color: rgb(168, 25, 25);'>" + textSplashes[num] + "</span> </h1>";
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