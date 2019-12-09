import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    maxWidth: "470px",
    backgroundColor: "#fff"
  },
  title: {
    fontFamily: "Playfair Display",
    fontSize: "25px",
    lineHeight: "33px",
    fontWeight: "bold",
    fontStyle: "normal",
    marginBottom: "1rem",
    color: "#161616"
  },
  inlineLink: {
    margin: "0 .3rem",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px"
  },
  button: {
    fontSize: 14,
    letterSpacing: "3px",
    lineHeight: "17px",
    fontWeight: "bold",
    borderRadius: 0,
    padding: "15px 17px",
    color: "#fff"
  },
  input: {
    lineHeight: "17px",
    fontSize: 14,
    borderRadius: 0,
    color: "#161616"
  },
  checkboxes: {
    lineHeight: "20px",
    color: "#212322"
  },
  label: {
    lineHeight: "20px",
    color: "#212322"
  }
});

export default styles;
