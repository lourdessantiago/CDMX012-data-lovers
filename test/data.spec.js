import { ordenAlfabeticoAZ, ordenAlfabeticoZA, pokePorTipo, pokePorResistencia } from '../src/data.js';


describe('ordenAlfabeticoAZ', () => {
  it('is a function', () => {
    expect(typeof ordenAlfabeticoAZ).toBe('function');
  });

  it('Ordena de manera alfabetica de A a Z', () => {
    const testNombre = [
      {name: 'z'},
      {name: 'h'},
      {name: 'b'},

    ];
    const resultado= [
      {name: 'b'},
      {name: 'h'},
      {name: 'z'},
    ];

    expect(ordenAlfabeticoAZ(testNombre)).toEqual(resultado);
  });
});


describe('ordenAlfabeticoZA', () => {
  it('is a function', () => {
    expect(typeof ordenAlfabeticoZA).toBe('function');
  });

  it('Ordena de manera alfabetica de Z a A', () => {
    const testNombre = [
      {name: 'b'},
      {name: 'h'},
      {name: 'z'},

    ];
    const resultado= [
      {name: 'z'},
      {name: 'h'},
      {name: 'b'},
    ];
    expect(ordenAlfabeticoZA(testNombre)).toEqual(resultado);
  });
});

describe('pokePorTipo', () => {
  it('is a function', () => {
    expect(typeof pokePorTipo).toBe('function');
  });

  it('Filtra por tipo nuestros pokemon', () => {
    const pokemonsitos = [
      {
        type: ["fire", "dragon"]
      },
      {
        type: ["fire", "flying"]
      },
      {
        type: ["water", "flying"]
      },
    ];
    const result = pokePorTipo(pokemonsitos, "fire");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });
});

describe('Filtrado por resitencia pokePorResistencia', () =>{
  it ( 'pokePorResistencia es una funcion ', () => {
    expect(typeof pokePorResistencia).toBe('function');
  })
  it ('Fitra el tipo de resistencia ', () => {
    const resistenciaTipo = [
      {resistant: ["water", "electric","grass","fighting","fairy"]},
      {resistant: ["electric","grass","fighting","fairy"]},
      {resistant: ["water","grass","fighting","fairy"]},
      {resistant: ["water", "electric","fighting","fairy"]},
    ]
  
    const resultado = [
      {resistant: ["water", "electric","grass","fighting","fairy"]},
      {resistant: ["water","grass","fighting","fairy"]},
      {resistant: ["water", "electric","fighting","fairy"]},
    ];
    expect (pokePorResistencia(resistenciaTipo,'water')).toEqual(resultado);
  
  }) 


})