import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { check_array } from "./internal/check_array";
import { check_native } from "./internal/check_native";
import { check_number } from "./internal/check_number";
import { check_string } from "./internal/check_string";
import { check_template } from "./internal/check_template";
import { decode_union_object } from "./internal/decode_union_object";

export namespace CheckerProgrammer {
    export interface IConfig {
        functors: string;
        unioners: string;
        path: boolean;
        trace: boolean;
        equals: boolean;
        numeric: boolean;
        combiner: IConfig.Combiner;
        decoder?: FeatureProgrammer.Decoder<Metadata>;
        joiner: IConfig.IJoiner;
        success: ts.Expression;
    }
    export namespace IConfig {
        export interface Combiner {
            (explorer: IExplore): {
                (logic: "and" | "or"): {
                    (
                        input: ts.Expression,
                        binaries: IBinary[],
                        expected: string,
                    ): ts.Expression;
                };
            };
        }
        export interface IJoiner {
            object(entries: IExpressionEntry[]): ts.Expression;
            array(input: ts.Expression, arrow: ts.ArrowFunction): ts.Expression;
            tuple?(exprs: ts.Expression[]): ts.Expression;

            failure(
                value: ts.Expression,
                expected: string,
                explore?: FeatureProgrammer.IExplore,
            ): ts.Expression;
            is?(expression: ts.Expression): ts.Expression;
            required?(exp: ts.Expression): ts.Expression;
            full?: (
                condition: ts.Expression,
            ) => (
                input: ts.Expression,
                expected: string,
                explore: IExplore,
            ) => ts.Expression;
        }
    }
    export import IExplore = FeatureProgrammer.IExplore;

    export interface IBinary {
        expression: ts.Expression;
        combined: boolean;
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
        addition?: () => ts.Statement[],
    ) {
        return FeatureProgrammer.generate(
            project,
            CONFIG(project, config, importer),
            importer,
            () => (addition ? (addition ? addition() : []) : undefined),
        );
    }

    export const generate_functors = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        FeatureProgrammer.generate_functors(
            CONFIG(project, config, importer),
            importer,
        );

    export const generate_unioners = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        FeatureProgrammer.generate_unioners(
            CONFIG(project, { ...config, numeric: false }, importer),
        );

    function CONFIG(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ): FeatureProgrammer.IConfig {
        const output: FeatureProgrammer.IConfig = {
            trace: config.trace,
            path: config.path,
            functors: config.functors,
            unioners: config.unioners,
            initializer: ({ checker }, type) => {
                const collection: MetadataCollection = new MetadataCollection();
                const meta: Metadata = MetadataFactory.generate(
                    checker,
                    collection,
                    type,
                    {
                        resolve: false,
                        constant: true,
                    },
                );
                return [collection, meta];
            },
            decoder: config.decoder || decode(project, config, importer),
            objector: {
                checker: config.decoder || decode(project, config, importer),
                decoder: decode_object(config),
                joiner: config.joiner.object,
                unionizer: config.equals
                    ? decode_union_object(decode_object(config))(
                          (input, obj, explore) =>
                              decode_object(config)(input, obj, {
                                  ...explore,
                                  tracable: true,
                              }),
                      )(config.joiner.is || ((expr) => expr))(
                          (value, expected) =>
                              ts.factory.createReturnStatement(
                                  config.joiner.failure(value, expected),
                              ),
                      )
                    : (input, targets, explore) =>
                          config.combiner(explore)("or")(
                              input,
                              targets.map((obj) => ({
                                  expression: decode_object(config)(
                                      input,
                                      obj,
                                      explore,
                                  ),
                                  combined: true,
                              })),
                              `(${targets.map((t) => t.name).join(" | ")})`,
                          ),
                failure: (value, expected) =>
                    ts.factory.createReturnStatement(
                        config.joiner.failure(value, expected),
                    ),
                is: config.joiner.is,
                required: config.joiner.required,
                full: config.joiner.full,
            },
        };
        if (config.numeric === true)
            output.generator = {
                unioners: FeatureProgrammer.generate_unioners(
                    CONFIG(project, { ...config, numeric: false }, importer),
                ),
            };
        return output;
    }

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export function decode(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ): (
        input: ts.Expression,
        meta: Metadata,
        explore: IExplore,
        tags: IMetadataTag[],
    ) => ts.Expression;

