<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>
    <div id="help">
      <img src="../assets/help.png" />
    </div>
    <div id="words">
      כניסה לבעלי מייל post.bgu.ac.il בלבד
    </div>
    <div id="words">
      כן בעלי מייל אוניברסטאי ? אנא וודאו שאתם מתחברים דרכו ולא דרך חשבון אחר
    </div>
    <LoginButton />
    <div id="moreWords">
      לטובת אמינות המידע, הסתמכנו * על התמיכה ההדדי בין הסטודנטים עקב זאת החלטנו
      להגביל את היכולת לקרוא ולכתוב תגובות אך ורק לחברי האונברסיטה, מבקשים את
      הבנתכם
    </div>
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
  color: tomato;
}
</style>
