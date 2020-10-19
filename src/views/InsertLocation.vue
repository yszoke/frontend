<template>
  <div id="container">
    <router-link :to="{ name: 'menu' }"
      ><b-button> <img alt="back" src="../assets/back.jpg" /> </b-button
    ></router-link>
    <GreenIcon />
    <GreenIcon />

    <b-form @submit.stop.prevent="onSubmit">
      <h3>רחוב</h3>
      <b-form
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
      </b-form>
      <h3>מספר בניין</h3>

      <b-form
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
      </b-form>

      <div>המספר לא קיים? הוסף</div>

      <b-form id="1" inline>
        <b-input
          id="inline-form-input-username"
          placeholder="הכנס/י כאן את מספר הבניין"
          v-model="$v.form.buildingInput.$model"
          :state="
            $v.form.buildingInput.$dirty ? !$v.form.buildingInput.$error : null
          "
        ></b-input>

        <b-button
          id="d1"
          v-on:click="addBuilding()"
          :disabled="isDisable(1)"
          variant="primary"
          >הוסף</b-button
        >
      </b-form>
      <h3>מספר דירה</h3>

      <b-form
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
      </b-form>
      <div>המספר לא קיים? הוסף</div>

      <b-form id="2" inline>
        <b-input
          id="inline-form-input-username2"
          placeholder="הכנס/י כאן את מספר הדירה"
          v-model="$v.form.apartmentInput.$model"
          :state="
            $v.form.apartmentInput.$dirty
              ? !$v.form.apartmentInput.$error
              : null
          "
        ></b-input>

        <b-button
          v-on:click="addApartment()"
          :disabled="isDisable(2)"
          variant="primary"
        >
          הוסף</b-button
        >
      </b-form>

      <b-button type="submit" variant="success" :disabled="$v.form.$invalid"
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
// import { validationMixin } from "vuelidate";
// import { required, minLength } from "vuelidate/lib/validators";
import { required, integer } from "vuelidate/lib/validators";
import numbers from "../assets/numbers";
import GreenIcon from "../components/GreenIcon";

export default {
  // mixins: [validationMixin],
  data() {
    return {
      disable1: true,
      disable2: true,
      streets: [],
      buildingNums: [],
      apartmentNums: [],
      dictStreets: {},
      dictBuildings: {},
      dictApartment: {},
      results: [],
      numbers: [{ value: null, text: "", disabled: true }],

      message: "",
      form: {
        street: null,
        buildingNum: null,
        apartmentNum: null,
        buildingInput: null,
        apartmentInput: null,
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
      buildingInput: {
        integer,
      },
      apartmentInput: {
        integer,
      },
    },
  },
  mounted() {
    this.numbers.push(...numbers);
  },
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
    isDisable(num) {
      if (num === 1) {
        return !this.disabled1;
      }
      if (num === 2) {
        return !this.disabled2;
      }
    },

    addBuilding: async function() {
      try {
        console.log(this.streetID);
        console.log(this.form.buildingInput);

        await this.axios.post(this.$root.store.base_url + "/createBuilding", {
          buildingName: this.form.buildingInput,
          streetId: this.streetID,
        });
        await this.SelectedStreet(this.street);
        // console.log(this.buildingNums);
      } catch (error) {
        console.log(error);
      }
    },
    addApartment: async function() {
      try {
        console.log(this.streetID);
        console.log(this.form.buildingNum);
        console.log(this.form.apartmentInput);

        await this.axios.post(this.$root.store.base_url + "/createApartment", {
          buildingId: this.dictBuildings[this.form.buildingNum],
          apartmentName: this.form.apartmentInput,
          streetId: this.streetID,
        });

        await this.SelectedBuilding(this.form.buildingNum);
      } catch (error) {
        console.log(error);
      }
    },
    SelectedStreet: async function(myarg) {
      this.streetID = this.dictStreets[myarg];
      this.street = myarg;
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
        console.log(this.buildingNums);

        this.disabled1 = "false";
      } catch (error) {
        console.log(error);
      }
    },
    SelectedBuilding: async function(myarg) {
      this.buildingID = this.dictBuildings[myarg];
      this.buildingName = myarg;
      console.log(this.buildingID);

      try {
        const response2 = await this.axios.post(
          this.$root.store.base_url + "/getApartments",
          {
            buildingId: this.buildingID,
          }
        );
        const numbers = response2.data;
        this.apartmentNums = [];
        console.log(numbers);

        for (const number in numbers) {
          this.apartmentNums.push(numbers[number].Name);
          this.dictApartment[numbers[number].Name] = numbers[number].Id;
        }
        this.disabled2 = "false";
      } catch (error) {
        console.log(error);
      }
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.street = this.form.street;
      this.$root.store.setStreet(this.street);

      this.buildingNum = this.form.buildingNum;
      this.$root.store.setBuildingNum(this.buildingNum);
      console.log(this.$root.store.BNum);

      this.apartmentNum = this.form.apartmentNum;
      this.$root.store.setApartmentNum(this.apartmentNum);

      this.Search();

      // Form submit logic
    },
    async Search() {
      try {
        this.$router.push({ name: "SetReview1" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
