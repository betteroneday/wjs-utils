<a name="formatUrl"></a>

## formatUrl(url) ⇒ <code>Object</code>
解析url参数为object

**Kind**: global function  

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
