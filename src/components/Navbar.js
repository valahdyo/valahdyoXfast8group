import { Button } from "react-bootstrap"
import AddModal from "./Modal/AddModal"

import { useState } from "react"

export default function NavbarComponent() {
  const [isAdd, setIsAdd] = useState(false)
  const handleCloseModal = () => setIsAdd(false)

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="w-100 d-flex justify-content-between">
        <div class="navbar-header ps-3">
          <p class="navbar-brand mt-2">NUMERCH</p>
        </div>

        <div>
          <Button className="navBtnRegister">Login</Button>
        </div>
      </div>
    </nav>
  )
}
