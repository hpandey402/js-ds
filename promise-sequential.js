//Execute promise in sequence
const task1 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('hello task1');
    }, 2000);
  });
const task2 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('hello task2');
    }, 2000);
  });
const task3 = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res('hello task3');
    }, 2000);
  });

const promises = [task1, task2, task3];

async function sequential(promises) {
  const result = [];
  for (let promise of promises) {
    const res = await promise();
    result.push(res);
    console.log(result);
  }
}
sequential(promises);
