import itemsReducer from './reducer'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../../actions/types'

// fake state for testing
const items = [
  {
    id: 'test1',
    name: 'test item 1'
  },
  {
    id: 'test2',
    name: 'test item 2'
  },
  {
    id: 'test3',
    name: 'test item 3'
  }
]

describe('items reducer', () => {

  it('should return default state when there is no matching type', () => {
    const newState = itemsReducer(undefined, {})

    expect(newState).toEqual([])
  })

  it('should return new state if it receives type', () => {
    const newState = itemsReducer(undefined, {
      type: GET_ITEMS,
      payload: items
    })

    expect(newState).toEqual(items)
  })

})
