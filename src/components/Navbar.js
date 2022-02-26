import { Button, Navbar, Nav } from "react-bootstrap"
import LoginModal from "./Modal/LoginModal"
import { useHistory, Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useState } from "react"

export default function NavbarComponent({ refetch }) {
  const [state, dispatch] = useContext(AuthContext)
  const isLogin = localStorage.getItem("isLogin")
  const [showLogin, setShowLogin] = useState(false)
  const closeLogin = () => setShowLogin(false)

  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="w-100 d-flex justify-content-between">
    //     <div class="navbar-header ps-3">
    //       <p class="navbar-brand mt-2">NUMERCH</p>
    //     </div>

    //     <div>
    //       <Button className="navBtnRegister">Login</Button>
    //     </div>
    //   </div>
    // </nav>
    <>
      <Navbar className="navTheme justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <p class="ps-3 navbar-brand mt-2">NUMERCH</p>
        </Navbar.Brand>
        <Nav className="ml-auto px-2">
          {isLogin === "true" ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "LOGOUT",
                })
                refetch()
              }}
              className="navBtnLogout"
            >
              Logout Admin
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setShowLogin(true)}
                className="navBtnRegister"
              >
                Login
              </Button>
            </>
          )}
        </Nav>
      </Navbar>
      <LoginModal showLogin={showLogin} closeLogin={closeLogin} />
    </>
  )
}
