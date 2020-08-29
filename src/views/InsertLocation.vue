<template>
  <div id="container">
    <BackButton />
    <GreenIcon />
    <GreenIcon />

    <span>please choose a neighborhood:</span>
    <div id="neighborhood">
      <b-form-select
        :options="Noptions"
        v-model="Nselected"
        :selected="Nselected"
        @change="update(Nselected)"
      ></b-form-select>
    </div>
    <span>please choose a street:</span>
    <div id="street">
      <b-form-select
        :options="Soptions"
        v-model="Sselected"
        :selected="Nselected"
      ></b-form-select>
    </div>
    <b-button :disabled="disabled" to="/SetReview1" variant="success"
      >יאללה המשכנו</b-button
    >
    <div v-if="Nselected">
      {{ update() }}
    </div>

    <div class="mt-3">
      NSelected: <strong>{{ Nselected }}</strong> SSelected:
      <strong>{{ Sselected }}</strong>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton";
import GreenIcon from "../components/GreenIcon";
// import Selector from "../components/Selector";

export default {
  data() {
    return {
      Nselected: "r",
      Sselected: "",

      Noptions: [
        { value: "א", text: "א" },
        { value: "ב", text: "ב" },
        { value: "ג", text: "ג" },
        { value: "ד", text: "ד" },
      ],
      Soptions: [],
    };
  },
  components: {
    BackButton,
    GreenIcon,
    // Selector,
  },

  methods: {
    update: function() {
      this.Soptions = [
        { value: "א", text: "א" },
        { value: "ב", text: "ב" },
        { value: "ג", text: "ג" },
        { value: "ד", text: "ד" },
      ];
      this.$forceUpdate();
    },
  },
  //   update() {
  //     if (!this.Nselected) {
  //       return [];
  //     } else {
  //       return [
  //         { value: "א", text: "א" },
  //         { value: "ב", text: "ב" },
  //         { value: "ג", text: "ג" },
  //         { value: "ד", text: "ד" },
  //       ];
  //       //   this.Soptions = [
  //       //     { value: "א", text: "א" },
  //       //     { value: "ב", text: "ב" },
  //       //     { value: "ג", text: "ג" },
  //       //     { value: "ד", text: "ד" },
  //       //   ];
  //       //   this.Nselected = this.Soptions.pop();
  //       //   this.$forceUpdate();
  //       // },
};
</script>
<style>
:root {
  --main-radius: 5px;
  --main-padding: 5px;
}

.container {
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: minmax(100px, auto);
  /* grid-template-areas: "face" "help"; */
  grid-gap: 0.2rem;
}

#face {
  /* background: #ba0d41; */
  grid-area: face;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#help {
  /* background: #0000ff; */
  grid-area: help;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#words {
  font-size: 30px;
  font: "ariel";
}

#moreWords {
  font-size: 30px;
  font: "ariel";
  color: tomato;
}
</style>
