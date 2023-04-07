import path from "path";
import ts from "typescript";

export namespace ImportTransformer {
    export const transform =
        (from: string) =>
        (to: string) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile) =>
            transform_file(from)(to)(context)(file);

    const transform_file =
        (top: string) =>
        (to: string) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile): ts.SourceFile => {
            if (file.isDeclarationFile) return file;

            const from: string = get_directory_path(
                path.resolve(file.getSourceFile().fileName),
            );
            to = from.replace(top, to);

            return ts.visitEachChild(
                file,
                (node) => transform_node(top)(from)(to)(node),
                context,
            );
        };

    const transform_node =
        (top: string) => (from: string) => (to: string) => (node: ts.Node) => {
            if (
                !ts.isImportDeclaration(node) ||
                !ts.isStringLiteral(node.moduleSpecifier)
            )
                return node;

            const text: string = node.moduleSpecifier.text;
            if (text[0] !== ".") return node;

            const location: string = path.resolve(from, text);
            if (location.indexOf(top) === 0) return node;

            const replaced: string = (() => {
                const simple: string = path
                    .relative(to, location)
                    .split(path.sep)
                    .join("/");
                return simple[0] === "." ? simple : `./${simple}`;
            })();

            return ts.factory.createImportDeclaration(
                undefined,
                node.importClause,
                ts.factory.createStringLiteral(replaced),
                node.assertClause,
            );
        };
}

const get_directory_path = (file: string): string => {
    const splitted: string[] = path.resolve(file).split(path.sep);
    splitted.pop();
    return path.resolve(splitted.join(path.sep));
};
