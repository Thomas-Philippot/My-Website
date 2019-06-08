<template>
    <div class="container">
        <h1 class="title">{{ article.title }}</h1>
        <div v-html="article.body_html"></div>
    </div>
</template>

<script>
    export default {
        name: "_postID",
        asyncData (context) {
            return context.app.$axios.get('articles/' + context.params.postId).then(response => {
                return {
                    article: response.data
                }
            })
        }
    }
</script>

<style scoped>

</style>
