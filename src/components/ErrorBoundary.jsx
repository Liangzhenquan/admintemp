import React, { Component } from 'react';
// 错误边界
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo);
  }
  render() {
    const { children, fallback } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      if (fallback) {
        return null;
      }
      return <div>崩溃了</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
