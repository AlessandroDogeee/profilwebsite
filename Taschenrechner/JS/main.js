const operationField = document.querySelector("#operation-field");
const operationInput = document.querySelector("#operation-field-style");
const inputFieldContainer = document.querySelector("#input-field");
const input = document.querySelector("#input")
const calculatorContainer = document.querySelector("#calculator");

const buttonSound = new Audio('sounds/buttonSound.wav');
const buttonSoundError = new Audio('sounds/buttonSoundError.wav')
const buttonOne = document.querySelector("#button-one");
const buttonTwo = document.querySelector("#button-two");
const buttonThree = document.querySelector("#button-three");
const buttonFour = document.querySelector("#button-four");
const buttonFive = document.querySelector("#button-five");
const buttonSix = document.querySelector("#button-six");
const buttonSeven = document.querySelector("#button-seven");
const buttonEight = document.querySelector("#button-eight");
const buttonNine = document.querySelector("#button-nine");
const buttonZero = document.querySelector("#button-zero");
const buttonBackspace = document.querySelector("#button-backspace");
const buttonDot = document.querySelector("#button-dot");
const buttonBracketOpen = document.querySelector("#button-bracket-open")
const buttonBracketClose = document.querySelector("#button-bracket-close")

const buttonPi = document.querySelector("#button-pi")

const buttonPlus = document.querySelector("#button-plus");
const buttonMinus = document.querySelector("#button-minus");
const buttonDivider = document.querySelector("#button-divider");
const buttonMultiplier = document.querySelector("#button-multiplier");
const buttonEquals = document.querySelector("#button-equals");
const buttonDelete = document.querySelector("#button-delete")
const allAllowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '+', '-', '*', '/', '.',
    'Backspace', 'Enter', 'ArrowLeft', 'ArrowRight'
];

const allowedNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const allowedOperators = ['+', '-', '*', '/', '.',];

buttonOne.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "1";
    }
});

buttonTwo.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "2";
    }
});

buttonThree.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "3";
    }
});

buttonFour.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "4";
    }
});

buttonFive.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "5";
    }
});

buttonSix.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "6";
    }
});

buttonSeven.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "7";
    }
});

buttonEight.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "8";
    }
});

buttonNine.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "9";
    }
});

buttonZero.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "0";
    }
});

buttonPlus.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            return
        } else {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += "+";
        }
    }
});

buttonMinus.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            return
        } else {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += "-";
        }
    }
});

buttonDivider.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            return
        } else {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += "/";
        }
    }
});

buttonMultiplier.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            return
        } else {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += "*";
        }
    }
});

buttonBracketOpen.addEventListener('click', () => {
    if (input.value === "error") {
    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += "(";
    }
});

buttonBracketClose.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value += ")";
    }
});

buttonPi.addEventListener('click', () => {
    const lastChar = input.value.slice(-1);
    if (input.value === "error") {

    } else {
        if (input.value === "") {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += "3.14159265358*";
        } else {
            if (!allowedOperators.includes(lastChar)) {
                buttonSound.currentTime = 0;
                buttonSound.play();
                input.value += "*3.14159265358";
            } else {
                buttonSound.currentTime = 0;
                buttonSound.play();
                input.value += "3.14159265358"
            }
        }
    }
});

buttonDot.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            return
        } else {
            buttonSound.currentTime = 0;
            buttonSound.play();
            input.value += ".";
        }
    }

});

buttonBackspace.addEventListener('click', () => {
    if (input.value === "error") {

    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        input.value = input.value.substring(0, input.value.length - 1);
    }
});

function calculate() {
    try {
        input.value = eval(operationInput.value);
        if (input.value.includes(".")) {
            input.value = Math.round(parseFloat(input.value) * 1000) / 1000;
        }
    } catch (error) {
        buttonSoundError.currentTime = 0;
        buttonSoundError.play();
        input.value = "error";
        operationInput.value = "";
    }
}

buttonEquals.addEventListener('click', () => {
    if (input.value.includes("/0.1") ||
        input.value.includes("/0.2") ||
        input.value.includes("/0.3") ||
        input.value.includes("/0.4") ||
        input.value.includes("/0.5") ||
        input.value.includes("/0.6") ||
        input.value.includes("/0.7") ||
        input.value.includes("/0.8") ||
        input.value.includes("/0.9")) {

    } else {
        if (input.value.includes("/0") || input.value.includes("/0.")) {
            input.value = ("error");
            operationInput.value = "";
            buttonSoundError.currentTime = 0;
            buttonSoundError.play();
            return
        }
    }

    if (input.value === "") {
        alert("Bitte schreibe etwas im Feld ein.")
    } else {
        buttonSound.currentTime = 0;
        buttonSound.play();
        operationInput.value = input.value;
        input.value = "";
        calculate();

    }


});

buttonDelete.addEventListener('click', () => {
    buttonSound.currentTime = 0;
    buttonSound.play();
    input.value = "";
    operationInput.value = "";

});


input.addEventListener('keydown', function (keyInput) {

    if (keyInput.ctrlKey && (keyInput.key === 'c' || keyInput.key === 'v' || keyInput.key === 'a')) {
        return
    }

    if (keyInput.key === "Enter") {

        if (input.value.includes("/0.1") ||
            input.value.includes("/0.2") ||
            input.value.includes("/0.3") ||
            input.value.includes("/0.4") ||
            input.value.includes("/0.5") ||
            input.value.includes("/0.6") ||
            input.value.includes("/0.7") ||
            input.value.includes("/0.8") ||
            input.value.includes("/0.9")) {

        } else {
            if (input.value.includes("/0") || input.value.includes("/0.")) {
                buttonSoundError.currentTime = 0;
                buttonSoundError.play();
                input.value = ("error");
                operationInput.value = "";
                return
            }
        }

        if (input.value === "") {
            alert("Bitte schreibe etwas im Feld ein")
        } else {
            operationInput.value = input.value;
            input.value = "";
            calculate();
        }
    }

    if (keyInput.key === "(" || keyInput.key === ")") {
        return
    }

    if (!allAllowedKeys.includes(keyInput.key)) {
        keyInput.preventDefault();
    }

    if (allowedOperators.includes(keyInput.key)) {
        const lastChar = input.value.slice(-1);
        if (allowedOperators.includes(lastChar)) {
            keyInput.preventDefault();
        }
    }

    if (input.value === "error") {
        keyInput.preventDefault();
    }

});