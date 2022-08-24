import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import App from './routes'
import GlobalStyle from './styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
