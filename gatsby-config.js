module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    'gatsby-plugin-less',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
  ],
};
