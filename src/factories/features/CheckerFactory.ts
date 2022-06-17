import ts from "typescript";
import { IMetadata } from "../../structures/IMetadata";
import { MetadataCollection } from "../MetadataCollection";
import { MetadataFactory } from "../MetadataFactory";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { ValueFactory } from "../ValueFactory";
import { FeatureFactory } from "./FeatureFactory";

export namespace CheckerFactory {
    export interface IConfig {
        trace: boolean;
        functors: {
            name: string;
            filter?: (object: IMetadata.IObject) => boolean;
        };
        combiner: IConfig.Combiner;
    }
    export namespace IConfig {
        export interface Combiner {
            (explorer: IExplore): {
                (type: "and" | "or"): {
                    (
                        input: ts.Expression,
                        expressions: ts.Expression[],
                    ): ts.Expression;
                };
            };
        }
    }
    export import IExplore = FeatureFactory.IExplore;

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(config: IConfig) {
        return FeatureFactory.generate(base_config(config));
    }

    export function generate_functors(config: IConfig) {
        return FeatureFactory.generate_functors(base_config(config));
    }

    function base_config(config: IConfig): FeatureFactory.IConfig {
        return {
            initializer: ({ checker }, type) => {
                const collection: MetadataCollection = new MetadataCollection();
                const meta: IMetadata = MetadataFactory.generate(
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
            trace: config.trace,
            functors: config.functors,
            joiner: (entries) =>
                entries
                    .map((entry) => entry.expression)
                    .reduce(
                        (x, y) => ts.factory.createLogicalAnd(x, y),
                        ts.factory.createTrue(),
                    ),
            visitor: visit(config),
        };
    }

    /* -----------------------------------------------------------
        VISITORS
    ----------------------------------------------------------- */
    export function visit(config: IConfig) {
        return function (
            input: ts.Expression,
            meta: IMetadata,
            explore: IExplore,
        ): ts.Expression {
            if (meta.any) return ValueFactory.BOOLEAN(true);
            explore.tracable = explore.tracable && IMetadata.size(meta) === 1;

            const top: ts.Expression[] = [];
            const binaries: ts.Expression[] = [];
            const add = create_add(binaries)(input);
            const constant = (value: number | string | bigint | boolean) =>
                typeof value === "string"
                    ? ts.factory.createStringLiteral(value)
                    : ts.factory.createIdentifier(value.toString());

            // NULLBLE AND UNDEFINDABLE
            (meta.nullable ? add : create_add(top)(input))(
                meta.nullable,
                ValueFactory.NULL(),
            );
            (meta.required ? create_add(top)(input) : add)(
                !meta.required,
                ValueFactory.UNDEFINED(),
            );

            // CONSTANT VALUES
            for (const values of meta.constants.values())
                for (const val of values) add(true, constant(val));

            // ATOMIC VALUES
            for (const type of meta.atomics)
                add(
                    true,
                    ValueFactory.TYPEOF(input),
                    ts.factory.createStringLiteral(type),
                );

            // ARRAY OR TUPLE
            if (meta.arraies.size + meta.tuples.size > 0) {
                const inner: ts.Expression[] = [];
                for (const [key, tuple] of meta.tuples.entries()) {
                    if (meta.atomics.has(key)) continue;
                    inner.push(visit_tuple(config)(input, tuple, explore));
                }
                for (const array of meta.arraies.values())
                    inner.push(visit_array(config)(input, array, explore));

                // ADD
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Array.isArray"),
                            undefined,
                            [input],
                        ),
                        inner.length === 0
                            ? inner[0]!
                            : inner.reduce(
                                  (x, y) => ts.factory.createLogicalOr(x, y),
                                  ts.factory.createFalse(),
                              ),
                    ),
                );
            }

            // OBJECT
            if (meta.objects.size > 0) {
                const outer: ts.Expression[] = [];
                if (meta.nullable === false)
                    create_add(outer)(input)(false, ValueFactory.NULL());
                create_add(outer)(input)(
                    true,
                    ValueFactory.TYPEOF(input),
                    ts.factory.createStringLiteral("object"),
                );

                const inner: ts.Expression[] = [];
                for (const [obj] of meta.objects.values())
                    inner.push(visit_object(config)(input, obj, explore));

                binaries.push(
                    config.combiner({ ...explore, tracable: false })("and")(
                        input,
                        [
                            ...outer,
                            config.combiner({ ...explore, tracable: false })(
                                "or",
                            )(input, inner),
                        ],
                    ),
                );
            }

            // COMBINE CONDITIONS
            return top.length !== 0
                ? config.combiner(explore)("and")(input, [
                      ...top,
                      config.combiner({
                          ...explore,
                          tracable: false,
                      })("or")(input, binaries),
                  ])
                : config.combiner(explore)("or")(input, binaries);
        };
    }

    function visit_tuple(config: IConfig) {
        return function (
            input: ts.Expression,
            tuple: Array<IMetadata>,
            explore: IExplore,
        ): ts.Expression {
            const length = ts.factory.createStrictEquality(
                ts.factory.createPropertyAccessExpression(input, "length"),
                ts.factory.createNumericLiteral(tuple.length),
            );
            const binaries: ts.Expression[] = tuple.map((meta, index) =>
                visit(config)(
                    ts.factory.createElementAccessExpression(input, index),
                    meta,
                    {
                        ...explore,
                        from: "array",
                        postfix: `${explore.postfix}[${index}]`,
                    },
                ),
            );
            if (binaries.length === 0) return length;
            else
                return [length, ...binaries].reduce(
                    (x, y) => ts.factory.createLogicalAnd(x, y),
                    ts.factory.createTrue(),
                );
        };
    }

    function visit_array(config: IConfig) {
        return FeatureFactory.visit_array(base_config(config), (input, arrow) =>
            ts.factory.createCallExpression(
                IdentifierFactory.join(input, "every"),
                undefined,
                [arrow],
            ),
        );
    }

    function visit_object(config: IConfig) {
        const func = FeatureFactory.visit_object(base_config(config));
        return function (
            input: ts.Expression,
            obj: IMetadata.IObject,
            explore: IExplore,
        ) {
            obj.validated = true;
            return func(input, obj, explore);
        };
    }
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