    /**
     * @internal
     */
    export function decode(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
        checkTupleLength: boolean,
    ): (
        input: ts.Expression,
        meta: Metadata,
        explore: IExplore,
        tags: IMetadataTag[],
    ) => ts.Expression;

    /**
     * @internal
     */
    export function decode(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
        checkTupleLength: boolean = true,
    ) {
        return function (
            input: ts.Expression,
            meta: Metadata,
            explore: IExplore,
            tags: IMetadataTag[],
        ): ts.Expression {
            if (meta.any) return config.success;

            const top: IBinary[] = [];
            const binaries: IBinary[] = [];
            const add = create_add(binaries)(input);
            const getConstantValue = (
                value: number | string | bigint | boolean,
            ) =>
                typeof value === "string"
                    ? ts.factory.createStringLiteral(value)
                    : ts.factory.createIdentifier(value.toString());

            //----
            // CHECK OPTIONAL
            //----
            const checkOptional: boolean = meta.empty() || meta.isUnionBucket();

            // NULLABLE
            if (
                checkOptional ||
                meta.nullable
                // || (meta.objects.length && meta.size() !== meta.objects.length)
            )
                (meta.nullable ? add : create_add(top)(input))(
                    meta.nullable,
                    ValueFactory.NULL(),
                );

            // UNDEFINDABLE
            if (checkOptional || !meta.required)
                (meta.required ? create_add(top)(input) : add)(
                    !meta.required,
                    ValueFactory.UNDEFINED(),
                );

            // FUNCTIONAL
            if (meta.functional === true)
                if (
                    OptionPredicator.functional(project.options) ||
                    meta.size() !== 1
                )
                    add(
                        true,
                        ts.factory.createStringLiteral("function"),
                        ValueFactory.TYPEOF(input),
                    );
                else
                    binaries.push({
                        combined: false,
                        expression: config.success,
                    });

            //----
            // VALUES
            //----
            // CONSTANT VALUES
            for (const constant of meta.constants)
                for (const val of constant.values)
                    add(true, getConstantValue(val));

            // ATOMIC VALUES
            for (const type of meta.atomics)
                if (type === "number")
                    binaries.push({
                        expression: check_number(project, config.numeric)(
                            input,
                            tags,
                        ),
                        combined: false,
                    });
                else if (type === "string")
                    binaries.push({
                        expression: check_string(importer)(input, tags),
                        combined: false,
                    });
                else
                    add(
                        true,
                        ts.factory.createStringLiteral(type),
                        ValueFactory.TYPEOF(input),
                    );

            // TEMPLATE LITERAL VALUES
            if (meta.templates.length)
                binaries.push({
                    expression: check_template(importer)(
                        input,
                        meta.templates,
                        tags,
                    ),
                    combined: false,
                });

            //----
            // INSTANCES
            //----
            // TUPLE
            if (meta.tuples.length > 0) {
                const inner: ts.Expression[] = [];
                for (const tuple of meta.tuples)
                    inner.push(
                        decode_tuple(
                            project,
                            config,
                            importer,
                            checkTupleLength,
                        )(input, tuple, explore, tags),
                    );

                // ADD
                binaries.push({
                    expression: config.combiner(explore)("and")(
                        input,
                        [
                            ...(checkTupleLength
                                ? [
                                      {
                                          expression:
                                              ExpressionFactory.isArray(input),
                                          combined: false,
                                      },
                                  ]
                                : []),
                            ...inner.map((expression) => ({
                                expression,
                                combined: true,
                            })),
                        ],
                        meta.getName(),
                    ),
                    combined: true,
                });
            }

            // ARRAY
            if (meta.arrays.length > 0)
                if (meta.arrays.every((elem) => elem.any))
                    binaries.push({
                        expression: check_array(input, tags),
                        combined: false,
                    });
                else
                    binaries.push({
                        expression: config.combiner(explore)("and")(
                            input,
                            [
                                {
                                    expression: check_array(input, tags),
                                    combined: false,
                                },
                                {
                                    expression: explore_array(
                                        project,
                                        config,
                                        importer,
                                    )(
                                        input,
                                        meta.arrays,
                                        {
                                            ...explore,
                                            from: "array",
                                        },
                                        tags,
                                    ),
                                    combined: true,
                                },
                            ],
                            meta.getName(),
                        ),
                        combined: true,
                    });

            // OBJECT
            if (meta.objects.length > 0)
                binaries.push({
                    expression: config.combiner(explore)("and")(
                        input,
                        [
                            {
                                expression: ExpressionFactory.isObject(
                                    input,
                                    true,
                                ),
                                combined: false,
                            },
                            {
                                expression: explore_objects(config)(
                                    input,
                                    meta,
                                    {
                                        ...explore,
                                        from: "object",
                                    },
                                ),
                                combined: true,
                            },
                        ],
                        meta.getName(),
                    ),
                    combined: true,
                });

            // NATIVE CLASSES
            for (const native of meta.natives)
                binaries.push({
                    expression: check_native(native)(input),
                    combined: false,
                });

            // SETS
            if (meta.sets.length)
                if (meta.sets.every((elem) => elem.any))
                    binaries.push({
                        combined: false,
                        expression: check_native("Set")(input),
                    });
                else
                    binaries.push({
                        combined: true,
                        expression: config.combiner(explore)("and")(
                            input,
                            [
                                {
                                    combined: false,
                                    expression: check_native("Set")(input),
                                },
                                {
                                    combined: true,
                                    expression: explore_set(
                                        project,
                                        config,
                                        importer,
                                    )(
                                        input,
                                        meta.sets,
                                        {
                                            ...explore,
                                            from: "array",
                                        },
                                        [],
                                    ),
                                },
                            ],
                            meta.getName(),
                        ),
                    });

            // MAPS
            if (meta.maps.length)
                if (meta.maps.every((elem) => elem.key.any && elem.value.any))
                    binaries.push({
                        expression: check_native("Map")(input),
                        combined: false,
                    });
                else
                    binaries.push({
                        combined: true,
                        expression: config.combiner(explore)("and")(
                            input,
                            [
                                {
                                    combined: false,
                                    expression: check_native("Map")(input),
                                },
                                {
                                    combined: true,
                                    expression: explore_map(
                                        project,
                                        config,
                                        importer,
                                    )(
                                        input,
                                        meta.maps.map((m) => [m.key, m.value]),
                                        {
                                            ...explore,
                                            from: "array",
                                        },
                                        [],
                                    ),
                                },
                            ],
                            meta.getName(),
                        ),
                    });

            // COMBINE CONDITIONS
            return top.length && binaries.length
                ? config.combiner(explore)("and")(
                      input,
                      [
                          ...top,
                          {
                              expression: config.combiner(explore)("or")(
                                  input,
                                  binaries,
                                  meta.getName(),
                              ),
                              combined: true,
                          },
                      ],
                      meta.getName(),
                  )
                : binaries.length
                ? config.combiner(explore)("or")(
                      input,
                      binaries,
                      meta.getName(),
                  )
                : config.success;
        };
    }

