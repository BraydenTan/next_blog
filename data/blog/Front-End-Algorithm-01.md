---
title: Basic Leetcode with JavaScript 1
date: '2023-01-04'
tags: ['LeetCode', 'JavaScript']
draft: false
summary: Basic Foundation using JavaScipt for LeetCode
images: []
layout: PostLayout
canonicalUrl: frontentleetcode01
---

## Introducing Front-End Algorithm, Array ,String,Traversal,Higher-order function,Regular expression and related math theory.

此篇属于前端算法入门系列的第一篇，主要介绍常用的数组方法、字符串方法、遍历方法、高阶函数、正则表达式以及相关数学知识。

```md
Content Include

- Array
- String
- Traversal
- Higher-order Function
- Regular expression
- Related Math
```

# <u>Array 数组常用方法</u>

### 1 Push()

在尾部追加，类似于压栈，原数组会变

```js
const arr = [1, 2, 3]
arr.push(8)
console.log(arr) // [1, 2, 3, 8]
```

### 2 pop()

在尾部弹出，类似于出栈，原数组会变。数组的 push & pop 可以模拟常见数据结构之一：栈(Stack)

```js
const arr = [1, 2, 3]
const popVal = arr.pop()
console.log(popVal) // 3
console.log(arr) // [1, 2]

// 数组模拟常见数据结构之一：栈
const stack = [0, 1]
stack.push(2) // 压栈
console.log(stack) // [0, 1, 2]

const popValue = stack.pop() // 出栈
console.log(popValue) // 2
console.log(stack) // [0, 1]
```

### 3 unshift()

在头部压入数据，类似于入队，原数组会变。

```js
const arr = [1, 2, 3]
arr.unshift(0)
console.log(arr) // [0, 1, 2, 3]
```

### 4 shift()

在头部弹出数据，原数组会变。数组的 push（入队） & shift（出队） 可以模拟常见数据结构之一：队列(Queue).

```js
const arr = [1, 2, 3]
const shiftVal = arr.shift()
console.log(shiftVal) // 1
console.log(arr) // [2, 3]

// 数组模拟常见数据结构之一：队列
const queue = [0, 1]
queue.push(2) // 入队
console.log(queue) // [0, 1, 2]

const shiftValue = queue.shift() // 出队
console.log(shiftValue) // 0
console.log(queue) // [1, 2]
```

### 5 concat()

concat 会在当前数组尾部拼接传入的数组，然后返回一个新数组，原数组不变。

```js
const arr = [1, 2, 3]
const arr2 = arr.concat([7, 8, 9])
console.log(arr) // [1, 2, 3]
console.log(arr2) // [1, 2, 3, 7, 8, 9]
```

### 6 indexOf()

在数组中寻找该值，找到则返回其下标，找不到则返回-1。

```js
const arr = [1, 2, 3]
console.log(arr.indexOf(2)) // 1
console.log(arr.indexOf(0)) // -1
```

### 7 include()

在数组中寻找该值，找到则返回 true，找不到则返回 false。

```js
const arr = [1, 2, 3]
console.log(arr.includes(2)) // true
console.log(arr.includes(4)) // false
```

### 8 join()

将数组转化成字符串，并返回该字符串，不传值则默认逗号隔开，原数组不变。

```js
const arr = [1, 2, 3]
console.log(arr.join()) // ‘1, 2, 3’
console.log(arr) // [1, 2, 3]
```

### 9 reverse()

翻转原数组，并返回已完成翻转的数组，原数组改变。

```js
const arr = [1, 2, 3]
console.log(arr.reverse()) // [3, 2, 1]
console.log(arr) // [3, 2, 1]
```

### 10 slice(start,end)

从 start 开始截取到 end，但是不包括 end

```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.slice(1, 4)) // [2, 3, 4]
console.log(arr) // [1, 2, 3, 4, 5]
```

### 11 splice(start, deleteCount, item1, item2……)

