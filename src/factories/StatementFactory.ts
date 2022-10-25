import ts from "typescript";

export namespace StatementFactory {
    export function constant(name: string, initializer?: ts.Expression) {
        return ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        name,
                        undefined,
                        undefined,
                        initializer,
                    ),
                ],
                ts.NodeFlags.Const,
            ),
        );
    }

    export function transpile(script: string) {
        return ts.factory.createExpressionStatement(
            ts.factory.createIdentifier(ts.transpile(script)),
        );
    }

    // export function require(variable: string, location: string) {
    //     return ts.factory.createImportDeclaration(
    //         undefined,
    //         undefined,
    //         ts.factory.createImportClause(
    //             false,
    //             undefined,
    //             ts.factory.createNamespaceImport(
    //                 ts.factory.createIdentifier(variable),
    //             ),
    //         ),
    //         ts.factory.createStringLiteral(location),
    //     );
    // }

    // export function importModulo(variable: string, location: string) {
    //     return ts.factory.createImportDeclaration(
    //         undefined,
    //         undefined,
    //         ts.factory.createImportClause(
    //             false,
    //             undefined,
    //             ts.factory.createNamedImports([
    //                 ts.factory.createImportSpecifier(
    //                     false,
    //                     undefined,
    //                     ts.factory.createIdentifier(variable),
    //                 ),
    //             ]),
    //         ),
    //         ts.factory.createStringLiteral(location),
    //     );
    // }
}