    function decode_tuple(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
        checkLength: boolean,
    ) {
        return function (
            input: ts.Expression,
            tuple: Array<Metadata>,
            explore: IExplore,
            tagList: IMetadataTag[],
        ): ts.Expression {
            const binaries: ts.Expression[] = tuple.map((meta, index) =>
                decode(project, config, importer)(
                    ts.factory.createElementAccessExpression(input, index),
                    meta,
                    {
                        ...explore,
                        from: "array",
                        postfix: explore.postfix.length
                            ? `${explore.postfix.slice(0, -1)}[${index}]"`
                            : `[${index}]`,
                    },
                    tagList,
                ),
            );
            return config.combiner(explore)("and")(
                input,
                [
                    ...(checkLength
                        ? [
                              {
                                  combined: false,
                                  expression: ts.factory.createStrictEquality(
                                      ts.factory.createPropertyAccessExpression(
                                          input,
                                          "length",
                                      ),
                                      ts.factory.createNumericLiteral(
                                          tuple.length,
                                      ),
                                  ),
                              },
                          ]
                        : []),
                    ...(config.joiner.tuple
                        ? [
                              {
                                  expression: config.joiner.tuple(binaries),
                                  combined: true,
                              },
                          ]
                        : binaries.map((expression) => ({
                              expression,
                              combined: true,
                          }))),
                ],
                `[${tuple.map((t) => t.getName()).join(", ")}]`,
            );
        };
    }

