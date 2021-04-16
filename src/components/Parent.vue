<script>
import { defineComponent, h } from '@vue/composition-api'

import TextInput from './TextInput.vue'
import CheckboxInput from './CheckboxInput.vue'

export default defineComponent({
  name: 'Parent',
  components: {
    TextInput,
    CheckboxInput
  },
  data () {
    return {
      schema: {
        fields: [
          {
            id: 'name',
            tag: 'TextInput',
            label: 'Nom',
            event: 'input',
            defaultValue: ''
          },
          {
            id: 'francois',
            tag: 'CheckboxInput',
            label: 'LuL',
            event: 'change',
            defaultValue: true
          }
        ]
      },
      model: {}
    }
  },
  // props: {
  //   schema: Object
  // },
  created () {
    this.model = this.schema.fields.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.id]: cur.defaultValue
      }),
      {}
    )
  },
  render () {
    const fieldz = this.schema.fields.map(f => {
      return h(
        f.tag,
        {
          props: { value: this.model[f.id], label: f.label },
          on: { change: payload => (this.model[f.id] = payload) }
        },
        ''
      )
    })

    const send = () => this.$emit('submit', this.model)

    return (
      <div>
        {fieldz}
        <button onClick={send}>send</button>
      </div>
    )
  }
})
</script>

<style></style>
