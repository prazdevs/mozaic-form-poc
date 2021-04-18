<template>
  <div id="app">
    <generic-form :schema="fields" />
  </div>
</template>

<script>
import GenericForm from './components/GenericForm.vue'

export default {
  name: 'App',
  components: { GenericForm },
  data () {
    return {
      fields: [
        {
          id: 'name',
          tag: 'text-field',
          label: 'Name',
          defaultValue: '',
          helpText: 'You Valorant in-game name.'
        },
        {
          id: 'date',
          tag: 'text-field',
          type: 'date',
          label: 'Birth date',
          helpText: 'The day you were born.'
        },
        {
          id: 'favAgent',
          tag: 'radio-field',
          label: 'Favourite agent',
          defaultValue: 'killjoy',
          options: [
            {
              text: 'Killjoy',
              value: 'killjoy'
            },
            {
              text: 'Reyna',
              value: 'reyna'
            },
            {
              text: 'Raze',
              value: 'raze'
            }
          ],
          helpText: 'Pick your favourite Valorant agent.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$local-config: (
  font-path: '../node_modules/@mozaic-ds/web-fonts'
);

@import '../node_modules/@mozaic-ds/styles/settings-tools/_all-settings.scss';
@include import-font-families();

#app {
  @include set-font-family();
}
</style>