- start 参数 开始的位置
- deleteCount 要截取的个数
- 后面的 items 为要添加的元素
- 如果 deleteCount 为 0，则表示不删除元素，从 start 位置开始添加后面的几个元素到原始的数组里面。
- 返回值为由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
- 这个方法会改变原始数组，数组的长度会发生变化

```js
const arr3 = [1, 2, 3, 4, 5, 6, 7, 'f1', 'f2']
const arr4 = arr3.splice(2, 3) // 删除第三个元素以后的三个数组元素(包含第三个元素)
console.log(arr4) // [3, 4, 5];
console.log(arr3) // [1, 2, 6, 7, "f1", "f2"]; 原始数组被改变

const arr5 = arr3.splice(2, 0, 'wu', 'leon')
// 从第2位开始删除0个元素，插入"wu","leon"
console.log(arr5) // [] 返回空数组
console.log(arr3) // [1, 2, "wu", "leon", 6, 7, "f1", "f2"]; 原始数组被改变

const arr6 = arr3.splice(2, 3, 'xiao', 'long')
// 从第 2 位开始删除 3 个元素，插入"xiao", "long"
console.log(arr6) // ["wu", "leon", 6]
console.log(arr3) //[ 1, 2, "xiao", "long", 7, "f1", "f2"]

const arr7 = arr3.splice(2) // 从第三个元素开始删除所有的元素
console.log(arr7) // ["xiao", "long", 7, "f1", "f2"]
console.log(arr3) // [1, 2]
```

### 12 sort()

