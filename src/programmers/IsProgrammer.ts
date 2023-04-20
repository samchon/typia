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
    export const configure =
        (options?: Partial<CONFIG.IOptions>) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig => ({
            functors: "$io",
            unioners: "$iu",
            trace: false,
            path: false,
            equals: !!options?.object,
            numeric: OptionPredicator.numeric({
                numeric: options?.numeric,
            }),
            atomist: () => (entry) => () =>
                [
                    entry.expression,
                    ...entry.tags.map((tag) => tag.expression),
                ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
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
                    })(importer),
                array: (input, arrow) =>
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(input)("every"),
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
            object: (
                input: ts.Expression,
                entries: IExpressionEntry<ts.Expression>[],
            ) => ts.Expression;
        }
    }

    /* -----------------------------------------------------------
        WRITERS
    ----------------------------------------------------------- */
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (
            project: IProject,
            modulo: ts.LeftHandSideExpression,
            equals: boolean = false,
        ) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(equals)(type, name);

    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (equals: boolean) => {
            const importer: FunctionImporter = new FunctionImporter();

            // CONFIGURATION
            const config: CheckerProgrammer.IConfig = {
                ...configure({
                    object: check_object({
                        equals,
                        undefined: OptionPredicator.undefined(project.options),
                        assert: true,
                        reduce: ts.factory.createLogicalAnd,
                        positive: ts.factory.createTrue(),
                        superfluous: () => ts.factory.createFalse(),
                    })(importer),
                    numeric: OptionPredicator.numeric(project.options),
                })(importer),
                trace: equals,
                addition: () => importer.declare(modulo),
            };

            config.decoder = (input, target, explore, tags, jsDocTags) => {
                if (
                    target.size() === 1 &&
                    target.objects.length === 1 &&
                    target.required === true &&
                    target.nullable === false
                ) {
                    // ONLY WHEN OBJECT WITH SOME ATOMIC PROPERTIES
                    const obj: MetadataObject = target.objects[0]!;
                    if (
                        obj._Is_simple() &&
                        (equals === false ||
                            OptionPredicator.undefined(project.options) ===
                                false)
                    )
                        return ts.factory.createLogicalAnd(
                            ExpressionFactory.isObject({
                                checkNull: true,
                                checkArray: false,
                            })(input),
                            config.joiner.object(
                                input,
                                feature_object_entries(config as any)(importer)(
                                    obj,
                                )(input),
                            ),
                        );
                }
                return CheckerProgrammer.decode(project)(config)(importer)(
                    input,
                    target,
                    explore,
                    tags,
                    jsDocTags,
                );
            };

            // GENERATE CHECKER
            return CheckerProgrammer.write(project)(config)(importer);
        };

    export const write_functors =
        (project: IProject) => (importer: FunctionImporter) =>
            CheckerProgrammer.write_functors(project)(configure()(importer))(
                importer,
            );

    export const write_unioners =
        (project: IProject) => (importer: FunctionImporter) =>
            CheckerProgrammer.write_unioners(
                project,
                configure()(importer),
                importer,
            );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode = (project: IProject, importer: FunctionImporter) =>
        CheckerProgrammer.decode(project)(configure()(importer))(importer);

    export const decode_object = (importer: FunctionImporter) =>
        CheckerProgrammer.decode_object(configure()(importer))(importer);

    export const decode_to_json =
        (checkNull: boolean) =>
        (input: ts.Expression): ts.Expression =>
            ts.factory.createLogicalAnd(
                ExpressionFactory.isObject({
                    checkArray: false,
                    checkNull,
                })(input),
                ts.factory.createStrictEquality(
                    ts.factory.createStringLiteral("function"),
                    ValueFactory.TYPEOF(
                        IdentifierFactory.join(input)("toJSON"),
                    ),
                ),
            );

    export const decode_functional = (input: ts.Expression) =>
        ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("function"),
            ValueFactory.TYPEOF(input),
        );
}
