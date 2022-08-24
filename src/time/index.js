const time = {
  /**
   * 延迟多少秒后继续执行
   * @param {number} time
   * @returns {Promise}
   * @example
   * sleep(1)
   */
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time * 1000));
  },
};

export default time;
export const sleep = time.sleep;
