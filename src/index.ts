import counter from "./counter";
import promise from "./babel.js";
import "./styles/style.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./styles/sass.sass";

promise.then((res) => console.log(res));

import data from "./assets/data.json";
import Img from "./assets/images/img.jpg";

const body = document.querySelector("body");
const btn = document.createElement("button");
let counterTitle = document.querySelector(".counter_title");
const divLogo = document.querySelector(".logo");

let count: number = 0;
function getRes() {
    count = counter(count);
    counterTitle.innerHTML = count;
}

btn.classList.add("btn");
btn.innerHTML = "Click me";

btn.addEventListener("click", () => getRes());

if (divLogo !== null) {
}

divLogo !== null ? divLogo.after(btn) : console.log(`divLogo === null`);

const img = new Image();
img.src = Img;

divLogo !== null ? divLogo.after(img) : console.log(`divLogo === null`);
