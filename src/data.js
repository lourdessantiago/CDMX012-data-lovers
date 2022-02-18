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
//items.sort(function (a, b) {