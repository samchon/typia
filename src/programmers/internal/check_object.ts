import ts from "typescript";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_properties } from "./check_properties";

export function check_object(
    equals: false,
): (entries: IExpressionEntry[]) => ts.Expression;

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
        return (entries: IExpressionEntry[]) => {
            if (entries.length === 0) return ts.factory.createTrue();
            return reduce(entries.map((entry) => entry.expression));
        };

    return (assert: boolean) =>
        (halter: Wrapper) =>
        (wrapper?: Wrapper) =>
        (entries: IExpressionEntry[]) => {
            if (entries.length === 0) return ts.factory.createTrue();

            const flags: ts.Expression[] = entries.map(
                (entry) => entry.expression,
            );
            flags.push(check_properties(assert)(halter)(wrapper)(entries));

            return reduce(flags);
        };
}

type Wrapper = (expr: ts.CallExpression) => ts.Expression;
const reduce = (expressions: ts.Expression[]) =>
    expressions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
