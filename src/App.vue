<template>
  <div id="app" class="container">
    <!-- <Navbar /> -->
    <div id="nav">
      <router-link to="/">Home </router-link>|
      <router-link to="/about"> About </router-link>|
      <router-link to="/SuccessfullReview"> Successfull Review </router-link>|
      <router-link to="/WrongEmail"> Wrong Email </router-link>|
      <router-link to="/ConnectionFaild"> Connection Faild </router-link>|
      <router-link to="/InsertLocation"> Insert Location </router-link>|
      <router-link to="/menu"> menu </router-link>|
      <router-link to="/SetReview1"> SetReview1 </router-link>|
      <router-link to="/SetReview2"> SetReview2 </router-link>
    </div>
    <br />
    <main><router-view /></main>
    <footer id="footer" class="container text-center">
      <big>Copyright &copy; Tomer Oko and Yiftah Szoke</big><br />
      <router-link to="/about">click here </router-link> <br />for more
      information
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  name: "App",
};
</script>
<style>
:root {
  --main-radius: 5px;
  --main-padding: 5px;
}

.container {
  display: grid;
  /* height: 100vh; */
  grid-template-columns: 100%;
  grid-template-rows: 5% 90% 5%;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: "nav" "main" "footer";
  grid-gap: 0.2rem;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #000000;
  text-align: center;
}

#nav {
  padding: 30px;
  /* background: #42b983; */
  grid-area: nav;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
main {
  /* background: #63ba0d; */
  grid-area: main;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

footer {
  /* background: #221616; */
  grid-area: footer;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav a {
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #37ff00;
}

@media only screen and (max-width: 800px) {
  .container {
    grid-template-columns: 100%;
    grid-template-rows: 5% 90% 5%;
    grid-template-areas: "nav" "main" "footer";
  }
}
</style>
