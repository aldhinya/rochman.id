import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import { CommentCount } from 'disqus-react'
import Tags from "../components/tags"

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark
    const tags = post.frontmatter.tags || []
    const { previous, next } = pageContext
    const title = post.frontmatter.title
    const thumb = post.frontmatter.featuredImage.childImageSharp.sizes.src
    const deskripsi = post.frontmatter.description + " Ditulis oleh " + data.site.siteMetadata.title + "."
    const urlPost = data.site.siteMetadata.siteUrl+"/blog"+post.fields.slug

    let disqusConfig = {
        shortname: 'rochman-id',
        config: { identifier: title,urlPost },
    };
    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={deskripsi}
                featuredImage={thumb || post.excerpt}
            />
            <div className="panel">
                <div className="kotak-kecil" style={{ marginRight:'8px', marginBottom:'5px'}}>Fadhilatur Rochman</div>
                <div className="kotak-kecil" style={{ marginRight:'8px', marginBottom:'5px'}}>{post.frontmatter.date}</div>
                <div className="kotak-kecil" style={{ marginBottom:'5px'}}><CommentCount {...disqusConfig}/></div>
                <br/>
            <div className="post">
                <div style={{ borderBottom: '1px dotted #999', paddingBottom:'10px'}}>
                    <h1 className="judul-blog">{post.frontmatter.title}</h1>
                    <Tags listOfTags={tags} />
                </div>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
                <div className="share-button">
                    <span className="share-title">Share this article with Your friends:</span><br/>
                    <a onClick={() => {navigator.clipboard.writeText(post.frontmatter.title+ ". " +urlPost)}} style={{cursor:'pointer', background:'#57606f'}}>Copy Link</a>
                    <a href={'https://www.facebook.com/sharer/sharer.php?u=' + urlPost} target="_blank" style={{background:'#3B5998'}} title="Share to Facebook" rel="noopener noreferrer">Facebook</a>
                    <a href={'https://api.whatsapp.com/send?text=' + post.frontmatter.title+ ". " + urlPost } target="_blank" style={{background:'#25D366'}} title="Share to WhatsApp" rel="noopener noreferrer">WhatsApp</a>
                    <a href={'https://twitter.com/share?url=' + urlPost + "&text=" + post.frontmatter.title + ". "} target="_blank" style={{background:'#38A1F3'}} title="Share to Twitter" rel="noopener noreferrer">Twitter</a>
                    <a href={'https://www.linkedin.com/shareArticle?url=' + urlPost } target="_blank" style={{background:'#0e76a8'}} title="Share to LinkedIn" rel="noopener noreferrer">LinkedIn</a>
                    <a href={'https://twitter.com/search?q=' + urlPost} target="_blank" style={{background:'#38A1F3'}} title="Discuss on Twitter" rel="noopener noreferrer">Discuss on Twitter</a>
                </div>
            <nav className="footer-post">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li style={{marginBottom:'10px'}} >
                        {previous && (
                            <Link to={`/blog/${previous.fields.slug}/`} rel="prev" title={previous.frontmatter.title}>
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li style={{marginBottom:'10px'}} >
                        {next && (
                            <Link to={`/blog/${next.fields.slug}/`} rel="next" title={next.frontmatter.title}>
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
                <DiscussionEmbed {...disqusConfig} className="disqus-komen" />

            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
            slug
          }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
         featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
      }
    }
  }
`
