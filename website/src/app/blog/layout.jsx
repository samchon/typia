import "nextra-theme-docs/style.css";
import "./blog.css";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";

export const metadata = {
  title: "Blog",
  description: "Engineering notes, releases, and deep dives from Typia.",
};

const footer = (
  <Footer>
    Released under the MIT License.
    <br />
    <br />
    Copyright 2022 - {new Date().getFullYear()}{" "}
    <a
      href="https://github.com/samchon"
      target="_blank"
      style={{ color: "initial" }}
    >
      <u>Samchon</u>
    </a>{" "}
    & Contributors
  </Footer>
);

export default async function BlogLayout(props) {
  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <>
              <img
                src="/favicon/android-chrome-192x192.png"
                width={32}
                height={32}
              />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  paddingLeft: 15,
                  paddingRight: 10,
                }}
              >
                Typia
              </span>
            </>
          }
          projectLink="https://github.com/samchon/typia"
        />
      }
      pageMap={await getPageMap()}
      editLink={null}
      feedback={{ content: null }}
      navigation={false}
      sidebar={{ toggleButton: false }}
      nextThemes={{
        defaultTheme: "dark",
      }}
      darkMode={false}
      footer={footer}
    >
      {props.children}
    </Layout>
  );
}
