import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  display: flex;

  color: #8899a6;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;

  padding: 2rem 3rem;

  width: 100%;

  border-bottom: 1px solid #38444d;
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90px;
  min-width: 90px;

  border-radius: 50%;
  background: ${props => props.background || "#1fa1f2"};
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  margin: 0.2rem 0 0.5rem;

  font-size: 1.6rem;
  font-weight: 700;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`