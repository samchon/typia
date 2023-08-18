import ts from "typescript";

export namespace StatementFactory {
    export const mut = (name: string, initializer?: ts.Expression) =>
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
                ts.NodeFlags.Let,
            ),
        );

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

    export const entry = (key: string) => (value: string) =>
        ts.factory.createVariableDeclarationList(
            [
                ts.factory.createVariableDeclaration(
                    ts.factory.createArrayBindingPattern([
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            ts.factory.createIdentifier(key),
                            undefined,
                        ),
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            ts.factory.createIdentifier(value),
                            undefined,
                        ),
                    ]),
                    undefined,
                    undefined,
                    undefined,
                ),
            ],
            ts.NodeFlags.Const,
        );

    export const transpile = (script: string) =>
        ts.factory.createExpressionStatement(
            ts.factory.createIdentifier(ts.transpile(script)),
        );

    export const block = (expression: ts.Expression) =>
        ts.factory.createBlock(
            [ts.factory.createExpressionStatement(expression)],
            true,
        );
}
