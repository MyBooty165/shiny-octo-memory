const logo = document.getElementById("img-logo");
const headerBg = document.querySelector("header");
const mainBg = document.querySelector("main");
const newImage = document.createElement('img');

function easteregg1() {
  newImage.src = "/static/images/egg1.jpg";

  newImage.style.height = "54px";
  logo.appendChild(newImage.cloneNode());

  newImage.style.width = "100%";
  newImage.style.height = "65px";
  headerBg.appendChild(newImage.cloneNode());

  newImage.style.width = "100vw";
  newImage.style.height = "100vh";
  mainBg.appendChild(newImage.cloneNode());
}
