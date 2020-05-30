/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import "./style.css"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={'container fade-in'}>
          <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </div>
        <div className={'footer fade-in'}>
            Built with <span style={{color:'red'}}>❤</span> using <a href={'https://www.gatsbyjs.org/'} target={'_blank'} rel={'noreferrer'} title={'GatsbyJS'}>GatsbyJS</a>.<br/>Copyright © 2020 ROCHMAN.ID. All Rights Reserved
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
