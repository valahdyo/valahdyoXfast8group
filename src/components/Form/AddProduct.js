import { useState, useRef } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"

import { API } from "../../config/api"

export default function EditProduct({ product }) {
  const [validated, setValidated] = useState(false)
  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    title: "",
    thumbnail: "",
    stock: "",
    buyPrice: "",
    sellPrice: "",
    description: "",
  })

  const { title, stock, description, buyPrice, sellPrice } = form

  /**
   * Thumbnail upload image input ref form
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
        console.log(inputRef.current.files[0])
      }
    }
  }

  const validateFile = (inputRef) => {
    const supportedFormat = ["image/jpeg", "image/png", "image/jpg"]
    const fileType = inputRef.current.files[0].type
    const fileSize = inputRef.current.files[0].size
    if (inputRef.current.files[0]) {
      if (inputRef && !supportedFormat.includes(fileType)) {
        console.log("executed")
        throw new Error("Not allowed file format")
      }
      if (inputRef && fileSize > 1024 * 100) {
        throw new Error("Image size is too big")
      }
    }
  }

  const validateName = (name) => {
    if (name) {
      const exist = product.filter((post) => {
        if (post.title.toLowerCase() === name.toLowerCase()) {
          return post
        }
      })
      if (exist.length > 0) {
        throw new Error("Product Name Already Exist")
      }
    }
  }

  const handleValidForm = (event) => {
    const form = event.currentTarget
    console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  /**
   * Handle when attach thumbnail clicked
   */
  const handleUploadImage = () => {
    inputRef.current?.click()
  }

  /**
   * Handle submit button when clicked and request post method to backend
   */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      handleValidForm(e)
      const formData = new FormData()
      if (form.thumbnail[0]) {
        formData.set("thumbnail", form?.thumbnail[0], form.thumbnail[0]?.name)
      }
      form.title.length !== 0 && formData.set("title", form.title)
      form.stock.length !== 0 && formData.set("stock", form.stock)
      form.buyPrice.length !== 0 && formData.set("buyPrice", form.buyPrice)
      form.sellPrice.length !== 0 && formData.set("sellPrice", form.sellPrice)
      form.description.length !== 0 &&
        formData.set("description", form.description)
      if (inputRef.current.files[0]) {
        validateFile(inputRef)
      } else {
        throw new Error("Please upload the image")
      }
      if (form.title.length !== 0) {
        validateName(form.title)
      }
      setMessage(null)
    } catch (error) {
      console.log(error)
      const alert = (
        <Alert variant="danger" className="py-1">
          {error.message}
        </Alert>
      )
      setMessage(alert)
    }
  }

  return (
    <>
      {true && message}
      {preview && (
        <img
          className="product-image-preview mb-3"
          src={preview}
          alt="thumbnail"
        />
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <div className="mb-3">
            <input
              ref={inputRef}
              onChange={handleChange}
              name="thumbnail"
              className="d-none"
              type="file"
              accept="image/png, image/gif, image/jpeg, image/jpg"
            />
            <Button
              onClick={handleUploadImage}
              className="donate-btn"
              style={{ width: "50%" }}
            >
              Upload Image
            </Button>
            <span className="ms-2 fs-6 text-danger">
              *Only JPG, PNG, Max 100KB
            </span>
          </div>
          <Form.Control
            required={true}
            className="form-color"
            onChange={handleChange}
            value={title}
            name="title"
            size="sm"
            type="text"
            placeholder="Title"
          />
          <Form.Control.Feedback type="invalid">
            This field cannot be empty.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicStock">
          <Col lg={6}>
            <Form.Control
              required={true}
              className="form-color"
              onChange={handleChange}
              value={stock}
              name="stock"
              size="sm"
              type="number"
              placeholder="Stock"
            />
            <Form.Control.Feedback type="invalid">
              This field cannot be empty.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBuyPrice">
          <Form.Control
            required={true}
            className="form-color"
            onChange={handleChange}
            value={buyPrice}
            name="buyPrice"
            size="sm"
            type="number"
            placeholder="Buy Price"
          />
          <Form.Control.Feedback type="invalid">
            This field cannot be empty.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSellPrice">
          <Form.Control
            required={true}
            className="form-color"
            onChange={handleChange}
            value={sellPrice}
            name="sellPrice"
            size="sm"
            type="number"
            placeholder="Sell Price"
          />
          <Form.Control.Feedback type="invalid">
            This field cannot be empty.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            required={true}
            className="form-color"
            onChange={handleChange}
            value={description}
            as="textarea"
            rows={6}
            name="description"
            size="sm"
            type="text"
            placeholder="Product Description"
          />
          <Form.Control.Feedback type="invalid">
            This field cannot be empty.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          onClick={(e) => handleSubmit(e)}
          // style={{ marginLeft: "75%" }}
          className="mt-5 donate-btn w-100"
          type="submit"
          size="sm"
        >
          Add Product
        </Button>
      </Form>
    </>
  )
}
