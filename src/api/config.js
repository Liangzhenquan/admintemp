import 'whatwg-fetch';
// 超时设置
const RESPONSE_TIME = 1000;
const timeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('request timeout'));
    }, RESPONSE_TIME);
  });
};
const originFetch = fetch;
Object.defineProperty(window, 'fetch', {
  configurable: true, // 总开关，一旦为 false，就不能再设置他的（value，writable，configurable）
  enumerable: true, // 是否能在 for...in 循环中遍历出来或在 Object.keys 中列举出来。
  get() {
    return (url, options) => {
      return originFetch(`${baseURL}${url}`, {
        ...options,
        ...{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Accept: 'application/json',
            token: localStorage.getItem('token'),
            ...options.headers
            // 这里统一加token 实现请求拦截
          }
        }
      }).then(res => {
        if (res.ok === true) {
          return res.json();
        }
        return handleError(res);
      });
    };
  }
});
// post 请求
const post = (url, data, headers) => {
  const p = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
  return Promise.race([p, timeoutPromise()]);
};
