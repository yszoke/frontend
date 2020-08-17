<template>
  <div class="home">
    <b-row>
      <b-col></b-col>
      <b-col>
        <h1>WELCOME TO THE APARTMENT REVIEW SITE</h1>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <img alt="house" src="../assets/house.jpg" />
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-link tag="b-nav-item" :to="{ name: 'SearchPage' }">
          <b-button block variant="info"
            >Search for reviews</b-button
          ></router-link
        >
      </b-col>
      <b-col>
        <router-link tag="b-nav-item" :to="{ name: 'AddPage' }">
          <b-button block variant="info">Add a review</b-button></router-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
