import { Button, Navbar, Nav } from "react-bootstrap"
import LoginModal from "./Modal/LoginModal"
import { useHistory, Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useState } from "react"

export default function NavbarComponent({ refetch }) {
  const [state, dispatch] = useContext(AuthContext)

  //Get login state
  const isLogin = localStorage.getItem("isLogin")

  //Show or hide login modal
  const [showLogin, setShowLogin] = useState(false)
  const closeLogin = () => setShowLogin(false)

  return (
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
