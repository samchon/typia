import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { JsonMetadataFactory } from "../../factories/JsonMetadataFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { ValueFactory } from "../../factories/ValueFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProject } from "../../transformers/IProject";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { OptionPredicator } from "../helpers/OptionPredicator";
import { StringifyJoiner } from "../helpers/StringifyJoinder";
import { StringifyPredicator } from "../helpers/StringifyPredicator";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { check_native } from "../internal/check_native";
import { decode_union_object } from "../internal/decode_union_object";
import { feature_object_entries } from "../internal/feature_object_entries";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace JsonStringifyProgrammer {
    /* -----------------------------------------------------------
        WRITER
    ----------------------------------------------------------- */

    export const write =
        (project: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter(
                modulo.getText(),
            );
            const config: FeatureProgrammer.IConfig =
                configure(project)(importer);

            return FeatureProgrammer.write(project)({
                ...config,
                addition: (collection) => [
                    ...IsProgrammer.write_function_statements(project)(
                        importer,
                    )(collection),
                    ...importer.declare(modulo),
                ],
            })(importer);
        };

    const write_array_functions =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection): ts.VariableStatement[] =>
            collection
                .arrays()
                .filter((a) => a.recursive)
                .map((type, i) =>
                    StatementFactory.constant(
                        `${config.prefix}a${i}`,
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            FeatureProgrammer.parameterDeclarations(config)(
                                TypeFactory.keyword("any"),
                            )(ts.factory.createIdentifier("input")),
                            TypeFactory.keyword("any"),
                            undefined,
                            decode_array_inline(config)(importer)(
                                ts.factory.createIdentifier("input"),
                                MetadataArray.create({
                                    type,
                                    tags: [],
                                }),
                                {
                                    tracable: config.trace,
                                    source: "function",
                                    from: "array",
                                    postfix: "",
                                },
                            ),
                        ),
                    ),
                );

    const write_tuple_functions =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection): ts.VariableStatement[] =>
            collection
                .tuples()
                .filter((t) => t.recursive)
                .map((tuple, i) =>
                    StatementFactory.constant(
                        `${config.prefix}t${i}`,
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            FeatureProgrammer.parameterDeclarations(config)(
                                TypeFactory.keyword("any"),
                            )(ts.factory.createIdentifier("input")),
                            TypeFactory.keyword("any"),
                            undefined,
                            decode_tuple_inline(project)(config)(importer)(
                                ts.factory.createIdentifier("input"),
                                tuple,
                                {
                                    tracable: config.trace,
                                    source: "function",
                                    from: "array",
                                    postfix: "",
                                },
                            ),
                        ),
                    ),
                );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            // ANY TYPE
            if (meta.any === true)
                return wrap_required(
                    input,
                    meta,
                    explore,
                )(
                    wrap_functional(
                        input,
                        meta,
                        explore,
                    )(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("JSON.stringify"),
                            undefined,
                            [input],
                        ),
                    ),
                );

            // ONLY NULL OR UNDEFINED
            const size: number = meta.size();
            if (
                size === 0 &&
                (meta.isRequired() === false || meta.nullable === true)
            ) {
                if (meta.isRequired() === false && meta.nullable === true)
                    return explore.from === "array"
                        ? ts.factory.createStringLiteral("null")
                        : ts.factory.createConditionalExpression(
                              ts.factory.createStrictEquality(
                                  ts.factory.createNull(),
                                  input,
                              ),
                              undefined,
                              ts.factory.createStringLiteral("null"),
                              undefined,
                              ts.factory.createIdentifier("undefined"),
                          );
                else if (meta.isRequired() === false)
                    return explore.from === "array"
                        ? ts.factory.createStringLiteral("null")
                        : ts.factory.createIdentifier("undefined");
                else return ts.factory.createStringLiteral("null");
            }

            //----
            // LIST UP UNION TYPES
            //----
            const unions: IUnion[] = [];

            // toJSON() METHOD
            if (meta.escaped !== null)
                unions.push({
                    type: "resolved",
                    is: () => IsProgrammer.decode_to_json(false)(input),
                    value: () =>
                        decode_to_json(project)(config)(importer)(
                            input,
                            meta.escaped!.returns,
                            explore,
                        ),
                });
            else if (meta.functional === true)
                unions.push({
                    type: "functional",
                    is: () => IsProgrammer.decode_functional(input),
                    value: () => decode_functional(explore),
                });

            // TEMPLATES
            if (
                meta.templates.length ||
                ArrayUtil.has(meta.constants, (c) => c.type === "string")
            )
                if (AtomicPredicator.template(meta)) {
                    const partial = Metadata.initialize();
                    partial.atomics.push(
                        MetadataAtomic.create({ type: "string", tags: [] }),
                    ),
                        unions.push({
                            type: "template literal",
                            is: () =>
                                IsProgrammer.decode(project)(importer)(
                                    input,
                                    partial,
                                    explore,
                                ),
                            value: () =>
                                decode_atomic(project)(importer)(
                                    input,
                                    "string",
                                    explore,
                                ),
                        });
                }

            // CONSTANTS
            for (const constant of meta.constants)
                if (AtomicPredicator.constant(meta)(constant.type) === false)
                    continue;
                else if (constant.type !== "string")
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(project)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(
                                        MetadataAtomic.create({
                                            type: constant.type,
                                            tags: [],
                                        }),
                                    );
                                    return partial;
                                })(),
                                explore,
                            ),
                        value: () =>
                            decode_atomic(project)(importer)(
                                input,
                                constant.type,
                                explore,
                            ),
                    });
                else if (meta.templates.length === 0)
                    unions.push({
                        type: "const string",
                        is: () =>
                            IsProgrammer.decode(project)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(
                                        MetadataAtomic.create({
                                            type: "string",
                                            tags: [],
                                        }),
                                    );
                                    return partial;
                                })(),
                                explore,
                            ),
                        value: () =>
                            decode_constant_string(project)(importer)(
                                input,
                                [...constant.values] as string[],
                                explore,
                            ),
                    });

            /// ATOMICS
            for (const a of meta.atomics)
                if (AtomicPredicator.atomic(meta)(a.type))
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(project)(importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(a);
                                    return partial;
                                })(),
                                explore,
                            ),
                        value: () =>
                            decode_atomic(project)(importer)(
                                input,
                                a.type,
                                explore,
                            ),
                    });

            // TUPLES
            for (const tuple of meta.tuples)
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsProgrammer.decode(project)(importer)(
                            input,
                            (() => {
                                const partial = Metadata.initialize();
                                partial.tuples.push(tuple);
                                return partial;
                            })(),
                            explore,
                        ),
                    value: () =>
                        decode_tuple(project)(config)(importer)(
                            input,
                            tuple,
                            explore,
                        ),
                });

            // ARRAYS
            if (meta.arrays.length) {
                const value: () => ts.Expression =
                    meta.arrays.length === 1
                        ? () =>
                              decode_array(config)(importer)(
                                  input,
                                  meta.arrays[0]!,
                                  {
                                      ...explore,
                                      from: "array",
                                  },
                              )
                        : meta.arrays.some((elem) => elem.type.value.any)
                        ? () =>
                              ts.factory.createCallExpression(
                                  ts.factory.createIdentifier("JSON.stringify"),
                                  undefined,
                                  [input],
                              )
                        : () =>
                              explore_arrays(project)(config)(importer)(
                                  input,
                                  meta.arrays,
                                  {
                                      ...explore,
                                      from: "array",
                                  },
                              );

                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value,
                });
            }

            // BUILT-IN CLASSES
            if (meta.natives.length)
                for (const native of meta.natives)
                    unions.push({
                        type: "object",
                        is: () => check_native(native)(input),
                        value: () =>
                            AtomicPredicator.native(native)
                                ? decode_atomic(project)(importer)(
                                      input,
                                      native.toLowerCase() as Atomic.Literal,
                                      explore,
                                  )
                                : ts.factory.createStringLiteral("{}"),
                    });

            // SETS
            if (meta.sets.length)
                unions.push({
                    type: "object",
                    is: () => ExpressionFactory.isInstanceOf("Set")(input),
                    value: () => ts.factory.createStringLiteral("{}"),
                });

            // MAPS
            if (meta.maps.length)
                unions.push({
                    type: "object",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: () => ts.factory.createStringLiteral("{}"),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject({
                            checkNull: true,
                            checkArray: meta.objects.some((obj) =>
                                obj.properties.every(
                                    (prop) =>
                                        !prop.key.isSoleLiteral() ||
                                        !prop.value.isRequired(),
                                ),
                            ),
                        })(input),
                    value: () =>
                        meta.isParentResolved() === false &&
                        meta.objects.length === 1 &&
                        meta.objects[0]!._Is_simple(
                            explore.from === "top" ? 0 : 1,
                        )
                            ? (() => {
                                  const obj: MetadataObject = meta.objects[0]!;
                                  const entries: IExpressionEntry<ts.Expression>[] =
                                      feature_object_entries({
                                          decoder: () =>
                                              decode(project)(config)(importer),
                                          trace: false,
                                          path: false,
                                      })(importer)(obj)(
                                          ts.factory.createAsExpression(
                                              input,
                                              TypeFactory.keyword("any"),
                                          ),
                                      );
                                  return StringifyJoiner.object(importer)(
                                      ts.factory.createAsExpression(
                                          input,
                                          TypeFactory.keyword("any"),
                                      ),
                                      entries,
                                  );
                              })()
                            : explore_objects(config)(importer)(input, meta, {
                                  ...explore,
                                  from: "object",
                              }),
                });

            //----
            // RETURNS
            //----
            // CHECK NULL AND UNDEFINED
            const wrapper = (output: ts.Expression) =>
                wrap_required(
                    input,
                    meta,
                    explore,
                )(wrap_nullable(input, meta)(output));

            // DIRECT RETURN
            if (unions.length === 0)
                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier("JSON.stringify"),
                    undefined,
                    [input],
                );
            else if (unions.length === 1) return wrapper(unions[0]!.value());

            // RETURN WITH TYPE CHECKING
            return wrapper(
                ts.factory.createCallExpression(
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        iterate(importer, input, unions, meta.getName()),
                    ),
                    undefined,
                    undefined,
                ),
            );
        };

    const decode_object = (importer: FunctionImporter) =>
        FeatureProgrammer.decode_object({
            trace: false,
            path: false,
            prefix: PREFIX,
        })(importer);

    const decode_array =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            array: MetadataArray,
            explore: FeatureProgrammer.IExplore,
        ) =>
            array.type.recursive
                ? ts.factory.createCallExpression(
                      ts.factory.createIdentifier(
                          importer.useLocal(
                              `${config.prefix}a${array.type.index}`,
                          ),
                      ),
                      undefined,
                      FeatureProgrammer.argumentsArray(config)({
                          ...explore,
                          source: "function",
                          from: "array",
                      })(input),
                  )
                : decode_array_inline(config)(importer)(input, array, explore);

    const decode_array_inline =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            array: MetadataArray,
            explore: FeatureProgrammer.IExplore,
        ) =>
            FeatureProgrammer.decode_array(config)(importer)(
                StringifyJoiner.array,
            )(input, array, explore);

    const decode_tuple =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: MetadataTuple,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression =>
            tuple.type.recursive
                ? ts.factory.createCallExpression(
                      ts.factory.createIdentifier(
                          importer.useLocal(
                              `${config.prefix}t${tuple.type.index}`,
                          ),
                      ),
                      undefined,
                      FeatureProgrammer.argumentsArray(config)({
                          ...explore,
                          source: "function",
                      })(input),
                  )
                : decode_tuple_inline(project)(config)(importer)(
                      input,
                      tuple.type,
                      explore,
                  );

    const decode_tuple_inline =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: MetadataTupleType,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            const children: ts.Expression[] = tuple.elements
                .filter((elem) => elem.rest === null)
                .map((elem, index) =>
                    decode(project)(config)(importer)(
                        ts.factory.createElementAccessExpression(input, index),
                        elem,
                        {
                            ...explore,
                            from: "array",
                            postfix: explore.postfix.length
                                ? `${explore.postfix.slice(0, -1)}[${index}]"`
                                : `"[${index}]"`,
                        },
                    ),
                );
            const rest = (() => {
                if (tuple.elements.length === 0) return null;
                const last = tuple.elements.at(-1)!;
                if (last.rest === null) return null;

                const code = decode(project)(config)(importer)(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(input)("slice"),
                        undefined,
                        [
                            ts.factory.createNumericLiteral(
                                tuple.elements.length - 1,
                            ),
                        ],
                    ),
                    wrap_metadata_rest_tuple(tuple.elements.at(-1)!.rest!),
                    {
                        ...explore,
                        start: tuple.elements.length - 1,
                    },
                );
                return ts.factory.createCallExpression(
                    importer.use("rest"),
                    undefined,
                    [code],
                );
            })();
            return StringifyJoiner.tuple(children, rest);
        };

    const decode_atomic =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            type: string,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (type === "string")
                return ts.factory.createCallExpression(
                    importer.use("string"),
                    undefined,
                    [input],
                );
            else if (
                type === "number" &&
                OptionPredicator.numeric(project.options)
            )
                input = ts.factory.createCallExpression(
                    importer.use("number"),
                    undefined,
                    [input],
                );

            return explore.from !== "top"
                ? input
                : ts.factory.createCallExpression(
                      IdentifierFactory.access(input)("toString"),
                      undefined,
                      undefined,
                  );
        };

    const decode_constant_string =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            values: string[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            if (values.every((v) => !StringifyPredicator.require_escape(v)))
                return [
                    ts.factory.createStringLiteral('"'),
                    input,
                    ts.factory.createStringLiteral('"'),
                ].reduce((x, y) => ts.factory.createAdd(x, y));
            else
                return decode_atomic(project)(importer)(
                    input,
                    "string",
                    explore,
                );
        };

    const decode_to_json =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            resolved: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            return decode(project)(config)(importer)(
                ts.factory.createCallExpression(
                    IdentifierFactory.access(input)("toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
            );
        };

    const decode_functional = (explore: FeatureProgrammer.IExplore) =>
        explore.from === "array"
            ? ts.factory.createStringLiteral("null")
            : ts.factory.createIdentifier("undefined");

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ) =>
            meta.objects.length === 1
                ? decode_object(importer)(input, meta.objects[0]!, explore)
                : ts.factory.createCallExpression(
                      ts.factory.createIdentifier(
                          importer.useLocal(`${PREFIX}u${meta.union_index!}`),
                      ),
                      undefined,
                      FeatureProgrammer.argumentsArray(config)(explore)(input),
                  );

    const explore_arrays =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            elements: MetadataArray[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression =>
            explore_array_like_union_types(config)(importer)(
                UnionExplorer.array({
                    checker: IsProgrammer.decode(project)(importer),
                    decoder: decode_array(config)(importer),
                    empty: ts.factory.createStringLiteral("[]"),
                    success: ts.factory.createTrue(),
                    failure: (input, expected) =>
                        create_throw_error(importer)(expected)(input),
                }),
            )(input, elements, explore);

    const explore_array_like_union_types =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        <T extends MetadataArray | MetadataTuple>(
            factory: (
                parameters: ts.ParameterDeclaration[],
            ) => (
                input: ts.Expression,
                elements: T[],
                explore: FeatureProgrammer.IExplore,
            ) => ts.ArrowFunction,
        ) =>
        (
            input: ts.Expression,
            elements: T[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            const arrow =
                (parameters: ts.ParameterDeclaration[]) =>
                (explore: FeatureProgrammer.IExplore) =>
                (input: ts.Expression): ts.ArrowFunction =>
                    factory(parameters)(input, elements, explore);
            if (elements.every((e) => e.type.recursive === false))
                ts.factory.createCallExpression(
                    arrow([])(explore)(input),
                    undefined,
                    [],
                );

            explore = {
                ...explore,
                source: "function",
                from: "array",
            };
            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    importer.emplaceUnion(
                        config.prefix,
                        elements.map((e) => e.type.name).join(" | "),
                        () =>
                            arrow(
                                FeatureProgrammer.parameterDeclarations(config)(
                                    TypeFactory.keyword("any"),
                                )(ts.factory.createIdentifier("input")),
                            )({
                                ...explore,
                                postfix: "",
                            })(ts.factory.createIdentifier("input")),
                    ),
                ),
                undefined,
                FeatureProgrammer.argumentsArray(config)(explore)(input),
            );
        };

    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    const wrap_required = (
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.isRequired() === true && meta.any === false)
            return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createIdentifier("undefined"),
                    input,
                ),
                undefined,
                expression,
                undefined,
                explore.from === "array"
                    ? ts.factory.createStringLiteral("null")
                    : ts.factory.createIdentifier("undefined"),
            );
    };

    const wrap_nullable = (
        input: ts.Expression,
        meta: Metadata,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.nullable === false) return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createNull(),
                    input,
                ),
                undefined,
                expression,
                undefined,
                ts.factory.createStringLiteral("null"),
            );
    };

    const wrap_functional = (
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.functional === false) return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createStringLiteral("function"),
                    ValueFactory.TYPEOF(input),
                ),
                undefined,
                expression,
                undefined,
                decode_functional(explore),
            );
    };

    const iterate = (
        importer: FunctionImporter,
        input: ts.Expression,
        unions: IUnion[],
        expected: string,
    ) =>
        ts.factory.createBlock(
            [
                ...unions.map((u) =>
                    ts.factory.createIfStatement(
                        u.is(),
                        ts.factory.createReturnStatement(u.value()),
                    ),
                ),
                create_throw_error(importer)(expected)(input),
            ],
            true,
        );

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$s";

    const configure =
        (project: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => {
            const config: FeatureProgrammer.IConfig = {
                types: {
                    input: (type, name) =>
                        ts.factory.createTypeReferenceNode(
                            name ??
                                TypeFactory.getFullName(project.checker)(type),
                        ),
                    output: () => TypeFactory.keyword("string"),
                },
                prefix: PREFIX,
                trace: false,
                path: false,
                initializer,
                decoder: () => decode(project)(config)(importer),
                objector: {
                    checker: () => (input, meta, explore) =>
                        IsProgrammer.decode(project)(importer)(
                            input,
                            meta,
                            explore,
                        ),
                    decoder: () => decode_object(importer),
                    joiner: StringifyJoiner.object(importer),
                    unionizer: decode_union_object(
                        IsProgrammer.decode_object(importer),
                    )(decode_object(importer))((exp) => exp)(
                        (value, expected) =>
                            create_throw_error(importer)(expected)(value),
                    ),
                    failure: (input, expected) =>
                        create_throw_error(importer)(expected)(input),
                },
                generator: {
                    arrays: () => write_array_functions(config)(importer),
                    tuples: () =>
                        write_tuple_functions(project)(config)(importer),
                },
            };
            return config;
        };

    const initializer: FeatureProgrammer.IConfig["initializer"] =
        ({ checker }) =>
        (importer) =>
        (type) =>
            JsonMetadataFactory.analyze(`typia.json.${importer.method}`)(
                checker,
            )(type);

    const create_throw_error =
        (importer: FunctionImporter) =>
        (expected: string) =>
        (value: ts.Expression) =>
            ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                    importer.use("throws"),
                    [],
                    [
                        ts.factory.createObjectLiteralExpression(
                            [
                                ts.factory.createPropertyAssignment(
                                    "expected",
                                    ts.factory.createStringLiteral(expected),
                                ),
                                ts.factory.createPropertyAssignment(
                                    "value",
                                    value,
                                ),
                            ],
                            true,
                        ),
                    ],
                ),
            );
}

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
