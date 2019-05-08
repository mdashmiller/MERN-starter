import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../../actions/types'

export default (state=[], action) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.payload
    default:
      return state
  }
}

// const initState = {
//   items: [
//     {id: '1', name: 'item 1'},
//     {id: '2', name: 'item 2'},
//     {id: '3', name: 'item 3'},
//   ]
// }

// const itemReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_ITEMS:
//       return {
//         ...state
//       }
//     case ADD_ITEM:
//       return {
//         ...state
//       }
//     case DELETE_ITEM:
//       return {
//         ...state
//       }
//     default:
//       return state
//   }
// }

// export default itemReducer
