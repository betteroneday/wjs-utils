## Functions

<dl>
<dt><a href="#isEmail">isEmail(email)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为邮箱</p>
</dd>
<dt><a href="#isPhone">isPhone(phone)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为手机号码（最宽松）</p>
</dd>
<dt><a href="#isIdCard">isIdCard(idcard)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为身份证号码（支持一代/二代）</p>
</dd>
</dl>

<a name="isEmail"></a>

## isEmail(email) ⇒ <code>boolean</code>
判断是否为邮箱

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | email |

**Example**  
```js
isEmail("aaa@qq.com") // true
```
**Example**  
```js
isEmail("aaqq.com") // false
```
<a name="isPhone"></a>

## isPhone(phone) ⇒ <code>boolean</code>
判断是否为手机号码（最宽松）

**Kind**: global function  

| Param | Type |
| --- | --- |
| phone | <code>number</code> \| <code>string</code> | 

**Example**  
```js
isPhone(13541231213) //true
```
**Example**  
```js
isPhone(123) //false
```
<a name="isIdCard"></a>

## isIdCard(idcard) ⇒ <code>boolean</code>
判断是否为身份证号码（支持一代/二代）

**Kind**: global function  

| Param | Type |
| --- | --- |
| idcard | <code>string</code> \| <code>number</code> | 

**Example**  
```js
isIdCard(510902198910124421) // true
```
**Example**  
```js
isIdCard(123) // false
```
