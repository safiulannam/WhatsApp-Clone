import Dialog from "@mui/material/Dialog";

const dialogStyle = {
  height: "96%",
  marginTop: "10%",
};

const LoginDialog = () => {
  return (
    <Dialog open={true}>
      <p>Hello From Login</p>
    </Dialog>
  );
};

export default LoginDialog;
