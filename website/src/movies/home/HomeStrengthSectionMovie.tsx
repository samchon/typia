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
  <Grid item xs={12} sm={6} md={6}>
    <Box style={{background: '#88888809', borderRadius: 5}}>
      <CardActionArea href={props.href}>
        <br />
        <div
          style={{
            borderRadius: 6,
            background: '#88888822',
            width: 'fit-content',
            padding: '0.6rem',
            marginLeft: 16,
              marginBottom: -24,
              marginTop: -8
          }}
        >
          <Box
            component="img"
            src={props.image}
            sx={{
              width: 80,
              height: 80,
            }}
          />
        </div>
        <br />
        <CardContent>
          <Typography variant="h5" style={{fontWeight: 600}}>{props.title}</Typography>
          <Typography color="text.secondary" sx={{ paddingTop: 0.5 }}>
            {props.subTitle}
          </Typography>
          <br />
          {props.description}
        </CardContent>
      </CardActionArea>
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
