<script>
import { defineComponent, h } from '@vue/composition-api'

import TextField from './fields/TextField.vue'

export default defineComponent({
  name: 'GenericForm',
  components: {
    TextField
  },
  props: {
    schema: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      model: {}
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
  },
  render () {
    return this.schema.map(f => {
      return h(
        f.tag,
        {
          props: { value: this.model[f.id] },
          on: { change: payload => (this.model[f.id] = payload) }
        },
        ''
      )
    })
  }
})
</script>
