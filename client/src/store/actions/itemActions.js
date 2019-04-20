import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './constants'

export const getItems = () => /*dispatch =>*/ {
  // return fetch('/api/docs')
  //   .then(res => res.json())
  //   .then(docs => dispatch({ type: EXAMPLE, payload: docs }))
  return {
    type: GET_ITEMS
  }
}

export const addItem = () => {
  return {
    type: ADD_ITEM
  }
}


export const deleteItem = () => {
  return {
    type: DELETE_ITEM
  }
}
