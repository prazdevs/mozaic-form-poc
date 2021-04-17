<template>
  <div id="app">
    <generic-field
      id="my-text-field"
      error-id="my-text-field-error"
      tag="text-field"
      label="Name"
      :value="lulValue"
      :required="true"
      @change="$event => (lulValue = $event)"
    />
    <generic-field
      id="my-select-field"
      error-id="my-select-field-error"
      tag="select-field"
      label="Favourite agent"
      :value="agent"
      :options="[
        { text: 'Reyna', value: 'reyna' },
        { text: 'Killjoy', value: 'killjoy' }
      ]"
      @change="$event => (agent = $event)"
    />
    <radio-field
      id="my-radio-field"
      label="Favourite agent"
      :options="[
        { text: 'Reyna', value: 'reyna' },
        { text: 'Killjoy', value: 'killjoy' },
        { text: 'Raze', value: 'raze' }
      ]"
      :value="radioAgent"
      @change="$event => (radioAgent = $event)"
    />
  </div>
</template>

<script>
import GenericField from './components/fields/GenericField.vue'
import RadioField from './components/fields/RadioField.vue'

export default {
  name: 'App',
  components: { GenericField, RadioField },
  data () {
    return {
      lulValue: 'dfsdf',
      agent: '',
      radioAgent: ''
    }
  },
  methods: {
    handleChange (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
