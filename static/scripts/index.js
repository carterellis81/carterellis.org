var wrapper = document.getElementById("HEADWRAPPER");
var optionsButton = document.getElementById("OPTIONBUTTON");

optionsButton.onclick = toggleVisibility;
wrapper.style.visibility = 'hidden';
optionsButton.style.visibility = 'visible';

function toggleVisibility() {
    if (wrapper.style.visibility === 'hidden') {
        wrapper.style.visibility = 'visible';
        optionsButton.innerHTML = 'hide links';
    }
    else {
        wrapper.style.visibility = 'hidden';
        optionsButton.style.visibility = 'visible';
        optionsButton.innerHTML = 'show links';
    }
}