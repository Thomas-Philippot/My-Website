<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
              <h1 class="is-title is-3">Thomas Philippot</h1>
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
                        <nuxt-link to="/blog" class="button is-primary is-outlined is-rounded">
                            <strong>Blog</strong>
                        </nuxt-link>
                    </div>
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
    nav {
      padding: 1.25rem 0;
    }
</style>
