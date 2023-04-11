import  React, {useEffect} from "react"
import { graphql } from "gatsby"
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from "../linkResolver"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"
import "./skypoints.scss"

export const query = graphql`
  query pageQuery($id: String) {
    prismicSubpage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSubpageDataBodyHero {
            id
            slice_type
            primary {
              background_type
              title
              background {
                url
              }
              header_text
              video {
                url
              }
              page_type
              anchor_id
            }
            items {
              button_type
              button_text
              button_link {
                url
                uid
              }
            }
          }
          ... on PrismicSubpageDataBodyText {
            id
            slice_type
            primary {
              button_text
              button_type
              header_text
              header_type
              sub_header
              button_link {
                url
                uid
              }
              type
              anchor_id
              anchor_link
              accesso_keyword
              accesso_packageid
              accesso_promo_code
            }
          }
          ... on PrismicSubpageDataBodyDoubleCard {
            id
            slice_type
            primary {
              body_text
              button_link {
                url
                uid
              }
              button_text
              button_type
              header_text
              text_box_background
              text_color
              header_type
              image_position
              anchor_id
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
            items {
              image {
                url
              }
            }
          }
          ... on PrismicSubpageDataBodyBox {
            id
            slice_type
            items {
              background {
                url
              }
              flag
              flag_text
              flag_type
              title
              link {
                url
                uid
              }
              text_colour
              button_text
              button_type
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
            primary {
              anchor_id
            }
          }
          ... on PrismicSubpageDataBodyImage {
            slice_type
            primary {
              image {
                url
              }
              anchor_id
            }
          }
          ... on PrismicSubpageDataBodyDashboard {
            id
            primary {
              header_type
              icon_type
              widget_type
              main_header
              anchor_id
            }
            items {
              header_text
              icon
              title_text
            }
            slice_type
          }
          ... on PrismicSubpageDataBodyCarousel {
            id
            slice_type
            primary {
              button_type
              text_type
              anchor_id
            }
            items {
              after_pay_text
              button_link {
                url
                uid
              }
              button_text
              image {
                url
              }
              price
              ticket_text
              ticket_title
              under_price_text
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
          }
          ... on PrismicSubpageDataBodyAccordion {
            id
            items {
              header_text
              according_title {
                richText
              }
            }
            primary {
              header_text_color
              header_type
              type
              anchor_id
            }
            slice_type
          }
          ... on PrismicSubpageDataBodyContactform {
            id
            slice_type
            primary {
              form_type
              anchor_id
            }
          }
          ... on PrismicSubpageDataBodyInfobox {
            id
            primary {
              info_text {
                richText
              }
              anchor_id
            }
            slice_type
          }
          ... on PrismicSubpageDataBodyOpeninghours {
            id
            items {
              close
              date
              open
            }
            slice_type
            primary {
              anchor_id
            }
          }
          ... on PrismicSubpageDataBodySubscribeForm {
            id
            slice_type
            primary {
              button_text
              button_type
            }
          }
          ... on PrismicSubpageDataBodyRichText {
            id
            slice_type
            items {
              center_rich_text {
                richText
              }
              rich_text {
                richText
              }
            }
          }
        }
        meta_description
        meta_keywords
        tab_title
        og_description
        og_title
        og_type
        og_url
      }
      uid
    }
  }
`

const IndexPage = props => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Layout>
      <Seo />
      <SliceZone
        slices={props.data.prismicSubpage.data.body}
        components={components}
      />
    </Layout>
  )
}

export const Head = (props) => (
  <>
    <title>{props.data.prismicSubpage.data.tab_title +` | SkyPoint`}</title>
    <noscript><iframe title="frame" src="//www.googletagmanager.com/ns.html?id=GTM-WCSFZ5" height="0" width="0" style={{display:'none'}}></iframe></noscript>
    <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=skypoint-uat"></script>
    <script>{`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WCSFZ5');
      `}
    </script>

    <script>{`
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
          m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-20174112-1', 'auto');
      ga('send', 'pageview');
      `}
    </script>
    <script type="text/javascript" src="https://al-dreamworld.secure-cdn.oc.accessoticketing.com/embed/accesso.js" data-accesso="l=en-au"></script>
    <meta name="description" content={props.data.prismicSubpage.data.meta_description} />
    <meta name="keywords" content={props.data.prismicSubpage.data.meta_keywords} />
    {props.data.prismicSubpage.data.og_title &&
      <meta property="og:title" content={props.data.prismicSubpage.data.og_title} />
    }
    {props.data.prismicSubpage.data.og_description &&
      <meta property="og:description" content={props.data.prismicSubpage.data.og_description} />
    }
    {props.data.prismicSubpage.data.og_type &&
      <meta property="og:type" content={props.data.prismicSubpage.data.og_type} />  
    }
    {props.data.prismicSubpage.data.og_url &&
      <meta property="og:url" content={props.data.prismicSubpage.data.og_url} />
    }
  </>
)

export default withPrismicPreview(IndexPage, [
  {
    repositoryName: 'skypoint-uat',
    linkResolver,
  },
])
