import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

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
import { ProtobufWire } from "../helpers/ProtobufWire";
import { UnionExplorer } from "../helpers/UnionExplorer";

export namespace ProtobufEncodeProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
            const importer = new FunctionImporter();
            const collection = new MetadataCollection();
            const meta: Metadata = ProtobufFactory.metadata(modulo.getText())(
                project.checker,
            )(collection)(type);

            // @todo
            meta;
            write_object_function_body;
            write_map_function_body;
            explore_objects;
            explore_arrays;

            const block: ts.Statement[] = [
                StatementFactory.constant(
                    "writer",
                    ts.factory.createNewExpression(
                        importer.use("Writer"),
                        undefined,
                        undefined,
                    ),
                ),
                ts.factory.createReturnStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())("finish"),
                        undefined,
                        undefined,
                    ),
                ),
            ];

            // @todo
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        ts.factory.createTypeReferenceNode(
                            name ??
                                TypeFactory.getFullName(project.checker)(type),
                        ),
                    ),
                ],
                ts.factory.createTypeReferenceNode("Uint8Array"),
                undefined,
                ts.factory.createBlock(
                    [...importer.declare(modulo), ...block],
                    true,
                ),
            );
        };

    const write_object_function_body =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const top: MetadataProperty = obj.properties[0]!;
            if (top.key.isSoleLiteral() === false)
                return write_map_function_body(project)(config)(importer)(
                    input,
                    top,
                    explore,
                    tags,
                );
            let index: number = 1;
            return ts.factory.createBlock(
                obj.properties
                    .map((property) => {
                        const statements: ts.NodeArray<ts.Statement> = decode(
                            project,
                        )(config)(importer)(index)(
                            input,
                            property.value,
                            explore,
                            property.tags,
                        ).statements;
                        index += property.value.binarySize();
                        return statements;
                    })
                    .flat(),
                true,
            );
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
            project;
            config;
            importer;
            input;
            entry;
            explore;
            tags;
            return ts.factory.createBlock([], true);
        };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (index: number | null) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            // STARTS FROM ATOMIC TYPES
            const unions: IUnion[] = ProtobufUtil.atomics(meta).map((type) => ({
                type,
                wire: () => null!,
                is: () =>
                    ts.factory.createStrictEquality(
                        ts.factory.createStringLiteral(type),
                        ts.factory.createTypeOfExpression(input),
                    ),
                value: () => decode_atomic(input, type, tags),
            }));

            project;
            config;
            importer;
            index;
            explore;
            unions;

            // CONSIDER ARRAYS

            // CONSIDER OBJECTS

            // CONSIDER MAPS

            return ts.factory.createBlock([]);
        };

    const decode_object =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            object: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ): ts.Block => {
            project;
            config;
            importer;
            input;
            object;
            explore;

            return ts.factory.createBlock(
                [].map((exp) => ts.factory.createExpressionStatement(exp)),
                true,
            );
        };

    const decode_array =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (index: number) =>
        (
            input: ts.Expression,
            array: MetadataArray,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block =>
            ts.factory.createBlock(
                [
                    ...(index !== null
                        ? [
                              ts.factory.createExpressionStatement(
                                  decode_tag(ProtobufWire.LEN)(index),
                              ),
                          ]
                        : []),
                    ts.factory.createForOfStatement(
                        undefined,
                        ts.factory.createVariableDeclarationList(
                            [ts.factory.createVariableDeclaration("elem")],
                            undefined,
                        ),
                        input,
                        decode(project)(config)(importer)(index)(
                            ts.factory.createIdentifier("elem"),
                            array.value,
                            explore,
                            tags,
                        ),
                    ),
                ],
                true,
            );

    const decode_atomic = (
        input: ts.Expression,
        atomic: Atomic.Literal,
        tags: IMetadataTag[],
    ): ts.Block => {
        if (atomic === "string") return decode_bytes("string")(input);

        const out = (method: string): ts.Block =>
            ts.factory.createBlock(
                [
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())(method),
                        undefined,
                        [input],
                    ),
                ].map((exp) => ts.factory.createExpressionStatement(exp)),
                true,
            );
        if (atomic === "boolean") return out("bool");

        const type: IMetadataTag.INumberType | undefined = tags.find(
            (tag) => tag.kind === "type",
        ) as IMetadataTag.INumberType | undefined;
        if (atomic === "bigint")
            return out(type?.value === "uint64" ? "uint64" : "int64");
        else if (type === undefined || type?.value === "double")
            return out("double");
        else if (type.value === "float") return out("float");
        return out(
            type.value === "uint32" || type.value === "uint"
                ? "uint32"
                : type.value === "int32" || type.value === "int"
                ? "int32"
                : type.value === "int64"
                ? "int64"
                : "uint64",
        );
    };

    const decode_bytes =
        (method: "bytes" | "string") =>
        (input: ts.Expression): ts.Block =>
            ts.factory.createBlock(
                [
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())("uint32"),
                        undefined,
                        [IdentifierFactory.access(input)("length")],
                    ),
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())(method),
                        undefined,
                        [input],
                    ),
                ].map((expr) => ts.factory.createExpressionStatement(expr)),
                true,
            );

    const decode_tag =
        (wire: ProtobufWire) =>
        (index: number): ts.CallExpression =>
            ts.factory.createCallExpression(
                IdentifierFactory.access(WRITER())("uint32"),
                undefined,
                [ts.factory.createNumericLiteral((index << 3) | wire)],
            );

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects =
        (project: IProject) =>
        (config: FeatureProgrammer.IConfig) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ) =>
            meta.objects.length === 1
                ? decode_object(project)(config)(importer)(
                      input,
                      meta.objects[0]!,
                      explore,
                  )
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
        (index: number) =>
        (
            input: ts.Expression,
            elements: MetadataArray[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression =>
            explore_array_like_union_types(config)(importer)(
                UnionExplorer.array({
                    checker: IsProgrammer.decode(project)(importer),
                    decoder: (input, target, explore, tags) =>
                        ts.factory.createCallExpression(
                            ts.factory.createArrowFunction(
                                undefined,
                                undefined,
                                [],
                                undefined,
                                undefined,
                                decode_array(project)(config)(importer)(index)(
                                    input,
                                    target,
                                    explore,
                                    tags,
                                ),
                            ),
                            undefined,
                            undefined,
                        ),
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
    // const PREFIX = "$pe";

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

const WRITER = () => ts.factory.createIdentifier("writer");

interface IUnion {
    type: string;
    wire: () => ProtobufWire;
    is: () => ts.Expression;
    value: (index: number | null) => ts.Block;
}
