// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const queryResult = await graphql(`
//     query {
//       allPrismicSubpage {
//         nodes {
//           id
//           uid
//           url
//         }
//       }
//     }
//   `)

//   const productTemplate = path.resolve(`src/templates/using-dsg.js`)
//   for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
//       createPage({
//         path: page.url,
//         component: productTemplate,
//         context: { id: page.id },
//       });
//     }
// }


const path = require("path");

exports.createPages = async (gatsbyContext) => {
  const { actions, graphql } = gatsbyContext;
  const { createPage } = actions;

  {
    const queryResult = await graphql(`
      query {
        allPrismicPage {
          nodes {
            id
            url
          }
        }
      }
    `);

    for (const page of queryResult.data.allPrismicPage.nodes ?? []) {
      createPage({
        path: page.url,
        component: path.resolve(__dirname, "./src/templates/using-dsg.js"),
        context: { id: page.id },
      });
    }
  }
}
