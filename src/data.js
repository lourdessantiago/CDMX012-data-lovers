// estas funciones son de ejemplo

export const example = dataDePokemon => {
  let ordenar=dataDePokemon.sort(function(a,b){
  if (a.name>b.name){
    return 1;}
  if(a.name<b.name){
    return -1;}
  if(a==b){
    return 0;
  }
  console.log(ordenar)
})
};

export const anotherExample = () => {
  return 'OMG';
};
//items.sort(function (a, b) {