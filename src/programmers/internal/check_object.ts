import ts from "typescript";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_properties } from "./check_dynamic_properties";
import { check_everything } from "./check_everything";

/**
 * @internal
 */
export const check_object =
    (equals: boolean) =>
    (assert: boolean) =>
    (halter?: Wrapper) =>
    (wrapper?: Wrapper) =>
    (entries: IExpressionEntry[]) => {
        // PREPARE ASSETS
        const regular = entries.filter((entry) => entry.key.isSoleLiteral());
        const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
        const flags: ts.Expression[] = regular.map((entry) => entry.expression);

        // REGULAR WITHOUT DYNAMIC PROPERTIES
        if (equals === false && dynamic.length === 0)
            return regular.length === 0
                ? ts.factory.createTrue()
                : reduce(assert)(flags);

        // CHECK DYNAMIC PROPERTIES
        flags.push(
            check_dynamic_properties(equals)(assert)(halter)(wrapper)(
                regular,
                dynamic,
            ),
        );
        return reduce(assert)(flags);
    };

type Wrapper = (expr: ts.Expression) => ts.Expression;
const reduce = (assert: boolean) => (expressions: ts.Expression[]) =>
    assert
        ? expressions.reduce((x, y) => ts.factory.createLogicalAnd(x, y))
        : check_everything(
              ts.factory.createArrayLiteralExpression(expressions),
          );
