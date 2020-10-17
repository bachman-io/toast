import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogPostSummary from '../components/Contentful/BlogPostSummary';

function BlogList({ pageContext, data }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog/' : `/blog/page-${(currentPage - 1).toString()}`;
  const nextPage = `/blog/page-${(currentPage + 1).toString()}`;
  const { posts } = data;

  return (
    <Layout>
      <SEO title={isFirst ? 'Blog' : `Blog Page ${currentPage}`} description={'Collin Bachman\'s fantastic blog, sort of'} />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {isFirst && (
                  <li className="breadcrumb-item">Blog</li>
                )}
                {!isFirst && (
                  <>
                    <li className="breadcrumb-item"><Link to="/blog/">Blog</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {`Page ${currentPage}`}
                    </li>
                  </>
                )}
              </ol>
            </nav>
            <h1 className="display-1">Blog</h1>
            {isFirst && (
            <p>
              Welcome to the Blog. I try to keep this updated somewhat often; I&apos;ve tried in the
              {' '}
              past to challenge myself to keep it up to date, but was unsuccessful. That said, I do
              {' '}
              try to update at least once a week.
            </p>
            )}
            <hr />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-2">
          { posts.nodes.map((post) => (
            <div key={post.title} className="col">
              <BlogPostSummary post={post} />
            </div>
          )) }
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {!isFirst && (
                  <li className="page-item">
                    <Link className="page-link" to={prevPage} rel="prev">Previous</Link>
                  </li>
                )}
                {Array.from({ length: numPages }, (_, i) => (
                  <li key={`pagination-page-${i + 1}`} className="page-item">
                    <Link className="page-link" to={i === 0 ? '/blog' : `/blog/page-${i + 1}`}>{i + 1}</Link>
                  </li>
                ))}
                {!isLast && (
                  <li className="page-item">
                    <Link className="page-link" to={nextPage} rel="prev">Next</Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogList;

export const pageQuery = graphql`
query BlogListQuery($limit: Int!, $skip: Int!) {
  posts: allContentfulBlogPost(limit: $limit, skip: $skip, sort: {fields: publishDate, order: DESC}) {
    nodes {
      coverImage {
        fluid {
          src
          srcSet
          srcSetWebp
        }
        description
      }
      title
      publishDate(fromNow: true)
      summary {
        summary
      }
      nsfw
      fullURI
    }
  }
}

`;

BlogList.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape().isRequired,
};
