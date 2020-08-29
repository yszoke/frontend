<template>
  <div id="container">
    <BackButton />
    <div id="face">
      <img src="../assets/rightPoint.jpg" />
    </div>
    <div>
      שנת מגורים:
      <b-form-select
        :options="options"
        v-model="selected"
        :selected="selected"
      ></b-form-select>
    </div>
    <div>
      איך היה:
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </div>
    <div>
      ציון כללי מ-1 עד 10?
      <b-form-select
        :options="rankOptions"
        v-model="rankSelected"
        :selected="rankSelected"
      ></b-form-select>
    </div>
    <div>
      שכירות:
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      ></b-form-input>
    </div>

    <div>
      חשבונות מלאים:
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter your name"
        :formatter="formatter"
      ></b-form-input>
    </div>

    <b-button :disabled="disabled" to="/SetReview2" variant="success"
      >3 שאלות אחרונות על הבניין</b-button
    >
  </div>
</template>

<script>
import BackButton from "../components/BackButton";

export default {
  data() {
    return {
      selected: "",
      rankSelected: "",
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
    };
  },
  components: {
    BackButton,
  },
};
</script>

<style></style>
