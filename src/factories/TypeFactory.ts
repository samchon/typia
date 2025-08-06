import ts from "typescript";

export namespace TypeFactory {
  export const isFunction = (type: ts.Type): boolean =>
    getFunction(type) !== null;

  export const getFunction = (type: ts.Type) => {
    const node = type.symbol?.declarations?.[0];
    if (node === undefined) return null;

    return ts.isFunctionLike(node)
      ? node
      : ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)
        ? ts.isFunctionLike(node.initializer)
          ? node.initializer
          : null
        : null;
  };

  export const getReturnTypeOfClassMethod = (props: {
    checker: ts.TypeChecker;
    class: ts.Type;
    function: string;
  }): ts.Type | null => {
    // FIND TO-JSON METHOD
    const symbol: ts.Symbol | undefined = props.class.getProperty(
      props.function,
    );
    if (!symbol) return null;
    else if (!symbol.valueDeclaration) return null;

    // GET FUNCTION DECLARATION
    const functor: ts.Type = props.checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration,
    );

    // RETURNS THE RETURN-TYPE
    const signature: ts.Signature | undefined =
      props.checker.getSignaturesOfType(functor, ts.SignatureKind.Call)[0];
    return signature ? signature.getReturnType() : null;
  };

  export const getFullName = (props: {
    checker: ts.TypeChecker;
    type: ts.Type;
    symbol?: ts.Symbol;
    aliasTypeArguments?: boolean; // default: true
  }): string => {
    // PRIMITIVE
    const symbol =
      props.symbol ?? props.type.aliasSymbol ?? props.type.getSymbol();
    if (symbol === undefined) return props.checker.typeToString(props.type);

    // UNION OR INTERSECT
    if (
      props.type.aliasSymbol === undefined &&
      props.type.isUnionOrIntersection()
    ) {
      const joiner: string = props.type.isIntersection() ? " & " : " | ";
      return props.type.types
        .map((child) =>
          getFullName({
            checker: props.checker,
            type: child,
          }),
        )
        .join(joiner);
    }

    //----
    // SPECIALIZATION
    //----
    const name: string = get_name(symbol);

    // CHECK GENERIC
    const generic: readonly ts.Type[] =
      props.type.aliasSymbol && props.aliasTypeArguments !== false
        ? (props.type.aliasTypeArguments ?? [])
        : props.checker.getTypeArguments(props.type as ts.TypeReference);
    return generic.length
      ? name === "Promise"
        ? getFullName({
            checker: props.checker,
            type: generic[0]!,
          })
        : `${name}<${generic
            .map((child) =>
              getFullName({
                checker: props.checker,
                type: child,
              }),
            )
            .join(", ")}>`
      : name;
  };

  const explore_name = (props: { node: ts.Node; name: string }): string =>
    ts.isModuleBlock(props.node)
      ? explore_name({
          node: props.node.parent.parent,
          name: `${props.node.parent.name.getFullText().trim()}.${props.name}`,
        })
      : props.name;

  const get_name = (symbol: ts.Symbol): string => {
    const parent = symbol.getDeclarations()?.[0]?.parent;
    return parent
      ? explore_name({
          node: parent,
          name: symbol.escapedName.toString(),
        })
      : "__type";
  };

  export const keyword = (
    type:
      | "void"
      | "any"
      | "unknown"
      | "boolean"
      | "number"
      | "bigint"
      | "string",
  ) => {
    return ts.factory.createKeywordTypeNode(
      type === "void"
        ? ts.SyntaxKind.VoidKeyword
        : type === "any"
          ? ts.SyntaxKind.AnyKeyword
          : type === "unknown"
            ? ts.SyntaxKind.UnknownKeyword
            : type === "boolean"
              ? ts.SyntaxKind.BooleanKeyword
              : type === "number"
                ? ts.SyntaxKind.NumberKeyword
                : type === "bigint"
                  ? ts.SyntaxKind.BigIntKeyword
                  : ts.SyntaxKind.StringKeyword,
    );
  };
}
