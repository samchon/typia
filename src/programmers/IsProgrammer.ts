import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { check_object } from "./internal/check_object";

export namespace IsProgrammer {
    export const CONFIG = (
        options?: Partial<CONFIG.IOptions>,
    ): CheckerProgrammer.IConfig => ({
        functors: "$io",
        unioners: "$iu",
        trace: false,
        path: false,
        equals: !!options?.object,
        numeric: !!options?.numeric,
        combiner: () => (type: "and" | "or") => {
            const initial: ts.TrueLiteral | ts.FalseLiteral =
                type === "and"
                    ? ts.factory.createTrue()
                    : ts.factory.createFalse();
            const binder =
                type === "and"
                    ? ts.factory.createLogicalAnd
                    : ts.factory.createLogicalOr;
            return (
                _input: ts.Expression,
                binaries: CheckerProgrammer.IBinary[],
            ) =>
                binaries.length
                    ? binaries
                          .map((binary) => binary.expression)
                          .reduce((x, y) => binder(x, y))
                    : initial;
        },
        joiner: {
            object:
                options?.object ||
                check_object({
                    equals: !!options?.object,
                    assert: true,
                    reduce: ts.factory.createLogicalAnd,
                    positive: ts.factory.createTrue(),
                    superfluous: () => ts.factory.createFalse(),
                }),
            array: (input, arrow) =>
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "every"),
                    undefined,
                    [arrow],
                ),
            failure: () => ts.factory.createFalse(),
            is: (exp) => exp,
            required: (exp) => exp,
        },
        success: ts.factory.createTrue(),
    });

    export namespace CONFIG {
        export interface IOptions {
            numeric: boolean;
            object: (entries: IExpressionEntry[]) => ts.Expression;
        }
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
        equals: boolean = false,
    ) {
        const importer: FunctionImporter = new FunctionImporter();
        if (equals === true) importer.use("join");

        return CheckerProgrammer.generate(
            project,
            {
                ...CONFIG({
                    object: check_object({
                        equals,
                        assert: true,
                        reduce: ts.factory.createLogicalAnd,
                        positive: ts.factory.createTrue(),
                        superfluous: () => ts.factory.createFalse(),
                    }),
                    numeric: !!project.options.numeric,
                }),
                trace: equals,
            },
            importer,
            () => importer.declare(modulo),
        );
    }

    export const generate_functors = (
        project: IProject,
        importer: FunctionImporter,
    ) => CheckerProgrammer.generate_functors(project, CONFIG(), importer);

    export const generate_unioners = (
        project: IProject,
        importer: FunctionImporter,
    ) => CheckerProgrammer.generate_unioners(project, CONFIG(), importer);

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode = (project: IProject, importer: FunctionImporter) =>
        CheckerProgrammer.decode(project, CONFIG(), importer);

    export const decode_object = () =>
        CheckerProgrammer.decode_object(CONFIG());

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

    export function decode_functional(input: ts.Expression) {
        return ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("function"),
            ValueFactory.TYPEOF(input),
        );
    }
}
