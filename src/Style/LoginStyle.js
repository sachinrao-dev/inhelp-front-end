import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  loginContainer: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  container: {
    width: "30%",
    margin: "0 auto",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& InputField": {
      marginTop: "10px",
    },
  },
  list: {
    display: "flex",
    "& p": {
      marginRight: "20px",
    },
  },
  buttons: {
    marginTop: "30px",
    width: "30%",
    position: "relative",
    bottom: "0",
    right: "10px",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "sans-serif",
    fontWeight: "600",
  },
});

export default useStyle;
