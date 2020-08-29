<template>
  <div id="container">
    <BackButton />
    <GreenIcon />
    <GreenIcon />
    <b-button :disabled="disabled" to="/InsertLocation" variant="success"
      >חיפוש מידע על חווית המגורים בדירה</b-button
    >
    <b-button :disabled="disabled" to="/InsertLocation" variant="success"
      >תרומת מדע על חווית המגורים בדירה</b-button
    >
  </div>
</template>

<script>
import BackButton from "../components/BackButton";
import GreenIcon from "../components/GreenIcon";

export default {
  components: {
    BackButton,
    GreenIcon,
  },
};
</script>

<style></style>
