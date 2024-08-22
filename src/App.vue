<script>
import FooterItem from "./components/DefaultItems/FooterItem.vue";
import HeaderItem from "./components/DefaultItems/HeaderItem.vue";
export default {
  name: "App",
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HeaderItem />
  <main>
    <router-view />
  </main>
  <FooterItem />
</template>

<style>
:root {
  --header-height: 130px;
  --header-padding: 0 100px;
  --font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p,
h1,
h2,
h3 {
  line-height: 2.4;
  font-feature-settings: "palt" on;
  letter-spacing: 0.15em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

a{
  text-decoration: none;
  color: black;
}

p {
  font: var(--font-size);
}

h1 {
  font-size: 2em;
}
</style>
