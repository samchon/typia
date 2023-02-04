import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace IsProgrammer {
    export const CONFIG = (
        options?: Partial<CONFIG.IOptions>,
    ): CheckerProgrammer.IConfig => ({
        functors: "$io",
        unioners: "$iu",
        trace: false,
        path: false,
        equals: !!options?.object,
        numeric: OptionPredicator.numeric({
            numeric: options?.numeric,
        }),
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
                    undefined: OptionPredicator.undefined({
                        undefined: options?.undefined,
                    }),
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
        },
        success: ts.factory.createTrue(),
    });

    export namespace CONFIG {
        export interface IOptions {
            numeric: boolean;
            undefined: boolean;
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

        // CONFIGURATION
        const config = CONFIG({
            object: check_object({
                equals,
                undefined: OptionPredicator.undefined(project.options),
                assert: true,
                reduce: ts.factory.createLogicalAnd,
                positive: ts.factory.createTrue(),
                superfluous: () => ts.factory.createFalse(),
            }),
            numeric: OptionPredicator.numeric(project.options),
        });
        config.trace = equals;

        if (equals === false)
            config.decoder = (input, target, explore, tags) => {
                if (
                    target.size() === 1 &&
                    target.objects.length === 1 &&
                    target.required === true &&
                    target.nullable === false
                ) {
                    // ONLY WHEN OBJECT WITH SOME ATOMIC PROPERTIES
                    const obj: MetadataObject = target.objects[0]!;
                    if (obj._Is_simple())
                        return ts.factory.createLogicalAnd(
                            ExpressionFactory.isObject(input, {
                                checkNull: true,
                                checkArray: false,
                            }),
                            config.joiner.object(
                                feature_object_entries(config as any)(obj)(
                                    input,
                                ),
                            ),
                        );
                }
                return CheckerProgrammer.decode(project, config, importer)(
                    input,
                    target,
                    explore,
                    tags,
                );
            };

        // GENERATE CHECKER
        return CheckerProgrammer.generate(project, config, importer, () =>
            importer.declare(modulo),
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
