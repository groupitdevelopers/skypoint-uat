const path = require("path");

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const { createRedirect } = actions

  {
    const queryResult = await graphql(`
      query {
        allPrismicSubpage {
          nodes {
            id
            url
          }
        }
      }
    `)

    const redirections = await graphql(`
      query {
        prismicRedirections {
          data {
            redirections {
              from
              to
            }
          }
        }
      }
    `)

    const redirects = redirections.data.prismicRedirections.data.redirections

    redirects.forEach(redirect => {
      createRedirect({
        fromPath: redirect.from,
        toPath: redirect.to
      })
    })

    for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
      createPage({
        path: page.url,
        component: path.resolve(__dirname, "./src/templates/using-dsg.js"),
        context: { id: page.id },
      });
    }
  }
}