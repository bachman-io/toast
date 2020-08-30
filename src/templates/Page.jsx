import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RichText from '../components/Contentful/RichText';

function Page({ data }) {
  const {
    title, summary, nsfw, content,
  } = data.page;

  return (
    <Layout>
      <SEO
        title={
        nsfw ? `[NSFW] ${title}` : `${title}`
      }
        description={summary.summary}
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{title}</li>
              </ol>
            </nav>
            <RichText json={content.json} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;

export const pageQuery = graphql`
query PageQuery($slug: String!) {
  page: contentfulPage(slug: {eq: $slug}) {
    title
    summary {
      summary
    }
    nsfw
    content {
      json
    }
  }
}

`;

Page.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      title: PropTypes.string.isRequired,
      summary: PropTypes.objectOf(PropTypes.string).isRequired,
      nsfw: PropTypes.bool.isRequired,
      content: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,
  }).isRequired,
};
