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
      topArea = document.querySelector('.calc__top-area');
let result = '';

erase.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});      
zero.addEventListener('click', () => {
    input.value += 0;
    result += '0';
});
one.addEventListener('click', () => {
    input.value += 1;
    result += '1';
});
two.addEventListener('click', () => {
    input.value += 2;
    result += '2';
});
three.addEventListener('click', () => {
    input.value += 3;
    result += '3';
});
four.addEventListener('click', () => {
    input.value += 4;
    result += '4';
});
five.addEventListener('click', () => {
    input.value += 5;
    result += '5';
});
six.addEventListener('click', () => {
    input.value += 6;
    result += '6';
});
seven.addEventListener('click', () => {
    input.value += 7;
    result += '7';
});
eight.addEventListener('click', () => {
    input.value += 8;
    result += '8';
});
nine.addEventListener('click', () => {
    input.value += 9;
    result += '9';
});
dot.addEventListener('click', () => {
    input.value += '.';
    result += '.';
});
del.addEventListener('click', () => {
    input.value = '';
    result = '';
    topArea.innerHTML = '';
});

plus.addEventListener('click', () => {
    result += '+';
    input.value = '';
    topArea.innerHTML = result;
});
minus.addEventListener('click', () => {
    result += '-';
    input.value = '';
    topArea.innerHTML = result;
});
multiply.addEventListener('click', () => {
    result += '*';
    input.value = '';
    topArea.innerHTML = result;
});
divide.addEventListener('click', () => {
    result += '/';
    input.value = '';
    topArea.innerHTML = result;
});

equal_sign.addEventListener('click', () => {
    result = eval(result);
    input.value = result;
    topArea.innerHTML = result;
});