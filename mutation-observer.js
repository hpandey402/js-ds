const mutation = new MutationObserver((entries) => {
  console.log('checkkk', entries);
});

const parent = document.querySelector('.parent');
mutation.observe(parent, { childList: true });

parent.children[0].remove();
mutation.disconnect();
setTimeout(() => {
  parent.append(document.createElement('div'));
}, 200);
