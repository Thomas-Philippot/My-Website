<template>
    <div class="container">
        <the-jumbotron :list="jumbotron"></the-jumbotron>
        <div class="columns is-centered">
          <div class="column is-half">
            <img :src="article.cover_image" :alt="article.title">
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h1 class="is-size-1 title">{{ article.title }}</h1>
            <div class="tags">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="tag is-link"
              >#{{ tag }}</span>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="button is-primary is-outlined is-rounded">
              <span class="icon is-small">
                <i class="fas fa-heart"></i>
              </span>
              <span class="">{{ article.positive_reactions_count }}</span>
            </div>
            <div class="button is-primary is-outlined is-rounded">
              <span class="icon is-small">
                <i class="fas fa-comment"></i>
              </span>
              <span class="">{{ article.comments_count }}</span>
            </div>
          </div>
        </div>
        <div class="blog-content" v-html="article.body_html"></div>
        <nuxt-link to="/blog" class="button is-primary is-outlined">Back</nuxt-link>
    </div>
</template>

<script>
    import TheJumbotron from "../../../components/TheJumbotron";
    export default {
        name: "blog-post",
        components: {TheJumbotron},
        data () {
            return {
                jumbotron: []
            }
        },
        asyncData (context) {
            return context.app.$axios.get('articles/' + context.params.postId).then(response => {
              if (response.data.user.name !== 'Thomas Philippot') {
                return {
                  article: {
                    body_html: '<h1 class="title">Nice try but this not one of my blog posts</h1>'
                  }
                }
              }
                return {
                    article: response.data
                }
            })
        },
        created() {
            this.jumbotron = [
                {
                    url: '/blog',
                    name: 'blog',
                    icon: 'fab fa-dev'
                },
                {
                    url: '',
                    name: this.article.title,
                    icon: 'fas fa-book'
                }
            ]
        }
    }
</script>

<style scoped>

  div.social {
    color: black;
    border: 2px solid black;
    border-radius: 100%;
    margin: 0 7px;
  }

</style>
