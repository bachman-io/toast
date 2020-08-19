import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
    render() {
        const { data } = this.props
        return(
            <Layout>
                <SEO title="Home" />
                {data.contentfulHomePage.showJumbotron && <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-center">{data.contentfulHomePage.jumbotronHeading}</h1>
                        <p className="lead text-center">{data.contentfulHomePage.jumbotronSubheading}</p>
                        <p className="text-center">
                            <button className="btn btn-primary">
                                <a href={data.contentfulHomePage.jumbotronButtonUrl} target="_blank" rel="nofollow noreferrer">{data.contentfulHomePage.jumbotronButtonText}</a>
                            </button>
                        </p>
                    </div>
                </div>}
            </Layout>
        )
    }
}

export default IndexPage

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

`