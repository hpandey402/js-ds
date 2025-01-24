/*Notes for Then Handlers
  const mappedPromises = promises.map(
  p => Promise.resolve(p).then(
    val => ({ status: 'fulfilled', value: val }),
    err => ({ status: 'rejected', reason: err })
  )
);
Promise.resolve(p) ensures that the value p is treated as a promise:

If p is already a promise, Promise.resolve(p) leaves it unchanged.
If p is not a promise (e.g., a value like a number or string), it wraps it into a promise that resolves with that value.


Step-by-Step Breakdown
Ensuring p is a promise:
Promise.resolve(p) ensures that p is always treated as a promise, even if it’s not initially a promise (e.g., a plain value like a number).

Attaching a .then() chain:

Inside .then(), the handlers (fulfillment and rejection) are provided:
The fulfillment handler: val => ({ status: 'fulfilled', value: val }).
The rejection handler: err => ({ status: 'rejected', reason: err }).
These handlers return objects describing the result of the promise.
Returning a new promise:

The .then() call always produces a new promise.
This new promise resolves to whatever the handler returns:
If the original promise is fulfilled, the new promise resolves to { status: 'fulfilled', value: val }.
If the original promise is rejected, the new promise resolves to { status: 'rejected', reason: err }.


//Short example

const promise1 = Promise.reject(3).then(el=>{}, err=> ({status:'yh to fail ho gya', value:err}));

promise1.then(val=> console.log("checlkk", val)) //it will console => checlkk { status: 'yh to fail ho gya', value: 3 }

  **/

//All
Promise.myAll = function (promises) {
  let result = [];
  let totalPromisesResolved = 0;
  return new Promise((res, rej) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(
        (data) => {
          result[i] = data;
          totalPromisesResolved++;
          if (totalPromisesResolved === promises.length) {
            res(result);
          }
        },
        (errData) => rej(errData)
      );
    });
  });
};

//AllSettled
Promise.myAllSettled = function (promises) {
  const abc = promises.map((promise) => {
    return Promise.resolve(promise).then(
      (data) => {
        return { status: 'fulfilled', value: data };
      },
      (err) => ({ status: 'rejected', reason: err })
    );
  });

  return Promise.all(abc);
};

//Race
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      return Promise.resolve(promise).then(resolve, reject);
    });
  });
};

//Any:- in a short explanatory way
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      console.log('runn', promise);
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {});
    });
  });
};

//Alternative:  in a full desciptive way
Promise.myAny = function (promises) {
  let errors = [];
  let counter = 0;
  return new Promise((res, rej) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(
        (data) => res(data),
        (err) => {
          errors[i] = err;
          counter++;
          if (counter === promises.length) {
            rej(
              `[AggregateError: All promises were rejected] {'[errors]': [${errors}] }`
            );
          }
        }
      );
    });
  });
};

const promise1 = Promise.reject(3);
const promise2 = 23;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 78);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 42);
});

Promise.myAny([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log('chekk err', err));
