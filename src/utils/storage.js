const setLocalStorage = (key, value) => {
  let val = value;
  if (typeof value === 'object') {
    val = JSON.stringify(value);
  }
  localStorage.setItem(key, val);
};
const getLocalStorage = key => {
  let val = null;
  if (localStorage.getItem(key)) {
    val = localStorage.getItem(key);
    val = JSON.parse(JSON.stringify(val));
  }
  return val;
};

export { setLocalStorage, getLocalStorage };
