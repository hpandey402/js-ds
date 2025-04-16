async function fetchWithRetry(promise, retry = 3) {
  try {
    const res = await promise(retry);
    return res;
  } catch (err) {
    if (retry === 0) {
      throw new Error('Rejected after several tries');
    } else {
      console.log('retrying...');
      return fetchWithRetry(promise, --retry);
    }
  }
}
const promise = (retry) =>
  new Promise((res, rej) => {
    if (retry === 1) {
      setTimeout(res, 2000, 'yes resolved');
    } else {
      setTimeout(rej, 2000, 'err rejected');
    }
  });

fetchWithRetry(promise).then(
  (data) => console.log('yestst', data),
  (err) => console.log('Errrrr', err)
);
