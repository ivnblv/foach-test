import React from "react";
import { TextField } from "@material-ui/core";

const FormInput = ({ label, className, value, name, handleInput, error }) => (
  <TextField
    fullWidth
    name={name}
    value={value}
    variant="outlined"
    label={label}
    InputProps={{ className }}
    onChange={e => handleInput(e, "text")}
    error={!!error}
    helperText={error}
  />
);
export default FormInput;
