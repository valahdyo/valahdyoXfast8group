import { Card, Button, Col } from "react-bootstrap"
import toRupiah from "@develoka/angka-rupiah-js"

import { useState } from "react"
import EditModal from "./Modal/EditModal"
import DeleteModal from "./Modal/DeleteModal"

export default function ProductCard({ product, key, refetch }) {
  //Show or hide edit modal and delete modal
  const [isEdit, setIsEdit] = useState({
    showModal: false,
    data: null,
  })
  const [isDelete, setIsDelete] = useState({
    showModal: false,
    data: null,
  })
  const handleCloseModal = (e, index) => {
    setIsEdit({ showModal: false, data: null })
    setIsDelete({ showModal: false, data: null })
  }
  return (
    <Col lg={3} md={4} className="donate-box" key={key}>
      <Card style={{ minHeight: "100%" }}>
        <Card.Img
          variant="top"
          src={product?.image}
          className="donate-card-img"
        />
        <Card.Body>
          <Card.Title className="donate-title">{product?.title}</Card.Title>
          <Card.Text className="donate-desc mb-0">
            {product?.description.substring(0, 100)}...
          </Card.Text>
        </Card.Body>
        <div>
          <p className="donate-desc ps-3 mb-0 fw-bolder">
            Stock : {product?.stock}
          </p>
          <p className="donate-desc ps-3 mb-0 fw-bolder">
            Buy Price : {toRupiah(product?.buyPrice, { floatingPoint: 0 })}
          </p>
          <p className="donate-desc ps-3 mb-0 fw-bolder">
            Sell Price : {toRupiah(product?.sellPrice, { floatingPoint: 0 })}
          </p>
          <div className="donate-box-bottom d-flex justify-content-between p-3">
            {localStorage.isLogin === "true" && (
              <>
                <Button
                  className="donate-btn w-50"
                  variant="primary"
                  onClick={() => {
                    setIsEdit({ showModal: true, data: product })
                  }}
                >
                  Edit Product
                </Button>
                <Button
                  onClick={() => {
                    setIsDelete({ showModal: true, data: product })
                  }}
                  variant="secondary"
                  className="donate-btn-disabled delete-btn h-50 "
                >
                  Delete
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
      <EditModal
        showEdit={isEdit.showModal}
        handleCloseModal={handleCloseModal}
        product={isEdit.data}
        refetch={refetch}
      />
      <DeleteModal
        showDelete={isDelete.showModal}
        handleCloseModal={handleCloseModal}
        product={isDelete.data}
        refetch={refetch}
      />
    </Col>
  )
}
