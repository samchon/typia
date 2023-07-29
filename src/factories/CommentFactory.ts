import ts from "typescript";

export namespace CommentFactory {
    export const description = (symbol: ts.Symbol): string | undefined => {
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
                if (symbol.getJsDocTags().length) content.push("");
            }
            for (const tag of symbol.getJsDocTags()) {
                content.push(
                    tag.text
                        ? `@${tag.name} ${ts.displayPartsToString(tag.text)}`
                        : `@${tag.name}`,
                );
            }
            return content.length
                ? content
                      .map((line) => line.split("\r\n").join("\n"))
                      .join("\n")
                : undefined;
        }

        // NEW FEATURE OF TS 5.2
        const elements: readonly (ts.JSDoc | ts.JSDocTag)[] =
            ts.getJSDocCommentsAndTags(node);
        const content: string[] = [];
        for (const comment of elements)
            if (ts.isJSDoc(comment)) content.push(comment.getFullText());
            else {
                const parsed: string | undefined = ts.getTextOfJSDocComment(
                    comment.comment,
                );
                if (parsed) content.push(parsed);
            }
        const output: string = transform(
            content.map((line) => line.split("\r\n").join("\n")),
        ).join("\n");
        return output.length ? output : undefined;
    };

    export const merge = (comments: ts.SymbolDisplayPart[]): string =>
        comments
            .map((part) => part.text)
            .map((str) => str.split("\r\n").join("\n"))
            .join("");
}

const transform = (elements: string[]): string[] => {
    const first: number = lastIndexOf(elements)((elem) =>
        elem.trim().startsWith("/**"),
    );
    const last: number = lastIndexOf(elements)((elem) =>
        elem.trim().endsWith("*/"),
    );

    const cut: string[] = elements.slice(first, last + 1);
    return cut
        .map((elem, i) => {
            if (i === 0) elem = elem.substring(elem.lastIndexOf("/**") + 3);
            if (i === cut.length - 1)
                elem = elem.substring(0, elem.lastIndexOf("*/"));
            return trim(elem);
        })
        .filter(
            (str, i, array) =>
                (i !== 0 && i !== array.length - 1) || !!str.length,
        );
};

const lastIndexOf =
    <T>(array: T[]) =>
    (pred: (elem: T) => boolean) => {
        for (let i = array.length - 1; i >= 0; i--)
            if (pred(array[i]!)) return i;
        return -1;
    };

const trim = (str: string): string => {
    const vulnerable = (ch: string) =>
        ch === " " || ch === "\n" || ch === "\t" || ch === "*";
    let start: number;
    let end: number;
    for (start = 0; start < str.length; ++start)
        if (!vulnerable(str.charAt(start))) break;
    for (end = str.length - 1; end >= 0; --end)
        if (!vulnerable(str.charAt(end))) break;
    return start > end ? "" : str.substring(start, end + 1).trim();
};
