const exponents = document.getElementsByTagName('sub');
const powers =  document.getElementsByTagName('sup');

for(let i = 0; i < exponents.length; i++) {
  exponents[i].style.color = 'blue';
};

for(let i = 0; i < powers.length; i++) {
  powers[i].style.color = 'red';
};

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const ex1 = document.getElementById('ex1');
const ex2 = document.getElementById('ex2');

const btn1Click = () => {
  ex1.classList.remove('hidden');
  ex2.classList.add('hidden');
}

const btn2Click = () => {
  ex2.classList.remove('hidden');
  ex1.classList.add('hidden');
}

// powers.forEach(function (exponent) {
//   exponent.style.color = 'red';
// });
