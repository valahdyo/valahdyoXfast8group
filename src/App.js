import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/routes"
import { useEffect, useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { API, setAuthToken } from "./config/api"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"

/**
 * Set token ke request header when token in local storage exist
 */
function App() {
  useEffect(() => {
    if (localStorage.accessToken) {
      setAuthToken(localStorage.accessToken)
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
