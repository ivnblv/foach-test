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
    marginBottom: "2rem"
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
    lineHeight: "17px"
  },
  label: {
    lineHeight: "20px",
    color: "#212322"
  }
});

export default styles;
