<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li>
                <nuxt-link to="/">
                    <span class="icon is-small">
                      <i class="fas fa-home" aria-hidden="true"></i>
                    </span>
                    <span>Home</span>
                </nuxt-link>
            </li>
            <li v-for="item in list" :key="item.id">
                <nuxt-link :to="item.url">
                    <span class="icon is-small">
                      <i :class="item.icon" aria-hidden="true"></i>
                    </span>
                    <span>{{ item.name }}</span>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "TheJumbotron",
        props: ['list']
    }
</script>

<style scoped>

    footer {
        margin-top: 25px;
    }

</style>

