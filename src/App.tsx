import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import CollectionPage from './pages/CollectionPage'
import WalletConnectPage from './pages/WalletConnectPage'

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<DashboardPage />} />
      <Route path={"/collection"} element={<CollectionPage />} />
      <Route path={"/wallet-connect"} element={<WalletConnectPage />} />
    </Routes>
  )
}

export default App
