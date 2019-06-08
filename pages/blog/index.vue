<template>
    <div class="container">
        <div class="columns">
            <div class="column is-full-tablet is-one-third-desktop " v-for="article in articles" :key="article.id">
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img :src="article.cover_image" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4"><nuxt-link :to="'blog/' + article.id">{{ article.title }}</nuxt-link></p>
                                <p class="subtitle is-6">{{ article.description }}</p>
                            </div>
                        </div>

                        <div class="content">
                            <time datetime="2016-1-1">{{ article.published_at }}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                articles: []
            }
        },
        created () {
            this.$axios.get('articles', {
                params: {
                    username: 'thomas_ph35'
                }
            }).then(response => {
                this.articles = response.data
            })
        },
        asyncData (context) {

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
