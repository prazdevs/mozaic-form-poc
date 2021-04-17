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
  >
    <component
      :is="tag"
      :id="`${id}-field`"
      :value="value"
      :type="type"
      :options="options"
      @change="$emit('change', $event)"
    />
  </m-field>
</template>

<script>
import MField from '@mozaic-ds/mozaic-vue/src/components/field/MField'

import TextField from './TextField.vue'
import SelectField from './SelectField.vue'

export default {
  name: 'GenericField',
  components: {
    MField,
    TextField,
    SelectField
  },
  props: {
    tag: { type: String, required: true },
    value: { type: [String, Boolean], required: true },
    id: { type: String, required: true },
    label: { type: String, default: '' },
    type: { type: String, default: undefined },
    required: { type: Boolean, default: false },
    requirementText: { type: String, default: undefined },
    helpId: { type: String, default: undefined },
    helpText: { type: String, default: undefined },
    errorId: { type: String, required: true },
    errorMessage: { type: String, default: undefined },
    options: { type: Array, default: undefined }
  }
}
</script>
