<template>
  <m-field
    :id="id"
    :label="label"
    :required="required"
    :requirement-text="requirementText"
    :help-id="helpId"
    :help-text="helpText"
    :error-id="errorId"
    :error-message="errorMessage"
    :is-invalid="isInvalid"
  >
    <m-text-input-field
      :value="value"
      :type="type"
      :is-invalid="isInvalid"
      @input.native="$emit('change', $event.target.value)"
    />
  </m-field>
</template>

<script>
import MField from '@mozaic-ds/mozaic-vue/src/components/field/MField'
import MTextInputField from '@mozaic-ds/mozaic-vue/src/components/textinput/MTextInputField'

import mixin from './mixin'

const types = ['text', 'email', 'date', 'password', 'number', 'tel', 'search']

export default {
  name: 'TextField',
  components: { MField, MTextInputField },
  mixins: [mixin],
  props: {
    value: { type: String, default: '' },
    type: { type: String, default: 'text', validator: v => types.includes(v) }
  }
}
</script>
