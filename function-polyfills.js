//Call
Function.prototype.myCall = function (context, ...args) {
  context.selfFunc = this;
  context.selfFunc(...args);
};

//Apply
Function.prototype.myApply = function (context, arr) {
  context.selfFunc = this;
  context.selfFunc(...arr);
};

//Bind
Function.prototype.myBind = function (context, ...args) {
  context.selfFunc = this;
  return function (...otherArgs) {
    return context.selfFunc(...args, ...otherArgs);
  };
};

function foco(age) {
  console.log('the person', this.name, 'age of', age);
}

const newObj = {
  name: 'Max',
};

const test = foco.myBind(newObj, 56);
test();
