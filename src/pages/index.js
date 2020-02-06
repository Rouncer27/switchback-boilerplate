import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo/Seo"

import Styleguide from "../components/Styleguide"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styleguide />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
