import *  as React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return <h1>hello world</h1>
}

createRoot(document.querySelector('#root')).render(<App />);