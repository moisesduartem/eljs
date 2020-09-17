import El from './El.js';


let div = document.createElement('div');

const HelloWorld = () => (
  new El(new El(div, null, 'World'), null, 'Hello')
);

// console.log(HelloWorld());

document.getElementById('root').appendChild(HelloWorld());