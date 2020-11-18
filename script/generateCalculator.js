const signs = ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']


const calculator = document.createElement('section')
calculator.className = 'calculator';

const ecran = document.createElement('div')
ecran.className = 'ecran';

const calcul = document.createElement('p');
calcul.className = 'calcul';
calcul.textContent = '';

const resultat = document.createElement('p')
resultat.className = 'resultat';
resultat.textContent = '';

ecran.appendChild(calcul);
ecran.appendChild(resultat);
calculator.appendChild(ecran)


for (let i = 0; i < signs.length; i++) {
    const btn = document.createElement('div');
    btn.className = 'btn';
    btn.textContent = signs[i];
    calculator.appendChild(btn)
}

const historique= document.createElement('div');
historique.className ='historique' 


document.body.appendChild(calculator)
document.body.appendChild(historique)
