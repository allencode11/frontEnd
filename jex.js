// function anagrams(word, words) {
//   const wordObj = strToObj(word);
//   const wordsArr = [];
//   const response = [];
//
//   words.forEach(el => wordsArr.push(strToObj(el)))
//   wordsArr.forEach(el => {
//     if (el[0] == wordsObj[0] && el[1] == wordObj[1])
//       response.push(words[wordsArr.indexOf(el)])
//   })
//
//   return response;
// }
//
// function strToObj(str) {
//   const strObj = {
//     letters:[],
//     rep: []
//   }
//
//   for (let i = 0; i < str.length; i++) {
//     if (strObj.letters.find(el => el === str[i])) {
//       strObj.rep[strObj.letters.indexOf(str[i])]++;
//     } else {
//       strObj.letters.push(str[i]);
//       strObj.rep.push(0);
//     }
//   }
//
//   return [str.letters.toString(), strObj.rep.toString()];
// }