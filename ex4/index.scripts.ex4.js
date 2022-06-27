const template1 = document.getElementById('template1');
const template2 = document.getElementById('template2');

const btn1Click = () => {
  template1.classList.remove('hidden');
  template2.classList.add('hidden');
}

const btn2Click = () => {
  template2.classList.remove('hidden');
  template1.classList.add('hidden');
}