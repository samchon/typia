import ts from "typescript";
import { Escaper } from "../../utils/Escaper";

export namespace IdentifierFactory {
    export function generate(name: string) {
        return Escaper.reserved(name) || !Escaper.variable(name)
            ? ts.factory.createStringLiteral(name)
            : ts.factory.createIdentifier(name);
    }

    export function join(prefix: ts.Expression, name: string) {
        const postfix = generate(name);
        return ts.isStringLiteral(postfix)
            ? ts.factory.createElementAccessExpression(prefix, postfix)
            : ts.factory.createPropertyAccessExpression(prefix, postfix);
    }
}
