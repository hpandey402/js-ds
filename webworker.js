const button = document.querySelector('.worker');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const worker = new Worker('./worker.js');
  worker.postMessage('start');

  worker.onmessage = (res) => {
    // console.log('dsaadasdadas', res.data);
    result.textContent = res.data;
  };

  console.log('started calculation....');
});
