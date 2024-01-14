import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const HomeStrengthSectionMovie = (props: HomeStrengthSectionMovie.Props) => (
  <Grid item xs={12} md={4}>
    <Card variant="outlined">
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
              height: 100,
            }}
          />
        </div>
        <br />
        <CardContent>
          <Typography variant="h5" sx={{ paddingBottom: 1 }}>
            {props.title}
          </Typography>
          <Typography color="text.secondary">{props.subTitle}</Typography>
          <br />
          {props.description}
        </CardContent>
      </CardActionArea>
    </Card>
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
  }
}
export default HomeStrengthSectionMovie;
