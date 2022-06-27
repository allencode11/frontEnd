var maxLength = 5;
var symbol = '*';
var output;
// crescator dreapta
console.log('crescator aliniat in dreapta pentru n = 5');
for (var row = 1; row <= maxLength; row++) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += ' ';
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += symbol;
    }
    console.log(output);
}
console.log('_____________________________');
// crescator stanga
console.log('crescator aliniat in stanga pentru n = 5');
for (var row = maxLength; row >= 1; row--) {
    output = '';
    for (var spaces = 0; spaces <= Math.abs(row - maxLength); spaces++) {
        output += symbol;
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += ' ';
    }
    console.log(output);
}
console.log('_____________________________');
// descrescator stanga
console.log('descrescator aliniat in stanga pentru n = 5');
for (var row = 0; row < maxLength; row++) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += symbol;
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += ' ';
    }
    console.log(output);
}
console.log('_____________________________');
// descrescator dreapta
console.log('descrescator aliniat in dreapta pentru n = 5');
for (var row = maxLength; row >= 1; row--) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += ' ';
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += symbol;
    }
    console.log(output);
}
console.log('_____________________________');
//combinate dreapta
console.log('combinate spre dreapta pentru n = 5');
for (var row = maxLength; row >= 1; row--) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += ' ';
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += symbol;
    }
    console.log(output);
}
for (var row = 2; row <= maxLength; row++) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += ' ';
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += symbol;
    }
    console.log(output);
}
console.log('_____________________________');
//combinate stanga
console.log('combinat aliniat stanga');
for (var row = 0; row < maxLength - 1; row++) {
    output = '';
    for (var spaces = 0; spaces < Math.abs(row - maxLength); spaces++) {
        output += symbol;
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += ' ';
    }
    console.log(output);
}
for (var row = maxLength; row >= 1; row--) {
    output = '';
    for (var spaces = 0; spaces <= Math.abs(row - maxLength); spaces++) {
        output += symbol;
    }
    for (var j = Math.abs(row - maxLength); j < maxLength; j++) {
        output += ' ';
    }
    console.log(output);
}
console.log('_____________________________');
