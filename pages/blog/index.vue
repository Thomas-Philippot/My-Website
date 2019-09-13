<template>
    <div class="container is-jumbotron" id="content">
      <div class="columns">
        <div class="column">
            <the-jumbotron :list="jumbotron"></the-jumbotron>
            <p class="subtitle is-4">
              Here are my <a href="https://dev.to">dev.to</a>  blog post.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="columns">
            <div class="column is-full-tablet is-one-third-desktop " v-for="article in articles" :key="article.id">
              <nuxt-link :to="'blog/' + article.id">
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img :src="article.cover_image" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{ article.title }}</p>
                                <p class="subtitle is-6">{{ article.description }}</p>
                            </div>
                        </div>

                        <div class="content">
                            <time datetime="2016-1-1">{{ article.published_at }}</time>
                        </div>
                    </div>
                </div>
              </nuxt-link>
            </div>
        </div>
        <nuxt-link to="/" class="button is-primary is-outlined">Back</nuxt-link>
      </div>
    </div>
</template>

<script>
    import TheJumbotron from "../../components/TheJumbotron";
    export default {
        name: "index",
        components: {TheJumbotron},
        data () {
            return {
                articles: [],
                jumbotron: [
                    {
                        url: '/blog',
                        name: 'blog',
                        icon: 'fab fa-dev'
                    }
                ]
            }
        },
        asyncData (context) {
          return context.app.$axios.get('articles', {
            params: {
              username: 'thomas_ph35'
            }
          }).then(response => {
            return {
              articles: response.data
            }
          })
        }
    }
</script>

<style scoped>
    .subtitle.is-6 {
        height: 25px;
    }

    .title.is-4 {
        height: 50px;
    }

</style>
