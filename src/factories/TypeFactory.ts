import ts from "typescript";

export namespace TypeFactory {
    export function resolve(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): ts.Type | null {
        return getReturnType(checker, type, "toJSON");
    }

    export function isFunction(type: ts.Type): boolean {
        return getFunction(type) !== null;
    }

    function getFunction(type: ts.Type) {
        const node = type.symbol?.declarations?.[0];
        if (node === undefined) return null;

        return ts.isFunctionLike(node)
            ? node
            : ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)
            ? ts.isFunctionLike(node.initializer)
                ? node.initializer
                : null
            : null;
    }

    export function getReturnType(
        checker: ts.TypeChecker,
        type: ts.Type,
        name: string,
    ): ts.Type | null {
        // FIND TO-JSON METHOD
        const symbol: ts.Symbol | undefined = type.getProperty(name);
        if (!symbol) return null;
        else if (!symbol.valueDeclaration) return null;

        // GET FUNCTION DECLARATION
        const functor: ts.Type = checker.getTypeOfSymbolAtLocation(
            symbol,
            symbol.valueDeclaration,
        );

        // RETURNS THE RETURN-TYPE
        const signature: ts.Signature | undefined = checker.getSignaturesOfType(
            functor,
            ts.SignatureKind.Call,
        )[0];
        return signature ? signature.getReturnType() : null;
    }

    export function getFullName(
        checker: ts.TypeChecker,
        type: ts.Type,
        symbol?: ts.Symbol,
    ): string {
        // PRIMITIVE
        symbol ??= type.aliasSymbol ?? type.getSymbol();
        if (symbol === undefined) return checker.typeToString(type);

        // UNION OR INTERSECT
        if (type.aliasSymbol === undefined && type.isUnionOrIntersection()) {
            const joiner: string = type.isIntersection() ? " & " : " | ";
            return type.types
                .map((child) => getFullName(checker, child))
                .join(joiner);
        }

        //----
        // SPECIALIZATION
        //----
        const name: string = get_name(symbol);

        // CHECK GENERIC
        const generic: readonly ts.Type[] = type.aliasSymbol
            ? type.aliasTypeArguments || []
            : checker.getTypeArguments(type as ts.TypeReference);
        return generic.length
            ? name === "Promise"
                ? getFullName(checker, generic[0]!)
                : `${name}<${generic
                      .map((child) => getFullName(checker, child))
                      .join(", ")}>`
            : name;
    }

    function explore_name(name: string, decl: ts.Node): string {
        return ts.isModuleBlock(decl)
            ? explore_name(
                  `${decl.parent.name.getFullText().trim()}.${name}`,
                  decl.parent.parent,
              )
            : name;
    }

    function get_name(symbol: ts.Symbol): string {
        const parent = symbol.getDeclarations()?.[0]?.parent;
        return parent
            ? explore_name(symbol.escapedName.toString(), parent)
            : "__type";
    }

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
