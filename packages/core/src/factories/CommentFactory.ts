import ts from "typescript";

export namespace CommentFactory {
  export const description = (
    symbol: ts.Symbol,
    includeTags: boolean = false,
  ): string | undefined => {
    const node = symbol.declarations?.[0];
    if (!node) return undefined;

    // FOR LEGACY TS < 5.2
    const [major, minor] = ts.versionMajorMinor.split(".").map(Number) as [
      number,
      number,
    ];
    if (major < 5 || (major === 5 && minor < 1)) {
      const content: string[] = [];
      const main: string = ts.displayPartsToString(
        symbol.getDocumentationComment(undefined),
      );
      if (main.length) {
        content.push(main);
        if (includeTags && symbol.getJsDocTags().length) content.push("");
      }
      if (includeTags)
        for (const tag of symbol.getJsDocTags()) {
          content.push(
            tag.text
              ? `@${tag.name} ${ts.displayPartsToString(tag.text)}`
              : `@${tag.name}`,
          );
        }
      return content.length
        ? content.map((line) => line.split("\r\n").join("\n")).join("\n")
        : undefined;
    }

    // NEW FEATURE OF TS 5.2
    const elements: readonly (ts.JSDoc | ts.JSDocTag)[] =
      ts.getJSDocCommentsAndTags(node);
    if (elements.length === 0) return undefined;

    const content: string[] = [];
    for (const comment of elements) {
      if (ts.isJSDoc(comment)) {
        const parsed: string | undefined = ts.getTextOfJSDocComment(
          comment.comment,
        );
        if (parsed?.length) {
          content.push(parsed);
          if (includeTags && comment.tags?.length) content.push("");
        }
        if (includeTags)
          for (const tag of comment.tags ?? [])
            content.push(parseJSDocTag(tag));
      } else if (includeTags) content.push(parseJSDocTag(comment));
    }
    const output: string = content
      .map((line) => line.split("\r\n").join("\n"))
      .join("\n");
    return output.length ? output : undefined;
  };

  export const merge = (comments: ts.SymbolDisplayPart[]): string =>
    comments
      .map((part) => part.text)
      .map((str) => str.split("\r\n").join("\n"))
      .join("");
}

const parseJSDocTag = (tag: ts.JSDocTag): string => {
  const name: string | undefined = (
    tag as ts.JSDocParameterTag
  ).name?.getText();
  const parsed: string | undefined = ts.getTextOfJSDocComment(tag.comment);
  return [`@${tag.tagName.text}`, name, parsed]
    .filter((str) => !!str?.length)
    .join(" ");
};
