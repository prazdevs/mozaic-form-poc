<template>
  <input
    type="checkbox"
    :checked="value"
    @change="$emit('change', !!$event.target.checked)"
  >
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    value: Boolean,
    label: String
  }
}
</script>

<style></style>
