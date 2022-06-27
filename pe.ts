const maxLength: number = 5;
const symbol: string = '*';
let output: string;


// crescator dreapta
console.log('crescator aliniat in dreapta pentru n = 5')
for (let row:number = 1; row <= maxLength; row++) {
  output = '';

  for(let spaces:number = 0; spaces < Math.abs(row - maxLength); spaces++) {
    output += ' ';
  }

  for(let j:number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += symbol;
  }

  console.log(output);
}
console.log('_____________________________')

// crescator stanga
console.log('crescator aliniat in stanga pentru n = 5')
for (let row: number = maxLength; row >= 1; row--) {
  output = '';

  for(let spaces: number = 0; spaces <= Math.abs(row - maxLength); spaces++) {
    output += symbol;
  }

  for(let j: number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += ' ';
  }
  console.log(output);
}
console.log('_____________________________')

// descrescator stanga
console.log('descrescator aliniat in stanga pentru n = 5')
for (let row:number = 0; row < maxLength; row++) {
  output = '';

  for(let spaces:number = 0; spaces < Math.abs(row - maxLength); spaces++) {
    output += symbol;
  }

  for(let j:number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += ' ';
  }

  console.log(output);
}
console.log('_____________________________')


// descrescator dreapta
console.log('descrescator aliniat in dreapta pentru n = 5')
for (let row: number = maxLength; row >= 1; row--) {
  output = '';

  for(let spaces: number = 0; spaces < Math.abs(row - maxLength); spaces++) {
    output += ' ';
  }

  for(let j: number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += symbol;
  }
  console.log(output);
}
console.log('_____________________________')


//combinate dreapta
console.log('combinate spre dreapta pentru n = 5')
for (let row: number = maxLength; row >= 1; row--) {
  output = '';

  for(let spaces: number = 0; spaces < Math.abs(row - maxLength); spaces++) {
     output += ' ';
  }

  for(let j: number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += symbol;
  }
  console.log(output);
}

for (let row:number = 2; row <= maxLength; row++) {
  output = '';

  for(let spaces:number = 0; spaces < Math.abs(row - maxLength); spaces++) {
    output += ' ';
  }

  for(let j:number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += symbol;
  }

  console.log(output);
}
console.log('_____________________________')


//combinate stanga
console.log('combinat aliniat stanga')
for (let row:number = 0; row < maxLength - 1; row++) {
  output = '';

  for(let spaces:number = 0; spaces < Math.abs(row - maxLength); spaces++) {
    output += symbol;
  }

  for(let j:number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += ' ';
  }

  console.log(output);
}
for (let row: number = maxLength; row >= 1; row--) {
  output = '';

  for(let spaces: number = 0; spaces <= Math.abs(row - maxLength); spaces++) {
    output += symbol;
  }

  for(let j: number = Math.abs(row - maxLength); j < maxLength; j++) {
    output += ' ';
  }
  console.log(output);
}
console.log('_____________________________')