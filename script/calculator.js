function safeEval(str) {
    return Function('return ' + str)()
}


const button = document.querySelectorAll('button')

for (let btn of button) {
    btn.addEventListener('click', function () {
        if (btn.textContent !== 'AC' && btn.textContent !== '=') {
            input.value += String(btn.textContent);
        } else if (btn.textContent == 'AC') {
            input.value = ' '
        } else {
            input.value = safeEval(String(input.value))
        }

    })
}