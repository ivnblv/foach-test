import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const FormSelect = ({
  label,
  options,
  className,
  value,
  name,
  handleInput,
  error
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
    error={!!error}
    helperText={error}
  >
    {options.map(option => (
      <MenuItem value={option}>{option}</MenuItem>
    ))}
  </TextField>
);

export default FormSelect;
