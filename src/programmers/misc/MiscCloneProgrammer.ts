import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { CloneJoiner } from "../helpers/CloneJoiner";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace MiscCloneProgrammer {
    export const write =
        (project: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter(
                modulo.getText(),
            );
            return FeatureProgrammer.write(project)({
                ...configure(project)(importer),
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
            if (
                meta.any ||
                meta.arrays.some((a) => a.type.value.any) ||
                meta.tuples.some((t) => t.type.elements.every((e) => e.any))
            )
                return ts.factory.createCallExpression(
                    importer.use("any"),
                    undefined,
                    [input],
                );

            interface IUnion {
                type: string;
                is: () => ts.Expression;
                value: () => ts.Expression;
            }
            const unions: IUnion[] = [];

            //----
            // LIST UP UNION TYPES
            //----
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
            if (meta.arrays.length)
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value: () =>
                        explore_arrays(project)(config)(importer)(
                            input,
                            meta.arrays,
                            {
                                ...explore,
                                from: "array",
                            },
                        ),
                });

            // NATIVE TYPES
            if (meta.sets.length)
                unions.push({
                    type: "set",
                    is: () => ExpressionFactory.isInstanceOf("Set")(input),
                    value: () =>
                        explore_sets(project)(config)(importer)(
                            input,
                            meta.sets,
                            { ...explore, from: "array" },
                        ),
                });
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: () =>
                        explore_maps(project)(config)(importer)(
                            input,
                            meta.maps,
                            {
                                ...explore,
                                from: "array",
                            },
                        ),
                });
            for (const native of meta.natives)
                unions.push({
                    type: "native",
                    is: () => ExpressionFactory.isInstanceOf(native)(input),
                    value: () =>
                        native === "Boolean" ||
                        native === "Number" ||
                        native === "String"
                            ? ts.factory.createCallExpression(
                                  IdentifierFactory.access(input)("valueOf"),
                                  undefined,
                                  undefined,
                              )
                            : decode_native(native)(input),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject({
                            checkNull: true,
                            checkArray: false,
                        })(input),
                    value: () =>
                        explore_objects(config)(importer)(input, meta, {
                            ...explore,
                            from: "object",
                        }),
                });

            // COMPOSITION
            let last: ts.Expression = input;
            for (const u of unions.reverse())
                last = ts.factory.createConditionalExpression(
                    u.is(),
                    undefined,
                    u.value(),
                    undefined,
                    last,
                );
            return ts.factory.createAsExpression(
                last,
                TypeFactory.keyword("any"),
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
            FeatureProgrammer.decode_array(config)(importer)(CloneJoiner.array)(
                input,
                array,
                explore,
            );

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
                .filter((m) => m.rest === null)
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

                const last: Metadata = tuple.elements.at(-1)!;
                const rest: Metadata | null = last.rest;
                if (rest === null) return null;

                return decode(project)(config)(importer)(
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
            })();
            return CloneJoiner.tuple(children, rest);
        };

    /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
    const decode_native = (type: string) => (input: ts.Expression) =>
        type === "Date" ||
        type === "Uint8Array" ||
        type === "Uint8ClampedArray" ||
        type === "Uint16Array" ||
        type === "Uint32Array" ||
        type === "BigUint64Array" ||
        type === "Int8Array" ||
        type === "Int16Array" ||
        type === "Int32Array" ||
        type === "BigInt64Array" ||
        type === "Float32Array" ||
        type === "Float64Array"
            ? decode_native_copyable(type)(input)
            : type === "ArrayBuffer" || type === "SharedArrayBuffer"
            ? decode_native_buffer(type)(input)
            : type === "DataView"
            ? decode_native_data_view(input)
            : ts.factory.createCallExpression(
                  ts.factory.createIdentifier(type),
                  undefined,
                  [],
              );

    const decode_native_copyable = (type: string) => (input: ts.Expression) =>
        ts.factory.createNewExpression(
            ts.factory.createIdentifier(type),
            undefined,
            [input],
        );

    const decode_native_buffer =
        (type: "ArrayBuffer" | "SharedArrayBuffer") => (input: ts.Expression) =>
            ExpressionFactory.selfCall(
                ts.factory.createBlock(
                    [
                        StatementFactory.constant(
                            "buffer",
                            ts.factory.createNewExpression(
                                ts.factory.createIdentifier(type),
                                undefined,
                                [IdentifierFactory.access(input)("byteLength")],
                            ),
                        ),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(
                                    ts.factory.createNewExpression(
                                        ts.factory.createIdentifier(
                                            "Uint8Array",
                                        ),
                                        undefined,
                                        [ts.factory.createIdentifier("buffer")],
                                    ),
                                )("set"),
                                undefined,
                                [
                                    ts.factory.createNewExpression(
                                        ts.factory.createIdentifier(
                                            "Uint8Array",
                                        ),
                                        undefined,
                                        [input],
                                    ),
                                ],
                            ),
                        ),
                        ts.factory.createReturnStatement(
                            ts.factory.createIdentifier("buffer"),
                        ),
                    ],
                    true,
                ),
            );

    const decode_native_data_view = (input: ts.Expression) =>
        ts.factory.createNewExpression(
            ts.factory.createIdentifier("DataView"),
            undefined,
            [IdentifierFactory.access(input)("buffer")],
        );

    /* -----------------------------------------------------------
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
    const explore_sets =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            sets: Metadata[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression =>
            ts.factory.createCallExpression(
                UnionExplorer.set({
                    checker: IsProgrammer.decode(project)(importer),
                    decoder: (input, array, explore) =>
                        ts.factory.createNewExpression(
                            ts.factory.createIdentifier("Set"),
                            [TypeFactory.keyword("any")],
                            [
                                decode_array(config)(importer)(
                                    input,
                                    array,
                                    explore,
                                ),
                            ],
                        ),
                    empty: ts.factory.createNewExpression(
                        ts.factory.createIdentifier("Set"),
                        [TypeFactory.keyword("any")],
                        [],
                    ),
                    success: ts.factory.createTrue(),
                    failure: (input, expected) =>
                        create_throw_error(importer)(expected)(input),
                })([])(input, sets, explore),
                undefined,
                undefined,
            );

    const explore_maps =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            maps: Metadata.Entry[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression =>
            ts.factory.createCallExpression(
                UnionExplorer.map({
                    checker: (top, entry, explore) => {
                        const func = IsProgrammer.decode(project)(importer);
                        return ts.factory.createLogicalAnd(
                            func(
                                ts.factory.createElementAccessExpression(
                                    top,
                                    0,
                                ),
                                entry[0],
                                {
                                    ...explore,
                                    postfix: `${explore.postfix}[0]`,
                                },
                            ),
                            func(
                                ts.factory.createElementAccessExpression(
                                    top,
                                    1,
                                ),
                                entry[1],
                                {
                                    ...explore,
                                    postfix: `${explore.postfix}[1]`,
                                },
                            ),
                        );
                    },
                    decoder: (input, array, explore) =>
                        ts.factory.createNewExpression(
                            ts.factory.createIdentifier("Map"),
                            [
                                TypeFactory.keyword("any"),
                                TypeFactory.keyword("any"),
                            ],
                            [
                                decode_array(config)(importer)(
                                    input,
                                    array,
                                    explore,
                                ),
                            ],
                        ),
                    empty: ts.factory.createNewExpression(
                        ts.factory.createIdentifier("Map"),
                        [
                            TypeFactory.keyword("any"),
                            TypeFactory.keyword("any"),
                        ],
                        [],
                    ),
                    success: ts.factory.createTrue(),
                    failure: (input, expected) =>
                        create_throw_error(importer)(expected)(input),
                })([])(input, maps, explore),
                undefined,
                undefined,
            );

    const explore_objects =
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (meta.objects.length === 1)
                return decode_object(importer)(
                    input,
                    meta.objects[0]!,
                    explore,
                );

            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    importer.useLocal(`${PREFIX}u${meta.union_index!}`),
                ),
                undefined,
                FeatureProgrammer.argumentsArray(config)(explore)(input),
            );
        };

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
                    empty: ts.factory.createIdentifier("[]"),
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
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$c";

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
                    output: (type, name) =>
                        ts.factory.createTypeReferenceNode(
                            `typia.Resolved<${
                                name ??
                                TypeFactory.getFullName(project.checker)(type)
                            }>`,
                        ),
                },
                prefix: PREFIX,
                trace: false,
                path: false,
                initializer,
                decoder: () => decode(project)(config)(importer),
                objector: {
                    checker: () => IsProgrammer.decode(project)(importer),
                    decoder: () => decode_object(importer),
                    joiner: CloneJoiner.object,
                    unionizer: decode_union_object(
                        IsProgrammer.decode_object(importer),
                    )(decode_object(importer))((exp) => exp)(
                        (input, expected) =>
                            create_throw_error(importer)(expected)(input),
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
        (type) => {
            const collection = new MetadataCollection();
            const result = MetadataFactory.analyze(checker)({
                escape: false,
                constant: true,
                absorb: true,
                validate: (meta) => {
                    const output: string[] = [];
                    if (meta.natives.some((n) => n === "WeakSet"))
                        output.push("unable to clone WeakSet");
                    else if (meta.natives.some((n) => n === "WeakMap"))
                        output.push("unable to clone WeakMap");
                    return output;
                },
            })(collection)(type);
            if (result.success === false)
                throw TransformerError.from(`typia.misc.${importer.method}`)(
                    result.errors,
                );
            return [collection, result.data];
        };

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
