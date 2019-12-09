import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";

const FormCheckbox = ({ name, value, label, handleCheckbox, error }) => (
  <FormControl error={!!error}>
    <FormControlLabel
      name={name}
      onChange={e => handleCheckbox(e, "bool")}
      control={<Checkbox value={value} color="primary" />}
      label={label}
    />
    {error ? <FormHelperText>{error}</FormHelperText> : null}
  </FormControl>
);

export default FormCheckbox;
