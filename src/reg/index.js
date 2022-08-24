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
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
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

  /**
   * 判断是否为身份证号码（支持一代/二代）
   * @param {string | number} idcard
   * @returns {boolean}
   * @example
   * isIdCard(123) // false
   * @example
   * isIdCard(510902198910124421) // true
   */
  isIdCard(idcard) {
    return /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(
      idcard + ""
    );
  },
};

export default reg;
export const isPhone = reg.isPhone;
export const isEmail = reg.isEmail;
export const isIdCard = reg.isIdCard;
