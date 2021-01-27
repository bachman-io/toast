import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import RichText from '../components/Contentful/RichText';

function Announcements({ data }) {
  return (
    <Layout>
      <SEO title="Announcements" description="The latest site news for Bachman I/O" />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Announcements</li>
              </ol>
            </nav>
            <h1 className="display-1">Announcements</h1>
            <p>
              Have a gander at the site&apos;s current and past announcements. These were initially
              {' '}
              on the Home page, but were moved here as new ones showed up. In short, it&apos;s an
              {' '}
              archive.
            </p>
            <hr />
          </div>
        </div>
        { data.announcements.nodes.map((a) => (
          <div key={a.title} className="row">
            <div className="col">
              <h1>{ a.title }</h1>
              <p><em>{ a.publishDate }</em></p>
              <RichText json={a.content.json} />
              <hr />
              ~
              <hr />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Announcements;

export const pageQuery = graphql`
query AnnouncementQuery {
  announcements: allContentfulAnnouncement(sort: {fields: publishDate, order: DESC}) {
    nodes {
      title
      publishDate(fromNow: true)
      content {
        json
      }
    }
  }
}
`;

Announcements.propTypes = {
  data: PropTypes.shape({
    announcements: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      content: PropTypes.objectOf(PropTypes.any).isRequired,
    }))).isRequired,
  }).isRequired,
};
