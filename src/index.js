import './styles.css';
import kikiandbouba from './assets/images/kikiandbouba.png';
import homepage from './homepage.js';

const content = document.querySelector("#content");

function cleanPage() {
    content.innerHTML = '';
}

(() => {
    const mainLogo = document.createElement("img");
    mainLogo.src = kikiandbouba;
    mainLogo.id = "main-logo";
    document.body.appendChild(mainLogo);
    homepage();
})();

const homepageButton = document.querySelector("#homepage");
homepageButton.addEventListener("click", () => {
    cleanPage();
    homepage();
});

