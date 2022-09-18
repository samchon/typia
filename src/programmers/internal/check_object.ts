import ts from "typescript";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";
import { check_properties } from "./check_properties";

export function check_object(
    equals: false,
): (assert: boolean) => (entries: IExpressionEntry[]) => ts.Expression;

export function check_object(
    equals: true,
): (
    assert: boolean,
) => (
    halter: (expr: ts.CallExpression) => ts.Expression,
) => (
    wrapper?: (expr: ts.CallExpression) => ts.Expression,
) => (entries: IExpressionEntry[]) => ts.Expression;

export function check_object(equals: true | false) {
    if (equals === false)
        return (assert: boolean) => (entries: IExpressionEntry[]) => {
            if (entries.length === 0) return ts.factory.createTrue();
            return reduce(assert)(entries.map((entry) => entry.expression));
        };

    return (assert: boolean) =>
        (halter: Wrapper) =>
        (wrapper?: Wrapper) =>
        (entries: IExpressionEntry[]) => {
            const flags: ts.Expression[] = entries.map(
                (entry) => entry.expression,
            );
            flags.push(check_properties(assert)(halter)(wrapper)(entries));
            return reduce(assert)(flags);
        };
}

type Wrapper = (expr: ts.CallExpression) => ts.Expression;
const reduce = (assert: boolean) => (expressions: ts.Expression[]) =>
    assert
        ? expressions.reduce((x, y) => ts.factory.createLogicalAnd(x, y))
        : check_everything(
              ts.factory.createArrayLiteralExpression(expressions),
          );
