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
          v-on:change="SelectedStreet"
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
          :options="buildingNums"
          :state="
            $v.form.buildingNum.$dirty ? !$v.form.buildingNum.$error : null
          "
          aria-describedby="input-2-live-feedback"
          v-on:change="SelectedBuilding"
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
          :options="apartmentNums"
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
    <div>
      <b-row>
        <b-col>
          <h2>ביקורות על הדירה</h2>
          <div v-for="r in results" :key="r.id">
            <Reviews class="Reviews" :review="r" />
          </div>
        </b-col>
        <b-col>
          <h2>ביקורות על הבניין</h2>

          <div v-for="r in results2" :key="r.id">
            <Reviews class="Reviews" :review="r" />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import Reviews from "./Reviews";
// import { required, minLength } from "vuelidate/lib/validators";
import { required } from "vuelidate/lib/validators";
// import numbers from "../assets/numbers";
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
      streetID: "",
      buildingID: "",
      results: [],
      results2: [],
      dictStreets: {},
      dictBuildings: {},
      dictApartment: {},
      numbers: [{ value: null, text: "", disabled: true }],

      test: "",
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
    Reviews,
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
    },
  },
  async mounted() {},
  async created() {
    try {
      const response = await this.axios.post(
        this.$root.store.base_url + "/getAllStreets"
      );
      const streets = response.data;
      this.streets = [];

      for (const street in streets) {
        this.streets.push(streets[street].streetName);
        this.dictStreets[streets[street].streetName] = streets[street].Id;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    SelectedStreet: async function(myarg) {
      this.streetID = this.dictStreets[myarg];
      try {
        const response2 = await this.axios.post(
          this.$root.store.base_url + "/getBuildings",
          {
            StreetId: this.streetID,
          }
        );
        const numbers = response2.data;

        this.buildingNums = [];

        for (const number in numbers) {
          this.buildingNums.push(numbers[number].Name);
          this.dictBuildings[numbers[number].Name] = numbers[number].Id;
        }
      } catch (error) {
        console.log(error);
      }
    },
    SelectedBuilding: async function(myarg) {
      this.buildingID = this.dictBuildings[myarg];
      try {
        const response2 = await this.axios.post(
          this.$root.store.base_url + "/getApartments",
          {
            buildingId: this.buildingID,
          }
        );
        const numbers = response2.data;
        console.log(numbers);
        this.apartmentNums = [];

        for (const number in numbers) {
          this.apartmentNums.push(numbers[number].Name);
          this.dictApartment[numbers[number].Name] = numbers[number].Id;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Search();
    },
    async Search() {
      console.log(this.dictApartment[this.form.apartmentNum]);

      try {
        const response = await this.axios.post(
          this.$root.store.base_url + "/getApartmentPosts",
          {
            apartmentId: this.dictApartment[this.form.apartmentNum],
          }
        );
        const reviews = response.data;
        this.results = [];
        this.results.push(...reviews);
        console.log(this.form.buildingNum);

        console.log(this.dictBuildings[this.form.buildingNum]);

        const response2 = await this.axios.post(
          this.$root.store.base_url + "/getBuildingPosts",
          {
            buildingId: this.dictBuildings[this.form.buildingNum],
          }
        );
        console.log(response2);
        const reviews2 = response2.data;
        this.results2 = [];
        this.results2.push(...reviews2);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
