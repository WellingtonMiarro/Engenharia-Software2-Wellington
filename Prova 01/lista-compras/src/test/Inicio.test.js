import React from 'react';
import toJson from 'enzyme-to-json';

//ele torna o snapshot ja em formato de texto
import {createSerializer} from 'enzyme-to-json';

import ROTAS from '../Rotas';
import Listas from '../pages/lista/Listas';

// Utilizando para configuração do ENZYME
import { shallow, configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
 expect.addSnapshotSerializer(createSerializer({mode:'deep'}));


describe("Teste de renderização do camponente INICIO",()=>{
    it("Verificar se a página Inicial e carregada adequadamente", ()=>{
        const wrapper = shallow(<Listas/>);//retorna Serializado
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});