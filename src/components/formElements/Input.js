import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ label, className }) => (
  <TextField
    fullWidth
    name="firstName"
    variant="outlined"
    label={label}
    InputProps={{ className: { className } }}
  />
);
export default Input;
