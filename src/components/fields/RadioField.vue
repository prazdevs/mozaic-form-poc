<template>
  <fieldset
    :id="id"
    class="mc-field mc-field--group"
  >
    <legend class="mc-field__label">
      {{ label }}
      <span class="mc-field__requirement">obligatoire</span>
    </legend>
    <ul class="mc-field__container mc-field__container--inline">
      <li
        v-for="(option, idx) in options"
        :key="idx"
        class="mc-radio mc-field__item"
      >
        <input
          :id="`${id}-radio-${idx}`"
          :value="option.value"
          :checked="value === option.value"
          type="radio"
          class="mc-radio__input"
          @change="$emit('change', $event.target.value)"
        >
        <label
          :for="`${id}-radio-${idx}`"
          class="mc-radio__label"
        >
          {{ option.text }}
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
export default {
  components: {},
  props: {
    options: { type: Array, required: true },
    id: { type: String, required: true },
    value: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
$local-config: (
  font-path: '../../../node_modules/@mozaic-ds/web-fonts'
);

@import '../../../node_modules/@mozaic-ds/styles/settings-tools/_all-settings.scss';
@include import-font-families();
@import '../../../node_modules/@mozaic-ds/styles/components/_c.radio.scss';
@import '../../../node_modules/@mozaic-ds/styles/components/_c.fields.scss';

.mc-field {
  @include set-font-family();

  ul {
    padding-left: 0;
    list-style: none;
  }
}
</style>
