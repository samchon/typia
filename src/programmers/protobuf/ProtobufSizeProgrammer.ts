import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { $strlen } from "../../functional/$strlen";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { IProject } from "../../transformers/IProject";

import { Atomic } from "../../typings/Atomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ProtobufUtil } from "../helpers/ProtobufUtil";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { check_native } from "../internal/check_native";
import { decode_union_object } from "../internal/decode_union_object";

export namespace ProtobufSizeProgrammer {
    export const write =
        (project: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter();
            const copnfig: FeatureProgrammer.IConfig = configure(
                modulo.getText(),
            )(project)(importer);
            return FeatureProgrammer.write(project)({
                ...copnfig,
                addition: (collection) => [
                    ...IsProgrammer.write_function_statements(project)(
                        importer,
                    )(collection),
                    ...importer.declare(modulo),
                ],
            })(importer);
        };

    const write_object_function_body =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (obj: MetadataObject): ts.ConciseBody => {
            const explore: FeatureProgrammer.IExplore = {
                tracable: false,
                source: "function",
                from: "object",
                postfix: "",
            };
            if (obj.properties.some((p) => !p.key.isSoleLiteral())) {
                const p = obj.properties[0]!;
                return write_map_function_body(project)(config)(importer)(
                    ts.factory.createIdentifier("input"),
                    p,
                    explore,
                    p.tags,
                );
            }

            const zero = ts.factory.createNumericLiteral(0);
            const compute = (p: MetadataProperty) => {
                const input = IdentifierFactory.access(
                    ts.factory.createIdentifier("input"),
                )(p.key.getSoleLiteral()!);
                const output = ts.factory.createAdd(
                    ts.factory.createNumericLiteral(4),
                    decode(project)(config)(importer)(
                        input,
                        p.value,
                        explore,
                        p.tags,
                    ),
                );
                if (p.value.isRequired() === true && p.value.nullable === false)
                    return output;
                else if (
                    p.value.isRequired() === true &&
                    p.value.nullable === true
                )
                    return ts.factory.createConditionalExpression(
                        ts.factory.createStrictInequality(
                            ts.factory.createNull(),
                            input,
                        ),
                        undefined,
                        output,
                        undefined,
                        zero,
                    );
                else if (
                    p.value.isRequired() === false &&
                    p.value.nullable === false
                )
                    return ts.factory.createConditionalExpression(
                        ts.factory.createStrictInequality(
                            ts.factory.createIdentifier("undefined"),
                            input,
                        ),
                        undefined,
                        output,
                        undefined,
                        zero,
                    );
                else
                    return ts.factory.createConditionalExpression(
                        ts.factory.createLogicalAnd(
                            ts.factory.createStrictInequality(
                                ts.factory.createIdentifier("undefined"),
                                input,
                            ),
                            ts.factory.createStrictInequality(
                                ts.factory.createNull(),
                                input,
                            ),
                        ),
                        undefined,
                        output,
                        undefined,
                        zero,
                    );
            };

            return obj.properties
                .map((p) => compute(p))
                .reduce((a, b) => ts.factory.createAdd(a, b));
        };

