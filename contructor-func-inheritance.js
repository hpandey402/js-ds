function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

function Son(fName, lName, age) {
  Person.call(this, fName, lName); //here contructor inheritance is happening
  this.age = age;
}

//Son.prototype
Son.prototype = Object.create(Person.prototype); /**It will set the
                                       Person prototype object to the Prototype
                                        of prototype of Son (that's what Object.create does)*/

Son.prototype.getFullDetails = function () {
  return this.firstName + ' ' + this.lastName + ' ' + this.age;
};

//The below code is need to implement here
const son = new Son('max', 'habib', 34);
console.log(son.getFullName());
