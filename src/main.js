// toda la interaccion en html / dom
import { example } from './data.js';
import { anotherExample } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//Para mostrar las tarjetas de Pokemon en la pantalla
 const dataDePokemon = data.pokemon;
 const ascendente = document.querySelector('#ascendente')
 const descendente = document.querySelector('#descendente')
 console.log(dataDePokemon);
 let allPokemon=document.getElementById("allpokemon")
 
 function mostrarCaracteristicas(item){
     return ` <section class="card">
     <img src="${item.img}" alt="" srcset="">
     <h4>${item.num}</h4>
     <h3>${item.name}</h3>
   </section>`
 }
llenarTarjetas(dataDePokemon);
//Para el botón ascendente
ascendente.addEventListener('click',()=>{
  const pokemonOrden= example(dataDePokemon);
llenarTarjetas(pokemonOrden);
});
//para el botón descendente
descendente.addEventListener('click',()=>{
  const pokemonOrdenReverso= anotherExample(dataDePokemon);
llenarTarjetas(pokemonOrdenReverso);
});
//funcio de llenar de los pokemon
function llenarTarjetas (arrayPokemon){
  allPokemon.innerHTML=arrayPokemon.map(mostrarCaracteristicas).join(" ");
}


