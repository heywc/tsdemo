#TypeScript

## 初识

### TypeScript 是什么？

1. 以 JavaScript 为基础构建的语言
2. 是 JavaScript 的超集,拓展了 JavaScript,并添加了类型
3. TS 不能被 JS 解析器直接执行,需要先进行编译，转换成 JS

### TypeScript 相对 JS 新增了什么？

1. 类型
2. 添加 ES 不具备的新特性
3. 丰富的配置选项（可以被编译成不同版本的 js）
4. 强大的开发工具

### TypeScript 开发环境搭建

1. 下载安装 node.js

2. 使用 npm 全局安装 TypeScript

```
npm i -g typescript
```

```
// 可查看typescript编译器信息
tsc
```

3. 创建一个 ts 文件

4. 使用 tsc 对 ts 文件进行编译

```
tsc xxx.ts
```

## 类型

### 基本类型

#### 类型声明

1. 类型声明是 TS 非常重要的一个特点
2. 通过类型声明可以指定 TS 中变量(包含参数、返回值)的类型
3. 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
4. 简言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
5. 基本语法：

```TypeScript
let 变量: 类型
let 变量: 类型 = 值
function fn(形参: 类型, ...) :类型 {}
let fn:(形参:类型， 形参: 类型 ...) => 返回值类型
let obj: { a: string, b: number}
let obj: { a: string, [others: string]:any} // 必须带有属性a,其他属性可以任意
let arr: string[] // 表示字符串数组
let arr: Array<string> // 表示字符串数组
let tuple1: [string, string] // 表示只有两个字符串元素的元组
enum grender{
  male: 1,
  female: 0;
}
```

6. 联合声明:利用 | ,限制某个变量的类型在可供选择的类型之间

```ts
// a只能为类型是boolean或者number的值
let a: boolean | number;
```

#### 自动类型判断

1. TS 拥有自动的类型判断机制
2. 当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型
3. 当对变量的声明和赋值是同时进行的，可以省略掉手动设置类型声明

4. 举例:
   变量 hh 的类型会被默认成 boolean 类型，后续如果对它进行另外类型的赋值则会报错

```ts
let hh = false;
```

#### 常见类型

| 类型    | 例子            | 描述                                         |
| ------- | --------------- | -------------------------------------------- |
| number  | 1,-1,1.1        | 数字                                         |
| string  | 'h', 'hello'    | 字符串                                       |
| boolean | true/false      | 布尔值                                       |
| object  | {name: 'ywc' }  | 对象                                         |
| array   | [1,2,3]         | 数组                                         |
| tuple   | [1,2,3]         | 元组,固定长度的数组                          |
| enum    | enum{A,B}       | 枚举,TS 中新增类型                           |
| any     | \*              | 任意类型(相当于关闭了 TS 的类型检测建议不用) |
| unknown | \*              | 类型安全的 any                               |
| void    | 空值(undefined) | 没有值/undefiend                             |
| never   | 没有值          | 不能是任何值                                 |
| 字面值  | 值本身类型      | 限制变量的类型就是值本身的类型               |

**为啥说不建议使用 any？**

因为 any 类型的变量 A 赋值给其他类型的变量 B 时，会导致 B 不会对 A 的具体类型进行类型校验,同时变量 A 本身可以被赋值成任何类型的值。那就失去了类型限制的意义。

```ts
let A: any;
A = "any but string";
let B: number;
B = A; // 并不会有任何异常提示,但其实并不是我们想要的
```

**为啥说 unknown 是安全的 any？**
因为 unknown 类型的变量不能直接赋值给其他量

```ts
let a: unknown;
a = "unknown but string";
let b: string = "111";
b = a; // 提示：不能将类型“unknown”分配给类型“string”
```

正确做法 1-- 增加条件语句：

```ts
if (typeof a === "string") {
  b = a;
}
```

正确做法 2 -- 类型断言：

