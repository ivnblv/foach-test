import React from "react";
import { FormControlLabel, Typography, Checkbox } from "@material-ui/core";

const FormCheckbox = ({ name, value, label, className, handleCheckbox }) => (
  <FormControlLabel
    name={name}
    onChange={e => handleCheckbox(e, "bool")}
    control={<Checkbox value={value} color="primary" />}
    label={<Typography className={className}>{label}</Typography>}
  />
);

export default FormCheckbox;
