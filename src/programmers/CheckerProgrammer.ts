import ts from "typescript";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { MetadataObject } from "../metadata/MetadataObject";
import { Metadata } from "../metadata/Metadata";
import { ExpressionFactory } from "../factories/ExpressionFactory";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { IProject } from "../transformers/IProject";
import { OptionPreditor } from "./helpers/OptionPredicator";

export namespace CheckerProgrammer {
    export interface IConfig {
        functors: string;
        unioners: string;
        trace: boolean;
        combiner: IConfig.Combiner;
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
    }
    export import IExplore = FeatureProgrammer.IExplore;

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const generate = (project: IProject, config: IConfig) =>
        FeatureProgrammer.generate(project, CONFIG(project, config));

    export const generate_functors = (project: IProject, config: IConfig) =>
        FeatureProgrammer.generate_functors(CONFIG(project, config));

    export const generate_unioners = (project: IProject, config: IConfig) =>
        FeatureProgrammer.generate_unioners(CONFIG(project, config));

    function CONFIG(
        project: IProject,
        config: IConfig,
    ): FeatureProgrammer.IConfig {
        return {
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
            decoder: decode(project, config),
            objector: {
                checker: decode(project, config),
                decoder: decode_object(config),
                joiner: (entries) =>
                    entries.length
                        ? entries
                              .map((entry) => entry.expression)
                              .reduce((x, y) =>
                                  ts.factory.createLogicalAnd(x, y),
                              )
                        : ts.factory.createTrue(),
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
    }

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export function decode(
        project: IProject,
        config: IConfig,
        numeric: boolean = true,
    ) {
        return function (
            input: ts.Expression,
            meta: Metadata,
            explore: IExplore,
        ): ts.Expression {
            if (meta.any) return ValueFactory.BOOLEAN(true);
            explore.tracable = explore.tracable && meta.size() === 1;

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
                    binaries.push(decode_number(project, numeric)(input));
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
                        decode_tuple(project, config)(input, tuple, explore),
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
                        explore_array(project, config)(input, meta.arrays, {
                            ...explore,
                            from: "array",
                        }),
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
                          config.combiner({
                              ...explore,
                              tracable: false,
                          })("or")(input, binaries, meta.getName()),
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

    function decode_number(project: IProject, numeric: boolean) {
        return function (input: ts.Expression) {
            const typeOf = ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("number"),
                ts.factory.createTypeOfExpression(input),
            );
            numeric =
                numeric && OptionPreditor.numeric(project.options, "checker");

            if (numeric === false) return typeOf;
            return [
                typeOf,
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Number.isFinite"),
                    undefined,
                    [input],
                ),
                ts.factory.createLogicalNot(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Number.isNaN"),
                        undefined,
                        [input],
                    ),
                ),
            ].reduce((x, y) => ts.factory.createLogicalAnd(x, y));
        };
    }

    function decode_tuple(project: IProject, config: IConfig) {
        return function (
            input: ts.Expression,
            tuple: Array<Metadata>,
            explore: IExplore,
        ): ts.Expression {
            const length = ts.factory.createStrictEquality(
                ts.factory.createPropertyAccessExpression(input, "length"),
                ts.factory.createNumericLiteral(tuple.length),
            );
            const binaries: ts.Expression[] = tuple.map((meta, index) =>
                decode(project, config)(
                    ts.factory.createElementAccessExpression(input, index),
                    meta,
                    {
                        ...explore,
                        from: "array",
                        postfix: explore.postfix.length
                            ? `${explore.postfix.slice(0, -1)}[${index}]"`
                            : `"[${index}]"`,
                    },
                ),
            );
            if (binaries.length === 0) return length;
            else
                return [length, ...binaries].reduce((x, y) =>
                    ts.factory.createLogicalAnd(x, y),
                );
        };
    }

    function decode_array(project: IProject, config: IConfig) {
        return FeatureProgrammer.decode_array(
            {
                trace: config.trace,
                decoder: decode(project, config),
            },
            (input, arrow) =>
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "every"),
                    undefined,
                    [arrow],
                ),
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

    const explore_array = (project: IProject, config: IConfig) =>
        UnionExplorer.array(
            decode(project, config),
            decode_array(project, config),
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
                FeatureProgrammer.getArguments(config.trace, explore)(input),
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
