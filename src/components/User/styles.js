import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  container: {
    maxWidth: "920px",
    backgroundColor: "#fff",
    padding: "1rem",
    margin: "auto",
    marginBottom: "2rem",
    border: "2px solid #1EAAFC",
    borderRadius: "8px"
  },
  text: {
    color: "#747474",
    fontSize: 30,
    letterSpacing: "0.75px",
    lineHeight: "36px"
  },
  textPrimary: {
    color: "#747474"
  },
  textSecondary: {
    color: "#E0E0E0"
  },
  avatar: {
    backgroundColor: "#E0E0E0",
    height: "auto",
    width: "150px"
  },
  switch: {
    color: "#747474",
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: "0.4px",
    paddingBottom: "5px"
  },
  switchChecked: {
    color: "#1EAAFC !important",
    fontSize: 16,
    lineHeight: "16px",
    letterSpacing: "0.4px"
  },
  label: {
    fontSize: 16,
    letterSpacing: "0.4px",
    lineHeight: "16px",
    color: "#747474",
    paddingBottom: "4px",
    paddingLeft: "5px"
  },
  labelChecked: {
    color: "#1EAAFC"
  }
});

export default styles;
