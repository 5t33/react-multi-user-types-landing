export const ReducerUnrecognizedActionError = (action: string) =>
  `Reducer used with unreginized action: ${action}`;
export const UseSignUpStateError = `useSignUpState must be used within a SignUpProvider`;
export const UseSignUpDispatchError = `useSignUpdispatch must be used within a SignUpProvider`;
export const DispatchPreUse = "dispatch used before reducer was set";
export const UnknownUserTypeError = (userType: string) =>
  `Unknown user type ${userType}`;
export const UnknownSignUpStep = (step: string) =>
  `Unknown Sign Up Step ${step}`;
export const UnknownVenueSignUpStep = (step: string) =>
  `Unknown Venue Sign Up Step ${step}`;
