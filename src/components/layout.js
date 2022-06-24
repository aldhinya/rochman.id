/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./style.css"

import {graphql, useStaticQuery} from "gatsby"

import Header from "./header"
import PropTypes from "prop-types"
import React from "react"

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
            {/* Built with <span style={{color:'red'}}>❤</span> using <a href={'https://www.gatsbyjs.org/'} target={'_blank'} rel={'noreferrer'} title={'GatsbyJS'}>GatsbyJS</a>.<br/> */}
            Copyright © 2021-2022 ROCHMAN.ID. All Rights Reserved
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
