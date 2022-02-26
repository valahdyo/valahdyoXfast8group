import NavbarComponent from "../components/Navbar"
import ProductCard from "../components/Card"
import AddModal from "../components/Modal/AddModal"
import Pagination from "../components/Pagination"
import { useQuery } from "react-query"

import { Container, Row, Button, Form } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { API } from "../config/api"
import fakeProduct from "../fakeData/product"

export default function Home() {
  const [query, setQuery] = useState("")
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    productPerPage: 8,
  })

  // Request to server product data
  let { data: dataProduct, refetch } = useQuery(
    "dataProductCache",
    async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      const response = await API.get("/products")
      return response?.data.data
    }
  )

  //Toggle show / hide add product modal
  const [isAdd, setIsAdd] = useState(false)
  const handleCloseModal = () => setIsAdd(false)

  //Pagination
  const paginate = (pageNum) => {
    setPageInfo({ ...pageInfo, currentPage: pageNum })
  }
  const nextPage = () => {
    if (pageInfo.currentPage < dataProduct.length / pageInfo.productPerPage)
      setPageInfo({ ...pageInfo, currentPage: pageInfo.currentPage + 1 })
  }
  const prevPage = () => {
    if (pageInfo.currentPage > 1)
      setPageInfo({ ...pageInfo, currentPage: pageInfo.currentPage - 1 })
  }
  //Get first and last index of product on one page
  const indexOfLastPost = pageInfo.currentPage * pageInfo.productPerPage
  const indexOfFirstPost = indexOfLastPost - pageInfo.productPerPage

  return (
    <>
      <NavbarComponent refetch={refetch} />
      <div className="d-flex justify-content-between mb-3">
        <h4 className="mt-3 ms-3">All Product ({dataProduct?.length})</h4>
        <div className="d-flex">
          <Form className="d-flex p-3">
            <Form.Control
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search Product"
              className="me-2"
              name="query"
              aria-label="Search"
            />
          </Form>
          {/* Conditional rendering button add product */}
          {localStorage.isLogin === "true" && (
            <Button className="addProductBtn" onClick={() => setIsAdd(true)}>
              + Add Product
            </Button>
          )}
        </div>
      </div>
      <Container className="ps-3" fluid>
        <Row>
          {/* Searching by product name using filter method */}
          {/* Slice data product for every page */}
          {query.length > 0
            ? dataProduct
                ?.filter((post) => {
                  if (query === "") {
                    return post
                  } else if (
                    post.title.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return post
                  }
                })
                ?.map((item, index) => (
                  <ProductCard product={item} key={index} refetch={refetch} />
                ))
            : dataProduct
                ?.slice(indexOfFirstPost, indexOfLastPost)
                .map((item, index) => (
                  <ProductCard product={item} key={index} refetch={refetch} />
                ))}
        </Row>
        {/* Page button */}
        <Pagination
          productPerPage={pageInfo.productPerPage}
          totalProduct={dataProduct?.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </Container>

      <div class="container"></div>
      <div class="footer-padding"></div>
      <div class="footer">
        <p>Made for test by Valahdyo</p>
      </div>
      {/* Component Add Modal Product */}
      <AddModal
        showAdd={isAdd}
        handleCloseModal={handleCloseModal}
        product={dataProduct}
        refetch={refetch}
      />
    </>
  )
}
