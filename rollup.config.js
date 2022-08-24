import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  // 入口
  input: "src/main.js",
  output: [
    {
      format: "umd",
      // umd必须写name
      name: "wjsUtils",
      file: "lib/bundle.js",
    },
    {
      format: "cjs",
      file: "lib/bundle.commonjs.js",
    },
    {
      format: "amd",
      file: "lib/bundle.amd.js",
    },
    {
      format: "es",
      file: "lib/bundle.es.js",
    },
    {
      format: "iife",
      name: "wjsUtils",
      file: "lib/bundle.browser.js",
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
