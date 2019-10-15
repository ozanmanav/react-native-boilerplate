/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { EXAMPLE_INITIAL_STATE, ExampleState } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchUserLoading = (state: ExampleState) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: undefined,
})

export const fetchUserSuccess = (state: ExampleState, payload: any) => ({
  ...state,
  user: payload.user,
  userIsLoading: false,
  userErrorMessage: undefined,
})

export const fetchUserFailure = (state: ExampleState, payload: any) => ({
  ...state,
  user: {
    address: {
      city: '',
    },
  },
  userIsLoading: false,
  userErrorMessage: payload.errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(EXAMPLE_INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
