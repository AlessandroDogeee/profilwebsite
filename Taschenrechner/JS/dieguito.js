


function checkInput() {
  
  if (numberInput.value !== "") {
    buttonPlus.disabled = false;
    buttonDivider.disabled = false;
    buttonMultiplier.disabled = false;
    buttonEquals.disabled = false;
  } else {
  
    buttonPlus.disabled = true;
    buttonDivider.disabled = true;
    buttonMultiplier.disabled = true;
    buttonEquals.disabled = true;
  }
}

numberInput.addEventListener("input", checkInput);
