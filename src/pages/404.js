import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <div className="container">
          <h1 className="display-1">404 - Page Not Found</h1>
          <p className="lead">Fear not, for I have been notified of your wandering astray, and might fix it soon enough.</p>
          <p>In the meantime, I recommend going back from whence you came.</p>
      </div>
  </Layout>
)

export default NotFoundPage
