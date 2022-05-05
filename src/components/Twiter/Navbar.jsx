import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

const MyStyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function NavBar() {
  return (
    <AppBar position="sticky">
      <MyStyleToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" } }}
          component="div"
        >
          LOOK ME
        </Typography>
        <IconButton>
          <AlignHorizontalRightIcon
            sx={{ display: { xs: "block", sm: "none" }, color: "#fff" }}
          ></AlignHorizontalRightIcon>
        </IconButton>
      </MyStyleToolbar>
    </AppBar>
  );
}
