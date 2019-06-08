<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </nuxt-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample" v-bind:class="{ 'is-active': isActive }" @click="isActive = !isActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <nuxt-link to="/blog" class="button is-primary">
                            <strong>Blog</strong>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "the-navbar",
        data () {
            return {
                isActive: false
            }
    }
    }
</script>

<style scoped>

</style>
