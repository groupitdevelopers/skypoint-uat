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
        prismicRedierctions {
          data {
            redirections {
              from
              to
            }
          }
        }
      }
    `)

    const redirects = redirections.data.prismicRedierctions.data.redirections

    redirects.forEach(redirect => {
      console.log("FROM: ", redirect.from)
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