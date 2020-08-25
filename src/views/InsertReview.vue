<template>
  <div id="container">
    <BackButton />
    <div id="face">
      <img src="../assets/rightPoint.jpg" />
    </div>
    <Selector
      class="Selector"
      :options="[
        { value: 'א', text: 'א' },
        { value: 'ב', text: 'ב' },
        { value: 'ג', text: 'ג' },
        { value: 'ד', text: 'ד' },
      ]"
    />
  </div>
</template>

<script>
import BackButton from "../components/BackButton";
import Selector from "../components/Selector";

export default {
  components: {
    BackButton,
    Selector,
  },
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
