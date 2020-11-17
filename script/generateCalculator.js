const signs = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']


const calculator = document.createElement('section')
calculator.className = 'calculator';

const ecran = document.createElement('div')
ecran.className = 'ecran';

const e1 = document.createElement('p');
e1.className = 'e1';
e1.textContent = '0';

const e2 = document.createElement('p')
e2.className = 'e2';
e2.textContent = '0';
console.log(e2)

ecran.appendChild(e2);
ecran.appendChild(e1);
calculator.appendChild(ecran)

console.log(ecran)
for (let i = 0; i < signs.length; i++) {
    const btn = document.createElement('div');
    btn.className = 'btn';
    btn.textContent = signs[i];
    calculator.appendChild(btn)
}

document.body.appendChild(calculator)
