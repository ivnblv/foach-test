import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Users from "./components/Users";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { Box } from "@material-ui/core";

const styles = makeStyles({
  container: {
    maxWidth: 1024,
    margin: "auto",
    minHeight: "inherit"
    // display: "flex"
  }
});

const App = () => {
  const classes = styles();

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ minHeight: "100vh", backgroundColor: "#ecf6fe" }}
      >
        <Box
          component="div"
          display="flex"
          className={classes.container}
          alignItems="center"
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path={"/"} component={Register} />
                <Route exact path={"/app"} component={Users} />
              </Switch>
            </Router>
          </ThemeProvider>
        </Box>
      </div>
    </Provider>
  );
};

export default App;
