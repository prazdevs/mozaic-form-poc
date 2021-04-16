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
  </div>
</template>

<script>
import GenericField from './components/fields/GenericField.vue'

export default {
  name: 'App',
  components: { GenericField },
  data () {
    return {
      lulValue: 'dfsdf',
      agent: ''
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
