import { ActionCreators, createActions } from 'reduxsauce';

export enum StartupTypes {
  STARTUP = 'STARTUP',
  STARTUP_LOADING = 'STARTUP_LOADING',
  STARTUP_SUCCESS = 'STARTUP_SUCCESS',
  STARTUP_FAILURE = 'STARTUP_FAILURE',
}

interface C extends ActionCreators {
  startup: () => { type: StartupTypes.STARTUP };
}

const CreatedActions = createActions( {
  startup: null
} );

export default CreatedActions.Creators as C;

 
