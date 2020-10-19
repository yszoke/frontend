<template>
  <div>
    <a href="http://localhost:3000/google">
      <img src="../assets/login.jpg" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ""
    };
  },
  methods: {
    async login() {
      try {
        // const response = await this.axios.get(
        //   this.$root.store.base_url + "/google"
        // );
        // this.answer = response.data.status;
        // if (this.answer === "AuthSucceed") {
        //   this.$router.push({ name: "menu" });
        // } else {
        //   this.$router.push({ name: "WrongEmail" });
        // }
        await this.axios.get("google.com");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style></style>
