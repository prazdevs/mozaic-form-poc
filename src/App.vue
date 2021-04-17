<template>
  <div id="app">
    <text-field
      id="my-text-field"
      error-id="my-text-field-error"
      help-id="my-text-field-help"
      tag="text-field"
      label="Name"
      :value="lulValue"
      :required="true"
      :is-invalid="false"
      @change="$event => (lulValue = $event)"
    />
    <generic-field
      id="my-select-field"
      error-id="my-select-field-error"
      help-id="my-select-field-help"
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
    <text-field
      id="my-password"
      error-id="my-password-error"
      tag="text-field"
      type="password"
      label="Mot de passe"
      :value="password"
      @change="$event => (password = $event)"
    />
  </div>
</template>

<script>
import GenericField from './components/fields/GenericField.vue'
import RadioField from './components/fields/RadioField.vue'
import TextField from './components/fields/TextField.vue'

export default {
  name: 'App',
  components: { GenericField, RadioField, TextField },
  data () {
    return {
      lulValue: 'dfsdf',
      agent: '',
      radioAgent: '',
      password: ''
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
