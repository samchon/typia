import ts from "typescript";

export namespace StatementFactory {
    export const constant = (name: string, initializer?: ts.Expression) =>
        ts.factory.createVariableStatement(
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

    export const transpile = (script: string) =>
        ts.factory.createExpressionStatement(
            ts.factory.createIdentifier(ts.transpile(script)),
        );
}
