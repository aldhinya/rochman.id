import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from "../components/seo"
import {kebabCase} from "lodash";
import Tagss from "../components/tags"

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext;
    const { edges} = data.allMarkdownRemark;
    const tagTitleSeo = `Blog Tag #${tag}`;
    const tagDescriptionSeo = `Kumpulan Artikel dengan Tema ${tag} di ROCHMAN.ID.`;
    const tagAktif = tag;
    const allTags = data.tag.group;

    const emptyQuery = ""

    const [state, setState] = React.useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        const query = event.target.value
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
    const posts = hasSearchResults ? filteredData : edges

    return (
        <Layout>
            <SEO
                title={tagTitleSeo}
                description={tagDescriptionSeo}
            />
            <div className={'panel'}>
                <div className={'nama'}><span>Blog - #<span style={{textTransform:'capitalize'}}>{tag}</span></span></div>
                <div className={'deskripsi blog'}>
                    <div className={'kiri'}>
                        <p>Semua ungkapan isi hati dan pikiran akan saya tulis di sini. Semoga bermanfaat <span role={'img'} aria-label={'emoji'}>😁</span></p>
                        <div style={{marginTop: '-15px', marginBottom:'10px'}}>
                            <Link to={`/blog/`}>
                                <div className={`list-tags`}>#All <span className={'count'}>{data.tag.totalCount}</span></div>
                            </Link>
                            {allTags.map(tag => (
                                <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
                                    <div className={`list-tags ${tagAktif===tag.fieldValue ? 'active' : 'a'}`}>#{tag.fieldValue} <span className={'count'}>{tag.totalCount}</span></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={'kanan'}>
                        <input
                            type={'text'}
                            aria-label={'Search'}
                            placeholder={`Search the article with tag #${tag} here ...`}
                            onChange={handleInputChange}
                        />
                        {posts.map(({ node }) => {
                            const { title } = node.frontmatter
                            const listTag = node.frontmatter.tags
                            return (
                                <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}/`}>
                                    <article className={'kotak-artikel'}>
                                        <span className={'tanggal'}>{node.frontmatter.date}</span>
                                        <br/>
                                        <h3>{title}</h3>
                                        <p className={'artikel-detail'}>
                                            <Tagss listOfTags={listTag} />
                                            {node.frontmatter.description}
                                        </p>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM DD, YYYY")
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
`;