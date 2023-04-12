require("dotenv").config({
  path: `.env`,
})

import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './src/linkResolver'
import PageTemplate from './src/components/layout'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: PageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)