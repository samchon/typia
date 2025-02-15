import Script from "next/script";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "gqhymojzmp");
                    `,
        }}
      />
      <Script
        async
        src="https://widget.gurubase.io/widget.latest.min.js"
        data-widget-id="r7Pp2CwVcqx5PZyScerl1hvfvS3ratklAU6KzwyXhO0"
        data-text="Ask AI"
        data-margins='{"bottom": "1.5rem", "right": "1.5rem"}'
        data-light-mode="true"
        id="guru-widget-id"
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
