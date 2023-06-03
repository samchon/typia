import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataArray } from "../metadata/MetadataArray";
import { MetadataTuple } from "../metadata/MetadataTuple";

import { IProject } from "../transformers/IProject";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { CloneJoiner } from "./helpers/CloneJoiner";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { decode_union_object } from "./internal/decode_union_object";
import { wrap_metadata_rest_tuple } from "./internal/wrap_metadata_rest_tuple";

export namespace CloneProgrammer {
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(type, name);

    export const write =
        (project: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter();
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
                .map((array, i) =>
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
                                array,
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
                meta.arrays.some((a) => a.value.any) ||
                meta.tuples.some((t) => t.elements.every((e) => e.any))
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
            // toJSON() METHOD
            if (meta.resolved !== null)
                unions.push({
                    type: "resolved",
                    is: () => IsProgrammer.decode_to_json(true)(input),
                    value: () =>
                        decode_to_json(project)(config)(importer)(
                            input,
                            meta.resolved!,
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
                            [],
                            [],
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
                    value: () => ts.factory.createIdentifier("{}"),
                });
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: () => ts.factory.createIdentifier("{}"),
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
                            : ts.factory.createIdentifier("{}"),
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
            array.recursive
                ? ts.factory.createCallExpression(
                      ts.factory.createIdentifier(
                          importer.useLocal(`${config.prefix}a${array.index}`),
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
                [],
                [],
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
            tuple.recursive
                ? ts.factory.createCallExpression(
                      ts.factory.createIdentifier(
                          importer.useLocal(`${config.prefix}t${tuple.index}`),
                      ),
                      undefined,
                      FeatureProgrammer.argumentsArray(config)({
                          ...explore,
                          source: "function",
                      })(input),
                  )
                : decode_tuple_inline(project)(config)(importer)(
                      input,
                      tuple,
                      explore,
                  );

    const decode_tuple_inline =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: MetadataTuple,
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
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
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
                tags: IMetadataTag[],
                jsDocTags: IJsDocTagInfo[],
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
                    factory(parameters)(input, elements, explore, [], []);
            if (elements.every((e) => e.recursive === false))
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
                        elements.map((e) => e.name).join(" | "),
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
                            `typia.Primitive<${
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
        (type) => {
            const collection = new MetadataCollection();
            const meta = MetadataFactory.analyze(checker)({
                resolve: true,
                constant: true,
                absorb: true,
            })(collection)(type);
            return [collection, meta];
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
