import "./styles/style.css";
import "./styles/scss.scss";


const body = document.querySelector('.box');
const h1 = document.createElement('button');

console.log(body);

h1.innerHTML = 'Hello world';

console.log(h1);

body.appendChild(h1);