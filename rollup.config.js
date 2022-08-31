// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import resolve from "@rollup/plugin-node-resolve";
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
import commonjs from "@rollup/plugin-commonjs";
// ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  // 入口
  input: "src/index.js",
  output: [
    {
      format: "umd",
      // umd必须写name
      name: "wjsUtils",
      file: "lib/utils.umd.js",
    },
    {
      format: "es",
      file: "lib/utils.esm.js",
    },
    {
      format: "cjs",
      file: "lib/utils.cjs.js",
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    commonjs(),
    terser(),
  ],
};
