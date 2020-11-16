const signs = [
    ['(', ')', '%', 'CE'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', 'X'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
]


const body = document.querySelector('body');

const container = document.createElement('main');
container.className = 'container';

const section = document.createElement('div');
section.className = 'section';

const columns = document.createElement('div');
columns.className = 'columns is-centered';

const card = document.createElement('div');
card.className='card column is-one-fifth';

const control= document.createElement('div');
control.className = 'control';

const input = document.createElement('input');
input.className = 'input has-text-right';
input.type ='text';
input.value = '0';
input.readOnly = true;


control.appendChild(input);
card.appendChild(control);

columns.appendChild(card);
section.appendChild(columns);

container.appendChild(section);
body.appendChild(container);





