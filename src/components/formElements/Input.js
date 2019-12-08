import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ label, className, value, name, handleInput }) => (
  <TextField
    fullWidth
    name={name}
    value={value}
    variant="outlined"
    label={label}
    InputProps={{ className }}
    onChange={e => handleInput(e, "text")}
  />
);
export default Input;
