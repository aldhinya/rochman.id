// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react';
import { Link, graphql } from 'gatsby';

import { kebabCase } from 'lodash';
import SEO from "../components/seo"

import Layout from '../components/layout';
const TagsPage = ({ data }) => {
    const allTags = data.allMarkdownRemark.group;

    return (
        <Layout>
            <SEO
                title={'Tags'}
                description={'Kumpulan tags di blog ROCHMAN.ID.'}
            />
            <div className={'panel'}>
                <div className={'kotak-kecil'}>Fadhilatur Rochman</div>
                <br/>
                <div className={'nama'}><span>All Tags</span></div>
                <br/>
                <div className={'deskripsi blog'}>
                        {allTags.map(tag => (
                                <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`} title={tag.fieldValue}>
                                    <div className={'list-tags'}>#{tag.fieldValue} <span className={'count'}>{tag.totalCount}</span></div>
                                </Link>
                        ))}
                        <br/><br/>
                </div>
            </div>
        </Layout>
    );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;