```ts
b = a as string;
// 或者

b = <string>a;
```

## 选项编译

### 创建配置文件

在项目文件夹的根目录中创建`tsconfig.json`文件,ts 编译器会根据该文件中的配置信息进行编译。

### 基本配置项

`include`

- 指定需要被编译的 ts 文件
- 默认值 ["**/*"]
- 示例：

```json
  "include": ["src/**/*"]
```

`exclude`

- 指定不需要被编译的 ts 文件
- 默认值 ["node_moudles", "bower_components", "json_packags"]
- 示例：

```json
  // 表示src/css目录里的文件都不会被编译
  "exclude": ["src/css/*"]
```

`extends`

- 定义被继承的配置文件
- 示例：

```json
  // 表示当前配置文件会自动包含config目录下base.json中的所有配置信息
  "extends": ["./config/base"]
```

`files`

- 指定被编译文件的文件列表。只在需要被编译的文件少的情况下才用到
- 示例：

```json
  "files":[
    "app.ts",
    "core.ts"
  ]

```

### 复杂配置项

`compilerOptions`

- `target` 指定 ECMAScript 目标版本
- `moudle` 指定生成哪个模块系统代码
- `lib` 编译过程中需要引入的库文件的列表
- `outdir` 指定编译后的文件目录
- `outfile` 将编译后的代码合并成一个文件
- `allowJs` 是否对 js 文件进行编译
- `checkJs` 是否检查 js 代码是否符合语法规范
- `removeComments` 删除所有注释，除了以 /!\*开头的版权信息
- `noEmit` 不生成输出文件
- `noEmitOnError` 报错时不生成输出文件
- `strict` 严格模式的总开关
- `alwaysStrict` 以严格模式解析并为每个源文件生成 "use strict"语句
- `noImplicitAny` 在表达式和声明上有隐含的 any 类型时报错
- `noImplicitThis` 当 this 表达式的值为 any 类型的时候，生成一个错误。
- `strictNullChecks` 严格检查空值

## 使用 webapck 打包 ts 代码

1. 初始化 npm 包管理器

```
npm init -y
```

2. 下载 webapck 相关依赖

```
npm i -D webpack webpack-cli typescript ts-loader
```

3. 配置 webpack.config.js

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
```

4. 配置 tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "strict": true
  },
  "exclude":[
    "node_modules"
  ]
}
```

5. 配置打包指令

```js
// package.json

  "build": "webpack"
```

6. 增加页面展示

- 在 src 目录中创建 `index.html`
- 下载插件 `html-webpack-plugin`

```
npm i -D html-webpack-plugin
```

- 配置插件 `html-webpack-plugin`

```
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  ...,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ]
}
```

7. 增加热更新

- 下载插件 `webpack-dev-server`

```
npm i -D webpack-dev-server
```

- 配置插件 `webpack-dev-server`

启动热更新服务其实是在本地打开了一个服务端口,用来访问我们站点

```
// package.json
{
  ...,
  "scripts": {
    "start": "webpack serve --open"
  }
}

```

8. 删除旧的打包文件

- 下载插件 `clean-webpack-plugin`

```
npm i -D clean-webpack-plugin
```

- 配置

```
// webpack.config.js

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  ...,
  plugins: [
    ...,
    new CleanWebpackPlugin()
  ]
}
```

9. 配置引入文件

```
  // 用来设置引入文件
  resolve: {
    extensions: [".ts", ".js"],
  },
```

10. 兼容更多浏览器

- 下载 babel

```
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

- 配置 babel 及兼容信息

```js
// webpack
module.exports = {
  ...,
  output: {
    ...,
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // 设置预定义的环境
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 兼容的目标浏览器
                    targets: {
                      chrome: "80",
                      ie: "11",
                    },
                    corejs: "3", // core.js 版本
                    useBuiltIns: "usage", // core.js  按需加载
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
}
```
