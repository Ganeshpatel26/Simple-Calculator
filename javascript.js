let currentValue = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    let a = document.getElementById('display').value;
    document.getElementById('display').value = eval(document.getElementById('display').value);
    currentValue = eval(a);
}

function back() {
    var b = document.getElementById('display');
    b.value = b.value.slice(0,-1);
 }