- 对数组的元素进行排序，并返回数组。
- 默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的。
- 由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。 可参考[MDN：Sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```js
const arr = [1, 2, 3]
arr.sort((a, b) => b - a)
console.log(arr) // [3, 2, 1]
```

### 13 toString()

将数组转化成字符串，并返回该字符串，逗号隔开，原数组不变。

```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.toString()) // ‘1, 2, 3, 4, 5’
console.log(arr) // [1, 2, 3, 4, 5]
```

# <u>String 字符串常用方法</u>

### 1 charAt()

返回指定索引位置处的字符。类似于数组用中括号获取相应下标位置的数据。

```js
var str = 'abcdefg'
console.log(str.charAt(2)) // 输出 'c'
console.log(str[2]) // 输出 'c'
```

### 2 concat()

类似数组的 concat()，用来返回一个合并拼接两个或两个以上字符串。原字符串不变。

```js
const str1 = 'abcdefg'
const str2 = '1234567'
const str3 = str1.concat(str2)
console.log(str3) // 输出 'abcdefg1234567'
```

### 3 indexOf()、lastIndexOf()

indexOf,返回一个字符在字符串中首次出现的位置,lastIndexOf 返回一个字符在字符串中最后一次出现的位置。

```js
const str = 'abcdcefcg'
console.log(str.indexOf('c')) // 输出 '2'
console.log(str.lastIndexOf('c')) // 输出 '7'
```

### 4 slice()

提取字符串的片断，并把提取的字符串作为新的字符串返回出来。原字符串不变。

```js
const str = 'abcdefg'
console.log(str.slice()) // 输出 'abcdefg', 不传递参数默认复制整个字符串
console.log(str.slice(1)) // 输出 'bcdefg',传递一个，则为提取的起点，然后到字符串结尾
console.log(str.slice(2, str.length - 1)) // 输出'cdef',传递两个，为提取的起始点和结束点
```

### 5 split()

提取字符串的片断，并把提取的字符串作为新的字符串返回出来。原字符串不变。

```js
const str = 'abcdefg'
console.log(str.slice()) // 输出 'abcdefg', 不传递参数默认复制整个字符串
console.log(str.slice(1)) // 输出 'bcdefg',传递一个，则为提取的起点，然后到字符串结尾
console.log(str.slice(2, str.length - 1)) // 输出'cdef',传递两个，为提取的起始点和结束点
```

### 6 substr(), substring()

- 这两个方法的功能都是截取一个字符串的片段，并返回截取的字符串。
- substr 和 substring 这两个方法不同的地方就在于参数二，substr 的参数二是截取返回出来的这个字符串指定的长度，substring 的参数二是截取返回这个字符串的结束点，并且不包含这个结束点。而它们的参数一，都是一样的功能，截取的起始位置。
- 注意事项：substr 的参数二如果为 0 或者负数，则返回一个空字符串，如果未填入，则会截取到字符串的结尾去。substring 的参数一和参数二为 NAN 或者负数，那么它将被替换为 0。

```js
const str = 'ABCDEFGHIJKLMN'
console.log(str.substr(2)) // 输出 'CDEFGHIJKLMN'
console.log(str.substring(2)) // 输出 'CDEFGHIJKLMN'

console.log(str.substr(2, 9)) // 输出 'CDEFGHIJK'为什么是K因为从C开始算
console.log(str.substring(2, 9)) // 输出 'CDEFGHI'
```

### 7 match()

match()方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配，并返回一个包含该搜索结果的数组。

```js
const str = '2018年结束了，2019年开始了，2020年就也不远了'
const reg = /\d+/g // 这里是定义匹配规则，匹配字符串里的1到多个数字
console.log(str.match(reg)) // 输出符合匹配规则的内容，以数组形式返回 ['2018', '2019', '2020']
console.log(str.match('20')) // 不使用正则 ["20", index: 0, input: "2018年结束了，2019年开始了"]
```

注意事项:如果 match 方法没有找到匹配，将返回 null。如果找到匹配，则 match 方法会把匹配到以数组形式返回，如果正则规则未设置全局修饰符 g，则 match 方法返回的数组有两个特性：input 和 index。input 属性包含整个被搜索的字符串。index 属性包含了在整个被搜索字符串中匹配的子字符串的位置。

### 8 replace()

replace 接收两个参数，参数一是需要替换掉的字符或者一个正则的匹配规则，参数二，需要替换进去的字符，仔实际的原理当中，参数二，你可以换成一个回调函数。

```js
const str = '2018年结束了，2019年开始了，2020年就也不远了'
const rex = /\d+/g // 这里是定义匹配规则，匹配字符串里的1到多个数字
const str1 = str.replace(rex, '****')
console.log(str1) // 输出："****年结束了，****年开始了,****年也不远了"
const str2 = str.replace(rex, function (item) {
  console.log(arguments) // 看下面的图片
  const arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  let newStr = ''
  item.split('').map(function (i) {
    newStr += arr[i]
  })
  return newStr
})
console.log(str2) // 输出：贰零壹捌年结束了，贰零壹玖年开始了,贰零贰零年也不远了
```

### 9 search()

在目标字符串中搜索与正则规则相匹配的字符，搜索到，则返回第一个匹配项在目标字符串当中的位置，没有搜索到则返回一个-1。

```js
const str = '2018年结束了，2019年开始了，2020年就也不远了'
const reg = /\d+/i // 这里是定义匹配规则,匹配字符串里的1到多个数字
console.log(str.search(reg)) // 输出 0  这里搜索到的第一项是从位置0开始的
```

### 10 toLowerCase(),toUpperCase()

toLowerCase 把字母转换成小写，toUpperCase()则是把字母转换成大写。

```js
const str1 = 'abcdefg'
const str2 = 'ABCDEFG'
console.log(str2.toLowerCase()) // 输出：'abcdefg'
console.log(str1.toUpperCase()) // 输出：'ABCDEFG'
```

### 11 includes(), startsWith(), endsWith()

includes、startsWith、endsWith，es6 的新增方法，includes 用来检测目标字符串对象是否包含某个字符，返回一个布尔值，startsWith 用来检测当前字符是否是目标字符串的起始部分，相对的 endwith 是用来检测是否是目标字符串的结尾部分。

```js
const str = 'Excuse me, how do I get to park road?'
console.log(str.includes('how')) // 输出：true
console.log(str.startsWith('Excuse')) // 输出： true
console.log(str.endsWith('?')) // 输出： true
```

### 12 repeat()

返回一个新的字符串对象，新字符串等于重复了指定次数的原始字符串。接收一个参数，就是指定重复的次数。原字符串不变。

```js
const str = 'http'
const str2 = str.repeat(3)
console.log(str) // 输出：'http'
console.log(str2) // 输出：'httphttphttp'
```

# <u>Traversal 用遍历方法&高阶函数</u>

### 1 for()

最常用的 for 循环，经常用的数组遍历，也可以遍历字符串。

```js
const arr = [1, 2, 3]
const str = 'abc'
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  console.log(str[i])
}
```

### 2.while() / do while()

while、do while 主要的功能是，当满足 while 后边所跟的条件时，来执行相关业务。这两个的区别是，while 会先判断是否满足条件，然后再去执行花括号里面的任务，而 do while 则是先执行一次花括号中的任务，再去执行 while 条件，判断下次还是否再去执行 do 里面的操作。也就是说 do while 至少会执行一次操作.

```js
while(条件){
     执行...
}
------------
do{
    执行...
}
while(条件)
```

### 3 forEach()

拷贝一份遍历原数组。

- return 无法终止循环。不过可以起到 continue 效果。
- 本身是不支持的 continue 与 break 语句的我们可以通过 some 和 every 来实现。

```js
const arr = [5, 1, 3, 7, 4]
arr.forEach((item, index) => {
  if (item < 2) return
  console.log(`索引：${index}，数值：${item}`)
  arr[5] = 0
})
console.log(arr)
// 打印结果：
// 索引：0，数值：5
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [5, 1, 3, 7, 4, 0]
```

### 4 for...in

- for...in 是 ES5 标准， 此方法遍历数组效率低，主要是用来循环遍历对象的属性。
- 遍历数组的缺点：数组的下标 index 值是数字，for-in 遍历的 index 值"0","1","2"等是字符串。
- Object.defineProperty，建立的属性，默认不可枚举。

```js
const foo = {
  name: 'bar',
  sex: 'male',
}
Object.defineProperty(foo, 'age', { value: 18 })
for (const key in foo) {
  console.log(`可枚举属性：${key}`)
}
console.log(`age属性：${foo.age}`)
// 打印结果：
// 可枚举属性：name
// 可枚举属性：sex
// age属性：18
```

### 5 for...of

for…of 是 ES6 新增的方法，但是 for…of 不能去遍历普通的对象，for…of 的好处是可以使用 break 跳出循环。

- for-of 这个方法避开了 for-in 循环的所有缺陷
- 与 forEach()不同的是，它可以正确响应 break、continue 和 return 语句
- for-of 循环不仅支持数组，还支持大多数类数组对象，例如 DOM NodeList 对象。
- for-of 循环也支持字符串遍历

```js
// for of 循环直接得到的就是值
const arr = [1, 2, 3]
for (const value of arr) {
  console.log(value)
}
```

面试官：说一下 for...in 和 for...of 区别？

```js
（1）for…in 用于可枚举数据，如对象、数组、字符串
（2）for…of 用于可迭代数据，如数组、字符串、Map、Set
```

### 6.every / some

返回一个布尔值。当我们需要判定数组中的元素是否都满足某些条件时，可以使用 every / some。这两个的区别是，every 会去遍历判断是否数组中的每一项都满足条件，遇到不满足的直接停止遍历返回 false，而 some 则是当某一项满足条件时停止遍历，返回 true。

```js
// every
const foo = [5, 1, 3, 7, 4].every((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// every 打印：
// 索引：0，数值：5
// 索引：1，数值：1
// false
```

```js
// some
const foo = [5, 1, 3, 7, 4].some((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// some 打印：
// 索引：0，数值：5
// true
```

### 7 filter()

- filter 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。
- 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为 true 的成员组成一个新数组返回。
- 该方法不会改变原数组。

```js
const foo = [5, 1, 3, 7, 4].filter((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item > 2
})
console.log(foo)
// 打印结果：
// 索引：0，数值：5
// 索引：1，数值：1
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [5, 3, 7, 4]
```

### 8 map()

- map 即是 “映射”的意思 ，原数组被“映射”成对应新数组。
- map：支持 return，相当与原数组克隆了一份，把克隆的每项改变了，也不影响原数组。

```js
const foo = [5, 1, 3, 7, 4].map((item, index) => {
  console.log(`索引：${index}，数值：${item}`)
  return item + 2
})
console.log(foo)
// 打印结果：
// 索引：0，数值：5
// 索引：1，数值：1
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [7, 3, 5, 9, 6]
```

### 9 reduce() / reduceRight()

reduce 从左到右将数组元素做“叠加”处理，返回一个值。reduceRight 从右到左。

```js
const foo = [5, 1, 3, 7, 4].reduce((total, cur) => {
  console.log(`叠加：${total}，当前：${cur}`)
  return total + cur
})
console.log(foo)
// 打印结果：
// 叠加：5，当前：1
// 叠加：6，当前：3
// 叠加：9，当前：7
// 叠加：16，当前：4
// 20
```

### 10.Object.keys 遍历对象的属性

Object.keys 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回可枚举的属性。

```js
const obj = {
  p1: 123,
  p2: 456,
}
Object.keys(obj) // ["p1", "p2"]
```

### 11.Object.getOwnPropertyNames() 遍历对象的属性

Object.getOwnPropertyNames 方法与 Object.keys 类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但它能返回不可枚举的属性。

```js
const arr = ['Hello', 'World']
Object.keys(arr) // ["0", "1"]
Object.getOwnPropertyNames(arr) // ["0", "1", "length"]
```

#### 以上遍历方法的区别：

```js
一：map()，forEach()，filter()循环的共同之处：
  1.forEach，map，filter循环中途是无法停止的，总是会将所有成员遍历完。
  2.他们都可以接受第二个参数，用来绑定回调函数内部的 this 变量，将回调函数内部的 this 对象，指向第二个参数，间接操作这个参数（一般是数组）。

二：map()、filter()循环和forEach()循环的不同：
   forEach 循环没有返回值； map，filter 循环有返回值。

三：map()和filter()都会跳过空位，for 和 while 不会

四：some()和every():
   some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false.

五：reduce()，reduceRight()：
   reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员）。

六：Object对象的两个遍历 Object.keys 与 Object.getOwnPropertyNames：
   他们都是遍历对象的属性，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。但Object.keys不能返回不可枚举的属性；Object.getOwnPropertyNames能返回不可枚举的属性。

```

# <u>Regular expression 常用正则表达式</u>

这里罗列一些我在刷算法题中遇到的正则表达式，如果有时间可认真学一下[正则表达式不要背](https://juejin.cn/post/6844903845227659271#heading-0)

### 1.判断字符

```js
由26个英文字母组成的字符串：^[A-Za-z]+$
由26个大写英文字母组成的字符串：^[A-Z]+$
由26个小写英文字母组成的字符串：^[a-z]+$
由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
```

### 2.判断数字

```js
数字：^[0-9]*$
```

### 3 持续更新，敬请期待……

# <u>五、数学知识</u>

### 1.质数

若一个正整数无法被除了 1 和它自身之外的任何自然数整除，则称该数为质数（或素数），否则称该正整数为合数。

```js
function judgePrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false
  }
  return true
}
```

### 2.斐波那契数列

```js
function Fibonacci(n) {
  if (n <= 1) return n
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}
```

### 3.其他 [刷算法题必备的数学考点汇总](https://zhuanlan.zhihu.com/p/301338035)
