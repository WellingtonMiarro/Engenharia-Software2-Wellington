const soma = require('./operacoes');
const subtracao = require('./operacoes');
const multiplicacao = require('./operacoes');
const divisao = require('./operacoes');


///Soma 
test('Somar dois número: 1 + 1: ', ()=>{ 
    expect(soma(1,1)).not.toBe(2);
});
test('Somar dois número: 2 + 3:  ', ()=>{ 
    expect(soma(2,3)).toBe(6.0);
});


///Subtração f
test('Subtrair dois número: 5 - 3: ', ()=>{
    expect(subtracao(5,3)).not.toBe(2);
});
test('Subtrair dois número: 3 - 1: ', ()=>{
    expect(subtracao(3,1)).toBe(1);
});

///Multiplicação
test('Multiplicar dois número: 2 * 1: ', ()=>{
    expect(multiplicacao(2,1)).toBe(2);
});
test('Multiplicar dois número: 2 * 1:', ()=>{
    expect(multiplicacao(5,1)).toBe(6);
});


///Divisão
test('Dividir dois número: 5 / 5: ', ()=>{
    expect(divisao(5,5)).toBe(1);
});

test('Dividir dois número: 5 / 0: ', ()=>{
    expect(divisao(5,0)).toBe(1);
});


