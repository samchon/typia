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
        init?: ts.Expression,
    ) {
        if (ts.version >= "4.8")
            return ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                name,
                undefined,
                type,
                init,
            );
        // eslint-disable-next-line
        return ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            name,
            undefined,
            type,
            init,
        );
    }

    // export function property(
    //     name: string | ts.PropertyName,
    //     value: ts.Expression,
    // ): ts.PropertyDeclaration {
    //     if (ts.version >= "4.8")
    //         return ts.factory.createPropertyDeclaration(
    //             undefined,
    //             name,
    //             undefined,
    //             undefined,
    //             value,
    //         );
    //     // eslint-disable-next-line
    //     return ts.factory.createPropertyDeclaration(
    //         undefined,
    //         undefined,
    //         name,
    //         undefined,
    //         undefined,
    //         value,
    //     );
    // }
}
