<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>
    <div id="help">
      <img src="../assets/help.png" />
    </div>
    <div id="words">
      !תודה רבה יש סיכוי ששיניתם שנה שלמה של מישהו לטובה הרבה יותר
    </div>
    <div id="button">
      <b-button pill variant="success">
        <img alt="google" src="../assets/google2.png" />
        <h3>Sign in with google</h3></b-button
      >
    </div>
    <br />
  </div>
</template>

<script>
export default {};
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
  font-family: "Montserrat-Bold, Montserrat";
}
</style>
