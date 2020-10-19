<template>
  <div class="AddPage">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      navbar
    </div>
    <main>main</main>
    <div id="sidebar">sidebar</div>
    <div id="content1">content1</div>
    <div id="content2">content2</div>
    <div id="content3">content3</div>

    <footer id="footer">footer</footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import Search from "@/components/Search.vue";

export default {
  name: "Home",

  components: {
    // Search,
  }
};
</script>
<style scoped>
:root {
  --main-radius: 5px;
  --main-padding: 5px;
}

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
  grid-gap: 0.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #00fa11;
  text-align: center;
}

#nav {
  padding: 30px;
  background: #42b983;
  grid-area: nav;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
main {
  background: #63ba0d;
  grid-area: main;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
#content1 {
  background: #ba0d41;
  grid-area: content1;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
#content2 {
  background: #0d2aba;
  grid-area: content2;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
#content3 {
  background: #830dba;
  grid-area: content3;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
#sidebar {
  background: #00fa11;
  grid-area: sidebar;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
footer {
  background: #221616;
  grid-area: footer;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
</style>
