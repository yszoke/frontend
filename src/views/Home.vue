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
        <img
          class="rounded-circle"
          height="400px"
          width="450px"
          alt="house"
          src="../assets/house.jpg"
        />
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-link tag="b-nav-item" :to="{ name: 'SearchPage' }">
          <b-button block variant="info"
            ><h4>Search for reviews</h4></b-button
          ></router-link
        >
      </b-col>
      <b-col>
        <router-link tag="b-nav-item" :to="{ name: 'AddPage' }">
          <b-button block variant="info"
            ><h4>Add a review</h4></b-button
          ></router-link
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col
        ><b-button block pill variant="success">
          <img
            height="40px"
            width="40px"
            alt="google"
            src="../assets/Google_icon.png"
          />
          <h2>Sign in with google</h2></b-button
        ></b-col
      >
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style>
#img {
  size: height=10px width= 10px;
}
</style>
