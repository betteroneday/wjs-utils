export default {
  // 入口
  input: "src/index.js",
  output: [
    {
      format: "umd",
      // umd必须写name
      name: "wjsUtils",
      file: "dist/bundle.js",
    },
    {
      format: "cjs",
      file: "dist/bundle.commonjs.js",
    },
    {
      format: "amd",
      file: "dist/bundle.amd.js",
    },
    {
      format: "es",
      file: "dist/bundle.es.js",
    },
    {
      format: "iife",
      name: "wjsUtils",
      file: "dist/bundle.browser.js",
    },
  ],
};
