import path from "path";
import ts from "typescript";

export namespace ImportTransformer {
  export const transform =
    (props: { from: string; to: string }) =>
    (context: ts.TransformationContext) =>
    (file: ts.SourceFile) =>
      transform_file({
        top: props.from,
        to: props.to,
        context,
        file,
      });

  const transform_file = (props: {
    top: string;
    to: string;
    context: ts.TransformationContext;
    file: ts.SourceFile;
  }): ts.SourceFile => {
    if (props.file.isDeclarationFile) return props.file;

    const from: string = get_directory_path(
      path.resolve(props.file.getSourceFile().fileName),
    );
    const to: string = from.replace(props.top, props.to);

    return ts.visitEachChild(
      props.file,
      (node) =>
        transform_node({
          top: props.top,
          from,
          to,
          node,
        }),
      props.context,
    );
  };

  const transform_node = (props: {
    top: string;
    from: string;
    to: string;
    node: ts.Node;
  }) => {
    if (
      !ts.isImportDeclaration(props.node) ||
      !ts.isStringLiteral(props.node.moduleSpecifier)
    )
      return props.node;

    const text: string = props.node.moduleSpecifier.text;
    if (text[0] !== ".") return props.node;

    const location: string = path.resolve(props.from, text);
    if (location.indexOf(props.top) === 0) return props.node;

    const replaced: string = (() => {
      const simple: string = path
        .relative(props.to, location)
        .split(path.sep)
        .join("/");
      return simple[0] === "." ? simple : `./${simple}`;
    })();

    return ts.factory.createImportDeclaration(
      undefined,
      props.node.importClause,
      ts.factory.createStringLiteral(replaced),
      props.node.assertClause,
    );
  };
}

const get_directory_path = (file: string): string => {
  const split: string[] = path.resolve(file).split(path.sep);
  split.pop();
  return path.resolve(split.join(path.sep));
};
