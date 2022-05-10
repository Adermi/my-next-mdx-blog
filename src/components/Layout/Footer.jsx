import {
  Divider,
  Box,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";

const links = [
  {
    title: "React Docs Beta 官网",
    link: "https://beta.reactjs.org/",
  },
  {
    title: "NextJs 官网",
    link: "https://nextjs.org/",
  },
  {
    title: "Vite 中文官网",
    link: "https://vitejs.cn/",
  },
  {
    title: "Lodash 官网",
    link: "https://lodash.com/",
  },
  { title: "React Router 官网", link: "https://reactrouter.com/docs/en/v6" },
];

export default function Footer() {
  return (
    <Box>
      <Divider sx={{ my: 6 }} />
      <Container sx={{ mb: 6, display: "flex" }}>
        <Stack
          flexGrow={1}
          sx={{
            flexDirection: {
              sm: "row",
            },
          }}
        >
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            <Stack spacing={1} sx={{ maxWidth: "300px", minWidth: "200px" }}>
              <Typography variant="body1">版权所有</Typography>
              <Typography variant="body2" color="#b2bac2">
                Copyright © 2022 Andermi
              </Typography>
              <Typography variant="body2" color="#b2bac2">
                浙ICP备2021034657号-1
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center", mt: {xs: '16px', sm: '0'} }}>
            <Stack spacing={1} sx={{ maxWidth: "300px", minWidth: "200px" }}>
              <Typography variant="body1">友情链接</Typography>
              {links &&
                links.map((item) => (
                  <Box key={item.title}>
                    <Link
                      rel="noopener"
                      target="_blank"
                      href={item.link}
                      underline="hover"
                      sx={{
                        ":hover": {
                          color: "#007fff",
                        },
                        color: "#b2bac2",
                      }}
                    >
                      {item.title}
                    </Link>
                  </Box>
                ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
