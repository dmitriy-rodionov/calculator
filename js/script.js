const zero = document.getElementById('#0'),
      one = document.getElementById('#1'),
      two = document.getElementById('#2'),
      three = document.getElementById('#3'),
      four = document.getElementById('#4'),
      five = document.getElementById('#5'),
      six = document.getElementById('#6'),
      seven = document.getElementById('#7'),
      eight = document.getElementById('#8'),
      nine = document.getElementById('#9'),
      dot = document.getElementById('#dot'),
      equal_sign = document.getElementById('#equal_sign'),
      del = document.getElementById('#c'),
      erase = document.getElementById('#erase'),
      divide = document.getElementById('#divide'),
      multiply = document.getElementById('#multiply'),
      minus = document.getElementById('#minus'),
      plus = document.getElementById('#plus'),
      input = document.querySelector('.calc__input');
let firstValue = 0,
    secondValue = 0,
    operation,
    result = 0,
    counter = 0;

erase.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});      
zero.addEventListener('click', () => {
    input.value += 0;
});
one.addEventListener('click', () => {
    input.value += 1;
});
two.addEventListener('click', () => {
    input.value += 2;
});
three.addEventListener('click', () => {
    input.value += 3;
});
four.addEventListener('click', () => {
    input.value += 4;
});
five.addEventListener('click', () => {
    input.value += 5;
});
six.addEventListener('click', () => {
    input.value += 6;
});
seven.addEventListener('click', () => {
    input.value += 7;
});
eight.addEventListener('click', () => {
    input.value += 8;
});
nine.addEventListener('click', () => {
    input.value += 9;
});
dot.addEventListener('click', () => {
    input.value += '.';
});
del.addEventListener('click', () => {
    input.value = '';
    firstValue = 0;
    secondValue = 0;
    operation = '';
    result = 0;
    counter = 0;
});


plus.addEventListener('click', addition);
minus.addEventListener('click', subtraction);

equal_sign.addEventListener('click', () => {
    counter = 0;
    secondValue = +input.value;
    if(operation == 'addition') {
        input.value = +firstValue + +secondValue;
    }
    if(operation == 'subtraction') {
        input.value = +firstValue - +secondValue;
    }
});

function addition() {
    counter++;
    operation = 'addition';
    if(counter == 1) {
        firstValue = +input.value;
        result = +input.value;
        input.value = '';
    }
    if(counter > 1) {
        firstValue = firstValue + +input.value;
        // result = result + +input.value;
        input.value = '';
    }
}

function subtraction() {
    counter++;
    operation = 'subtraction';
    if(counter == 1) {
        firstValue = +input.value;
        input.value = '';
    }
    if(counter > 1) {
        firstValue = firstValue - +input.value;
        input.value = '';
    }
}