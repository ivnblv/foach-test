import React from "react";
import { FormControlLabel, Typography, Checkbox } from "@material-ui/core";

const FormCheckbox = ({ value, label, className }) => (
  <FormControlLabel
    control={<Checkbox value={value} color="primary" />}
    label={<Typography className={className}>{label}</Typography>}
  />
);

export default FormCheckbox;
