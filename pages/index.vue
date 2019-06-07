<template>
  <div class="container">
    <h1 class="title">
      Bulma
    </h1>

    <p class="subtitle">
      Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
    </p>

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Input">
      </div>
    </div>

    <div class="field">
      <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
      </p>
    </div>

    <div class="buttons">
      <a class="button is-primary">Primary</a>
      <a class="button is-link">Link</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
