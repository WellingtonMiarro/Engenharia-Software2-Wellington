import React from 'react';

import CriarLista from '../pages/lista/CriarLista';

import toJson from 'enzyme-to-json';
//ele torna o snapshot ja em formato de texto
import {createSerializer} from 'enzyme-to-json';


// Utilizando para configuração do ENZYME
import { shallow, configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
 expect.addSnapshotSerializer(createSerializer({mode:'deep'}));


describe("Teste de renderização do camponente CRIAR LISTA",()=>{
    it("Verificar se a página Inicial e carregada adequadamente", ()=>{
        const wrapper = shallow(<CriarLista/>);//retorna Serializado
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});