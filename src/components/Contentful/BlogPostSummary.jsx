import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function BlogPostSummary(props) {
  const { post, cardTitle } = props;
  return (
    <div className="card mb-5 h-100">
      { cardTitle && (
        <h2 className="card-header">{ cardTitle }</h2>
      )}
      { post.coverImage && (
        <Link to={`/blog/${post.fullURI}`}>
          <picture>
            <source type="image/webp" srcSet={post.coverImage.fluid.srcSetWebp} />
            <source type="image/png" srcSet={post.coverImage.fluid.srcSet} />
            <img className="card-img-top" src={post.coverImage.fluid.src} alt={post.coverImage.description} />
          </picture>
        </Link>
      )}
      <div className="card-body">
        { !post.coverImage && (
          <h2 className="card-title"><Link to={`/blog/${post.fullURI}`}>{ post.title }</Link></h2>
        )}
        <p className="card-text">{ post.summary.summary }</p>
      </div>
      <div className="card-footer">
        <Link to={`/blog/${post.fullURI}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
}

export default BlogPostSummary;

BlogPostSummary.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.objectOf(PropTypes.string).isRequired,
    fullURI: PropTypes.string.isRequired,
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

BlogPostSummary.defaultProps = {
  cardTitle: null,
};
