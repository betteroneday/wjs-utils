# wjs-utils

## isEmail(email) ⇒ <code>boolean</code>
判断是否为邮箱

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

<a name="sleep"></a>

## sleep(time) ⇒ <code>Promise</code>
延迟多少秒后继续执行 

| Param | Type |
| --- | --- |
| time | <code>number</code> | 

**Example**  
```js
sleep(1)
```

<a name="formatUrl"></a>

## formatUrl(url) ⇒ <code>Object</code>
解析url参数为object

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

**Example**  
```js
formatUrl("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
```
**Example**  
```js
formatUrl("http://www.baidu.com?a=1&a=2&b=3&b=4") // { a: ["1", "2"], b: ["3", "4"]}
```

## saveBlobFile(blob, param1)
保存文件

| Param | Type |
| --- | --- |
| blob | <code>\*</code> | 
| param1 | <code>\*</code> | 
