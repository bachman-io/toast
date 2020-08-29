import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function ReviewSummary(props) {
  const { review, cardTitle } = props;
  return (
    <div className="card mb-5">
      { cardTitle && (
        <h2 className="card-header">{ cardTitle }</h2>
      )}
      { review.coverImage && (
        <picture>
          <source type="image/webp" srcSet={review.coverImage.fluid.srcSetWebp} />
          <source type="image/png" srcSet={review.coverImage.fluid.srcSet} />
          <img className="card-img-top" src={review.coverImage.fluid.src} alt={review.coverImage.description} />
        </picture>
      )}
      <div className="card-body">
        <p className="card-text">{ review.summary.summary }</p>
        <p className="card-text">
          <strong>
            Score:
            {` ${review.score}/10`}
          </strong>
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/reviews/${review.slug}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
}

export default ReviewSummary;

ReviewSummary.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.objectOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    coverImage: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
        }),
        description: PropTypes.string,
      }),
    ]).isRequired,
  }).isRequired,
  cardTitle: PropTypes.string,
};

ReviewSummary.defaultProps = {
  cardTitle: null,
};
