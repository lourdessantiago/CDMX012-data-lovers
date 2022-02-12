// toda la interaccion en html / dom
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

 document.getElementById("aiuda").innerHTML=`<marquee>${data.pokemon[0].name}</marquee>`
