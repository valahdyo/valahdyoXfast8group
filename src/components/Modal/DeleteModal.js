import { Modal, Button, Alert } from "react-bootstrap"
import { useMutation } from "react-query"
import { useState } from "react"
import { API } from "../../config/api"

export default function DeleteModal(props) {
  const { showDelete, handleCloseModal, product, refetch } = props
  const [message, setMessage] = useState(null)

  const handleDelete = useMutation(async (e) => {
    try {
      e.preventDefault()
      //add request

      const response = await API.delete("/products/" + product.id)
      setMessage(null)
      handleCloseModal()
      refetch()
    } catch (error) {
      console.log(error)
      const alert = (
        <Alert variant="danger" className="py-1">
          {error.message}
        </Alert>
      )
      setMessage(alert)
    }
  })
  return (
    <Modal
      show={showDelete}
      onHide={handleCloseModal}
      contentClassName="w-100 m-auto"
    >
      <Modal.Body>
        <p>Are you sure want to delete "{product?.title}"</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleCloseModal} variant="secondary">
          Close
        </Button>
        <Button onClick={(e) => handleDelete.mutate(e)} variant="danger">
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
