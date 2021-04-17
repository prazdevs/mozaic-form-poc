export default {
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    requirementText: { type: String, default: undefined },
    helpId: { type: String, required: true },
    helpText: { type: String, default: undefined },
    errorId: { type: String, required: true },
    errorMessage: { type: String, default: undefined },
    isInvalid: { type: Boolean, required: true }
  }
}
