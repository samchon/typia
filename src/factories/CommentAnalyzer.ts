import ts from "typescript";

export namespace CommentFactory {
    export function generate(comments: ts.SymbolDisplayPart[]): string {
        return comments
            .map((part) => `${part.kind === "linkText" ? " " : ""}${part.text}`)
            .map((str) => str.split("\r\n").join("\n"))
            .join("");
    }
}
