import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const HomeStrengthSectionMovie = (props: HomeStrengthSectionMovie.Props) => (
  <Grid item xs={12} md={6} lg={4}>
    <Box>
      <CardActionArea href={props.href}>
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box
            component="img"
            src={props.image}
            sx={{
              width: props.width,
              height: props.height ?? 100,
            }}
          />
        </div>
        <br />
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5">{props.title}</Typography>
          <Typography color="text.secondary" sx={{ paddingTop: 0.5 }}>
            {props.subTitle}
          </Typography>
          <br />
          {props.description}
        </CardContent>
      </CardActionArea>
      <Divider />
    </Box>
  </Grid>
);
namespace HomeStrengthSectionMovie {
  export interface Props {
    title: string;
    subTitle: JSX.Element;
    description: JSX.Element;
    image: string;
    href: string;
    width?: number;
    height?: number;
  }
}
export default HomeStrengthSectionMovie;
