<template>
  <label>
    {{ label }}
    <component
      :is="type"
      :value="value"
      @change="$emit('change', $event)"
    />
  </label>
</template>

<script>
import CheckboxInput from './CheckboxInput.vue'
import TextInput from './TextInput.vue'

export default {
  name: 'GenericInput',
  components: {
    CheckboxInput,
    TextInput
  },
  props: {
    value: { type: String || Boolean, required: true },
    type: String,
    label: String
  }
}
</script>

<style></style>
