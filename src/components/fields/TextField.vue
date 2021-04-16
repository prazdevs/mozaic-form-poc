<template>
  <m-text-input-field
    :value="value"
    @input.native="$emit('change', $event.target.value)"
  />
</template>

<script>
import MTextInputField from '@mozaic-ds/mozaic-vue/src/components/textinput/MTextInputField'

export default {
  name: 'TextField',
  components: { MTextInputField },
  props: {
    value: { type: String, required: true }
  }
}
</script>
