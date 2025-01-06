const course = {
  title: 'Proxy title test',
};

const proxyCourse = new Proxy(course, {
  set: (obj, key, newValue) => {
    obj[key] = newValue + 'tetstst';
  },
  get(obj, key) {
    return obj[key];
  },
  deleteProperty: Reflect.deleteProperty,
});

console.log(proxyCourse);
