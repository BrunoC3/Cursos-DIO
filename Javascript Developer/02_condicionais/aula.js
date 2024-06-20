
let precoCondustivel = 5.50;
let gastoMedio = 10;
let distancia = 200;
const etanol = 4.70;
const gasoOuEtan = 'g'

if (gasoOuEtan === 'g') {
    console.log(((distancia / gastoMedio) * precoCondustivel).toFixed(2))
}
else if (gasoOuEtan === 'e') {
    console.log(((distancia / gastoMedio) * etanol).toFixed(2))
}
else {
    console.log('Opção invalida!');
}
