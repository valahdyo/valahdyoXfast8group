import { useState, useRef } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"

import { API } from "../../config/api"

export default function EditProduct({ refetch, product, handleEditFund }) {
  const [startDate, setStartDate] = useState(null)
  const [preview, setPreview] = useState(product?.image)
  const [uploadedFileName, setUploadedFileName] = useState(null)
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    title: "",
    thumbnail: "",
    goal: "",
    description: "",
  })

  const { title, goal, description } = form

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
        setUploadedFileName(inputRef.current.files[0].name)
        let url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
      }
    }
  }

  /**
   * Handle when attach thumbnail clicked
   */
  const handleUploadImage = () => {
    inputRef.current?.click()
  }

  /**
   * Handle "X" button when clicked to reset preview and name file
   */
  const resetFile = () => {
    setUploadedFileName(null)
    inputRef.current.file = null
    form.thumbnail = ""
  }

  /**
   * Handle change when date form selected
   * @param {date} date
   */
  const handleChangeDate = (date) => {
    setStartDate(date)
  }

  /**
   * Handle submit button when clicked and request post method to backend
   */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      const formData = new FormData()
      if (form.thumbnail[0]) {
        formData.set("thumbnail", form?.thumbnail[0], form.thumbnail[0]?.name)
      }
      form.title.length !== 0 && formData.set("title", form.title)
      form.goal.length !== 0 && formData.set("goal", form.goal)
      form.description.length !== 0 &&
        formData.set("description", form.description)
      startDate && formData.set("targetDate", new Date(startDate).toISOString())

      setMessage(null)
      handleEditFund()
      refetch()
    } catch (error) {
      console.log(error)
      const alert = (
        <Alert variant="danger" className="py-1">
          Cannot Update Product Detail
        </Alert>
      )
      setMessage(alert)
    }
  }

  return (
    <>
      {true && message}
      <img
        className="product-image-preview mb-3"
        src={preview}
        alt="thumbnail"
      />
      <Form /*onSubmit={handleOnSubmit}*/>
        <Form.Group className="mb-3" controlId="formTitle">
          <div className="mb-3">
            <input
              ref={inputRef}
              onChange={handleChange}
              name="thumbnail"
              className="d-none"
              type="file"
            />
            <Button
              onClick={handleUploadImage}
              className="donate-btn"
              style={{ width: "50%" }}
            >
              Edit Thumbnail
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
                value={goal}
                name="goal"
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
            value={description}
            name="description"
            size="sm"
            type="number"
            placeholder={product?.price.buy}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control
            className="form-color"
            onChange={handleChange}
            value={description}
            name="description"
            size="sm"
            type="number"
            placeholder={product?.price.sell}
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
          onClick={(e) => handleSubmit.mutate(e)}
          // style={{ marginLeft: "75%" }}
          className="mt-5 donate-btn w-100"
          type="submit"
          size="sm"
        >
          Edit Fund
        </Button>
      </Form>
    </>
  )
}
