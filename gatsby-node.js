/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const { GraphQLString } = require('gatsby/graphql');

/*
 Add full URI (e.g. 2018-06-17-how-i-review-things)
 to Contentful Blog Posts
*/
exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'ContentfulBlogPost') {
    return {
      fullURI: {
        type: GraphQLString,
        resolve: (source) => {
          const date = new Date(source.publishDate);
          return `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString('en', { minimumIntegerDigits: 2 })}-${date.getDate().toLocaleString('en', { minimumIntegerDigits: 2 })}-${source.slug}`;
        },
      },
    };
  }
  return {};
};

/*
Create Blog Post pages
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const Page = path.resolve('./src/templates/Page.jsx');
  const BlogPost = path.resolve('./src/templates/BlogPost.jsx');
  const Review = path.resolve('./src/templates/Review.jsx');
  return graphql(`
  query PageQuery {
  blogPosts: allContentfulBlogPost {
    nodes {
      fullURI
    }
  }
  reviews: allContentfulReview {
    nodes {
      slug
    }
  }
  pages: allContentfulPage {
    nodes {
      slug
    }
  }
}
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.pages.nodes.forEach((page) => {
      createPage({
        path: `/${page.slug}/`,
        component: Page,
        context: {
          slug: page.slug,
        },
      });
    });
    result.data.blogPosts.nodes.forEach((post) => {
      createPage({
        path: `/blog/${post.fullURI}/`,
        component: BlogPost,
        context: {
          fullURI: post.fullURI,
        },
      });
    });
    result.data.reviews.nodes.forEach((review) => {
      createPage({
        path: `/reviews/${review.slug}`,
        component: Review,
        context: {
          slug: review.slug,
        },
      });
    });
  });
};
