import {
  AppBar,
  Toolbar,
  Container,
  Tooltip,
  IconButton,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../pages/_app";
import { useContext } from "react";

const MyStyleNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  color: theme.palette.primary.main
}));

export default function Navbar({ onSidebarOpen }) {
  const theme = useTheme();
  console.log(theme)
  const colorMode = useContext(ColorModeContext);

  const xsNoneStyle = {
    display: { xs: "none", md: "flex" },
  };

  return (
    <MyStyleNavbar>
      <Container maxWidth="md" disableGutters>
        <Toolbar
          sx={{
            minHeight: 64,
          }}
        >
          <Tooltip title="菜单" sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Tooltip>{" "}
          <Box flexDirection="row" display="flex"></Box>
          <Avatar src="/public/user.jpg" sx={{ ...xsNoneStyle }}></Avatar>
          <Typography variant="h6" sx={{ ml: 2, ...xsNoneStyle }}>
            Andermi
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Tooltip title="搜索">
            <Button startIcon={<SearchIcon />}>搜索</Button>
          </Tooltip>
          <Tooltip title="标签" sx={{ display: { md: "flex", xs: "none" } }}>
            <Button startIcon={<LocalOfferIcon />}>标签</Button>
          </Tooltip>
          <Tooltip title="分类" sx={{ display: { md: "flex", xs: "none" } }}>
            <Button startIcon={<DraftsIcon />}>分类</Button>
          </Tooltip>
          <Tooltip title="切换主题">
            <Button
              startIcon={
                theme.palette.mode == "light" ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness5Icon />
                )
              }
              onClick={colorMode.toggleColorMode}
            >
              切换
            </Button>
          </Tooltip>
        </Toolbar>
      </Container>
    </MyStyleNavbar>
  );
}
