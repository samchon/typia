import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

/**
 * @internal
 */
export const check_everything = (array: ts.Expression) =>
    ts.factory.createCallExpression(
        IdentifierFactory.join(array, "every"),
        undefined,
        [
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("flag")],
                undefined,
                undefined,
                ts.factory.createStrictEquality(
                    ts.factory.createTrue(),
                    ts.factory.createIdentifier("flag"),
                ),
            ),
        ],
    );
