import AddProduct from "../Form/AddProduct"

import { useState } from "react"
import { Modal, Form } from "react-bootstrap"

export default function AddModal(props) {
  const { showAdd, handleCloseModal, product, refetch } = props
  return (
    <Modal
      show={showAdd}
      onHide={handleCloseModal}
      contentClassName="w-100 m-auto"
    >
      <Modal.Body>
        <AddProduct
          product={product}
          handleCloseModal={handleCloseModal}
          refetch={refetch}
        />
      </Modal.Body>
    </Modal>
  )
}
