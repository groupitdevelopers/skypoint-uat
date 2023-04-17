// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const { createRedirect } = actions
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


//   createRedirect({
//     fromPath: `http://localhost:8000/what-s-on/skypoint-sounds/`,
//     toPath: `/skypoint-sounds/`,
//   });

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

exports.createPages = async ({graphql, actions}) => {
  // const { actions, graphql } = gatsbyContext;
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/what-s-on/skypoint-sounds/`,
    toPath: `/skypoint-sounds/`,
  })

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
    `);

    for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
      createPage({
        path: page.url,
        component: path.resolve(__dirname, "./src/templates/using-dsg.js"),
        context: { id: page.id },
      });
    }
  }
}