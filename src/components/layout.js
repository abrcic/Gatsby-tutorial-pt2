import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
  <div 
  css={`
      margin: 0 auto;
      max-width: 700px;
      padding: 2;
      padding-top: 1.5;
    `}
  >
  
    <Link to={`/`}>
      <h3 
      css={`
      margin-bottom: 2;
      display: inline-block;
      font-style: normal;
    `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>

    <Link to={`/about/`}
      css={`
        float: right;
      `}
    >
      About
    </Link>
    {children}
  </div>
   )}
   />
)