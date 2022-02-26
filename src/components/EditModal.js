import EditProduct from "./Form/EditProduct"

import { useState } from "react"
import { Modal, Form } from "react-bootstrap"

export default function EditModal({ showEdit, handleCloseModal, product }) {
  return (
    <Modal
      show={showEdit}
      onHide={handleCloseModal}
      contentClassName="w-100 m-auto"
    >
      <Modal.Body>
        <EditProduct product={product} />
      </Modal.Body>
    </Modal>
  )
}
