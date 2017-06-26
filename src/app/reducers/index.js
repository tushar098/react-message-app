import { combineReducers } from 'redux'
import messages from './messages'
import people from './people'

const msgApp = combineReducers({
  messages,
  people
})

export default msgApp