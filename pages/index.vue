<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container is-jumbotron">
          <div class="columns is-modbile is-centered">
            <div class="column is-half">
              <h1 class="is-title is-spaced is-1">
                Fullstack Developer
              </h1>
              <h2 class="subtitle is-size-4-desktop">
                I am a french developer, learning in progress.
              </h2>
            </div>
          </div>
          <div class="columns is-mobile is-centered">
            <div class="column is-half">
                <img class="avatar" src="/img/avatar.svg" alt="thomas philippot avatar" width="250r">
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <img class="is-bottom" src="/img/banner.svg" alt="">
        </div>
      </div>
    </section>
    <section class="section is-success is-medium has-text-centered is-long">
      <div class="hero-body">
        <div class="container">
          <h2 class="is-title is-2 has-text-white">
            Hi my name is Thomas.
          </h2>
          <h3 class="subtitle">
            I'm learning various programming languages since 2018. I'm now a developer for a french company now.
          </h3>
        </div>
      </div>
    </section>
    <section class="section skills has-text-centered" id="main-wave">
      <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columns">
              <div class="column has-border-right is-center">
                <h2 class="title">Front End</h2>
                <p>These are the front-end framework I worked with</p>
                <img src="/img/vue.png" alt="logo vue js" class="is-128x128" loading="lazy">
                <img src="/img/angular.png" alt="logo angular" class="is-128x128" loading="lazy">
                <img src="/img/bootstrap.png" alt="logo bootstrap" class="is-128x128" loading="lazy">
                <img src="/img/bulma.png" alt="logo bulma" class="is-128x128" loading="lazy">
              </div>
              <div class="column">
                <h2 class="title">Back End</h2>
                <p>These are the back-end framework or languages I worked with</p>
                <img src="/img/symfony.png" alt="logo symfony" class="is-128x128" loading="lazy">
                <img src="/img/java.png" alt="logo java" class="is-128x128" loading="lazy">
                <img src="/img/codeigniter.png" alt="logo codeigniter" class="is-128x128" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="project">
      <div class="container has-text-centered">
        <img src="/img/web_dev.svg" alt="web developer" width="450r" loading="lazy">
      </div>
    </section>
    <section class="is-medium">
      <div class="container">
        <h2 class="title has-text-centered">The projects I made</h2>
        <div class="columns has-text-centered is-multiline">
          <div
            v-for="(item, id) in projects"
            :key="id"
            class="column"
          >
            <div class="box is-hover">
              <a :href="item.link" target="_blank">
                <img :src="item.imageSrc" :alt="item.imageAlt">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          imageSrc: 'img/esr-hand.png',
          imageAlt: 'Es Redon Handball website',
          link: 'https://esr-handball.fr'
        },
        {
          imageSrc: 'img/showcase.png',
          imageAlt: 'My showcase app',
          link: 'https://nuxt-showcase-app.netlify.com'
        },
        {
          imageSrc: 'img/mineral-contest.png',
          imageAlt: 'Mineral Contest Minecraft plugin',
          link: 'https://mineral-contest.netlify.app'
        }
      ]
    }
  }
}
</script>

<style>

</style>
