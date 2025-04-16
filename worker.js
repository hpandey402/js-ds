onmessage = function (e) {
  let res = 1;
  // console.log('chehchc', );
  const num = e.data.number;
  for (let i = 1; i < num; i++) {
    res += (7838294 * 100000) / 7832344;
  }
  console.log(res);
  postMessage(res);
};
