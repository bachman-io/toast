import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      {data.contentfulHomePage.showJumbotron && (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">{data.contentfulHomePage.jumbotronHeading}</h1>
            <p className="lead text-center">{data.contentfulHomePage.jumbotronSubheading}</p>
            <p className="text-center">
              <button className="btn btn-primary" type="button">
                <a href={data.contentfulHomePage.jumbotronButtonUrl} target="_blank" rel="nofollow noreferrer">{data.contentfulHomePage.jumbotronButtonText}</a>
              </button>
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
query HomePageQuery {
  contentfulHomePage {
    pageTitle
    showJumbotron
    showFeaturedPost
    showLatestPost
    jumbotronHeading
    jumbotronSubheading
    jumbotronButtonText
    jumbotronButtonUrl
  }
}

`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulHomePage: PropTypes.shape({
      pageTitle: PropTypes.string.isRequired,
      showJumbotron: PropTypes.bool.isRequired,
      showFeaturedPost: PropTypes.bool.isRequired,
      showLatestPost: PropTypes.string.isRequired,
      jumbotronHeading: PropTypes.string.isRequired,
      jumbotronSubheading: PropTypes.string.isRequired,
      jumbotronButtonUrl: PropTypes.string.isRequired,
      jumbotronButtonText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
