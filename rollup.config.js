import commonjs from "@rollup/plugin-commonjs";
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
      file: "lib/utils.js",
    },
    {
      format: "cjs",
      file: "lib/utils.commonjs.js",
    },
    {
      format: "amd",
      file: "lib/utils.amd.js",
    },
    {
      format: "es",
      file: "lib/utils.es.js",
    },
    {
      format: "iife",
      name: "wjsUtils",
      file: "lib/utils.browser.js",
    },
  ],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      babelHelpers: "bundled",
    }),
    terser()
  ],
};
