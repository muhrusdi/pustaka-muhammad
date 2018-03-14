module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    'gatsby-plugin-less',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ],
};
