const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updatedDebounce = debounce((e) => {
  debounceText.textContent = e.target.value;
}, 2000);

const updatedThrottle = throttle((e) => {
  throttleText.textContent = e.target.value;
}, 2000);

input.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updatedDebounce(e);
  updatedThrottle(e);
});

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function throttle(cb, delay) {
  let timer;
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;

    shouldWait = true;
    timer = setTimeout(() => {
      cb(...args);
      shouldWait = false;
    }, delay);
  };
}
