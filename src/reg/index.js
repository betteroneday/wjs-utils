const reg = {
  /**
   * 判断是否为邮箱
   * @param {string} - email
   * @returns {boolean}
   * @example
   * isEmail("aaa@qq.com") // true
   * @example
   * isEmail("aaqq.com") // false
   */
  isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  },
  /**
   * 判断是否为手机号码（最宽松）
   * @param {number | string} phone
   * @returns {boolean}
   * @example
   * isPhone(13541231213) //true
   * @example
   * isPhone(123) //false
   */
  isPhone(phone) {
    return /^(?:(?:\+|00)86)?1\d{10}$/.test(phone + "");
  },
};

export default reg;
export const isPhone = reg.isPhone;
export const isEmail = reg.isEmail;
