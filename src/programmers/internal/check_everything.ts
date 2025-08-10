import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TypeFactory } from "../../factories/TypeFactory";

/** @internal */
export const check_everything = (array: ts.Expression) =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(array, "every"),
    undefined,
    [
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("flag", TypeFactory.keyword("boolean"))],
        undefined,
        undefined,
        ts.factory.createIdentifier("flag"),
      ),
    ],
  );
