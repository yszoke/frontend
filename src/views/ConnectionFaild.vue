<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>
    <div id="words">
      ההתחברות נכשלה ..
    </div>

    <div id="moreWords">
      תנסו שוב אולי אנחנו או אתם עשינו משהו לא נכון בתקשורת עם גוגל. אופציה שניה
      זה שהשרתים .של גוגל נפלו ואז סוף העולם הגיע (:
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
}
</style>
