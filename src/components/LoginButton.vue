<template>
  <div>
    <b-button v-on:click="login">
      <img src="../assets/login.jpg" />
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.axios.get(
          this.$root.store.base_url + "/google"
        );
        this.answer = response.data.status;
        if (this.answer === "AuthSucceed") {
          this.$router.push({ name: "menu" });
        } else {
          this.$router.push({ name: "WrongEmail" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
