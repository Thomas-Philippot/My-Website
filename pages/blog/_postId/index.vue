<template>
    <div class="container">
        <the-jumbotron :list="jumbotron"></the-jumbotron>
        <h1 class="title">{{ article.title }}</h1>
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

</style>
