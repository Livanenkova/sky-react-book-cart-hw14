import { DECREMENT } from './types'
import { INCREMENT } from './types'

const initialState = {
  likes: 0,
}

export const likeReducer = (state = initialState, action) => {
  console.log('reducer>', action)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      }
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      }
    default:
      return state
  }
}

export default likeReducer
