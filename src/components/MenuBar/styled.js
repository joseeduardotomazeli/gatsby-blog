import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  position: fixed;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 0;

  width: 3.75rem;
  height: 100vh;

  border-left: 1px solid #38444d;
  background-color: #192734;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  position: relative;

  display: block;

  padding: 1.1rem;

  width: 3.75rem;
  height: 3.75rem;

  color: #8899a6;
  cursor: pointer;

  &:hover {
    color: #1fa1f2;
  }
`
