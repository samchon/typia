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
import { OptionPreditor } from "./helpers/OptionPredicator";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { check_array } from "./internal/check_array";
import { check_number } from "./internal/check_number";
import { check_string } from "./internal/check_string";

export namespace CheckerProgrammer {
    export interface IConfig {
        functors: string;
        unioners: string;
        trace: boolean;
        numeric: boolean;
        combiner: IConfig.Combiner;
        joiner: IConfig.IJoiner;
    }
    export namespace IConfig {
        export interface Combiner {
            (explorer: IExplore): {
                (logic: "and" | "or"): {
                    (
                        input: ts.Expression,
                        expressions: ts.Expression[],
                        expected: string,
                    ): ts.Expression;
                };
            };
        }
        export interface IJoiner {
            object(entries: IExpressionEntry[]): ts.Expression;
            array(
                input: ts.Expression,
                arrow: ts.ArrowFunction,
                tags: IMetadataTag[],
            ): ts.Expression;
            tuple(binaries: ts.Expression[]): ts.Expression;
        }
    }
    export import IExplore = FeatureProgrammer.IExplore;

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(
        project: IProject,
        config: IConfig,
        modulo: ts.LeftHandSideExpression,
        importer: FunctionImporter,
        addition?: () => ts.Statement[],
    ) {
        return FeatureProgrammer.generate(
            project,
            CONFIG(project, config, importer),
            importer.empty() || addition
                ? () => [
                      ...importer.declare(modulo),
                      ...(addition ? addition() : []),
                  ]
                : undefined,
        );
    }

    export const generate_functors = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) => FeatureProgrammer.generate_functors(CONFIG(project, config, importer));

    export const generate_unioners = (
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) =>
        FeatureProgrammer.generate_unioners(
            CONFIG(project, { ...config, numeric: false }, importer),
        );

    export const DEFAULT_JOINER: () => IConfig.IJoiner = () => ({
        object: (entries) =>
            entries.length
                ? entries
                      .map((entry) => entry.expression)
                      .reduce((x, y) => ts.factory.createLogicalAnd(x, y))
                : ts.factory.createTrue(),
        array: check_array,
        tuple: (binaries) =>
            binaries.reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
    });

    function CONFIG(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ): FeatureProgrammer.IConfig {
        const output: FeatureProgrammer.IConfig = {
            trace: config.trace,
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
            decoder: decode(project, config, importer),
            objector: {
                checker: decode(project, config, importer),
                decoder: decode_object(config),
                joiner: config.joiner.object,
                unionizer: (input, targets, explore) =>
                    config.combiner(explore)("or")(
                        input,
                        targets.map((obj) =>
                            decode_object(config)(input, obj, explore),
                        ),
                        `(${targets.map((t) => t.name).join(" | ")})`,
                    ),
                failure: () =>
                    ts.factory.createReturnStatement(ts.factory.createFalse()),
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
    ) {
        return function (
            input: ts.Expression,
            meta: Metadata,
            explore: IExplore,
            tags: IMetadataTag[],
        ): ts.Expression {
            if (meta.any) return ValueFactory.BOOLEAN(true);
            // explore.tracable = explore.tracable && meta.size() === 1;

            const top: ts.Expression[] = [];
            const binaries: ts.Expression[] = [];
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
            if (checkOptional || meta.nullable || meta.objects.length)
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
            if (
                meta.functional === true &&
                (OptionPreditor.functional(project.options) ||
                    meta.size() !== 1)
            )
                add(
                    true,
                    ts.factory.createStringLiteral("function"),
                    ValueFactory.TYPEOF(input),
                );

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
                    binaries.push(
                        check_number(project, config.numeric)(input, tags),
                    );
                else if (type === "string")
                    binaries.push(check_string(importer)(input, tags));
                else
                    add(
                        true,
                        ts.factory.createStringLiteral(type),
                        ValueFactory.TYPEOF(input),
                    );

            //----
            // INSTANCES
            //----
            // TUPLE
            if (meta.tuples.length > 0) {
                const inner: ts.Expression[] = [];
                for (const tuple of meta.tuples)
                    inner.push(
                        decode_tuple(project, config, importer)(
                            input,
                            tuple,
                            explore,
                            tags,
                        ),
                    );

                // ADD
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ExpressionFactory.isArray(input),
                        inner.length === 1
                            ? inner[0]!
                            : inner.reduce((x, y) =>
                                  ts.factory.createLogicalOr(x, y),
                              ),
                    ),
                );
            }

            // ARRAY
            if (meta.arrays.length > 0)
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ExpressionFactory.isArray(input),
                        explore_array(project, config, importer)(
                            input,
                            meta.arrays,
                            {
                                ...explore,
                                from: "array",
                            },
                            tags,
                        ),
                    ),
                );

            // OBJECT
            if (meta.objects.length > 0)
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ExpressionFactory.isObject(input, true),
                        explore_objects(config)(input, meta, {
                            ...explore,
                            from: "object",
                        }),
                    ),
                );

            // COMBINE CONDITIONS
            return top.length !== 0
                ? config.combiner(explore)("and")(
                      input,
                      [
                          ...top,
                          config.combiner(explore)("or")(
                              input,
                              binaries,
                              meta.getName(),
                          ),
                      ],
                      meta.getName(),
                  )
                : config.combiner(explore)("or")(
                      input,
                      binaries,
                      meta.getName(),
                  );
        };
    }

    function decode_tuple(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) {
        return function (
            input: ts.Expression,
            tuple: Array<Metadata>,
            explore: IExplore,
            tagList: IMetadataTag[],
        ): ts.Expression {
            const length: ts.BinaryExpression = ts.factory.createStrictEquality(
                ts.factory.createPropertyAccessExpression(input, "length"),
                ts.factory.createNumericLiteral(tuple.length),
            );
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
            if (binaries.length === 0) return length;
            else
                return ts.factory.createLogicalAnd(
                    length,
                    config.joiner.tuple(binaries),
                );
        };
    }

    function decode_array(
        project: IProject,
        config: IConfig,
        importer: FunctionImporter,
    ) {
        return FeatureProgrammer.decode_array(
            {
                trace: config.trace,
                decoder: decode(project, config, importer),
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
        UnionExplorer.array(
            decode(project, config, importer),
            decode_array(project, config, importer),
            () => ts.factory.createTrue(),
            () => ts.factory.createReturnStatement(ts.factory.createFalse()),
        );

    const explore_objects = (config: IConfig) => {
        const objector = decode_object(config);

        return (input: ts.Expression, meta: Metadata, explore: IExplore) => {
            if (meta.objects.length === 1)
                return objector(input, meta.objects[0]!, explore);

            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    `${config.unioners}[${meta.union_index!}]`,
                ),
                undefined,
                FeatureProgrammer.get_object_arguments(
                    config.trace,
                    explore,
                )(input),
            );
        };
    };
}

const create_add =
    (binaries: ts.Expression[]) =>
    (defaultInput: ts.Expression) =>
    (
        exact: boolean,
        left: ts.Expression,
        right: ts.Expression = defaultInput,
    ) => {
        const factory = exact
            ? ts.factory.createStrictEquality
            : ts.factory.createStrictInequality;
        binaries.push(factory(left, right));
    };
