// Tagged Template Literals
//It is used for sanitization and localization
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Dimple';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

//Output
// ["", " is ", ' years old']
// 'Dimple'
// 21
