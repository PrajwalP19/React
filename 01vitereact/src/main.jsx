import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App | Chai</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google"
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotherUser = 'Chai aur react'

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    ReactElement,
    <App/>
)
