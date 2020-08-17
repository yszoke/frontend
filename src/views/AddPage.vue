<template>
  <div class="AddPage">
    <img alt="Vue logo" src="../assets/logo.png" />
    Add
    <b-row>
      <b-col>
        <Search />
      </b-col>
      <b-col>
        <h2>RESULTS</h2>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search,
  },
};
</script>
