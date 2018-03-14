import { combineReducers } from 'redux'

const globalnav = (state = globalnavState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV': {
      return {...state, toggle: action.payload}
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  globalnav
})