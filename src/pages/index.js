import  React, {useEffect} from "react"
import { setGlobalState } from "../components/store"
import { graphql } from "gatsby"
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from "../linkResolver"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"
import "./skypoints.scss"

export const query = graphql`
  {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyHero {
            id
            slice_type
            items {
              button_type
              button_text
              button_link {
                url
                uid
              }
            }
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
          }
          ... on PrismicHomepageDataBodyText {
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
          ... on PrismicHomepageDataBodyDoubleCard {
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
          ... on PrismicHomepageDataBodyBox {
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
          ... on PrismicHomepageDataBodyImage {
            slice_type
            primary {
              image {
                url
              }
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyAccordion {
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
          ... on PrismicHomepageDataBodyDashboard {
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
          ... on PrismicHomepageDataBodyCarousel {
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
          ... on PrismicHomepageDataBodyContactform {
            id
            slice_type
            primary {
              form_type
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyInfobox {
            id
            primary {
              info_text {
                richText
              }
              anchor_id
            }
            slice_type
          }
          ... on PrismicHomepageDataBodyOpeninghours {
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
          ... on PrismicHomepageDataBodySubscribeForm {
            id
            slice_type
            primary {
              button_text
              button_type
            }
          }
          ... on PrismicHomepageDataBodyRichText {
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

  function showSubscribeForm() {
    setGlobalState("showSubscribe", true)
  }

  useEffect(
    () => {
      if (typeof window !== 'undefined') {
        const delaySubscribe = sessionStorage.getItem("delaySubscribe")
        const delay = localStorage.getItem("delaySubscribeTime")

        if(delaySubscribe === null) {
          let timer = setTimeout(() => showSubscribeForm(), (delay*1000))
          sessionStorage.setItem("delaySubscribe", true)
          return () => {
            clearTimeout(timer);
          }
        }
      }
    },[]
  )
 
  return (
    <React.StrictMode>
      <Layout>
        <Seo />
        <SliceZone
          slices={props.data.prismicHomepage.data.body}
          components={components}
        />
      </Layout>
    </React.StrictMode>
  )
}

export const Head = (props) => (
  <>
    <title>{props.data.prismicHomepage.data.tab_title +` | SkyPoint`}</title>
    <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=skypoint-uat"></script>
    <noscript><iframe title="frame" src="//www.googletagmanager.com/ns.html?id=GTM-WCSFZ5" height="0" width="0" style={{display:'none'}}></iframe></noscript>
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
    <meta name="description" content={props.data.prismicHomepage.data.meta_description} />
    <meta name="keywords" content={props.data.prismicHomepage.data.meta_keywords} />
    {props.data.prismicHomepage.data.og_title &&
      <meta property="og:title" content={props.data.prismicHomepage.data.og_title} />
    }
    {props.data.prismicHomepage.data.og_description &&
      <meta property="og:description" content={props.data.prismicHomepage.data.og_description} />
    }
    {props.data.prismicHomepage.data.og_type &&
      <meta property="og:type" content={props.data.prismicHomepage.data.og_type} />  
    }
    {props.data.prismicHomepage.data.og_url &&
      <meta property="og:url" content={props.data.prismicHomepage.data.og_url} />
    }

  </>
)

export default  withPrismicPreview(IndexPage, [
  {
    repositoryName: 'skypoint-uat',
    linkResolver,
  },
])
