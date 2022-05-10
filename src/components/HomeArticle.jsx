import {
  Grid,
  Box,
  Skeleton,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import NextLink from "next/link";

const data = [
  {
    img: "/images/demo.jpg",
    title: "JS的性能优化",
    link: "/leetcode/threeSum",
    content: `Lizards are a over widespread group of squamate over  reptiles, with widespread over 6,000species, widespread ranging across all continents widespread except Antarctica`,
    tags: [
      {
        name: "js七点学习",
        link: "/tags/js",
      },
      {
        name: "无师自通",
        link: "/tags/wszt",
      },
    ],
  },
  {
    img: "/images/demo2.jpg",
    title: "TypeScript学习(1)",
    link: "/leetcode/threeSum",

    content:
      "我是见解我是见解我是见解我是见解我我是见解我是见解我是见解我是见解我",
    tags: [
      {
        name: "js七点学习",
        link: "/tags/js",
      },
      {
        name: "无师自通",
        link: "/tags/wszt",
      },
    ],
  },
  {
    img: "/images/demo3.jpg",
    title: "TypeScript学习(2)",
    link: "/leetcode/threeSum",

    content:
      "Lizards are a over widespread group of squamate over  reptiles, with widespread over 6,000species, widespread ranging across all continents widespread except Antarctica",
    tags: [
      {
        name: "js七点学习",
        link: "/tags/js",
      },
      {
        name: "无师自通",
        link: "/tags/wszt",
      },
    ],
  },
  {
    img: "/images/demo4.jpg",
    title: "TypeScript学习(3)",
    link: "/leetcode/threeSum",

    content:
      "Lizards are a over widespread group of squamate over  reptilere a over widespread group of squamate over  reptilesre a over widespread group of squamate over  reptiless, with widespread over 6,000species, widespread ranging across all continents widespread except Antarctica",
    tags: [
      {
        name: "js七点学习",
        link: "/tags/js",
      },
      {
        name: "无师自通",
        link: "/tags/wszt",
      },
    ],
  },
];

const ArticleContent = ({ img, title, content, tags, link }) => {
  return (
    <Card>
      <NextLink href={link} passHref>
        <CardActionArea component={"a"}>
          <CardMedia
            component="img"
            height="170"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: "3",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                height: "60px",
              }}
            >
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          sx={{ borderRadius: "18px" }}
        >
          标签1
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          sx={{ borderRadius: "18px" }}
        >
          标签2
        </Button>
      </CardActions>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <NextLink href={link} passHref>
          <Button color="secondary" component="a">
            read more
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};

export default function HomeArticle() {
  return (
    <Box>
      <Grid container spacing={3}>
        {data &&
          data.map((item, index) => {
            return (
              <Grid
                key={`${item.title} ${index}`}
                item
                xs={12}
                sm={6}
                md={4}
                display={{ xs: "flex", md: index === 3 ? "none" : "flex" }}
              >
                <ArticleContent {...item} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
