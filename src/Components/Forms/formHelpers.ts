import { compose, tap, merge, get, reduce } from "lodash/fp";
import * as yup from "yup";

export const composeFormErrors = compose(
  tap(res => process.env.DEBUG && console.log("Form Errors", res)),
  reduce(
    (errors: { [x: string]: string }, validationError: yup.ValidationError) =>
      merge(errors, {
        [validationError.path]: validationError.message
      }),
    {}
  ),
  get("inner")
);
