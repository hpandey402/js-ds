/** Implement an Observable object (Similar to Rxjs observable) */

//Implementation
class Observable {
  constructor(subscribeFn) {
    this.subscribeFn = subscribeFn;
  }

  subscribe(observer) {
    const newObserver =
      typeof observer === 'function'
        ? {
            next: observer,
            error: () => {},
            complete: () => {},
          }
        : {
            next: observer.next || (() => {}),
            error: observer.error || (() => {}),
            complete: observer.complete || (() => {}),
          };

    const unsubs = this.subscribeFn(newObserver);

    return { unsubscribe: typeof unsubs === 'function' ? unsubs : () => {} };
  }
}

//Execution
const myObs = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.complete();

  return () => console.log('clean up! code');
});

myObs.subscribe({
  next: (val) => console.log(val),
});

myObs.subscribe((val) => console.log(val));
