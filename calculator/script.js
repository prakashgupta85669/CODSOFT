function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

function appendCharacter(character) {
    document.getElementById("display").value += character;
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
