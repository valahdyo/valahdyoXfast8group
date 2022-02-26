import { useState, useRef } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import ReactLoading from "react-loading"
import { useMutation, useQuery } from "react-query"

import { API } from "../../config/api"

export default function EditProduct({ product, handleCloseModal, refetch }) {
  const [preview, setPreview] = useState(product?.image)
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    title: "",
    image: "",
    stock: "",
    buyPrice: "",
    sellPrice: "",
    description: "",
  })

  //Get product data to check duplicate name
  let { data: dataProduct } = useQuery("dataProductCache", async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    }
    const response = await API.get("/products")
    return response?.data.data
  })

  const { title, stock, description, buyPrice, sellPrice } = form

  /**
   * image upload image input ref form
   */
  const inputRef = useRef(null)

  /**
   * Handle input change value form
   * @param {object} e
   */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    })
    if (e.target.type === "file") {
      if (inputRef.current?.files) {
        let url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
      }
    }
  }

  /**
   * Handle when attach image clicked
   */
  const handleUploadImage = () => {
    inputRef.current?.click()
  }

  //Validate type format and size image uploaded
  const validateFile = (inputRef) => {
    const supportedFormat = ["image/jpeg", "image/png", "image/jpg"]
    const fileType = inputRef.current.files[0].type
    const fileSize = inputRef.current.files[0].size
    if (inputRef.current.files[0]) {
      if (inputRef && !supportedFormat.includes(fileType)) {
        throw new Error("Not allowed file format")
      }
      if (inputRef && fileSize > 1024 * 100) {
        throw new Error("Image size is too big")
      }
    }
  }

  // Check if name is exist
  const validateName = (name) => {
    if (name) {
      const exist = dataProduct?.filter((post) => {
        if (post.title.toLowerCase() === name.toLowerCase()) {
          return post
        }
      })
      if (exist.length > 0) {
        throw new Error("Product Name Already Exist")
      }
    }
  }

  /**
   * Handle submit button when clicked and request post method to backend
   */
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      const formData = new FormData()
      if (form.image[0]) {
        formData.append("image", form?.image[0], form.image[0]?.name)
      }
      form.title.length !== 0 && formData.append("title", form.title)
      form.stock.length !== 0 && formData.append("stock", form.stock)
      form.buyPrice.length !== 0 && formData.append("buyPrice", form.buyPrice)
      form.sellPrice.length !== 0 &&
        formData.append("sellPrice", form.sellPrice)
      form.description.length !== 0 &&
        formData.append("description", form.description)

      //validation
      if (inputRef.current.files[0]) {
        validateFile(inputRef)
      }
      if (form.title.length !== 0) {
        validateName(form.title)
      }

      //add request
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
      const response = await API.patch(
        "/products/" + product.id,
        formData,
        config
      )
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
    <>
      {true && message}
      <img className="product-image-preview mb-3" src={preview} alt="image" />
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className="mb-3" controlId="formTitle">
          <div className="mb-3">
            <input
              ref={inputRef}
              onChange={handleChange}
              name="image"
              className="d-none"
              type="file"
            />
            <Button
              onClick={handleUploadImage}
              className="donate-btn"
              style={{ width: "50%" }}
            >
              Edit Image
            </Button>
            <span className="ms-2 fs-6 text-danger">
              *Only JPG, PNG, Max 100KB
            </span>
          </div>
          <Form.Control
            className="form-color"
            onChange={handleChange}
            value={title}
            name="title"
            size="sm"
            type="text"
            placeholder={product?.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGoals">
          <Row>
            <Col lg={6}>
              <Form.Control
                className="form-color"
                onChange={handleChange}
                value={stock}
                name="stock"
                size="sm"
                type="number"
                placeholder={product?.stock}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            className="form-color"
            onChange={handleChange}
            value={buyPrice}
            name="buyPrice"
            size="sm"
            type="number"
            placeholder={product?.buyPrice}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            className="form-color"
            onChange={handleChange}
            value={sellPrice}
            name="sellPrice"
            size="sm"
            type="number"
            placeholder={product?.sellPrice}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            className="form-color"
            onChange={handleChange}
            value={description}
            as="textarea"
            rows={6}
            name="description"
            size="sm"
            type="text"
            placeholder={product?.description}
          />
        </Form.Group>

        <Button
          // style={{ marginLeft: "75%" }}
          className="mt-5 donate-btn w-100 d-flex justify-content-center"
          type="submit"
          size="sm"
        >
          <div className="me-3">Edit Product</div>
          {handleSubmit.isLoading && (
            <ReactLoading type="spin" height="5%" width="5%" />
          )}
        </Button>
      </Form>
    </>
  )
}
