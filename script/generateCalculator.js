const signs = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']


const calculator = document.createElement('section')
calculator.className = 'calculator';

const ecran = document.createElement('div')
ecran.className = 'ecran';

const calcul = document.createElement('p');
calcul.className = 'calcul';
calcul.textContent = '';

const resulat = document.createElement('p')
resulat.className = 'resulat';
resulat.textContent = '';

ecran.appendChild(calcul);
ecran.appendChild(resulat);
calculator.appendChild(ecran)


for (let i = 0; i < signs.length; i++) {
    const btn = document.createElement('div');
    btn.className = 'btn';
    btn.textContent = signs[i];
    calculator.appendChild(btn)
}

document.body.appendChild(calculator)
