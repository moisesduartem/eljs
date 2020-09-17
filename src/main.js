import El from './El.js';


let div = document.createElement('div');

const Hello = (props) => (
  new El(new El(div, `Hello ${props.name}`), '!')
);

console.log(Hello({ name: 'Moisés' }));

document.getElementById('root').appendChild(Hello({ name: 'Moisés' }));