import message from '@/utils/message';
const handleError = (res, baseURL) => {
  switch (res.status) {
    case 403:
      let route = res.url.replace(baseURL, '');
      console.log('rrr', route);
      if (route === 'check') {
        window.location.href = '/login';
      } else {
        message.error('权限过期，两秒后跳转登录页', 2);
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
      break;
    case 404:
      message.error('请求路径找不着');
      break;
    default:
      message.error('系统繁忙');
  }
  return res.json();
};
export default handleError;
