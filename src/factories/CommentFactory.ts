import ts from "typescript";

export namespace CommentFactory {
    export const description = (symbol: ts.Symbol): string | undefined => {
        const node = symbol.declarations?.[0];
        if (!node) return undefined;

        const range = ts.getCommentRange(node);
        const text: string = node
            .getSourceFile()
            .text.substring(range.pos, range.end);
        return filter(text).join("\n");
    };

    export const merge = (comments: ts.SymbolDisplayPart[]): string =>
        comments
            .map((part) => part.text)
            .map((str) => str.split("\r\n").join("\n"))
            .join("");

    /**
     * @deprecated
     */
    export const string = merge;

    /**
     * @deprecated
     */
    export const generate = merge;
}

const filter = (text: string): string[] => {
    const elements: string[] = text.split("\r\n").join("\n").split("\n");
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
        .filter((elem) => elem.length > 0);
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
