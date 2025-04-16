const button = document.querySelector('.worker');
const result = document.getElementById('result');

button.addEventListener('click', calculateResult);

function calculateResult() {
  const worker = new Worker('./worker.js');

  worker.postMessage({ number: 1000055456 });

  console.log('calculation is ongoing...');

  worker.onmessage = (e) => {
    console.log(e);
    result.innerText = e.data;
  };
}
