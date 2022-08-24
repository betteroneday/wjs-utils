const url = {
  /**
   * 解析url参数为object
   * @param {string} url
   * @returns {Object}
   * @example
   * formatUrl("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
   * @example
   * formatUrl("http://www.baidu.com?a=1&a=2&b=3&b=4") // { a: ["1", "2"], b: ["3", "4"]}
   * 
   */
  formatUrl(url) {
    const params = url.split("?")[1];
    const param = params.split("&");
    const obj = {};
    for (let i = 0; i < param.length; i++) {
      const paramsA = param[i].split("=");
      const keyA = paramsA[0];
      const value = paramsA[1];
      if (obj[keyA]) {
        obj[keyA] = Array.isArray(obj[keyA]) ? obj[keyA] : [obj[keyA]];
        obj[keyA].push(value);
      } else {
        obj[keyA] = value;
      }
    }
    return obj;
  },
};

export default url;
export const formatUrl = url.formatUrl;
