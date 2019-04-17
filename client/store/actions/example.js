import { EXAMPLE } from './constants'

export const getExample = () => dispatch => {
  return fetch('/api/docs')
    .then(res => res.json())
    .then(docs => dispatch({ type: EXAMPLE, payload: docs }))
}
