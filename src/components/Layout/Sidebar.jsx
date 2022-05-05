import { Avatar, Divider, Drawer, Typography } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import SideItem from "./SideItem";
import { Theme } from "@mui/material/styles";

const sideData = [
  {
    title: "首页",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    title: "标签",
    href: "/tags",
    icon: <LocalOfferIcon />,
  },
  {
    title: "分类",
    href: "/groups",
    icon: <DraftsIcon />,
  },
];

const content = (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
    <Box sx={{ display: "flex", mt: 2, p: 2 }}>
      <Avatar>A</Avatar>
      <Typography
        variant="h6"
        sx={{ lineHeight: "40px", ml: 1 }}
      >
        Andermi
      </Typography>
    </Box>

    <Divider
      sx={{
        my: 2,
      }}
    />

    <Box sx={{ flexGrow: 1 }}>
      {sideData.map((item) => {
        return (
          <SideItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        );
      })}
    </Box>
  </Box>
);

export default function Sidebar({ isOpen, onSidebarClose }) {
  // Sidebar内容
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: 280,
          transition: "none",
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
    >
      {content}
    </Drawer>
  );
}
