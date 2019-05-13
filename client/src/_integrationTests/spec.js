import { getItems } from '../store/actions/item'
import moxios from 'moxios'
import { testStore } from '../Utils'

describe('getItems action', () => {

  beforeEach(() =>{
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should update the store correctly', () => {
    const expectedState = [
      {
        title: 'test title 1',
        body: 'test content 1'
      },
      {
        title: 'test title 2',
        body: 'test content 2'
      },
      {
        title: 'test title 3',
        body: 'test content 3'
      }
    ]
    const store = testStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    return store.dispatch(getItems())
      .then(() => {
        const newState = store.getState()

        expect(newState.items).toBe(expectedState)
      })
  })

})
