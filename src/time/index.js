/**
 * 延迟多少秒后继续执行
 * @param {number} time
 * @returns {Promise}
 * @example
 * sleep(1)
 */
export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}

const time = {
  sleep,
};

export default time;
