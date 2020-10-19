<template>
  <div id="container">
    <b-button :to="{ name: 'SetReview1' }">
      <img src="../assets/back.jpg"
    /></b-button>
    <div id="face">
      <img src="../assets/leftPoint.jpg" />
    </div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="example-input-group-1"
        label="כמה סודנטים יש בבנין:"
        label-for="example-input-1"
      >
        <b-form-select
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.students.$model"
          :options="rankOptions"
          :state="$v.form.students.$dirty ? !$v.form.students.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-1-live-feedback">
          This is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="example-input-group-2"
        label="איך היה?"
        label-for="example-input-2"
      >
        <b-form-textarea
          id="example-input-2"
          name="example-input-2"
          v-model="$v.form.review.$model"
          :state="$v.form.review.$dirty ? !$v.form.review.$error : null"
          aria-describedby="input-2-live-feedback"
        ></b-form-textarea>

        <b-form-invalid-feedback id="input-2-live-feedback">
          This is a required field and must be at least 3 characters.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="example-input-group-3"
        label="ציון כללי מ-1 עד 10?"
        label-for="example-input-3"
      >
        <b-form-select
          id="example-input-3"
          name="example-input-3"
          v-model="$v.form.rank.$model"
          :options="rankOptions"
          :state="$v.form.rank.$dirty ? !$v.form.rank.$error : null"
          aria-describedby="input-3-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-3-live-feedback">
          must choose rank
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="success" :disabled="$v.form.$invalid"
        >שלח</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      streetID: "",
      buildingID: "",
      apartmentID: "",

      foods: ["apple", "orange"],
      rankOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      form: {
        students: null,
        review: null,
        rank: null,
      },
    };
  },
  components: {},
  validations: {
    form: {
      students: {
        required,
      },
      review: {
        required,
        minLength: minLength(3),
      },
      rank: {
        required,
      },
    },
  },
  async created() {
    try {
      const response = await this.axios.post(
        this.$root.store.base_url + "/getAllStreets"
      );
      const streets = response.data;

      for (const street in streets) {
        // console.log(streets[street].streetName);

        if (this.$root.store.street === streets[street].streetName) {
          this.streetID = streets[street].Id;
        }
      }
      const response2 = await this.axios.post(
        this.$root.store.base_url + "/getBuildings",
        {
          StreetId: this.streetID,
        }
      );
      const buildings = response2.data;

      for (const building in buildings) {
        console.log(buildings[building].Name);

        if (this.$root.store.BNum === buildings[building].Name) {
          this.buildingID = buildings[building].Id;
        }
      }
      const response3 = await this.axios.post(
        this.$root.store.base_url + "/getApartments",
        {
          buildingId: this.buildingID,
        }
      );
      const apartments = response3.data;
      console.log(apartments);

      for (const apartment in apartments) {
        if (this.$root.store.ANum === apartments[apartment].Name) {
          this.apartmentID = apartments[apartment].Id;
        }
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
      this.sendReview();

      // Form submit logic
    },
    async sendReview() {
      try {
        const response = await this.axios.post(
          "http://localhost:3000/createApartmentPost",
          {
            apartmentId: this.apartmentID,
            startYear: this.$root.store.year,
            endYear: this.$root.store.year,
            apartamentText: this.$root.store.review,
            rank: this.$root.store.rank,
            rentCost: this.$root.store.price,
            heshbonot: this.$root.store.payments,
          }
        );
        const result = response;

        const response2 = await this.axios.post(
          "http://localhost:3000/createBuildingPost",
          {
            apartmentId: this.apartmentID,
            startYear: this.$root.store.year,
            endYear: this.$root.store.year,
            buildingId: this.buildingID,
            levelOfStudents: this.form.students,
            buildingText: this.form.review,
            buildingRank: this.form.rank,
          }
        );
        const result2 = response2;
        console.log(result2);
        if (result && result2) {
          this.$router.push({ name: "SuccessfullReview" });
        } else {
          this.disabled = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
