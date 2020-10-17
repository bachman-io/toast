import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ReviewSummary from '../components/Contentful/ReviewSummary';

function ReviewList({ pageContext, data }) {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/reviews/' : `/reviews/page-${(currentPage - 1).toString()}`;
  const nextPage = `/reviews/page-${(currentPage + 1).toString()}`;
  const { reviews } = data;

  return (
    <Layout>
      <SEO title={isFirst ? 'Reviews' : `Reviews Page ${currentPage}`} description={'Collin Bachman\'s fantastic blog, sort of'} />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {isFirst && (
                  <li className="breadcrumb-item">Reviews</li>
                )}
                {!isFirst && (
                  <>
                    <li className="breadcrumb-item"><Link to="/reviews/">Reviews</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {`Page ${currentPage}`}
                    </li>
                  </>
                )}
              </ol>
            </nav>
            <h1 className="display-1">Reviews</h1>
            {isFirst && (
              <p>
                I review all sorts of media every so often. You can read up on my methodology at
                {' '}
                <Link to="/blog/2018-06-16-how-i-review-things">this blog post</Link>
                .
              </p>
            )}
            <hr />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-2">
          { reviews.nodes.map((review) => (
            <div key={review.title} className="col">
              <ReviewSummary review={review} />
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

export default ReviewList;

export const pageQuery = graphql`
query ReviewListQuery($limit: Int!, $skip: Int!) {
  reviews: allContentfulReview(limit: $limit, skip: $skip, sort: {fields: publishDate, order: DESC}) {
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
      slug
      score
    }
  }
}

`;

ReviewList.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape().isRequired,
};
