<template>
  <b-navbar type="dark" variant="dark">
    <div class="title text-center"></div>
    <b-navbar-nav>
      <router-link tag="b-navbar-brand" :to="{ name: 'Home' }"
        ><h4>Oko Hagever</h4></router-link
      >|
      <router-link tag="b-nav-item" :to="{ name: 'Home' }">
        <b-button variant="info">Home</b-button></router-link
      >|
      <router-link tag="b-nav-item" :to="{ name: 'SearchPage' }">
        <b-button variant="info">Search for reviews</b-button></router-link
      >|
      <router-link tag="b-nav-item" :to="{ name: 'AddPage' }">
        <b-button variant="info">Add a review</b-button></router-link
      >|
      <router-link tag="b-nav-item" :to="{ name: 'About' }">
        <b-button variant="info">About</b-button></router-link
      >|
      <!-- <router-link tag="b-nav-item" :to="{ name: 'search' }">
        <b-button variant="info">Search</b-button></router-link
      >|
      <router-link tag="b-nav-item" :to="{ name: 'AboutPage' }">
        <b-button variant="info">About</b-button></router-link
      >|
      <b-dropdown
        class="m-2"
        variant="info"
        v-if="$root.store.username"
        text="Personal"
        right
      >
        <b-dropdown-item href="#">
          <router-link :to="{ name: 'favoriteRecipe' }"> Favorites</router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <router-link :to="{ name: 'personalRecipe' }">Private</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link :to="{ name: 'familyRecipe' }">La Familia</router-link>
        </b-dropdown-item>
      </b-dropdown>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <span v-if="!$root.store.username">
        <span style="color:#f5f5f0; font-family:verdana;">Hello guest</span>
        <router-link :to="{ name: 'login' }">
          <b-button variant="info">Login</b-button> </router-link
        >|
        <router-link :to="{ name: 'register' }">
          <b-button variant="info">Register</b-button></router-link
        >|
      </span>
      <span v-else>
        <span style="color:#f5f5f0; font-family:verdana;"
          >Hello, {{ $root.store.username }}
        </span>
        <b-button @click="Logout" variant="danger">Logout</b-button>
      </span>-->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
