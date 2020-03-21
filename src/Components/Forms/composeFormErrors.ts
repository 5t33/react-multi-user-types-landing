import { compose, tap, merge, get, reduce } from "lodash/fp";
import * as yup from "yup";

const composeFormErrors = compose(
  tap(res => console.log("Form Errors", res)),
  reduce(
    (errors: { [x: string]: string }, validationError: yup.ValidationError) =>
      merge(errors, {
        [validationError.path]: validationError.message
      }),
    {}
  ),
  get("inner")
);

export default composeFormErrors;