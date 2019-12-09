import React from "react";
import {
  FormControl,
  FormControlLabel,
  Typography,
  Checkbox,
  FormHelperText
} from "@material-ui/core";

const FormCheckbox = ({
  name,
  value,
  label,
  className,
  handleCheckbox,
  error
}) => (
  <FormControl error={!!error}>
    <FormControlLabel
      name={name}
      onChange={e => handleCheckbox(e, "bool")}
      control={<Checkbox value={value} color="primary" />}
      label={<Typography className={className}>{label}</Typography>}
    />
    {error ? (
      <FormHelperText style={{ position: "absolute", bottom: "-0.9rem" }}>
        {error}
      </FormHelperText>
    ) : null}
  </FormControl>
);

export default FormCheckbox;
