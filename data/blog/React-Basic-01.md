---
title: React Basic
date: '2023-01-15'
tags: ['React', 'JavaScript']
draft: false
summary: Basic React Knowledges
images: []
layout: PostLayout
canonicalUrl: reactbasic
---

# React Basic 1.0

### Target to Learn

```md
- <b>Module 1: Anatomy of React</b>

  - Able explain the concepts behind React and component architecture.
  - Describe how to use assets within an app to apply styling and functional components.
  - Create a component to service a specific purpose.
  - Create a folder and demonstrate how to create and import files within that folder.
  - Use and manipulate props and components to effect visual results.

- <b>Module 2: Data and State</b>

  - Use common methods to manage state in React.
  - Detail the concept and nature of state and state change.
  - Describe the hierarchical flow of data in React.
  - Describe how data flows in both stateful and stateless components.
  - Use an event to dynamically change content on a web page.
  - Describe some common errors associated with events and the syntax required to handle them.

- <b>Module 3: Navigation Updating and Assets in React</b>
  - Use media assets, such as audio and video, with React.
  - Demonstrate how to manipulate image assets using reference paths.
  - Explain the folder structure of a React project in terms of embedded or referenced assets.
  - Demonstrate the conditional implementation and rendering of multiple components.
  - Create and implement a route in the form of a navbar.
  - Describe navigation design in React, with a focus on single and multi-page navigation.
- <b>Module 4: Portfolio Mini-Project (Calculator App)</b>
  - Synthesize the skills from this course to create and style a React component.
  - Reflect on this course's content and on the learning path that lies ahead.
```

## SPA-Single Page Application

Can updare partly component ,react is the one of the poplar way to build SPA.

- Rich User Interface
- Speed
- Scalability and flexibility

## Component-based architecture

React is using this, which is essentially a design philosophy for building software based on resusable components of code.

# About Component

## Functional Components , Components types JSX and transpilling.

React provided two type component, which is

- Funtional components

```js
function Welcome() {
  return <h1>"Hello"</h1>
}
```

- Class components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>"Hello"</h1>
  }
}
```

- Every React App contain at least one component ,which is root component.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
// this is render root component
```

### About JSX

- React using a special syntax called JavaScript XML or JSX. this is a syntax extension to JavaScript.
- JSX Systax look similar to HTML ,is allow you write JavaScript Code inside.
- Can think of combinatioon that custom HTML and JavaScript.it make website dynamic.

## Simple Example component for Heading,js

- All Component file in React first letter must be capitalized . because react treat lowercase components as regular HTML elements.

```jsx
function Heading() {
  let title = 'This is some heading text'
  return (
    <h1>{title}</h1>
    // Need curly brackets for react evaluate the title variable
  )
}
```

### Transpiling

- Transpiling is as a process of converting JSX to HTML ,cause browser can't understand JSX syntax.
- We can use [Babel](https://babeljs.io/) to transpile JSX ,ES5 ,ES6 code in to plain JavaScript code.
- For Example the different between JSX and Plain JavsScript code.

```jsx
function Heading(props) {
  return <h1>{props.title}</h1>
}
```

Plain JavaScript Code

```js
'use strict'

function Heading(props) {
  return /*#_PURE_#*/ React.createElement('h1', null, props.title)
}
```

<b>what I learn</b>

```md
- SPA
- Component
- JSX
- Transpiling
```

### Create simple React App

```linux
npm init react-app
```

# React Basic 1.1

### Props

- Props = properties ,use to pass data such like javascript declaring parameters.

  - Pass data between components
  - Arguments are passed like HTML attributes
  - Uses the keyword props
  - Send multiple data types
  - Flexible dynamic content

- Liitle recall JavaScript Object
  - Variable that can contain many values
  - Group related data of different types
  - Contains object properties
- Example js Object

```js
const fruit = { type: 'Apple', quantity: 500, color: 'green' }
console.log(fruit.type)
```

<b> Example Props between without Props</b>

```jsx
// Index.js
ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
//App.js
export function App() {
  return <h1>This is a title </h1>
}
// Using Props
// Index.js
ReactDOM.createRoot(document.querySelector('#root')).render(<App title="Welcome" />)
// App.js
export function App(props) {
  return <h1>{props.title} </h1>
}
```

### Data flow component

- Parent = Sending the data /index.js
- Child = Received the data /App.js
- Parent can send the same data to multiple child
- this communication is one-directional data flow
