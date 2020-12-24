import {createStore} from 'redux'
import {createHookedOnReducer} from 'hooked-on-redux'

const initialState = {}

const reducer = createHookedOnReducer(initialState)
export const store = createStore(reducer, initialState)
