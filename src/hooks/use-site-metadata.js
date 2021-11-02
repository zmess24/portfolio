import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
      graphql`
        query SiteMetaData {
          site {
            siteMetadata {
              github
              linkedIn
              projects {
                  title
                  description
                  image
                  link
                  github
              }
            }
          }
        }
      `
    )

    return site.siteMetadata
  }