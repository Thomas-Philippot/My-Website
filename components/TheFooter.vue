<template>
  <div>
    <div id="footer-wave" />
    <footer class="footer">
      <div class="content has-text-centered">
        <a class="button is-medium" href="https://twitter.com/Thomas_ph35" target="_blank">
          <span class="icon is-small">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        <a class="button is-medium" href="https://dev.to/thomas_ph35" target="_blank">
          <span class="icon is-small">
            <i class="fab fa-dev"></i>
          </span>
        </a>
        <a class="button is-medium" href="https://github.com/Thomas-Philippot" target="_blank">
          <span class="icon is-small">
            <i class="fab fa-github-alt"></i>
          </span>
        </a>
        <a class="button is-medium" href="https://gitlab.com/Thomas_philippot" target="_blank">
          <span class="icon is-small">
            <i class="fab fa-gitlab"></i>
          </span>
        </a>
      </div>
      <div class="bitcoin has-text-centered">
        <img src="/img/btc_addresse.png" alt="BTC Adresse" height="80" width="80">
      </div>
      <div class="bulma has-text-centered mt-3">
        <div class="columns">
          <div class="column is-2 is-offset-5">
            <p class="has-text-white mb-3">Made with ❤️ by Thomas Philippot</p>
            <button class="button is-success">
              <a
                class="has-text-white"
                href="https://www.buymeacoffee.com/ThomasPhilippot"
                target="_blank"
              >
                <span class="icon">
                  <i class="fas fa-coffee"></i>
                </span>
                <span>buy me a coffee</span>
              </a>
            </button>
          </div>
        </div>
        <a href="https://bulma.io">
          <img src="/img/bulma.png" alt="made with bulma" height="20" width="100">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>

    #wave {
        margin-top: 25px;
    }

</style>
