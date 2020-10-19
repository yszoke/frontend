<template>
  <div id="container">
    <div>
      <b-card
        header="header"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="dark"
        footer="Press here for full review"
        footer-tag="footer"
        footer-bg-variant="success"
        footer-border-variant="dark"
        title="Title"
        style="max-width: 20rem;"
      >
        <b-card-text>
          <div>start year: {{ review.S_Year }}</div>
          <div>end year: {{ review.E_Year }}</div>
          <div>review: {{ review.APA_Text }}</div>
          <div>rank: {{ review.APA_rank }}</div>
          <div>cost: {{ review.Cost }}</div>
          <div>bills: {{ review.Bills }}</div>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: ""
    };
  },
  props: {
    review: {
      type: Object
    }
  }
  // mounted() {
  //   if (this.test) {
  //     //
  //     console.log(this.test);

  //     this.text = this.test;
  //   }
  // },
};
</script>

<style></style>
