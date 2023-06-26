import config from "../../theme.config";

export namespace Expander {
  export const expand = () => {
    // ADJUST THEME CONFIG
    document.head.title = "Typia Playground";
    config
      .useNextSeoProps?.()
      ?.additionalLinkTags?.forEach((tag) =>
        document.head.appendChild(
          Object.assign(document.createElement("link"), tag),
        ),
      );
    config
      .useNextSeoProps?.()
      ?.additionalMetaTags?.forEach((tag) =>
        document.head.appendChild(
          Object.assign(document.createElement("meta"), tag),
        ),
      );

    // CHANGE BODY STYLE
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = "#1e1e1e";
  };
}
