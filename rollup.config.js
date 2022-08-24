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
      file: "libs/bundle.js",
    },
    {
      format: "cjs",
      file: "libs/bundle.commonjs.js",
    },
    {
      format: "amd",
      file: "libs/bundle.amd.js",
    },
    {
      format: "es",
      file: "libs/bundle.es.js",
    },
    {
      format: "iife",
      name: "wjsUtils",
      file: "libs/bundle.browser.js",
    },
  ],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
      babelHelpers: "bundled",
    }),
    // terser()
  ],
};
