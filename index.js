let screen = document.getElementById('screen');
let buttons = document.getElementsByTagName('button');
let screenValue = '';
for (const item of buttons) {
    item.addEventListener('click', function (event) {
        let buttonText = event.target.innerText;
        console.log('Button text is ' + buttonText);
        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if (buttonText === 'C') {
            screenValue = ''
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            screen.value = eval(screenValue);
            screenValue = ''
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
