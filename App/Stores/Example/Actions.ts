import { ActionCreators, createActions } from 'reduxsauce';

export enum ExampleTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_LOADING = 'FETCH_USER_LOADING',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
}

interface C extends ActionCreators {
  fetchUser: () => { type: ExampleTypes.FETCH_USER };
  fetchUserLoading: () => { type: ExampleTypes.FETCH_USER_LOADING };
  fetchUserSuccess: (user: object) => { type: ExampleTypes.FETCH_USER_SUCCESS };
  fetchUserFailure: (errorMessage: string) => { type: ExampleTypes.FETCH_USER_FAILURE };
}

const CreatedActions = createActions( {
   // Fetch user informations
   fetchUser: null,
   // The operation has started and is loading
   fetchUserLoading: null,
   // User informations were successfully fetched
   fetchUserSuccess: ['user'],
   // An error occurred
   fetchUserFailure: ['errorMessage'],
} );

export default CreatedActions.Creators as C;

 
