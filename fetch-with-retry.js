async function fetchWithRetry(promise, retry = 3) {
  try {
    const res = await promise;
    console.log(res);
  } catch (err) {
    if (retry > 0) {
      console.log('retrying...');
      await new Promise((res) => setTimeout(res, 1000));
      fetchWithRetry(promise, retry - 1);
    } else {
      throw new Error('Getting error: ' + err);
    }
  }
}

const pr = new Promise((_, rej) => setTimeout(rej, 1000, 'u got no rizz'));

fetchWithRetry(pr);
