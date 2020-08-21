/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Header from './Header';
import '../scss/app.scss';

function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
          siteMetadata {
            version
          }
        }
        }`,
  );
  return (
    <>
      <Header />
      {children}
      <footer id="footer" className="mt-5">
        <div className="container">
          <hr />
          <div className="row pt-3">
            <div className="col-sm">
              <p className="text-center text-sm-left">
                Bachman I/O | Version
                { ` ${site.siteMetadata.version} `}
                | Built:
                { ` ${new Date(site.buildTime).toLocaleString('en-us', { dateStyle: 'short', timeStyle: 'short' })}`}
                <br />
                &copy;
                {' '}
                { new Date().getFullYear() }
                {' '}
                <Link to="/">Collin Bachman</Link>
                {' '}
                |
                {' '}
                <Link to="/privacy">Privacy</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
