import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numberOfPages,
  previousPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={previousPage}>← página anterior</Link>}

    <p>
      {currentPage} de {numberOfPages}
    </p>

    {!isLast && <Link to={nextPage}>proxima página →</Link>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
