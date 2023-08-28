import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { MetadataObject } from "../schemas/metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { disable_function_importer_declare } from "./helpers/disable_function_importer_declare";
import { check_object } from "./internal/check_object";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace IsProgrammer {
    export const configure =
        (options?: Partial<CONFIG.IOptions>) =>
        (importer: FunctionImporter): CheckerProgrammer.IConfig => ({
            prefix: "$i",
            equals: !!options?.object,
            trace: false,
            path: false,
            numeric: OptionPredicator.numeric({
                numeric: options?.numeric,
            }),
            atomist: () => (entry) => () =>
                [
                    ...(entry.expression ? [entry.expression] : []),
                    ...(entry.conditions.length === 0
                        ? []
                        : [
                              entry.conditions
                                  .map((set) =>
                                      set
                                          .map((s) => s.expression)
                                          .reduce((a, b) =>
                                              ts.factory.createLogicalAnd(a, b),
                                          ),
                                  )
                                  .reduce((a, b) =>
                                      ts.factory.createLogicalOr(a, b),
                                  ),
                          ]),
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
                        IdentifierFactory.access(input)("every"),
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
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression, disable?: boolean) =>
        (equals: boolean) => {
            const importer: FunctionImporter =
                disable === <any>{}
                    ? disable_function_importer_declare(
                          new FunctionImporter(modulo.getText()),
                      )
                    : new FunctionImporter(modulo.getText());

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

            config.decoder = () => (input, target, explore) => {
                if (
                    target.size() === 1 &&
                    target.objects.length === 1 &&
                    target.isRequired() === true &&
                    target.nullable === false
                ) {
                    // ONLY WHEN OBJECT WITH SOME ATOMIC PROPERTIES
                    const obj: MetadataObject = target.objects[0]!;
                    if (
                        obj._Is_simple(explore.from === "top" ? 0 : 1) &&
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
                                ts.factory.createAsExpression(
                                    input,
                                    TypeFactory.keyword("any"),
                                ),
                                feature_object_entries(config as any)(importer)(
                                    obj,
                                )(
                                    ts.factory.createAsExpression(
                                        input,
                                        TypeFactory.keyword("any"),
                                    ),
                                    "top",
                                ),
                            ),
                        );
                }
                return CheckerProgrammer.decode(project)(config)(importer)(
                    input,
                    target,
                    explore,
                );
            };

            // GENERATE CHECKER
            return CheckerProgrammer.write(project)(config)(importer);
        };

    export const write_function_statements =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection) => {
            const config = configure()(importer);
            const objects =
                CheckerProgrammer.write_object_functions(project)(config)(
                    importer,
                )(collection);
            const unions =
                CheckerProgrammer.write_union_functions(project)(config)(
                    importer,
                )(collection);
            const arrays =
                CheckerProgrammer.write_array_functions(project)(config)(
                    importer,
                )(collection);
            const tuples =
                CheckerProgrammer.write_tuple_functions(project)(config)(
                    importer,
                )(collection);

            return [
                ...objects.filter((_, i) =>
                    importer.hasLocal(`${config.prefix}o${i}`),
                ),
                ...unions.filter((_, i) =>
                    importer.hasLocal(`${config.prefix}u${i}`),
                ),
                ...arrays.filter((_, i) =>
                    importer.hasLocal(`${config.prefix}a${i}`),
                ),
                ...tuples.filter((_, i) =>
                    importer.hasLocal(`${config.prefix}t${i}`),
                ),
            ];
        };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode = (project: IProject) => (importer: FunctionImporter) =>
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
                        IdentifierFactory.access(input)("toJSON"),
                    ),
                ),
            );

    export const decode_functional = (input: ts.Expression) =>
        ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("function"),
            ValueFactory.TYPEOF(input),
        );
}
