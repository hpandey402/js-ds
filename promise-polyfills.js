//All
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    promises.forEach(async (promise, index) => {
      try {
        const value = await promise;
        result[index] = value;
        if (index === promises.length - 1) {
          return resolve(result);
        }
      } catch (err) {
        return reject(err);
      }
    });
  });
};

//AllSettled
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    promises.forEach(async (promise, index) => {
      try {
        const value = await promise;
        result[index] = {
          status: 'fulfilled',
          value,
        };
      } catch (err) {
        result[index] = {
          status: 'rejected',
          reason: err,
        };
      }
      if (index === promises.length - 1) {
        return resolve(result);
      }
    });
  });
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
  return new Promise((resolve, reject) => {
    const errors = [];
    promises.forEach(async (promise, index) => {
      try {
        const value = await promise;
        return resolve(value);
      } catch (err) {
        errors.push(err);
      }
      if (index === promises.length - 1) {
        return reject(
          `[AggregateError: All promises were rejected] {'[errors]': [${errors}] }`
        );
      }
    });
  });
};

const promise2 = Promise.reject(5);
const promise1 = Promise.reject(3);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 42);
});

Promise.myAny([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log('chekk err', err));
