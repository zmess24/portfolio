module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ZDM Portfolio",
    description: "Personal Website for Zac Messinger",
    linkedIn: "https://www.linkedin.com/in/zacmessinger/",
    github: "https://github.com/zmess24",
    projects: [
      { 
        title: 'terminal', 
        description: "cool project", 
        link: "https://zdm-terminal.surge.sh/", 
        image: "http://via.placeholder.com/360x270",
        github: "https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/"
      }
    ],
    blogs: []
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/logo.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
