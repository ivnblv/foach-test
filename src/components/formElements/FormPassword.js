import React, { useState } from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  IconButton,
  FormHelperText
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const FormPassword = ({
  label,
  className,
  value,
  name,
  handleInput,
  error
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel
        variant="outlined"
        style={{
          backgroundColor: "#fff",
          padding: "0 .5rem"
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        variant="outlined"
        value={value}
        name={name}
        className={className}
        onChange={e => handleInput(e, "text")}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  );
};
export default FormPassword;
