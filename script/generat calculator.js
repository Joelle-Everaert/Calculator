const signs = [
    ['(', ')', '/', 'AC'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
]



const container = document.createElement('main');
container.className = 'container';

const section = document.createElement('div');
section.className = 'section';

const columns = document.createElement('div');
columns.className = 'columns is-centered';

const card = document.createElement('div');
card.className = 'card column is-one-fifth';

const control = document.createElement('div');
control.className = 'control';

const input = document.createElement('input');
input.className = 'input has-text-right';
input.type = 'text';
input.readOnly = true;


control.appendChild(input);
card.appendChild(control);

const isCentered = document.createElement('div');
isCentered.className = 'is-centered'

// on crée une boucle dans laquelle on va créer nos div qui constitue nos colonnes
// on appendchildera

for (let i = 0; i < signs.length; i++) {
    const div = document.createElement('div');
    div.className = 'p-1'
    // On cible notre array principal et les sous caté de notre array =i (boucle précédente)
    for (let b = 0; b < signs[i].length; b++) {
        const bouton = document.createElement('button')
        bouton.className = 'button';
        // on cible le contenu du tableau (signs) + l'index de i(tableau general) et b
        bouton.textContent = signs[i][b];
        div.appendChild(bouton); // on appendchild button a div!
    }
    isCentered.appendChild(div); //On doit lié div et notre div qui reprend les boutons
}

card.appendChild(isCentered);

columns.appendChild(card);
section.appendChild(columns);

container.appendChild(section);
document.body.appendChild(container);