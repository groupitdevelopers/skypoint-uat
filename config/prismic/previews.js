import { linkResolver } from "./link-resolver";

import pageTemplate from "../../src/templates/page";
import subPageTemplate from "../../src/templates/subPage";

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: {
      homePage: pageTemplate
    },
  },
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: {
      homePage: subPageTemplate
    },
  }
]
