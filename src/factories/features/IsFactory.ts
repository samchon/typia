import ts from "typescript";
import { CheckerFactory } from "./CheckerFactory";

export namespace IsFactory {
    export const generate = CheckerFactory.generate(false, () => combine);

    export function combine(type: "and" | "or") {
        const binder =
            type === "and"
                ? ts.factory.createLogicalAnd
                : ts.factory.createLogicalOr;
        return (expressions: ts.Expression[]) =>
            expressions.length === 1
                ? expressions[0]!
                : expressions.reduce((x, y) => binder(x, y));
    }
}
