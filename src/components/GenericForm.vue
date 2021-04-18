<script>
import { defineComponent, h } from '@vue/composition-api'
import MButton from '@mozaic-ds/mozaic-vue/src/components/button/MButton'

import TextField from './fields/TextField.vue'
import SelectField from './fields/SelectField.vue'
import RadioField from './fields/RadioField.vue'

export default defineComponent({
  name: 'GenericForm',
  components: {
    MButton,
    TextField,
    SelectField,
    RadioField
  },
  props: {
    schema: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      model: {},
      errors: {},
      validations: {}
    }
  },
  created () {
    this.model = this.schema.reduce(
      (m, f) => ({
        ...m,
        [f.id]: f.defaultValue
      }),
      {}
    )
    this.validations = this.schema.reduce(
      (v, f) => ({
        ...v,
        [f.id]: true
      }),
      {}
    )
    this.errors = this.schema.reduce(
      (e, f) => ({
        ...e,
        [f.id]: ''
      }),
      {}
    )
  },
  methods: {
    handleForm () {
      console.log({ ...this.model })
    }
  },
  render () {
    const fields = this.schema.map(f => {
      return h(
        f.tag,
        {
          props: {
            value: this.model[f.id],
            id: f.id,
            label: f.label,
            required: f.required,
            requirementText: f.requirementText,
            helpId: `${f.id}-help`,
            helpText: f.helpText,
            errorId: `${f.id}-error`,
            errorMessage: this.errors[f.id],
            isInvalid: !this.validations[f.id],
            options: f.options,
            type: f.type
          },
          on: { change: payload => (this.model[f.id] = payload) }
        },
        ''
      )
    })

    const button = h(
      'm-button',
      { attrs: { type: 'submit' }, props: { label: 'submit form' } },
      ''
    )

    return h(
      'form',
      {
        on: {
          submit: e => {
            e.preventDefault()
            this.handleForm()
          }
        }
      },
      [fields, button]
    )
  }
})
</script>
