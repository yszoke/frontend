<template>
  <div class="SearchPage">
    <h1>SEARCH FOR REVIEWS</h1>
    <br />
    <b-row>
      <b-col>
        <Search />
      </b-col>
      <b-col>
        <h2>RESULTS</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search
  }
};
</script>
