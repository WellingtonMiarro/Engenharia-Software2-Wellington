import React from 'react';
import {Route, MemoryRouter} from 'react-router-dom';

//importe das paginas 
import Listas from '../pages/lista/Listas';
import Lista from '../pages/lista/Lista';
import CriarLista from '../pages/lista/CriarLista';
//Importe de rotas
import ROTAS from '../Rotas';
//importe do enzyme
import {shallow, configure, mount} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
let patMap = {};

describe('Testando Rotas em App Lista de Compras', ()=>{
  beforeAll(()=>{
    const component = shallow(<ROTAS/>)
    patMap = component.find(Route).reduce((patMap,route) =>{
      const routeProps = route.props();
      patMap[routeProps.path] = routeProps.component
      return patMap;
      }, {});
  })
  test('Deve carrega o componente INICIO DE LISTAS', () =>{
    expect(patMap['/']).toBe(Listas);
  });

  test('Deve carrega o componente LISTA', () =>{
    expect(patMap['/lista']).toBe(Lista);
    
  });

test('Deve carrega o componente CRIAR LISTA', () =>{
    expect(patMap['/criarlista']).toBe(CriarLista);
  });

  test('/Incio utilizando Memoria Route', () =>{
    const envolope = mount(
      <MemoryRouter iniciaEntries={['/']}>
       <ROTAS/>
      </MemoryRouter>
    );
    expect(envolope.find(Listas)).toHaveLength(1);
   
  }); 

});