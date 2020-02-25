[customize-cra 和 react-app-rewired](#customize-cra-和-react-app-rewired)
[styled-components](#styled-components)
[normalize.css](#normalizecss)
[fetch](#fetch)
[登录](#登录)
[侧边栏样式刷新](#侧边栏样式刷新)
[图片](#图片)
[解决](#效果)
[目录结构](#目录结构)
[总结](#总结)
**技术栈：**

- react
- react-router-dom --路由
- antd --UI
- fetch --请求，可自定义拦截和响应超时。
- normalize.css --抹平浏览器差异

- customize-cra 和 react-app-rewired --不暴露 webpack 配置下配置项目
- babel-plugin-import --antd 按需加载

## customize-cra 和 react-app-rewired

可参考：！[在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn)
**安装**

```js
yarn add customize-cra react-app-rewired
```

**配置**

- 1.修改 package.json 文件

```diff
"scripts" {
-  "start": "react-app-rewired start",
+  "start": "react-app-rewired start",
-  "build": "react-app-rewired build",
+  "build": "react-app-rewired build",
}
```

- 2.项目根目录（package.json 同级）增加配置文件`config-overrides.js`

```js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src') //设置@符号代表src目录
  })
);
```

**按需加载 antd**

```js
yarn add babel-plugin-import
//config-overrides.js文件
const { override, fixBabelImports } = require('customize-cra');
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
  ...
);
```

如果需要使用 less 或者定制主题

```diff
- const { override, fixBabelImports, } = require('customize-cra');

+ const { override,addLessLoader, fixBabelImports, } = require('customize-cra');
const path = require('path');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
-    style: 'css',
+    style: 'css',
  }),
+  addLessLoader({
+    javascriptEnabled: true,
+    modifyVars: { '@primary-color': '#1E9FFF', },  //定制主题
+  }),
  ...
);
```

## styled-components

可参考：![styled-components文档](https://github.com/hengg/styled-components-docs-zh)
styled-components 是“CSS-in-JS”，是一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义。

```js
yarn add styled-components
//使用之后
...
const LoginButton = styled(Button)`
  width: 2.4rem;
  height: 0.68rem;
  border: none;
  border-radius: 0.08rem;
`;
export default function Login() {
  const [username, setUsername] = useState('');
  const [pwd, setPws] = useState('');
  const login = () => {};
  return (
    <Section>
      <LoginBox>
        <Title>ADMIN</Title>
        <Input value={username} prefix={<i className="iconfont icon-denglu"></i>}/>
        <PwdInput value={pwd} />
        <LoginButton onClick={login} type="primary">
          登录
        </LoginButton>
      </LoginBox>
    </Section>
  );
}
```

以上，用`styled-components`后在 Login 组件中会少写很多 class，使得我们的组件结构会非常清晰，再结合 less 定制主题，很好的将 css 和组件分离开来，可维和性也更高。

## normalize.css

不同浏览器的默认样式存在差异，可以使用 Normalize.css 抹平这些差异。
可参考：![normalize.css](https://github.com/necolas/normalize.css)
**作用：**

- 与许多 CSS 重置不同，保留有用的默认值。
- 标准化各种元素的样式。
- 更正错误和常见的浏览器不一致问题。
- 通过细微的修改来提高可用性。
- 使用详细注释说明代码的作用。

```js
yarn add normalize.css
```

`App.js`引入

```js
import 'normalize.css';
```

## fetch

目录：`api/config`;
`src/api/config`
项目将使用 fetch 请求，我们将添加一个 polyfill，来掂平浏览器之间的差异性，提高浏览器的兼容性。

```js
yarn add whatwg-fetch
```

**请求拦截和响应拦截**
使用 fetch,我将使用`Object.defineProperty`对 fetch 进行 get 拦截，来实现请求体添加 token 和对响应状态进行统一处理的效果，

```js
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
            authorization: localStorage.getItem('token'),
            ...options.headers
            // 这里统一加token 实现请求拦截
          }
        }
      }).then(res => {
        // 响应处理
      });
    };
  }
});
```

**响应超时**
可以使用`Promise.race([p1,p2...])`和 setTimeout 来实现响应超时效果，race 是只要有一个 promise 实例发生改变，race 就会改变

```js
...
const timeoutPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('request timeout'));
    }, 10000);
  });
};
const p = fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify(data)
});
  return Promise.race([timeoutPromise(), p]);
```

以上，如果 10 秒钟内无响应，则会超时。

## 登录

项目里，我分为三个大页面和无数小页面：
大页面（一级路由）：login、404、home（登录系统后的页面），路由配置在`App.js`

- login --pathname = '/login'
- 404 --pathname = '/404'
- home --pathname = '/'

小页面（二级路由）：home 的子页面，路由配置在`/src/containers/MyLayout`;

- 小页面 1 --pathname = '/home'
- 小页面 2 --pathname = '/home2'
  首先，我们打开网页时，会先匹配一级路由，如果匹配到'/'，那么将会匹配到 home 页面（登录系统后的页面），然后在匹配二级路由'/home'、'/hom2'这些，如果都匹配不上，那么就会跳转到 404；
  一级路由：

```js
//App.js
<Router>
  <Switch>
    {routes.map((route, i) => (
      <RouteWithRoutes key={i} {...route} />
    ))}
    <Route path="*">
      <Redirect to="/404" />
    </Route>
  </Switch>
</Router>
```

二级路由：

```js
//src/containers/MyLayout;
<Content>
  <Card>
    <RouteWithSubRoutes routes={routes} />
  </Card>
</Content>
```

该项目登录主要：

- 1.登录页面输入账号密码进行 fetch 请求，账号密码正确，后端返回要给 token,浏览器使用 localStorage 保存 token。
- 2.保存 token 跳转 home(系统页面)。
- 3.系统页面的每一个请求都会带上 token，后端验证通过则继续，否则跳转登录页面。
  **需解决**
- 1.浏览器直接输入'/'或者刷新浏览器时需要判断浏览器是否有 token 存在，
- 2.判断 token 是否正确，防止用户乱输一通 token 还跳转到系统页面。

`App.js`判断 token 是否存在:

```js
const token = getLocalStorage('token');
const pathname = window.location.pathname;
if (pathname === '/login' || pathname === '/404') {
} else if (!token) {
  // token不存在则跳转到登录。
  window.location.href = '/login';
}
```

判断 token 是否正确，我们需要发起一个请求，这个验证请求我们只需要在即将挂载系统页面时请求，因为想 404 和登录页面都不需要 token，`/src/containers/MyLayout`文件中：

```js
//MyLayout.js
// 只会执行一次componentWillMount，所以只会发出一次检查请求，如果返回403了，那么就有fetch错误处理来进行页面重定向。
componentWillMount() {
  post('check');
}
//
//src/api/handleError.js
//403处理,check接口时用来检查浏览器刷新时token是否有效，
//否则客户端随便放一个token，然后进入系统，两秒后才跳转登录，感觉很奇怪的亚子。
let route = res.url.replace(baseURL, '');
if (route === 'check') {
  window.location.href = '/login';
} else {
  message.error('权限过期，两秒后跳转登录页', 2);
  setTimeout(() => {
    window.location.href = '/login';
  }, 2000);
}
```

## 侧边栏样式刷新

可参考: ![antd导航菜单](https://ant.design/components/menu-cn/)
当我们侧边栏切换页面或者刷新浏览器时，侧边栏样式需要跟随匹配的路由。
antd 的 menu 组件有

- openKeys --一级菜单展开
- selectedKeys --菜单选中

这两个 props，我们只需要监听路由改变时，更换这两的值就行。

## 图片

登录页
![](https://note.youdao.com/yws/public/resource/856f58748de983abe25fcbf9222f9374/xmlnote/43C69D2108824DF1AACAC4E5F01F68E6/2612)
Home 页：
![](https://note.youdao.com/yws/public/resource/856f58748de983abe25fcbf9222f9374/xmlnote/D5D452A7689B419FB8476671480230E5/2616)
404:
![](https://note.youdao.com/yws/public/resource/856f58748de983abe25fcbf9222f9374/xmlnote/2606089F49CD45AA8C8B024DB3D7CCA8/2618)

## 解决

- 1.刷新浏览器后左侧栏状态（选中颜色）由路由控制，（一级菜单展开未做）
- 2.刷新浏览器，如果浏览器无 token 或者 token 失效，都会跳转到登录页

## 目录结构

```
-src
    -api
        -config.js  //fetch拦截配置
        -handleError.js //响应状态处理
    -assets  //资源文件font和图片等
    -components  //公共组件
    -containers  //home页面
    -router
        -config.js //路由配置
        -index.js
        -menu.js  //侧边栏配置
    -styles  //样式文件
    -utils  //一些公共设置，如antd的message的config配置等
    -views  //一级和二级路由页面
        -error //404或者500页面等
        -home  //登录后的系统二级页面
        -login.js  //登录页面

.eslintrc.js  //eslint 配置
.gitignore.js  //git提交配置
.prettierrc.js //prettier配置
.config-overrides.js  //全局主题和antd的一些配置
```

## 总结

这只是一个很简单的后台模板，不写过多内容是方便拿来用。
