import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Productprovider } from './Context/Useproductcontex.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Productprovider>
    <App />
    </Productprovider>
    
  </React.StrictMode>,
)
