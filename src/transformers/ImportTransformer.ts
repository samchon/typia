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
        (from: string) =>
        (to: string) =>
        (context: ts.TransformationContext) =>
        (file: ts.SourceFile): ts.SourceFile => {
            if (file.isDeclarationFile) return file;

            const next: string = get_directory_path(path.resolve(from));
            to = next.replace(from, to);

            return ts.visitEachChild(
                file,
                (node) => transform_node(next)(to)(node),
                context,
            );
        };

    const transform_node =
        (from: string) => (to: string) => (node: ts.Node) => {
            if (
                !ts.isImportDeclaration(node) ||
                !ts.isStringLiteral(node.moduleSpecifier)
            )
                return node;

            const location: string = node.moduleSpecifier.text;
            if (location[0] !== ".") return node;

            const replaced: string = path.resolve(to, location);
            return ts.factory.createImportDeclaration(
                undefined,
                node.importClause,
                ts.factory.createStringLiteral(
                    path.relative(from, replaced).split(path.sep).join("/"),
                ),
                node.assertClause,
            );
        };
}

const get_directory_path = (file: string): string => {
    const splitted: string[] = path.resolve(file).split(path.sep);
    splitted.pop();
    return path.resolve(splitted.join(path.sep));
};