    function decode_array(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
        checkTupleLength: boolean,
    ) {
        return FeatureProgrammer.decode_array(
            {
                trace: config.trace,
                path: config.path,
                decoder: decode(project, config, importer, checkTupleLength),
            },
            importer,
            config.joiner.array,
        );
    }

    export function decode_object(config: IConfig) {
        const func = FeatureProgrammer.decode_object(config);
        return function (
            input: ts.Expression,
            obj: MetadataObject,
            explore: IExplore,
        ) {
            obj.validated = true;
            return func(input, obj, explore);
        };
    }

    const explore_array = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        UnionExplorer.array({
            checker: decode(project, config, importer),
            decoder: decode_array(project, config, importer, true),
            empty: config.success,
            success: config.success,
            failure: (input, expected, explore) =>
                ts.factory.createReturnStatement(
                    config.joiner.failure(input, expected, explore),
                ),
        });

    const explore_set = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        UnionExplorer.set({
            checker: decode(project, config, importer),
            decoder: decode_array(project, config, importer, true),
            empty: config.success,
            success: config.success,
            failure: (input, expected, explore) =>
                ts.factory.createReturnStatement(
                    config.joiner.failure(input, expected, explore),
                ),
        });

    const explore_map = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        UnionExplorer.map({
            checker: (input, entry, explore) => {
                const func = decode(project, config, importer);
                return ts.factory.createLogicalAnd(
                    func(
                        ts.factory.createElementAccessExpression(input, 0),
                        entry[0],
                        { ...explore, postfix: `${explore.postfix}[0]` },
                        [],
                    ),
                    func(
                        ts.factory.createElementAccessExpression(input, 1),
                        entry[1],
                        { ...explore, postfix: `${explore.postfix}[1]` },
                        [],
                    ),
                );
            },
            decoder: (input, target, explore) =>
                decode_array(project, config, importer, false)(
                    input,
                    Metadata.create({
                        any: false,
                        nullable: false,
                        required: true,
                        functional: false,
                        resolved: null,
                        constants: [],
                        atomics: [],
                        templates: [],
                        arrays: [],
                        tuples: [target],
                        objects: [],
                        natives: [],
                        sets: [],
                        maps: [],
                    }),
                    explore,
                    [],
                ),
            empty: config.success,
            success: config.success,
            failure: (input, expected, explore) =>
                ts.factory.createReturnStatement(
                    config.joiner.failure(input, expected, explore),
                ),
        });

    const explore_objects = (config: IConfig) => {
        const objector = decode_object(config);

        return (input: ts.Expression, meta: Metadata, explore: IExplore) => {
            if (meta.objects.length === 1)
                return objector(input, meta.objects[0]!, explore);

            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    `${config.unioners}${meta.union_index!}`,
                ),
                undefined,
                FeatureProgrammer.get_object_arguments(config)(explore)(input),
            );
        };
    };
}

const create_add =
    (binaries: CheckerProgrammer.IBinary[]) =>
    (defaultInput: ts.Expression) =>
    (
        exact: boolean,
        left: ts.Expression,
        right: ts.Expression = defaultInput,
    ) => {
        const factory = exact
            ? ts.factory.createStrictEquality
            : ts.factory.createStrictInequality;
        binaries.push({
            expression: factory(left, right),
            combined: false,
        });
    };
