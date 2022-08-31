// 导出命名的导出 export function 模块，忽略默认的导出

// 引入方式1：import { xxx } from 'wjs-utils'
export * from "./file";
export * from "./reg";
export * from "./time";
export * from "./url";

// 引入方式2：import wjsUtils from 'wjs-utils'
import file from "./file";
import reg from "./reg";
import time from "./time";
import url from "./url";

export default {
  ...file,
  ...reg,
  ...time,
  ...url,
};
