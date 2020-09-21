<template>
  <div id="container">
    <router-link :to="{ name: 'SetReview1' }"
      ><b-button> <img alt="back" src="../assets/back.jpg" /> </b-button
    ></router-link>
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
          :options="foods"
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
            startYear: this.$root.store.year,
            // endYear: this.$root.store.endYear,
            APA_Text: this.$root.store.review,
            APA_rank: this.$root.store.rank,
            rentCost: this.$root.store.price,
            heshbonot: this.$root.store.payments,
          }
        );
        const result = response.data.id;
        if (result.length > 0) {
          this.message = result.length + " results returned from your search";
          this.disabled = false;
        } else {
          this.message = "no results from your search";
          this.disabled = true;
        }
        this.$router.push({ name: "successfullReview" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
