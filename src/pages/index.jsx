import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogPostSummary from '../components/Contentful/BlogPostSummary';
import ReviewSummary from '../components/Contentful/ReviewSummary';
import RichText from '../components/Contentful/RichText';

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      {data.contentfulHomePage.showJumbotron && (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-1 text-center">{data.contentfulHomePage.jumbotronHeading}</h1>
            <p className="lead text-center">{data.contentfulHomePage.jumbotronSubheading}</p>
            { data.contentfulHomePage.showJumbotronButton && (
              <p className="text-center">
                <button className="btn btn-primary" type="button">
                  <a href={data.contentfulHomePage.jumbotronButtonUrl} target="_blank" rel="nofollow noreferrer">{data.contentfulHomePage.jumbotronButtonText}</a>
                </button>
              </p>
            )}
          </div>
        </div>
      )}
      <div className="container">
        { data.contentfulHomePage.showFeaturedPost && (
          <div className="row">
            <div className="col" />
            <div className="col-10 mb-5">
              <BlogPostSummary cardTitle="Featured Blog Post" post={data.contentfulHomePage.featuredPost} />
            </div>
            <div className="col" />
          </div>
        ) }
        { (data.contentfulHomePage.showLatestPost && data.contentfulHomePage.showLatestReview) && (
          <div className="row">
            <div className="col">
              <div className="card-group h-100">
                <BlogPostSummary cardTitle="Latest Blog Post" post={data.latestPost.nodes[0]} />
                <ReviewSummary cardTitle="Latest Review" review={data.latestReview.nodes[0]} />
              </div>
            </div>
          </div>
        ) }
        <div className="row">
          <div className="col">
            <hr />
            <h1 className="display-1 text-center">Site News</h1>
            <h1>{ data.latestAnnouncement.nodes[0].title }</h1>
            <p><em>{ data.latestAnnouncement.nodes[0].publishDate }</em></p>
            <RichText json={data.latestAnnouncement.nodes[0].content.json} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
query HomePageQuery {
  contentfulHomePage {
    pageTitle
    showJumbotron
    showJumbotronButton
    showFeaturedPost
    showLatestPost,
    showLatestReview,
    jumbotronHeading
    jumbotronSubheading
    jumbotronButtonText
    jumbotronButtonUrl
    featuredPost {
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
  latestPost: allContentfulBlogPost(sort: {fields: publishDate, order: DESC}, limit: 1) {
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
  latestReview: allContentfulReview(sort: {fields: publishDate, order: DESC}, limit: 1) {
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
      score
      slug
    }
  }
  latestAnnouncement: allContentfulAnnouncement(sort: {fields: publishDate, order: DESC}, limit: 1) {
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulHomePage: PropTypes.shape({
      pageTitle: PropTypes.string.isRequired,
      showJumbotron: PropTypes.bool.isRequired,
      showFeaturedPost: PropTypes.bool.isRequired,
      showLatestPost: PropTypes.bool.isRequired,
      showLatestReview: PropTypes.bool.isRequired,
      jumbotronHeading: PropTypes.string.isRequired,
      jumbotronSubheading: PropTypes.string.isRequired,
      showJumbotronButton: PropTypes.bool.isRequired,
      jumbotronButtonUrl: PropTypes.string.isRequired,
      jumbotronButtonText: PropTypes.string.isRequired,
      featuredPost: PropTypes.shape({
        coverImage: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
          }),
          description: PropTypes.string,
        }),
        title: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
        summary: PropTypes.shape({
          summary: PropTypes.string.isRequired,
        }).isRequired,
        nsfw: PropTypes.bool.isRequired,
        fullURI: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    latestPost: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape(
      {
        coverImage: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string,
            srcSet: PropTypes.string,
            srcSetWebp: PropTypes.string,
          }),
          description: PropTypes.string,
        }),
        title: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
        summary: PropTypes.shape({
          summary: PropTypes.string.isRequired,
        }).isRequired,
        nsfw: PropTypes.bool.isRequired,
        fullURI: PropTypes.string.isRequired,
      },
    ))).isRequired,
    latestReview: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      coverImage: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
        }),
        description: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      summary: PropTypes.shape({
        summary: PropTypes.string.isRequired,
      }).isRequired,
      nsfw: PropTypes.bool.isRequired,
      score: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
    }))).isRequired,
    latestAnnouncement: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string.isRequired,
      content: PropTypes.objectOf(PropTypes.any).isRequired,
    }))).isRequired,
  }).isRequired,
};
