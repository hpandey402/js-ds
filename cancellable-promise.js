//Implement a cancellable promise

const promise = new Promise((res, rej) => setTimeout(res, 1000, 'hello'));

function cancellablePromise(promise) {
  let cancel = false;
  const promiseObj = new Promise((res, rej) => {
    promise.then(
      (data) => {
        if (!cancel) {
          res(data);
        }
      },
      (err) => (!cancel ? rej(err) : null)
    );
  });

  promiseObj.cancel = () => (cancel = true);

  return promiseObj;
}

const newPromise = cancellablePromise(promise);
newPromise
  .then((data) => console.log('data', data))
  .catch((err) => console.log('err', err));

setTimeout(() => {
  newPromise.cancel();
}, 200);
