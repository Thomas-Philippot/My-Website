<template>
    <div class="container">
        <h1 class="title">{{ article.title }}</h1>
        <div class="blog-content" v-html="article.body_html"></div>
        <nuxt-link to="/blog" class="button is-primary is-outlined">Back</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "_postID",
        asyncData (context) {
            return context.app.$axios.get('articles/' + context.params.postId).then(response => {
              console.log(response.data)
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
        }
    }
</script>

<style scoped>

</style>
