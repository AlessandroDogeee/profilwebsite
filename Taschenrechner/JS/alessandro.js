const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '(', ')', '.',              
    'Backspace', 'Enter', 'ArrowLeft', 'ArrowRight'
];
 
input.addEventListener('keydown', function(keyInput) {
 
    if (keyInput.ctrlKey && (keyInput.key === 'c' || keyInput.key === 'v' || keyInput.key === 'a')) {
        return
    }
   
    if (!allowedKeys.includes(keyInput.key)) {
        keyInput.preventDefault();
    }
});
