import { ListItem, Button, Box } from "@mui/material";
import { useRouter } from "next/router";

import NavLink from "next/link";

export default function SideItem({ title, href, icon }) {
  const router = useRouter();
  const active = href ? router.pathname == href : false;

  return (
    <ListItem sx={{ py: 0, px: 2, mb: 0.5, display: "flex" }} disableGutters>
      <NavLink href={href} passHref>
        <Button
          disableRipple
          startIcon={icon}
          component="a"
          sx={{
            backgroundColor: active
              ? "sideList.activeBgColor"
              : "sideList.bgColor",
            borderRadius: 1,
            color: active ? "sideList.activeText" : "sideList.text",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: active ? 'sideList.activeBgColor' :"sideList.hoverBgColor"  ,
            },
          }}
        >
          {title}
        </Button>
      </NavLink>
    </ListItem>
  );
}
