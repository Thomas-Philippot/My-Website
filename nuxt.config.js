require("dotenv").config();

const axios = require("axios");

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: "Thomas Philippot - Full Stack developer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:  "Thomas Philippot fullstack studdent developper, learning and using web frameworks since 4 years."
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "#273849"
  },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/main.scss",
    "@assets/main.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/google-analytics",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/component-cache"
  ],
  axios: {
    baseURL: process.env.API_URL
  },
  styleResources: {
    scss: [
      "assets/scss/main.scss",
    ]
  },
  googleAnalytics: {
    id: "UA-147974021-1"
  },
  sitemap: {
    hostname: "https://thomas-philippot.dev",
    gzip: true,
    exclude: [],
    routes () {
      return axios.get(process.env.API_URL + "articles", {
        params: {
          username: "thomas_ph35"
        }
      }).then((res) => res.data.map((response) => "/blog/" + response.id))
    }
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://thomas-philippot.netlify.com/sitemap.xml"
  },
  componentCache: {
    maxAge: 1000 * 60 * 60
  },
  generate: {
    subFolder: false,
    routes() {
      return axios.get(process.env.API_URL + "articles", {
        params: {
          username: "thomas_ph35"
        }
      }).then((res) => res.data.map((response) => "/blog/" + response.id))
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: true
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
