// estas funciones son de ejemplo

export const example = dataDePokemon => {
  let ordenar = dataDePokemon.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a == b) {
      return 0;
    }
  });
  return ordenar;
};

export const anotherExample = dataDePokemon => {
  let ordenarInverso = dataDePokemon.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    if (a == b) {
      return 0;
    }
  });
  return ordenarInverso;
  
};

export const pokePorTipo = (dataDePokemon, tipoPokemonSeleccionado)=>{ 
   let filtroTipo = dataDePokemon.filter(item=>item.type.includes(tipoPokemonSeleccionado));
return filtroTipo;
}

export const pokePorResistencia= (dataDePokemon, resistenciaPokeSeleccionada)=>{
  let filtroResistencia =dataDePokemon.filter(item =>item.resistant.includes(resistenciaPokeSeleccionada));
  return filtroResistencia;
}
 

//items.sort(function (a, b) {