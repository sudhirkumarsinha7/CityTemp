export type AuthState = {};
export type ProgressState = {
  [requestAction: string]: boolean,
};

export type ReduxStore = {
  auth: AuthState,
  progress: ProgressState,
};
