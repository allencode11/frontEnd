// JavaScript types
const arrOfVar = [];
let date
const arr = ['HTML', 1, 'Javascript', 2, 'CSS', 23, 12];
const objPerson = { name: 'Alina', surname: 'Pavalachi' };

const ee = () => {
  return 'nothing';
}

arrOfVar.push(`1 is  ${typeof(1)}`)
arrOfVar.push(`'1' is  ${typeof('1')}`)
arrOfVar.push(`false is  ${typeof(false)}`)
arrOfVar.push(`objPerson is  ${typeof(objPerson)}`)
arrOfVar.push(`Date is  ${typeof(new Date())}`)
arrOfVar.push(`arr is  ${typeof(arr)}`)
arrOfVar.push(`function ee is  ${typeof(ee)}`)
arrOfVar.push(`null is  ${typeof(null)}`)
arrOfVar.push(`NaN is  ${typeof(NaN)}`)
arrOfVar.push(`21.07 is  ${typeof(21.07)}`)
arrOfVar.push(`1n is  ${typeof(1n)}`)
arrOfVar.push(`:) is  ${typeof(Symbol('hello'))}`)
arrOfVar.push(`let a is  ${typeof(date)}`)

arrOfVar.forEach( el => {
  const ee = document.createElement('div');
  ee.innerHTML = el;
  document.getElementById("variables").appendChild(ee)

})

//Myage function with if, else; switch and ternary operator
const MyAgeWithIfElse = () => {
  let age = window.prompt('Please enter your age:');

  if (age > 25 && age)
    window.alert('Sunt mai mare de 25 de ani');
  else if (age)
    window.alert('Nu sunt mai mare de 25 de ani');

}

const MyAgeWithSwitch = () => {
  let age = window.prompt('Please enter your age:');

  if (age) {
    switch (age) {
      case (age > 25):
        window.alert('Sunt mai mare de 25 de ani');
        break;
      default:
        window.alert('Nu sunt mai mare de 25 de ani');
        break;
    };
  }
}

const MyAgeWithTer = () => {
  let age = window.prompt('Please enter your age:');

  age ? age > 25 ? window.alert('Sunt mai mare de 25 de ani') : window.alert('Nu sunt mai mare de 25 de ani') : null;
}

const Calendar = () => {
  let str = window.prompt('Introduceti o zi din saptamana:');
  if(str) {
    switch (str.toLowerCase()) {
      case 'sambata':
        window.alert('Zi de odihna')
        break;
      case 'duminica':
        window.alert('Zi de odihna')
        break;
      default:
        window.alert('Zi lucratoare')
        break;
    }
  }
}


// arrays exercises
arr.push(-7) //adaugarea unui element la sfarsitul array-ului ['HTML', 1, 'Javascript', 2, 'CSS', 23, 12, -7]
arr.unshift(1000) // adaugarea elementului la inceputul unui array [1000, 'HTML', 1, 'Javascript', 2, 'CSS', 23, 12, -7]
arr.push('Last array element') // [1000, 'HTML', 1, 'Javascript', 2, 'CSS', 23, 12, -7, 'Last array element']
arr.filter((el, index) => el === 'Javascript' ? arr.splice(index, 1): null)
  // [ 1000, "HTML", 1, 2, "CSS", 23, 12, -7, "Last array element" ]
arr.filter((el, index) => typeof(el) !== 'number' ? arr.splice(index, 1) : null)
  // [ 1000, 1, 2, 23, 12, -7 ]
const newArr = [];
arr.forEach(el => newArr.push(Math.pow(el, 2))) //[ 1000000, 1, 4, 529, 144, 49 ]

const max = Math.max(...newArr) // 1000000