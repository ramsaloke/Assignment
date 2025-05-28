import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
