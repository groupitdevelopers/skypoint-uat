import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './src/linkResolver'
import PageTemplate from './src/pages/index'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "skypoint-uat",
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