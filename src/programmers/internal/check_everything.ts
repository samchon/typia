import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

export const check_everything = (array: ts.Expression) =>
    ts.factory.createCallExpression(
        IdentifierFactory.join(array, "every"),
        undefined,
        [
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        "flag",
                    ),
                ],
                undefined,
                undefined,
                ts.factory.createStrictEquality(
                    ts.factory.createTrue(),
                    ts.factory.createIdentifier("flag"),
                ),
            ),
        ],
    );
