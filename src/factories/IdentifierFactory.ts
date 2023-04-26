import ts from "typescript";

import { Escaper } from "../utils/Escaper";

export namespace IdentifierFactory {
    export function generate(name: string) {
        return Escaper.variable(name)
            ? ts.factory.createIdentifier(name)
            : ts.factory.createStringLiteral(name);
    }

    export function join(prefix: ts.Expression, name: string) {
        const postfix = generate(name);
        return ts.isStringLiteral(postfix)
            ? ts.factory.createElementAccessExpression(prefix, postfix)
            : ts.factory.createPropertyAccessExpression(prefix, postfix);
    }

    export function postfix(str: string): string {
        return Escaper.variable(str)
            ? `".${str}"`
            : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;
    }

    export function parameter(
        name: string | ts.BindingName,
        type?: ts.TypeNode,
        init?: ts.Expression | ts.PunctuationToken<ts.SyntaxKind.QuestionToken>,
    ) {
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
    }
}
