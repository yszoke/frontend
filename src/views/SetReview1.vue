<template>
  <div id="container">
    <b-button :to="{ name: 'InsertLocation' }">
      <img src="../assets/back.jpg"
    /></b-button>
    <div id="face">
      <img src="../assets/rightPoint.jpg" />
    </div>

    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="example-input-group-1"
        label="שנת מגורים:"
        label-for="example-input-1"
      >
        <b-form-select
          id="example-input-1"
          name="example-input-1"
          v-model="$v.form.year.$model"
          :options="options"
          :state="$v.form.year.$dirty ? !$v.form.year.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-select>

        <b-form-invalid-feedback id="input-1-live-feedback">
          must choose year
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
          aria-describedby="input-1-live-feedback"
          placeholder="תאר/י את הדירה במילים"
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

      <b-form-group
        id="example-input-group-4"
        label="שכירות:"
        label-for="example-input-4"
      >
        <b-form-input
          id="example-input-4"
          name="example-input-4"
          v-model="$v.form.price.$model"
          :state="$v.form.price.$dirty ? !$v.form.price.$error : null"
          aria-describedby="input-1-live-feedback"
          placeholder="הכנס/י את שכר הדירה בשקלים"
        ></b-form-input>

        <b-form-invalid-feedback id="input-4-live-feedback">
          must choose a number
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        id="example-input-group-5"
        label="חשבונות מלאים:"
        label-for="example-input-5"
      >
        <b-form-input
          id="example-input-5"
          name="example-input-5"
          v-model="$v.form.payments.$model"
          :state="$v.form.payments.$dirty ? !$v.form.payments.$error : null"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>

        <b-form-invalid-feedback id="input-5-live-feedback">
          must choose a number
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="success" :disabled="$v.form.$invalid"
        >3 שאלות אחרונות על הבניין</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, integer } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      options: [
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      rankOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],

      form: {
        year: null,
        review: null,
        rank: null,
        price: null,
        payments: null,
      },
    };
  },
  components: {},
  validations: {
    form: {
      year: {
        required,
      },
      review: {
        required,
        minLength: minLength(3),
      },
      rank: {
        required,
      },
      price: {
        required,
        integer,
      },
      payments: {
        required,
        integer,
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.year = this.form.year;
      this.review = this.form.review;
      this.rank = this.form.rank;
      this.price = this.form.price;
      this.payments = this.form.payments;

      this.$root.store.setDetails(
        this.year,
        this.review,
        this.rank,
        this.price,
        this.payments
      );

      this.$router.push({ name: "SetReview2" });

      // Form submit logic
    },
  },
};
</script>
