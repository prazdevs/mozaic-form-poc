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
    <m-select
      :id="id"
      :value="value"
      :options="options"
      @change.native="$emit('change', $event.target.value)"
    />
  </m-field>
</template>

<script>
import MField from '@mozaic-ds/mozaic-vue/src/components/field/MField'
import MSelect from '@mozaic-ds/mozaic-vue/src/components/select/MSelect'

import mixin from './mixin'

export default {
  name: 'SelectField',
  components: { MField, MSelect },
  mixins: [mixin],
  props: {
    value: { type: String, required: true },
    options: { type: Array, required: true }
  }
}
</script>

<style></style>
