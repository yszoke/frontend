<template>
  <div id="container">
    <div id="face">
      <img src="../assets/face.png" />
    </div>
    <div id="help">
      <img src="../assets/goodSearch.jpg" />
    </div>
    <div id="header">
      מקווים שהצלחנו לעזור..
    </div>
    <div id="words">
      עם הזמן ובעזרתכם נוכל כל שנה להגדיל את מאגר המידע וכך גם להגדיל את היכולת
      לעזור לכם, שזה בעצם אנחנו
    </div>
    <div id="back">
      <router-link :to="{ name: 'menu' }"
        ><b-button> <img alt="back" src="../assets/backToHome.jpg" /> </b-button
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style></style>
