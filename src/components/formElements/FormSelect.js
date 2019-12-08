import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelect = ({
  label,
  options,
  className,
  value,
  name,
  handleInput
}) => (
  <TextField
    name={name}
    value={value}
    className={className}
    onChange={e => handleInput(e, "text")}
    variant="outlined"
    label={label}
    select
    fullWidth
  >
    {options.map(option => (
      <MenuItem value={option}>{option}</MenuItem>
    ))}
  </TextField>
);

export default FormSelect;
