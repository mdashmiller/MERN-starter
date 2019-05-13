import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../types'
import axios from 'axios'

export const getItems = () => dispatch => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
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
