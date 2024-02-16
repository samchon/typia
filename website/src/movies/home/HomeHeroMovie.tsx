import ComputerIcon from "@mui/icons-material/Computer";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Button, Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

import ProductHeroLayout from "../../components/home/ProductHeroLayout";

const QuickButton = (props: {
  title: string;
  href: string;
  icon: ReactNode;
  color: "info" | "warning" | "success";
}) => (
  <Grid item xs={12} md={4}>
    <Button
      color={props.color}
      variant="outlined"
      size="large"
      component="a"
      href={props.href}
      startIcon={props.icon}
      fullWidth
      style={{ fontFamily: "unset", fontWeight: "bold" }}
    >
      {props.title}
    </Button>
  </Grid>
);

const LinkButtonPrimary = (props: {children: any, href: string}) => (
    <a style={{
        background: 'linear-gradient(45deg, #498ca3 30%, #60788b 90%)',
        borderRadius: '50px',
        padding: '0.5rem 1rem',
        width: 'fit-content',
        color: 'white',
        fontSize: '1.1rem',
        display: 'inline-block',
        marginRight: '0.4rem',
    }} href={props.href}>
        {props.children}
    </a>
)

const LinkButton = (props: {children: any, href: string}) => (
    <a style={{
        background: '#88888844',
        borderRadius: '50px',
        padding: '0.5rem 1rem',
        width: 'fit-content',
        fontSize: '1.1rem',
        display: 'inline-block',
        marginRight: '0.4rem',
    }} href={props.href}>
        {props.children}
    </a>
)

const HomeHeroMovie = () => (
    <ProductHeroLayout>
        <br/>
        <br/>
        <br/>
        <div style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            <div style={{marginTop: '1rem', minWidth: '540px'}}>
                <Typography
                    color="transparent"
                    variant="h2"
                    fontWeight={700}
                    sx={{
                        backgroundImage: "linear-gradient(45deg, #498ca3 30%, #60788b 90%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "0.4rem",
                        display: "inline-block"
                    }}
                >
                    Typia,
                </Typography>
                <Typography
                    variant="h2"
                    fontWeight={700}
                    sx={{
                        marginBottom: "0.4rem",
                    }}
                >
                    Super-Fast<br/>Runtime Validator
                </Typography>

                <Typography
                    variant="h4"
                    sx={{fontWeight: "bold", opacity: 0.7}}
                >
                    With NO manual typing
                </Typography>
            </div>
            <img src="/images/home/code.png" style={{
                width: '100%',
                maxWidth: '580px',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                backgroundSize: 'contain',
                height: 'fit-content',
                margin: '-24px -24px -24px 0',
            }}/>
        </div>
        <div style={{width: '100%'}}>
            <LinkButtonPrimary href="/docs">Get Started</LinkButtonPrimary>
            <LinkButton href="/playground">Playground</LinkButton>
            <LinkButton href="https://github.com/samchon/typia">Github</LinkButton>
        </div>
        <br />
    </ProductHeroLayout>
);
export default HomeHeroMovie;
