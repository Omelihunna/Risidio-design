import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { WalletConnectProvider } from './providers/WalletConnectContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletConnectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletConnectProvider>
  </StrictMode>,
)
