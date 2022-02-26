import { Modal, Button } from "react-bootstrap"

export default function DeleteModal({ showDelete, handleCloseModal, product }) {
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
        <Button variant="danger">Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}
