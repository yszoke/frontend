<template>
  <div id="container">
    <router-link :to="{ name: 'menu' }"
      ><b-button> <img alt="back" src="../assets/back.jpg" /> </b-button
    ></router-link>
    <GreenIcon />

    <h1>איזור אישי</h1>
    <div>
      <b-row>
        <b-col>
          <h2>{{ message }}</h2>
          <div v-for="r in results" :key="r.id">
            <Reviews class="Reviews" :review="r" />
            <b-button
              v-on:click="deleteAreview()"
              to="/PersonalInfo"
              variant="danger"
            >
              מחק
            </b-button>
            <b-button
              v-on:click="updateAreview()"
              to="/PersonalInfo"
              variant="primary"
            >
              ערוך
            </b-button>
          </div>
        </b-col>
        <b-col>
          <h2>{{ message2 }}</h2>

          <div v-for="r in results2" :key="r.id">
            <Reviews class="Reviews" :review="r" />
            <b-button
              v-on:click="deleteBreview()"
              to="/PersonalInfo"
              variant="danger"
            >
              מחק
            </b-button>
            <b-button
              v-on:click="updateBreview()"
              to="/PersonalInfo"
              variant="primary"
            >
              ערוך
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <GreenIcon />
  </div>
</template>

<script>
import GreenIcon from "../components/GreenIcon";
import Reviews from "./Reviews";

export default {
  data() {
    return {
      results: [],
      results2: [],

      message: "",
      message2: "",
    };
  },
  components: {
    GreenIcon,
    Reviews,
  },
  async created() {
    try {
      const response = await this.axios.post(
        this.$root.store.base_url + "/getMyApartmentPosts"
      );
      this.results = response.data;
      if (response.data) {
        this.message = "הביקורות שלי על דירות";
      } else {
        this.message = "לא כתבת ביקורות";
      }
      const response2 = await this.axios.post(
        this.$root.store.base_url + "/getMyBuildingPosts"
      );
      this.results2 = response2.data;
      if (response2.data) {
        this.message2 = "הביקורות שלי על בניינים";
      } else {
        this.message2 = "לא כתבת ביקורות";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
