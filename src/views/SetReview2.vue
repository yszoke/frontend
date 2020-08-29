<template>
  <div id="container">
    <BackButton />
    <div id="face">
      <img src="../assets/leftPoint.jpg" />
    </div>
    <div>
      כמה סטודנטים יש בבניין:
      <b-form-input
        id="input-formatter"
        v-model="text1"
        placeholder="Enter number"
        :formatter="formatter"
      ></b-form-input>
    </div>
    <div>
      איך הבניין בכללי?
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

    <b-button
      :disabled="disabled"
      v-on:click="update"
      to="/SuccessfullReview"
      variant="success"
      >שלח</b-button
    >
  </div>
</template>

<script>
import BackButton from "../components/BackButton";

export default {
  data() {
    return {
      rankSelected: "",

      rankOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };
  },
  components: {
    BackButton,
  },
};
</script>

<style></style>
