**技术栈：**

- react
- react-router-dom --路由
- antd --UI
- fetch --请求
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

`src/api/config`
项目将使用 fetch 请求，我们将添加一个 polyfill，来掂平浏览器之间的差异性，提高浏览器的兼容性。

```js
yarn add whatwg-fetch
```

，
