<template>
  <div>
    <b-form-select
      v-model="selected"
      :selected="selected"
      :options="options"
    ></b-form-select>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "א",
    };
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>
