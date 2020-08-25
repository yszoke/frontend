<template>
  <div id="success">
    <div id="face" class="title text-center">
      <img src="../assets/face.png" />
    </div>
    <br />
    <div id="help" class="title text-center">
      <img src="../assets/help.png" />
    </div>
    <br />
    <div id="words" class="title text-center">
      כניסה לבעלי מייל post.bgu.ac.il בלבד
    </div>
    <br />
    <div id="words" class="title text-center">
      כן בעלי מייל אוניברסטאי ? אנא וודאו שאתם מתחברים דרכו ולא דרך חשבון אחר
    </div>
    <br />
    <div class="text-center">
      <b-button pill variant="success">
        <img
          height="20px"
          width="20px"
          alt="google"
          src="../assets/google2.png"
        />
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
  font: "ariel";
}
</style>
