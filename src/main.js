// toda la interaccion en html / dom
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

 const dataDePokemon = data.pokemon;
 console.log(dataDePokemon);
 let allPokemon=document.getElementById("allpokemon")
 
 function mostrarCaracteristicas(item){
     return ` <section class="card">
     <img src="${item.img}" alt="" srcset="">
     <h2>${item.num}</h2>
     <h3>${item.name}</h3>
   </section>`
 }
console.log("prueba")
allPokemon.innerHTML=dataDePokemon.map(mostrarCaracteristicas).join(" ");
