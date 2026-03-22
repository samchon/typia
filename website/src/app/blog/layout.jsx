import "nextra-theme-blog/style.css";
import "./blog.css";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";

export const metadata = {
  title: "Blog",
  description: "Engineering notes, releases, and deep dives from Typia.",
};

function NavLink(props) {
  return (
    <a href={props.href} style={{ fontWeight: 600 }}>
      {props.children}
    </a>
  );
}

export default async function BlogLayout(props) {
  return (
    <Layout
      nextThemes={{
        defaultTheme: "dark",
      }}
    >
      <Navbar pageMap={await getPageMap("/blog")}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/docs/">Docs</NavLink>
        <NavLink href="/blog/">Blog</NavLink>
        <NavLink href="/blog/rss.xml">RSS</NavLink>
        <ThemeSwitch />
      </Navbar>
      {props.children}
      <Footer>
        Released under the MIT License. Copyright 2022 - {new Date().getFullYear()}{" "}
        <a href="https://github.com/samchon" target="_blank" style={{ color: "inherit" }}>
          Samchon
        </a>
        .
      </Footer>
    </Layout>
  );
}
