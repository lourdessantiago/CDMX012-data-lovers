import { ordenAlfabeticoAZ, ordenAlfabeticoZA, pokePorTipo } from '../src/data.js';


describe('ordenAlfabeticoAZ', () => {
  it('is a function', () => {
    expect(typeof ordenAlfabeticoAZ).toBe('function');
  });

  it('Ordena de manera alfabetica de A a Z', () => {
    expect(ordenAlfabeticoAZ()).toEqual('ordenar');
  });
});


describe('ordenAlfabeticoZA', () => {
  it('is a function', () => {
    expect(typeof ordenAlfabeticoZA).toBe('function');
  });

  it('Ordena de manera alfabetica de Z a A', () => {
    expect(ordenAlfabeticoZA()).toBe('OMG');
  });
});

describe('pokePorTipo', () => {
  it('is a function', () => {
    expect(typeof pokePorTipo).toBe('function');
  });

  it('Filtra por tipo nuestros pokemon', () => {
    const pokemonsitos=[
      {
        type: [ "fire","dragon"]
      },
      {
        type: [ "fire","flying"]
      },
      {
        type: [ "water","flying"]
      },
    ];
    const result= pokePorTipo(pokemonsitos,"fire");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });
});