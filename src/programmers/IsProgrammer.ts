import ts from "typescript";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";

export namespace IsProgrammer {
    export const CONFIG: CheckerProgrammer.IConfig = {
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
                expressions.length
                    ? expressions.reduce((x, y) => binder(x, y))
                    : initial;
        },
        functors: "is",
        trace: false,
    };

    export const generate = () => CheckerProgrammer.generate(CONFIG);
    export const generate_functors = () =>
        CheckerProgrammer.generate_functors(CONFIG);

    export const decode = () => CheckerProgrammer.decode(CONFIG);
    export const decode_object = () => CheckerProgrammer.decode_object(CONFIG);
    export function decode_to_json(input: ts.Expression): ts.Expression {
        return ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("object"),
                ValueFactory.TYPEOF(input),
            ),
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("function"),
                ValueFactory.TYPEOF(IdentifierFactory.join(input, "toJSON")),
            ),
        );
    }
}
