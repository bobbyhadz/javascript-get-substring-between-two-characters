// EXAMPLE 1 - Get a Substring between 2 Characters in JavaScript

function getSubstring(string, char1, char2) {
  return string.slice(
    string.indexOf(char1) + 1,
    string.lastIndexOf(char2),
  );
}

const str = 'bobby_hadz#com';

// 👇️ hadz
console.log(getSubstring(str, '_', '#'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - indexOf() and lastIndexOf() return -1 if the character doesn't exist

// const str = 'bobby_hadz#com';

// // 👇️ bobby_hadz
// console.log(
//   str.slice(str.indexOf('@') + 1, str.lastIndexOf('#')),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get a Substring between 2 Characters using `String.split()`

// function getSubstring(string, char1, char2) {
//   return string.split(char1).pop().split(char2)[0];
// }

// const str = 'bobby_hadz#com';

// // 👇️ hadz
// console.log(getSubstring(str, '_', '#'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get a Substring between 2 Characters using regex

// const str = 'bobby_hadz#com';

// const result = str.split(/[_#]/);
// console.log(result); // 👉️ [ 'bobby', 'hadz', 'com' ]

// console.log(result[1]); // 👉️ hadz
