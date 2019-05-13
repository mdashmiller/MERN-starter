import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../../actions/types'

export default (state=[], action) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.payload
    default:
      return state
  }
}
