/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import DefaultImage from "../images/artikel.jpg"
function SEO({ description, lang, meta, title, featuredImage }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl
  const { pathname } = useLocation()

  var titleTemplateFix
  if(pathname==='/') {
   titleTemplateFix = site.siteMetadata.title
  } else {
   titleTemplateFix = title +" | " + site.siteMetadata.title
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleTemplateFix}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: 'fadhilatur rochman, aldhi, rochman.id, aldhinya, '+titleTemplateFix,
        },
        {
          property: `og:title`,
          content: titleTemplateFix,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl+pathname,
        },
        {
          property: `og:image`,
          content: siteUrl+featuredImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@aldhinya`,
        },
        {
          name: `twitter:title`,
          content: titleTemplateFix,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: siteUrl+featuredImage,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:site`,
          content: `@aldhinya`,
        },
        {
          name: `google-site-verification`,
          content: `mPOwmxZEsm9O0ktZjvOAVXAzZ1mfLHZ31kL7_xXPYkI`,
        },
        {
          name: `msvalidate.01`,
          content: `1E49F1D332D68C0545F73D629A4C1F29`,
        },
        {
          name: `yandex-verification`,
          content: `d43159b51e0016f8`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `id`,
  meta: [],
  description: ``,
  featuredImage: DefaultImage,
}

SEO.propTypes = {
  description: PropTypes.string,
  featuredImage: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