    const write_map_function_body =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            entry: Metadata.Entry,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const key = ts.factory.createIdentifier("key");
            const value = ts.factory.createIdentifier("value");
            const tuple = ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        ts.factory.createArrayBindingPattern([
                            ts.factory.createBindingElement(
                                undefined,
                                undefined,
                                key,
                            ),
                            ts.factory.createBindingElement(
                                undefined,
                                undefined,
                                value,
                            ),
                        ]),
                    ),
                ],
                ts.NodeFlags.Const,
            );
            const block = ts.factory.createBlock(
                [
                    decode_atomic(importer)(key, "string", []),
                    decode(project)(config)(importer)(
                        value,
                        entry.value,
                        explore,
                        tags,
                    ),
                ].map((expr) =>
                    ts.factory.createExpressionStatement(
                        ts.factory.createBinaryExpression(
                            ts.factory.createIdentifier("size"),
                            ts.factory.createToken(
                                ts.SyntaxKind.PlusEqualsToken,
                            ),
                            expr,
                        ),
                    ),
                ),
                true,
            );

            return ts.factory.createBlock([
                StatementFactory.mut(
                    "size",
                    ts.factory.createNumericLiteral(0),
                ),
                ts.factory.createForOfStatement(undefined, tuple, input, block),
                ts.factory.createReturnStatement(
                    ts.factory.createIdentifier("size"),
                ),
            ]);
        };

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
            tags: IMetadataTag[],
        ): ts.Expression => {
            // STARTS FROM ATOMIC TYPES
            const unions: IUnion[] = ProtobufUtil.atomics(meta).map((type) => ({
                type,
                is: () =>
                    ts.factory.createStrictEquality(
                        ts.factory.createStringLiteral(type),
                        ts.factory.createTypeOfExpression(input),
                    ),
                value: () => decode_atomic(importer)(input, type, tags),
            }));

            // CONSIDER ARRAYS
            if (meta.arrays.length) {
                const value: () => ts.Expression =
                    meta.arrays.length === 1
                        ? () =>
                              decode_array(project)(config)(importer)(
                                  input,
                                  meta.arrays[0]!,
                                  explore,
                                  tags,
                              )
                        : () =>
                              explore_arrays(project)(config)(importer)(
                                  input,
                                  meta.arrays,
                                  explore,
                                  tags,
                              );
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value,
                });
            }

            // CONSIDER OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject({
                            checkNull: true,
                            checkArray: false,
                        })(input),
                    value: () =>
                        explore_objects(project)(config)(importer)(
                            input,
                            meta,
                            explore,
                        ),
                });

            // CONSIDER MAPS
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: () =>
                        decode_map(project)(config)(importer)(
                            input,
                            meta.maps[0]!,
                            explore,
                            tags,
                        ),
                });

            // CONSIDER BINARY
            if (meta.natives.length && meta.natives[0] === "Uint8Array")
                unions.push({
                    type: "native",
                    is: () => check_native("Uint8Array")(input),
                    value: () => decode_binary(input),
                });

            return unions.length === 1
                ? unions[0]!.value()
                : ts.factory.createCallExpression(
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

    const decode_atomic =
        (importer: FunctionImporter) =>
        (input: ts.Expression, type: Atomic.Literal, tags: IMetadataTag[]) =>
            type === "string"
                ? ts.factory.createAdd(
                      ts.factory.createNumericLiteral(4),
                      ts.factory.createCallExpression(
                          importer.use("strlen"),
                          undefined,
                          [input],
                      ),
                  )
                : ts.factory.createNumericLiteral(
                      computeAtomicLength(type)(tags)!,
                  );

    const decode_array =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            array: MetadataArray,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            const header = (expr: ts.Expression) =>
                ts.factory.createAdd(ts.factory.createNumericLiteral(4), expr);
            if (array.value.isBinaryUnion() === false) {
                const length: number | null = computeFixedLength(array.value)(
                    tags,
                );
                if (length !== null)
                    return header(
                        ts.factory.createMultiply(
                            IdentifierFactory.access(input)("length"),
                            ts.factory.createNumericLiteral(length),
                        ),
                    );
            }
            return header(
                ts.factory.createCallExpression(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(input)("map"),
                        undefined,
                        [
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [IdentifierFactory.parameter("elem")],
                                undefined,
                                undefined,
                                decode(project)(config)(importer)(
                                    ts.factory.createIdentifier("elem"),
                                    array.value,
                                    explore,
                                    tags,
                                ),
                            ),
                        ],
                    ),
                    undefined,
                    [
                        ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [
                                IdentifierFactory.parameter("a"),
                                IdentifierFactory.parameter("b"),
                            ],
                            undefined,
                            undefined,
                            ts.factory.createAdd(
                                ts.factory.createIdentifier("a"),
                                ts.factory.createIdentifier("b"),
                            ),
                        ),
                        ts.factory.createNumericLiteral(0),
                    ],
                ),
            );
        };

    const decode_object = (importer: FunctionImporter) =>
        FeatureProgrammer.decode_object({
            trace: false,
            path: false,
            prefix: PREFIX,
        })(importer);

    const decode_binary = (input: ts.Expression): ts.Expression =>
        ts.factory.createCallExpression(
            IdentifierFactory.access(input)("writeBytes"),
            undefined,
            [input],
        );

    const decode_map =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            entry: Metadata.Entry,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            return ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    TypeFactory.keyword("any"),
                    undefined,
                    write_map_function_body(project)(config)(importer)(
                        input,
                        entry,
                        explore,
                        tags,
                    ),
                ),
                undefined,
                undefined,
            );
        };

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects =
        (_project: IProject) =>
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
                          importer.useLocal(
                              `${config.prefix}u${meta.union_index!}`,
                          ),
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
            tags: IMetadataTag[],
        ): ts.Expression =>
            explore_array_like_union_types(config)(importer)(
                UnionExplorer.array({
                    checker: IsProgrammer.decode(project)(importer),
                    decoder: decode_array(project)(config)(importer),
                    empty: ts.factory.createStringLiteral("[]"),
                    success: ts.factory.createTrue(),
                    failure: (input, expected) =>
                        create_throw_error(importer)(expected)(input),
                }),
            )(input, elements, explore, tags);

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
            tags: IMetadataTag[],
        ): ts.Expression => {
            const arrow =
                (parameters: ts.ParameterDeclaration[]) =>
                (explore: FeatureProgrammer.IExplore) =>
                (input: ts.Expression): ts.ArrowFunction =>
                    factory(parameters)(input, elements, explore, tags, []);
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
    const PREFIX = "$ps";

    const configure =
        (method: string) =>
        (project: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => {
            const config: FeatureProgrammer.IConfig<ts.Expression> = {
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
                initializer: initializer(method),
                decoder: () => decode(project)(config)(importer),
                objector: {
                    checker: () => IsProgrammer.decode(project)(importer),
                    decoder: () => decode_object(importer),
                    joiner: (_input, _entries, obj) =>
                        write_object_function_body(project)(config)(importer)(
                            obj,
                        ),
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
                    arrays: () => () => [],
                    tuples: () => () => [],
                },
            };
            return config;
        };

    const initializer =
        (method: string): FeatureProgrammer.IConfig["initializer"] =>
        ({ checker }) =>
        (type) => {
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata =
                ProtobufFactory.metadata(method)(checker)(collection)(type);
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

const computeFixedLength =
    (meta: Metadata) =>
    (tags: IMetadataTag[]): number | null => {
        if (meta.fixed_ !== undefined) return meta.fixed_;
        return (meta.fixed_ = (() => {
            if (
                meta.isRequired() === false ||
                meta.nullable ||
                meta.natives.length ||
                meta.maps.length ||
                meta.isBinaryUnion()
            )
                return null;
            else if (meta.arrays.length)
                return computeFixedLength(meta.arrays[0]!.value)(tags);

            const atomics = new Set([
                ...meta.atomics,
                ...meta.constants.map((c) => c.type),
                ...meta.templates.map(() => "string" as const),
            ]);
            if (atomics.size)
                return computeAtomicLength(Array.from(atomics)[0]!)(tags);
            else if (meta.objects.length) {
                const obj: MetadataObject = meta.objects[0]!;
                if (obj.properties.some((p) => !p.key.isSoleLiteral()))
                    return null;
                else if (
                    obj.properties.some(
                        (p) => computeFixedLength(p.value)(p.tags) === null,
                    )
                )
                    return null;
                return obj.properties
                    .map(
                        (p) =>
                            $strlen(p.key.getSoleLiteral()!) +
                            computeFixedLength(p.value)(p.tags)!,
                    )
                    .reduce((a, b) => a + b, 0);
            }
            return null;
        })());
    };

const computeAtomicLength =
    (type: Atomic.Literal) =>
    (tags: IMetadataTag[]): number | null => {
        if (type === "string") return null;
        else if (type === "boolean") return 1;
        else if (type === "bigint") return 8;

        const shorter = tags.find((tag) => tag.kind === "type") as
            | IMetadataTag.INumberType
            | undefined;
        return shorter &&
            (shorter.value === "int" ||
                shorter.value === "uint" ||
                shorter.value === "int32" ||
                shorter.value === "uint32" ||
                shorter.value === "float")
            ? 4
            : 8;
    };

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
