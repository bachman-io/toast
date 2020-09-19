require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const GOOGLE_JSON = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS, 'base64');

module.exports = {
  siteMetadata: {
    title: 'Bachman I/O',
    description: 'The sort-of official website of Collin Bachman, I guess',
    author: 'Collin Bachman',
    version: '2.0-alpha3',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bachman I/O',
        short_name: 'Bachman I/O',
        start_url: '/',
        background_color: '#444444',
        theme_color: '#999999',
        display: 'browser',
        icon: 'src/images/manifest-image.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['node_modules/bootstrap/scss'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        downloadLocal: false,
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheet',
      options: {
        spreadsheetId: '1OfEJQjGGILU4P0A4W5OM49qULxSevWhxwCwMJWD2hU8',
        spreadsheetName: 'GameStats',
        typePrefix: 'GoogleSheet',
        credentials: JSON.parse(GOOGLE_JSON),
      },
    },
  ],
};
