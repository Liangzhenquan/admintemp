// 进度条
import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
function Loading() {
  NProgress.start();
  useEffect(() => {
    NProgress.done();
  }, []);
  return null;
}
export default Loading;
