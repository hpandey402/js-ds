const rowEl = document.getElementById('row');
const colEl = document.getElementById('column');

const btn = document.getElementById('smtBtn');

btn.addEventListener('click', () => {
  const tableRoot = document.getElementById('table-root');
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  let num = 1;
  let tableNums = [];
  for (let j = 0; j < rowEl.value; j++) {
    tableNums[j] = [];
  }

  //Main-Logic
  for (let i = 0; i < colEl.value; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < rowEl.value; j++) {
        tableNums[j][i] = num++;
      }
    } else {
      for (let j = rowEl.value - 1; j >= 0; j--) {
        tableNums[j][i] = num++;
      }
    }
  }
  //Main-Logic-ends

  for (let j = 0; j < rowEl.value; j++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < colEl.value; i++) {
      const td = document.createElement('td');
      td.innerText = tableNums[j][i];
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  tableRoot.append(table);
});
