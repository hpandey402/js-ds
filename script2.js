//for Practicing debounce and throttle

const defaultElem = document.getElementById('default');
const input = document.querySelector('input');

input.addEventListener('input', throttle(myFunc, 1000));

function myFunc(e) {
  const throttle = document.getElementById('throttle');
  throttle.textContent = e.target.value;
}

function debounce(cb, timer) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, timer);
  };
}

function throttle(cb, timer) {
  let timeout;
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    timeout = setTimeout(() => {
      cb(...args);
      flag = false;
    }, timer);
  };
}
