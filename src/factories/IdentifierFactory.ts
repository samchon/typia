import ts from "typescript";

import { Escaper } from "../utils/Escaper";

export namespace IdentifierFactory {
    export const accessor = (name: string) =>
        Escaper.variable(name)
            ? ts.factory.createIdentifier(name)
            : ts.factory.createStringLiteral(name);

    export const join = (prefix: ts.Expression) => (name: string) => {
        const postfix = accessor(name);
        return ts.isStringLiteral(postfix)
            ? ts.factory.createElementAccessExpression(prefix, postfix)
            : ts.factory.createPropertyAccessExpression(prefix, postfix);
    };

    export const postfix = (str: string): string =>
        Escaper.variable(str)
            ? `".${str}"`
            : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;

    export const parameter = (
        name: string | ts.BindingName,
        type?: ts.TypeNode,
        init?: ts.Expression | ts.PunctuationToken<ts.SyntaxKind.QuestionToken>,
    ) => {
        // instead of ts.version >= "4.8"
        if (ts.getDecorators !== undefined)
            return ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                name,
                init?.kind === ts.SyntaxKind.QuestionToken
                    ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
                    : undefined,
                type,
                init && init.kind !== ts.SyntaxKind.QuestionToken
                    ? init
                    : undefined,
            );
        // eslint-disable-next-line
        return (ts.factory.createParameterDeclaration as any)(
            undefined,
            undefined,
            undefined,
            name,
            init?.kind === ts.SyntaxKind.QuestionToken
                ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
                : undefined,
            type,
            init && init.kind !== ts.SyntaxKind.QuestionToken
                ? init
                : undefined,
        );
    };
}
