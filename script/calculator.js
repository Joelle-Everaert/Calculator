function safeEval(str) {
    return Function('return ' + str)()
}

let linebreak = "<br>"; //creation linebreak pour la rappelé dans l'histo

const btn = document.querySelectorAll('.btn')
// on crée une variable qui selection tout les div btn de notre generateCalculator


for (let b of btn) {
    b.addEventListener('click', function () {
        if (b.textContent !== 'AC' && b.textContent !== '=' && b.textContent !== '%') {
            if (resultat.textContent == '') {
                calcul.textContent += String(b.textContent); //si resultat est = a rien alors encode le contenu de mes boutons
            } else {
                calcul.textContent = String(b.textContent); // sinon calcul = la valeur du bouton cliqué, et resultat = a rien
                resultat.textContent = ''
            }

        } else if (b.textContent == '%') { // % avant car si on le met après, n'entre pas dans la boucle !! 
            calcul.textContent += ' % ' + safeEval(String(resultat.textContent)) / 100; //On prend la somme pour l'afficher et la / 100
            resultat.textContent = safeEval(String(resultat.textContent)) / 100; // juste + car on assigne pas la valeur a nouveau
        } else if (b.textContent == 'AC') {
            calcul.textContent = '';
            resultat.textContent = '';
        } else if (b.textContent == '=') {
            resultat.textContent = safeEval(String(calcul.textContent))
            historique.innerHTML += calcul.textContent + '=' + resultat.textContent + linebreak;
        }
    })
}


document.body.addEventListener('keypress', function (e) {
    console.log(e.code)
    if (e.code == "Enter")
        resultat.textContent = safeEval(String(resultat.textContent))
})