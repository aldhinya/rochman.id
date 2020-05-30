// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import {kebabCase} from "lodash";

type Data = {
    site: {
        siteMetadata: {
            title: string
        }
    }
    allMarkdownRemark: {
        edges: {
            node: {
                excerpt: string
                frontmatter: {
                    title: string
                    date: string
                    description: string
                    tags: string
                }
                fields: {
                    slug: string
                }
            }
        }[]
    }
}

const BlogIndex = props => {
    const { data } = props
    const siteTitle = data.site.siteMetadata.title
    const allPosts = data.allMarkdownRemark.edges
    const allTags = data.tag.group;

    const emptyQuery = ""

    const [state, setState] = React.useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        const query = event.target.value
        const { data } = props

        const posts = data.allMarkdownRemark.edges || []

        const filteredData = posts.filter(post => {
            const { description, title, tags } = post.node.frontmatter
            return (
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                (tags &&
                    tags
                        .join("")
                        .toLowerCase()
                        .includes(query.toLowerCase()))
            )
        })

        setState({
            query,
            filteredData,
        })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts

    return (
        <Layout>
            <SEO
                title="Blog"
                description="Kumpulan artikel di blog ROCHMAN.ID."
            />
            <div className="panel">
                <div className="kotak-kecil">Fadhilatur Rochman</div>
                <br/>
                <div className="nama"><span>Blog</span></div>
                <div className="deskripsi blog">
                    <div className="kiri">
                        <p>Semua ungkapan isi hati dan pikiran akan saya tulis di sini. Semoga bermanfaat <span role={'img'} aria-label={'emoji'}>😁</span></p>
                        <div style={{marginTop:'-15px', marginBottom:'10px'}} title={'All'}>
                            <Link to={`/blog/`}>
                                <div className={`list-tags active`}>#All <span className="count">{data.tag.totalCount}</span></div>
                            </Link>
                            {allTags.map(tag => (
                                <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`} title={tag.fieldValue}>
                                    <div className="list-tags">#{tag.fieldValue} <span className="count">{tag.totalCount}</span></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="kanan">
                        <input
                            type="text"
                            aria-label="Search"
                            placeholder="Search article here ..."
                            onChange={handleInputChange}
                        />
                        {posts.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug
                            const tag = node.frontmatter.tags
                            return (
                                <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}/`} title={title}>
                                    <div key={node.fields.slug} className="kotak-artikel">
                                        <span style={{ fontSize:'13px'}} className={'tanggal'}>{node.frontmatter.date}</span>
                                        <br/>
                                        <h3 style={{ display: 'inline'}}>
                                            {title}
                                        </h3>
                                        <p className="artikel-detail">
                                            <Tags listOfTags={tag} />
                                            {node.frontmatter.description}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
    tag:allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`