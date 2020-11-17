function safeEval(str) {
    return Function('return ' + str)()
}


const btn = document.querySelectorAll('.btn')
// on crée une variable qui selection tout les div btn de notre generateCalculator

for (let b of btn) {
    b.addEventListener('click', function () {
        if (b.textContent !== 'AC' && b.textContent !== '=' && b.textContent !== '%') {
            // if(resulat == ''){
            //     calcul.textContent += String(b.textContent)
            // } else {
            //     resultat.textContent = ''
            //     calcul.textContent = String(b.textContent)
            // }
            calcul.textContent += String(b.textContent);//on prend le contenu de mes boutons(b.textContent)
            resulat.textContent += String(b.textContent); 
            
        } else if (b.textContent == '%') { // % avant car si on le met après, n'entre pas dans la boucle !! 
            calcul.textContent += ' % ' + safeEval(String(resulat.textContent)) / 100; //On prend la somme pour l'afficher et la / 100
            resulat.textContent = safeEval(String(resulat.textContent)) / 100; // juste + car on assigne pas la valeur a nouveau
        } else if (b.textContent == 'AC') {
            calcul.textContent = '';
            resulat.textContent = '';
        } else if (b.textContent == '=') {
            resulat.textContent = safeEval(String(resulat.textContent))
        }
    })
}
// e2 = ecran du dessous 

//!! faire en sorte que reviens a zero quand on touche = à la fin de son calcule

document.body.addEventListener('keypress', function (e) {
    console.log(e.code)
    if (e.code == "Enter")
    resulat.textContent = safeEval(String(resulat.textContent))
})







// for (let btn of button) {
//     btn.addEventListener('click', function () {
//         if (btn.textContent !== 'AC' && btn.textContent !== '=') {
//             input.value += String(btn.textContent);
//         } else if (btn.textContent == 'AC') {
//             input.value = ' '
//         } 
//             else {
//             input.value = safeEval(String(input.value))
//         }

//     })
// }