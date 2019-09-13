require('dotenv').config();
const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Thomas Philippot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#273849'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
    '@assets/main.css'
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
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  axios: {
    baseURL: process.env.API_URL
  },
  styleResources: {
    scss: [
      'assets/scss/main.scss',
    ]
  },
  googleAnalytics: {
    id: 'UA-147974021-1'
  },
  sitemap: {
    gzip: true,
    exclude: [],
    routes () {
      return axios.get(process.env.API_URL + 'articles', {
        params: {
          username: 'thomas_ph35'
        }
      }).then(res => res.data.map(response => '/blog/' + response.id))
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
