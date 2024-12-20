import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !!!</h1>
    </div>
  )
}

//Creating our own REACT librray and JSX

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )



const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a', 
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherUser
)

//takking the refrence of the <div> tag whose id is 'root' which is present inside the index.html file 
// then we are rendering it
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  //   <MyApp/>
  // </StrictMode>

  // anotherElement
  reactElement
)
