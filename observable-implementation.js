class Observable {
  constructor(func) {
    this.subscriberFn = func;
  }

  subscribe(param) {
    let isUnsubscribed = false;
    const newObj = {
      next: (...args) => {
        if (!isUnsubscribed && param) {
          if (typeof param === 'object') {
            param.next(...args);
          } else {
            param(...args);
          }
        }
      },
      error: (...args) => {
        if (!isUnsubscribed && param.error) {
          param.error(...args);
          isUnsubscribed = true;
        }
      },
      complete: () => {
        if (!isUnsubscribed && param.complete) {
          param.complete();
          isUnsubscribed = true;
        }
      },
    };

    const teardown = this.subscriberFn(newObj) || (() => {});
    if (isUnsubscribed) teardown();
    return {
      unsubscribe: () => {
        console.log('Unsubscribed!!');
        isUnsubscribed = true;
        teardown();
      },
    };
  }
}

const obs = new Observable((subscriber) => {
  subscriber.next('laila');
  subscriber.error('Something went wrong');
  // subscriber.complete();
  subscriber.next('max');

  return () => {
    console.log('clean up code here executed!!');
  };
});

const subs = obs.subscribe({
  next: (data) => console.log(data),
  complete: () => console.log('Completed!!'),
  error: (err) => console.log(err),
});
// const subs = obs.subscribe(data => console.log(data) );

subs.unsubscribe();
