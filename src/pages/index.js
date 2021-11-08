import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Feature from "../components/feature"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero
      title="Summer styles are finally here"
      subtitle="This year, our new Winter collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die."
    />
    <Feature />
  </Layout>
)

export default IndexPage
