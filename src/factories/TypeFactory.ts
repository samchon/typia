import ts from "typescript";

export namespace TypeFactory {
    export function resolve(
        checker: ts.TypeChecker,
        type: ts.Type,
    ): ts.Type | null {
        return get_return_type(checker, type, "toJSON");
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

    function get_return_type(
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
    ): string {
        // PRIMITIVE
        const symbol: ts.Symbol | undefined = type.getSymbol();
        const alias: ts.Symbol | undefined = type.aliasSymbol;
        if (symbol === undefined) return checker.typeToString(type);

        // UNION OR INTERSECT
        if (alias === undefined && type.isUnionOrIntersection()) {
            const joiner: string = type.isIntersection() ? " & " : " | ";
            return type.types
                .map((child) => getFullName(checker, child))
                .join(joiner);
        }

        //----
        // SPECIALIZATION
        //----
        const name: string = get_name(alias || symbol);

        // CHECK GENERIC
        const generic: readonly ts.Type[] =
            type.aliasTypeArguments ||
            checker.getTypeArguments(type as ts.TypeReference);
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
                  `${decl.parent.name.getText()}.${name}`,
                  decl.parent.parent,
              )
            : name;
    }

    function get_name(symbol: ts.Symbol): string {
        return explore_name(
            symbol.escapedName.toString(),
            symbol.getDeclarations()![0]!.parent,
        );
    }
}
