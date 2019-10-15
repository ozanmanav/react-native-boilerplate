/**
 * The initial values for the redux state.
 */

export interface ExampleState {
  user: {
    address: {
      city: string,
    },
  };
  userIsLoading: boolean;
  userErrorMessage?: string;
}

export const EXAMPLE_INITIAL_STATE: ExampleState = {
  user: {
    address: {
      city: '',
    },
  },
  userIsLoading: false,
  userErrorMessage: undefined,
}
