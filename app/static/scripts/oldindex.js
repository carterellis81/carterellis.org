const myImage = document.querySelector("img");

let thumbsUp 
myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
    if (mySrc === imageList[0]) {
        myImage.setAttribute("src", imageList[1]);
        myImage.setAttribute("alt", "ONE MILLION SOCIAL CREDIT!");
    } else {
        myImage.setAttribute("src", imageList[0]);
        myImage.setAttribute("alt", "an emoji guy with sunglasses and a thumbs up");
    }
};