<template>
  <m-select
    :id="id"
    :value="value"
    :options="options"
    @change.native="$emit('change', $event.target.value)"
  />
</template>

<script>
import MSelect from '@mozaic-ds/mozaic-vue/src/components/select/MSelect'

export default {
  name: 'SelectField',
  components: { MSelect },
  props: {
    value: { type: String, required: true },
    options: { type: Array, required: true },
    id: { type: String, required: true }
  }
}
</script>

<style></style>
