import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'

const rootReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */
  example: ExampleReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default () => {
  return configureStore(rootReducer, rootSaga)
}
