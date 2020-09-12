<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>

    <div id="welcome">
      ברוכים הבאים
    </div>
    <div id="words">
      אתר הדירות של באר שבע
    </div>
    <LoginButton />
  </div>
</template>

<script>
import LoginButton from "../components/LoginButton";
export default {
  components: {
    LoginButton,
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

#welcome {
  font-size: 40px;
  font-family: "Montserrat-Bold, Montserrat";
}
#words {
  font-size: 30px;
  font-family: "Montserrat-Bold, Montserrat";
}
</style>
