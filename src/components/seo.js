import * as React from "react";
const Seo = ({seoData, children }) => {
  let link = "https://static.cdn.prismic.io/prismic.js?new=true&repo="+process.env.GATSBY_PRISMIC_REPO_NAME

  return (
    <>
      <title>{seoData.tab_title +` | SkyPoint`}</title>
      <script async defer src={link}></script>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJPN4FXJ" height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PJPN4FXJ');</script>
              `}
      </script>
      <script type="text/javascript" src="https://al-skypoint.secure-cdn.oc.accessoticketing.com/embed/accesso.js" data-accesso="l=en-au"></script>
      <meta name="description" content={seoData.meta_description} />
      <meta name="keywords" content={seoData.meta_keywords} />
      {seoData.og_title &&
        <meta property="og:title" content={seoData.og_title} />
      }
      {seoData.og_description &&
        <meta property="og:description" content={seoData.og_description} />
      }
      {seoData.og_type &&
        <meta property="og:type" content={seoData.og_type} />  
      }
      {seoData.og_url &&
        <meta property="og:url" content={seoData.og_url} />
      }

      <meta name="google-site-verification" content="tVEOKsPlVKjH8tUdHrg1_2CR4MYIKednmYl6NWFBiCo" />
      <meta name="robots" content="all"/>
      <meta name="Googlebot" content="all"/>
      {children}
    </>
  );
};

export default Seo;
