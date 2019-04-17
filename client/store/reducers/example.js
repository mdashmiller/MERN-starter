import { EXAMPLE } from '../actions/constants'

const customerReducer = (state = [], { type, payload }) => {
  switch (type) {
    case EXAMPLE:
      return payload
    default:
      return state
  }
}

export default exampleReducer
