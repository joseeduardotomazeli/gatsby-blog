import styled from "styled-components"

export const PostHeader = styled.header`
  margin: auto;
  padding: 5rem 5rem 0;

  max-width: 70rem;

  color: #fff;
`

export const PostTitle = styled.h1`
  margin: 1rem auto;
  padding: 0 1.4rem;

  font-size: 4rem;
  font-weight: 700;
`

export const PostDescription = styled.h2`
  padding: 0 1.4rem;

  font-size: 2rem;
  font-weight: 200;
`

export const PostDate = styled.p`
  padding: 0 1.4rem;

  font-size: 1.1rem;
  font-weight: 100;
`

export const PostMain = styled.section`
  margin: auto;
  padding: 2rem 5rem;

  max-width: 70rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    padding: 0 1.4rem;

    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    color: #fff;
  }

  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;

    transition: opacity 0.5s;

    svg {
      color: #fff;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    margin: 0 auto 1.6rem;
    padding-left: 2.5rem;

    list-style: disc;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    margin: 1.875rem auto;
    max-width: 100%;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    margin: 3.125rem auto;
    padding: 0 1.875rem;

    border-left: 0.3rem solid #1fa1f2;
    color: #fff;
  }

  hr {
    margin: 3rem auto;
    border: 1px solid #38444d;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: 0.069rem;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  .gatsby-resp-image-background-image {
    opacity: 1 !important;
    z-index: 2;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }
`
