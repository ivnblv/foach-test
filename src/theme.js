import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-lato";
import { isAbsolute } from "path";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: { main: "#1EAAFC" }
  },
  overrides: {
    MuiFormHelperText: {
      error: {
        position: isAbsolute,
        bottom: "-0.9rem"
      }
    }
  }
});
export default theme;
