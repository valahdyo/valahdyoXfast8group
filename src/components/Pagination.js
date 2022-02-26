export default function Pagination({
  totalProduct,
  productPerPage,
  nextPage,
  prevPage,
  paginate,
}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => prevPage()}>
            Previous
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a onClick={() => paginate(num)} href="#" className="page-link">
              {num}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={() => nextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
