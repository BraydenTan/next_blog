---
title: Introduction of Algorithm Complexity
date: '2023-02-2'
tags: ['LeetCode', 'JavaScript', 'Algorithm']
draft: false
summary: Introduction of Algorithm Complexity
images: []
layout: PostLayout
canonicalUrl: algorithmcomplexity
---

# Introduction of Algorithm Complexity

Example of Using Algorithm to improve the speed of run .

```js
//1+2+3+4+...n = sum
function fun1(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

function fun2(n) {
  return ((1 + n) * n) / 2
}
console.log(fun2(10))
// 55

let time1 = window.performance.now()
fun1(10000000)
let time2 = window.performance.now()
let timeDiff1 = (time2 - time1) / 1000
console.log(`It takes ${timeDiff1} seconds to run fun1.`)
//It take 0.00011 seconds to run fun1.

let time3 = window.performance.now()
fun2(10000000)
let time4 = window.performance.now()
let timeDiff2 = (time4 - time3) / 1000
console.log(`It takes ${timeDiff2} seconds to run fun2.`)
//It take 0.00006 seconds to run fun1.
```

In this case we can know when the amount is crease huge numbers ,the different usage is 1000x ++ ..

```js
function example(n) {
  let counter = 0
  for (let i = 0; i < 3 * n; i++) {
    // console.log("Hello");
    counter++
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //   console.log("Hello");
      counter++
    }
  }

  //   console.log("Hello");
  //   console.log("Hello");
  //   console.log("Hello");
  //   console.log("Hello");
  counter += 4
  return counter
}

// example(2);
// 6 Hello 2 2 Hello 4 Hello = 14 hello
for (let i = 2; i < 10; i++) {
  console.log('example$[i]will print out' + example(i) + 'Hello.')
  //to check if example = 3,4,5,6,7,8,9 will how many times Hello/counter
}
//example 2 will print out 14 Hellos
//example 3 will print out 22 Hellos
//example 4 will print out 32 Hellos
// ...etc
```

### if example(n) ,how many Hello will print out ?

```js
function example(n) {
  let counter = 0
  for (let i = 0; i < 3 * n; i++) {
    counter++
    //3n
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      counter++
      //n^2
    }
  }

  counter += 4
  //4
  return counter
}
```

### example(n)=> n^2+3n+4

### =>f(n)=n^2+3n+4

f(n)=Complexity,n=Input Size

```md
log<sub>b</sub><sup>x</sup>+log<sub>b</sub><sup>y</sup>
$log{_2}{n}$
$log{_a}{n}$
a^2
```
