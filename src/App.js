import './App.css'
import AddPassword from './components/Add Password'

const App = () => (
  <div className="bg">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
    />
    <AddPassword />
  </div>
)

export default App
