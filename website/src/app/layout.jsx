import { Footer, Layout, Navbar } from "nextra-theme-docs";
import Script from "next/script";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={<>
      <img src="/favicon/android-chrome-192x192.png" width={32} height={32} />
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
    </>}
    projectLink="https://github.com/samchon/typia"
  />
);

const footer = <Footer>
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
</Footer>;
const title = "Typia Guide Documents";
const description = "TypeScript Type Framework";

export default async function RootLayout(props) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        // backgroundColor={{
        //   dark: "rgb(9, 15, 27)",
        //   light: "rgb(250, 250, 250)",
        // }}
        // color={{
        //   hue: { dark: 120, light: 0 },
        //   saturation: { dark: 100, light: 100 },
        // }}
      >
        <meta name="description" content={description} />
        {/* ICONS */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {[16, 32].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            sizes={`${size}x${size}`}
            href={`/favicon/favicon-${size}x${size}.png`}
          />
        ))}
        {/* OG */}
        <meta name="og:type" content="object" />
        <meta name="og:site_name" content={title} />
        <meta name="og:url" content="https://typia.io" />
        <meta name="og:image" content="/og.jpg" />
        <meta name="og:title" content={title} />
        <meta
          name="og:description"
          content={description}
        />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SamchonGithub" />
        <meta
          name="twitter:image"
          content="/og.jpg"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <Script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "gqhymojzmp");
`
        }} />
        {/* <Script
          async
          src="https://widget.gurubase.io/widget.latest.min.js"
          data-widget-id="FHbP-5iC2vLoMLlimqStj4vFRzVhftLRId2zcRasA70"
          data-text="Ask AI"
          data-margins='{"bottom": "1rem", "right": "1rem"}'
          data-light-mode="true"
          id="guru-widget-id"
        /> */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/samchon/typia/tree/master/website"
          editLink="Edit this page on GitHub"
          sidebar={{ autoCollapse: false }}
          nextThemes={{
            defaultTheme: "dark",
          }}
          darkMode={false}
          footer={footer}
        >
          {props.children}
        </Layout>
      </body>
    </html>
  );
}
