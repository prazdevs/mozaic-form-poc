<template>
  <input
    type="text"
    :value="value"
    @input="$emit('change', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: String,
    value: String
  }
}
</script>

<style></style>
