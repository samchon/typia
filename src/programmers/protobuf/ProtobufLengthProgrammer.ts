import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";
import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { IProject } from "../../transformers/IProject";

import { Atomic } from "../../typings/Atomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { UnionExplorer } from "../helpers/UnionExplorer";

export namespace ProtobufLengthProgrammer {
    export const write =
        (modulo: ts.LeftHandSideExpression) =>
        (collection: MetadataCollection) =>
        (metadata: Metadata): ts.Expression => {
            const importer: FunctionImporter = new FunctionImporter();
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
            const unions: IUnion[] = [
                ...new Set([
                    ...meta.atomics,
                    ...meta.constants.map((c) => c.type),
                ]),
            ].map((type) => ({
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
                        : explore_arrays(project)(config)(importer)(
                              input,
                              meta.arrays,
                              explore,
                              tags,
                          );
            }

            // CONSIDER OBJECTS

            // CONSIDER MAPS

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
                ? ts.factory.createCallExpression(
                      importer.use("strlen"),
                      undefined,
                      [input],
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
        ) => {
            if (array.value.isBinaryUnion() === false) {
                const length: number | null = computeFixedLength(array.value)(
                    tags,
                );
                if (length !== null)
                    return ts.factory.createMultiply(
                        IdentifierFactory.access(input)("length"),
                        ts.factory.createNumericLiteral(length),
                    );
            }
            return ts.factory.createCallExpression(
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
            );
        };

    const decode_object =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (input: ts.Expression, object: MetadataObject): ts.Expression => {};

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
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

    const PREFIX = "$c";

    const configure =
        (method: string) =>
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
                initializer: initializer(method),
                decoder: () => decode(project)(config)(importer),
                objector: {
                    checker: () => IsProgrammer.decode(project)(importer),
                    decoder: () => decode_object(project)(config)(importer),
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

    const initializer =
        (method: string): FeatureProgrammer.IConfig["initializer"] =>
        ({ checker }) =>
        (type) => {
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata =
                ProtobufFactory.metadata(method)(checker)(collection)(type);
            return [collection, meta];
        };
}

const computeFixedLength =
    (meta: Metadata) =>
    (tags: IMetadataTag[]): number | null => {};

const computeAtomicLength =
    (type: Atomic.Literal) =>
    (tags: IMetadataTag[]): number | null => {
        if (type === "string") return null;
        else if (type === "boolean") 1;
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
