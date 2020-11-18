function safeEval(str) {
    return Function('return ' + str)()
}

let linebreak = "<br>"; //creation linebreak pour la rappelé dans l'histo

const btn = document.querySelectorAll('.btn')
// on crée une variable qui selection tout les div btn de notre generateCalculator

function pourcentage() {
    return (calcul.textContent / 100)
}  // creation d'une fonction % qu'on appel dans la condition '%'

for (let b of btn) {
    b.addEventListener('click', function () {
        if (b.textContent !== 'AC' && b.textContent !== '=' && b.textContent !== '%' && b.textContent !== '.') {
            if (resultat.textContent == '') {
                calcul.textContent += (b.textContent); //si resultat est = a rien alors encode le contenu de mes boutons
            } else {
                calcul.textContent = (b.textContent); // sinon calcul = la valeur du bouton cliqué, et resultat = a rien
                resultat.textContent = ''
            }

        } else if (b.textContent == '%') {
            let pourcent = pourcentage();
            calcul.textContent = calcul.textContent + '%'
            resultat.textContent = pourcent;
            historique.innerHTML += calcul.textContent + '=' + resultat.textContent + linebreak;

        } else if (b.textContent == 'AC') {
            calcul.textContent = '';
            resultat.textContent = '';


        } else if (b.textContent == '=') {
            resultat.textContent = safeEval(calcul.textContent)
            historique.innerHTML += calcul.textContent + ' = ' + resultat.textContent + linebreak;

        } else if (b.textContent = '.') {
            if (calcul.textContent.slice(-3).includes(".")==true) {
                calcul.textContent += "";
            } else {
                calcul.textContent += ".";
            }
        }
    })
}


document.body.addEventListener('keypress', function (e) {
    console.log(e.code)
    if (e.code == "Enter")
        resultat.textContent = safeEval(calcul.textContent)
    historique.innerHTML += calcul.textContent + '=' + resultat.textContent + linebreak;
})