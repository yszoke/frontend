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
#words {
  font-size: 30px;
  font: "ariel";
}

#moreWords {
  font-size: 30px;
  font: "ariel";
}
</style>
