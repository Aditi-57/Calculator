let currentInput = "";
let totalValue = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = "Error";
            }
            document.querySelector('input').value = currentInput;
            
        } else if (e.target.innerHTML.toUpperCase() === 'C') {
            currentInput = "";
            document.querySelector('input').value = currentInput;
            
        } else if (e.target.innerHTML === '%') {
            let number = parseFloat(currentInput);
            let percentage = (number / 100);
            currentInput = percentage.toString();
            document.querySelector('input').value = currentInput;
            
        } else if (e.target.innerHTML === '00') {
            currentInput += '00';
            document.querySelector('input').value = currentInput;
            
        } else if (e.target.innerHTML === 'X') {
            currentInput = currentInput.slice(0, -1);
            document.querySelector('input').value = currentInput;

        } else {
            currentInput += e.target.innerHTML;
            document.querySelector('input').value = currentInput;
        }
    });
});