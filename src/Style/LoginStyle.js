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
      // width: "20%",
      // background: "red",
    },
  },
});

export default useStyle;
