<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>
    <div id="pic">
      <img src="../assets/welcome.jpg" />
    </div>
    <div id="words">
      סטודנטים שמחים שהגעתם
    </div>

    <div id="moreWords">
      יאללה בואו נתחיל
    </div>
    <b-button to="/SearchPage" variant="success">חיפוש מידע על דירה</b-button>
    <b-button to="/InsertLocation" variant="success"
      >שיתוף בחווית מגורים</b-button
    >
    <div>
      <b-button to="/PersonalInfo" variant="primary">מידע אישי</b-button>
    </div>
  </div>
</template>

<script>
export default {};
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
