import {
  AppBar,
  Toolbar,
  Container,
  Tooltip,
  IconButton,
  Button,
  Avatar,
  Typography,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useTheme, alpha } from "@mui/material/styles";
import { ColorModeContext } from "../../pages/_app";
import { useContext } from "react";

const MyStyleNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#23272f",
  boxShadow: theme.shadows[3],
  color: theme.palette.primary.main,
  backgroundImage: "none",
  position: 'static'
}));

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ onSidebarOpen }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const xsNoneStyle = {
    display: { xs: "none", md: "flex" },
  };

  return (
    <MyStyleNavbar>
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            minHeight: 64,
          }}
        >
          <Tooltip title="菜单" sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={onSidebarOpen} color="primary">
              <MenuIcon />
            </IconButton>
          </Tooltip>{" "}
          <Box flexDirection="row" display="flex"></Box>
          <Avatar
            src="/user.jpg"
            sx={{ ...xsNoneStyle }}
            variant="rounded"
          ></Avatar>
          <Typography variant="h6" sx={{ ml: 2, ...xsNoneStyle }}>
            Andermi
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}></Box>
          <Tooltip title="搜索">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
                  <Brightness7Icon />
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
