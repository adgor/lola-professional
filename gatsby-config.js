module.exports = {
  siteMetadata: {
    title: "LOLA Professional",
    siteUrl: "https://www.yourdomain.tld"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-theme-i18n",
      options: {
        defaultLang: "en",
        configPath: require.resolve("./i18n/config.json"),
      },
    },
    {
      resolve: "gatsby-theme-i18n-react-intl",
      options: {
        defaultLocale: "./i18n/react-intl/en.json",
      },
    },
  ]
};
