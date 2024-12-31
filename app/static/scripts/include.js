const header = document.createElement('header');
const footer = document.createElement('footer');

async function addHeader() {
    const response = await fetch("static/html/header.html");
    const headerContent = await response.text();
    header.innerHTML = headerContent;

    document.body.prepend(header);
    
    var logo = document.createElement('img');
    logo.src = "static/images/cellislogo.svg";
    document.getElementById('headerlogo').appendChild(logo);
}

async function addFooter() {
    const response = await fetch("static/html/footer.html");
    const footerContent = await response.text();
    footer.innerHTML = footerContent;

    document.body.append(footer);
}

document.body.onload = addHeader(), addFooter();