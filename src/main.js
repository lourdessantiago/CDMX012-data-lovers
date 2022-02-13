// toda la interaccion en html / dom
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

 document.getElementById("nombre").innerHTML=`${data.pokemon[0].name}`
 document.getElementById("number").innerHTML=`${data.pokemon[0].num}`
 //document.getElementById("imagen").innerHTML=image.src=`${data.pokemon[0].img}`

