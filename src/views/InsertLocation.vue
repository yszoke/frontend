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
          :options="foods"
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

      <b-button
        type="submit"
        variant="success"
        to="/setReview1"
        :disabled="$v.form.$invalid"
        >יאללה המשכנו</b-button
      >
    </b-form>
    <div v-for="r in streets" :key="r.id">
      <p>{{ message }}</p>
      <p>{{ r.name }}</p>
    </div>
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

      results: [],
      numbers: [{ value: null, text: "", disabled: true }],

      message: "",
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
  created() {
    this.insertStreets();
  },
  methods: {
    async insertStreets() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/JsonOfAllStreets"
        );
        const streets = response.data;
        this.streets = [];
        this.streets.push(...streets);
        console.log(streets);

        // for (const street in streets) {
        //   this.streets.push(street);
        //   console.log(street);
        // }
        console.log(this.streets);
      } catch (error) {
        console.log(error);
      }
    },
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
          "http://localhost:3000/JsonOfAllStreets"
        );
        const recipes = response.data;

        this.results = [];
        this.results.push(...recipes);

        if (recipes.length > 0) {
          this.message = recipes.length + " results returned from your search";

          this.disabled = false;
        } else {
          this.message = "no results from your search";
          this.disabled = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
