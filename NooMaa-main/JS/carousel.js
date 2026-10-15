const backgrounds = ["bg1.png", "bg2.png", "bg3.png"];
const sofas = ["bank1.png", "bank2.png", "bank3.png"];

let index = 0;
let sofaIndex = 0;

const background = document.querySelector("#background");
const sofa = document.querySelector("#sofa");

document.querySelector("#next").onclick = () => {
    index = (index + 1) % backgrounds.length;
    background.src = "../img/" + backgrounds[index];
};

document.querySelector("#prev").onclick = () => {
    index = (index - 1 + backgrounds.length) % backgrounds.length;
    background.src = "../img/" + backgrounds[index];
};

document.querySelector("#next-sofa").onclick = () => {
    sofaIndex = (sofaIndex + 1) % sofas.length;
    sofa.src = "../img/" + sofas[sofaIndex];
};

document.querySelector("#prev-sofa").onclick = () => {
    sofaIndex = (sofaIndex - 1 + sofas.length) % sofas.length;
    sofa.src = "../img/" + sofas[sofaIndex];
};