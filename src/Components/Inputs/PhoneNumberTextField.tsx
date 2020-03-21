import React from "react";
import { AsYouType } from "libphonenumber-js/core";
import TextField, {
  FieldWithLabelProps
} from "Components/Inputs/TextFieldUpperLabel";
//eslint-disable-next-line @typescript-eslint/no-var-requires
const metadata = require("libphonenumber-js/metadata.min.json");

type PhoneNumberInputProps = {} & FieldWithLabelProps;

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (
  props: PhoneNumberInputProps
) => {
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = event.target.value;
    if (
      (val[0] !== "1" && val.length > 14) ||
      (val[0] === "1" && val.length > 16)
    ) {
      // This solves the jankyness with the parens not deleting
      return;
    } else if (val.length === 6 || val.length === 4) {
      props.onChange && props.onChange(event);
    } else if (val.length === 3) {
      props.onChange && props.onChange(event);
    } else {
      event.target.value = new AsYouType("US", metadata).input(val || "");
      props.onChange && props.onChange(event);
    }
  };

  return <TextField {...props} onChange={handlePhoneNumberChange} />;
};

export default PhoneNumberInput;
