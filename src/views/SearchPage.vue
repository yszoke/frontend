<template>
  <div id="container">
    <router-link :to="{ name: 'menu' }"
      ><b-button> <img alt="back" src="../assets/back.jpg" /> </b-button
    ></router-link>
    <GreenIcon />
    <GreenIcon />

    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="example-input-group-1"
        label="רחוב"
        label-for="example-input-1"
      >
        <b-form-select
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.street.$model"
          :options="streets"
          :state="$v.form.street.$dirty ? !$v.form.street.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="example-input-group-2"
        label="מספר בניין"
        label-for="example-input-2"
      >
        <b-form-select
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.buildingNum.$model"
          :options="numbers"
          :state="
            $v.form.buildingNum.$dirty ? !$v.form.buildingNum.$error : null
          "
          aria-describedby="input-2-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="example-input-group-3"
        label="מספר דירה"
        label-for="example-input-3"
      >
        <b-form-select
          id="example-input-3"
          name="example-input-3"
          v-model="$v.form.apartmentNum.$model"
          :options="numbers"
          :state="
            $v.form.apartmentNum.$dirty ? !$v.form.apartmentNum.$error : null
          "
          aria-describedby="input-3-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-3-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="success" :disabled="$v.form.$invalid"
        >יאללה לבדיקת מידע</b-button
      >
    </b-form>
    <p>{{ message }}</p>
    <div v-for="r in results" :key="r.id">
      <p>{{ r.name }}</p>
    </div>
    <p>{{ message2 }}</p>
    <div v-for="r in results2" :key="r.id">
      <p>{{ r.name }}</p>
    </div>
    <b-button type="submit" variant="success" to="/successfullSearch"
      >סיום</b-button
    >
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
// import { required, minLength } from "vuelidate/lib/validators";
import { required } from "vuelidate/lib/validators";
import numbers from "../assets/numbers";
import GreenIcon from "../components/GreenIcon";

export default {
  mixins: [validationMixin],
  data() {
    return {
      foods: ["apple", "orange"],
      streets: [],
      buildingNums: [],
      apartmentNums: [],
      disable: false,
      disable2: false,

      results: [],
      results2: [],

      numbers: [{ value: null, text: "", disabled: true }],

      message: "",
      message2: "",

      form: {
        street: null,
        buildingNum: null,
        apartmentNum: null,
      },
    };
  },
  components: {
    GreenIcon,
  },
  validations: {
    form: {
      street: {
        required,
      },
      buildingNum: {
        required,
      },
      apartmentNum: {
        required,
      },
      // name: {
      //   required,
      //   minLength: minLength(3),
      // },
    },
  },
  mounted() {
    this.numbers.push(...numbers);
  },
  async created() {
    try {
      const response = await this.axios.get(
        this.$root.store.base_url + "/getAllStreets"
      );
      const streets = response.data;
      this.streets = [];

      for (const street in streets) {
        this.streets.push(streets[street].DB_Name);
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Search();

      // Form submit logic
    },
    async Search() {
      try {
        const response = await this.axios.get(
          this.$root.store.base_url + "/getApartmentPosts",
          {
            street: this.form.street,
            buildingNum: this.form.buildingNum,
            apartmentNum: this.form.apartmentNum,
          }
        );
        const reviews = response.data;

        this.results = [];
        this.results.push(...reviews);

        if (reviews.length > 0) {
          this.message = reviews.length + " results returned from your search";
          this.disabled = false;
        } else {
          this.message = "no results from your search";
          this.disabled = true;
        }

        const response2 = await this.axios.get(
          this.$root.store.base_url + "/getApartmentPosts",
          {
            street: this.form.street,
            buildingNum: this.form.buildingNum,
          }
        );
        const reviews2 = response2.data;

        this.results2 = [];
        this.results2.push(...reviews2);

        if (reviews2.length > 0) {
          this.message2 =
            reviews2.length + " results returned from your search";
          this.disabled2 = false;
        } else {
          this.message2 = "no results from your search";
          this.disabled2 = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
