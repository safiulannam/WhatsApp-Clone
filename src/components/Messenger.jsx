import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)({
  height: "100vh",
  backgroundColor: "#DCDCDC",
});

const Header = styled(AppBar)({
  height: 220,
  backgroundColor: "#00bfa5",
  boxShadow: "none",
});
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
