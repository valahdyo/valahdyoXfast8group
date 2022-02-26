import { useState, useRef } from "react"
import ReactLoading from "react-loading"
import { useMutation } from "react-query"

import { Button, Form, Row, Col, Alert } from "react-bootstrap"

import { API } from "../../config/api"

export default function EditProduct({ product, handleCloseModal, refetch }) {
  const [validated, setValidated] = useState(false)
  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({})

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
    console.log(form)
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
    const form = event.target
    console.log(event)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  /**
   * Handle when attach image clicked
   */
  const handleUploadImage = () => {
    inputRef.current?.click()
  }

  /**
   * Handle submit button when clicked and request post method to backend
   */
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      handleValidForm(e)
      const formData = new FormData()
      console.log(form)
      if (form.image) {
        formData.append("image", form?.image[0], form.image[0]?.name)
      }
      form.title.length !== 0 && formData.append("title", form.title)
      form.stock.length !== 0 && formData.append("stock", form.stock)
      form.buyPrice.length !== 0 && formData.append("buyPrice", form.buyPrice)
      form.sellPrice.length !== 0 &&
        formData.append("sellPrice", form.sellPrice)
      form.description.length !== 0 &&
        formData.append("description", form.description)
      let format = ["title", "stock", "buyPrice", "sellPrice", "description"]

      for (var element of format) {
        if (!form[element]) {
          console.log(element)
          throw new Error("Please fill all field")
        }
      }

      //validation
      if (inputRef.current.files[0]) {
        validateFile(inputRef)
      } else {
        throw new Error("Please upload the image")
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
      const response = await API.post("/products", formData, config)
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
      {preview && (
        <img className="product-image-preview mb-3" src={preview} alt="image" />
      )}
      <Form
        noValidate
        validated={validated}
        onSubmit={(e) => handleSubmit.mutate(e)}
      >
        <Form.Group className="mb-3" controlId="formTitle">
          <div className="mb-3">
            <input
              ref={inputRef}
              onChange={handleChange}
              name="image"
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
          // style={{ marginLeft: "75%" }}
          className="mt-5 donate-btn w-100 d-flex justify-content-center"
          type="submit"
          size="sm"
        >
          <div className="me-3">Add Product</div>
          {handleSubmit.isLoading && (
            <ReactLoading type="spin" height="5%" width="5%" />
          )}
        </Button>
      </Form>
    </>
  )
}
