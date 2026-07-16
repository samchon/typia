import "nextra-theme-docs/style.css";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";

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

export default async function DocsLayout(props) {
  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <span className="typia-site-logo">
              <span className="typia-site-logo-mark" aria-hidden="true">
                <img
                  src="/favicon/android-chrome-192x192.png"
                  width={32}
                  height={32}
                  alt=""
                />
              </span>
              <span style={{ fontSize: "1.2rem", paddingRight: 10 }}>
                Typia
              </span>
            </span>
          }
          projectLink="https://github.com/samchon/typia"
        ></Navbar>
      }
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/samchon/typia/tree/master/website"
      editLink="Edit this page on GitHub"
      sidebar={{ autoCollapse: false }}
      nextThemes={{
        defaultTheme: "light",
        forcedTheme: "light",
      }}
      darkMode={false}
      footer={footer}
    >
      {props.children}
    </Layout>
  );
}
