onmessage = () => {
  let res = 1;
  for (let i = 1; i < 1000000000; i++) {
    res += i * 88889;
  }
  postMessage(res);
};
