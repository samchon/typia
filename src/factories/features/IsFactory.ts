import ts from "typescript";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { ValueFactory } from "../ValueFactory";
import { CheckerFactory } from "./CheckerFactory";

export namespace IsFactory {
    export const CONFIG: CheckerFactory.IConfig = {
        combiner: () => (type: "and" | "or") => {
            const initial: ts.TrueLiteral | ts.FalseLiteral =
                type === "and"
                    ? ts.factory.createTrue()
                    : ts.factory.createFalse();
            const binder =
                type === "and"
                    ? ts.factory.createLogicalAnd
                    : ts.factory.createLogicalOr;
            return (_input: ts.Expression, expressions: ts.Expression[]) =>
                expressions.length === 1
                    ? expressions[0]!
                    : expressions.reduce((x, y) => binder(x, y), initial);
        },
        functors: {
            name: "is",
        },
        trace: false,
    };

    export const generate = CheckerFactory.generate(CONFIG);
    export const generate_functors = CheckerFactory.generate_functors(CONFIG);

    export const express = CheckerFactory.decode(CONFIG);
    export function express_to_json(input: ts.Expression): ts.Expression {
        return ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
                ValueFactory.TYPEOF(input),
                ts.factory.createStringLiteral("object"),
            ),
            ts.factory.createStrictEquality(
                ValueFactory.TYPEOF(IdentifierFactory.join(input, "toJSON")),
                ts.factory.createStringLiteral("function"),
            ),
        );
    }
}
