module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-unused-state": 0,
    "react/prop-types": [0],
    "import/no-dynamic-require": [0],
    "global-require": [0],
    // "no-use-before-define": 0, //未定义前不能使用
    "no-plusplus": 0, //禁止使用++，--
    "no-const-assign": 0, //禁止修改const声明的变量
    "no-param-reassign": 0, //禁止给参数重新赋值
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
    "no-redeclare": 2 //禁止重复声明变量
  }
};
