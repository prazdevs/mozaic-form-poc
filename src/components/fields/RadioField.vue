<template>
  <fieldset
    :id="id"
    class="mc-field mc-field--group"
  >
    <legend class="mc-field__label">
      {{ label }}
      <span
        v-if="requirementText"
        class="mc-field__requirement"
      >
        {{ requirementText }}
      </span>
    </legend>
    <span class="mc-field__help">
      {{ helpText }}
    </span>
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
          :class="{ 'is-invalid': isInvalid }"
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
    <span class="mc-field__error-message">
      {{ errorMessage }}
    </span>
  </fieldset>
</template>

<script>
import mixin from './mixin'

export default {
  components: {},
  mixins: [mixin],
  props: {
    options: { type: Array, required: true },
    value: { type: String, required: true }
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
    margin-bottom: 0;
  }
}
</style>
