---
title: React Basic 2
date: '2023-01-31'
tags: ['React', 'JavaScript']
draft: false
summary: Basic React Knowledges 02
images: []
layout: PostLayout
canonicalUrl: reactbasic2
---

# React Basic 1.0

### Type of Events

```html
onclick
```

```jsx
onClick
```

# Event Group

    - Clipboard events
        - onCopy
        - onCut
        - onPaste
    - Composition events
    - Keyboard events
    - Mouse events
        - onClick
        - onContextMenu
        - onDoubleClick
        - onDrag
        - onMouseDown
        - onMouseUp
        - onMouseEnter
        - onMouseLeave
        - onMouseOver
        - ...and more
    - Selection events
    - Touch events
    - Wheel events
    - Animation events
    - ...and more

### Common event handling

Simple Click Event Handle

```js
// App.js
import Btn from './Btn';

function App(){
    return{
        <Btn />
    };
}
export default App;
```

```js
// Btn.js
function Btn() {
  const clickHandler = () => console.log('Clicked')
  return <button onClick={clickHandler}>Click Me</button>
}
export default Btn
```

Example Handle different event

```js
// Btn.js
function Btn() {
  const clickHandler = () => console.log('Mouse Over')
  return <button onMouseOver={clickHandler}>Click Me</button>
}
export default Btn
```

Event handling syntax differeneces between HTML and React.

```html
<!-- Plain HTML -->
<button id="js-btn" onclick="clickHandler()">Click Me!</button>
```

```js
// JavaScript Event Handling
const jsBtn = document.getElementById('js-btn') // Declare constant and assign value from DOM
jsBtn.addEventListener('click', function () // Add event listener
{
  console.log('clicked')
})
```

```md
- In React is avoid run the DOM directly as much as possible
- In HTML the onclick='clickHandler()' is invoke the js function .
- In React,you just pass the reference to the event handling function without invoking it.onClick={clickHandler} <-JSX expression delimiters
```

```js
return <Counter onClick={clickHandler} />
```

### Event handling and embedded expressions

```js
// inline ES5 Handling events
<button
  onClick={function () {
    console.log('first example')
  }}
>
  An inline anonymous ES5 function event handler
</button>
```

```js
// inline ES6 Handling events
<button onClick={() => console.log('second Example')}>
  An Inline anouymous ES6 function event handler
</button>
```

```js
function App() {
  function thirdExample() {
    console.log('third example')
  }
  return (
    <div className="thirdExample">
                 {' '}
      <button onClick={thirdExample}>
                        using a separate function declaration            {' '}
      </button>
             {' '}
    </div>
  )
}
export default App
```

```js
function App() {
  const fourthExample = () => console.log('fourth example')

  return (
    <div claaName="fourthExample">
      <button onClick={fourthExample}>using a separate function expression</button>
    </div>
  )
}
export default App
```
