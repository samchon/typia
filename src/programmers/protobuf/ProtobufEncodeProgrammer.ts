import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IMetadataTag } from "../../schemas/metadata/IMetadataTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProject } from "../../transformers/IProject";

import { Atomic } from "../../typings/Atomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ProtobufUtil } from "../helpers/ProtobufUtil";
import { ProtobufWire } from "../helpers/ProtobufWire";
import { UnionPredicator } from "../helpers/UnionPredicator";
import { decode_union_object } from "../internal/decode_union_object";

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

            const callEncoder =
                (writer: string) => (factory: ts.NewExpression) =>
                    StatementFactory.constant(
                        writer,
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("encoder"),
                            undefined,
                            [factory],
                        ),
                    );

            const block: ts.Statement[] = [
                StatementFactory.constant(
                    "encoder",
                    write_encoder(project)(importer)(collection)(meta),
                ),
                callEncoder("sizer")(
                    ts.factory.createNewExpression(
                        importer.use("Sizer"),
                        undefined,
                        [],
                    ),
                ),
                callEncoder("writer")(
                    ts.factory.createNewExpression(
                        importer.use("Writer"),
                        undefined,
                        [ts.factory.createIdentifier("sizer")],
                    ),
                ),
                ts.factory.createReturnStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())("buffer"),
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
                    [...importer.declare(modulo, false), ...block],
                    true,
                ),
            );
        };

    const write_encoder =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (collection: MetadataCollection) =>
        (meta: Metadata): ts.ArrowFunction => {
            const functors = collection
                .objects()
                .filter((obj) => ProtobufUtil.isStaticObject(obj))
                .map((obj) =>
                    StatementFactory.constant(
                        `${PREFIX}o${obj.index}`,
                        write_object_function(project)(importer)(
                            ts.factory.createIdentifier("input"),
                            obj,
                            {
                                source: "function",
                                from: "object",
                                tracable: false,
                                postfix: "",
                            },
                        ),
                    ),
                );
            const main = decode(project)(importer)(null)(
                ts.factory.createIdentifier("input"),
                meta,
                {
                    source: "top",
                    from: "top",
                    tracable: false,
                    postfix: "",
                },
                [],
            );
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("writer")],
                TypeFactory.keyword("any"),
                undefined,
                ts.factory.createBlock(
                    [
                        ...importer.declareUnions(),
                        ...functors,
                        ...IsProgrammer.write_function_statements(project)(
                            importer,
                        )(collection),
                        ...main.statements,
                        ts.factory.createReturnStatement(
                            ts.factory.createIdentifier("writer"),
                        ),
                    ],
                    true,
                ),
            );
        };

    const write_object_function =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            obj: MetadataObject,
            explore: FeatureProgrammer.IExplore,
        ): ts.ArrowFunction => {
            let index: number = 1;
            const body: ts.Statement[] = obj.properties
                .map((p) => {
                    const block = decode(project)(importer)(index)(
                        IdentifierFactory.access(input)(
                            p.key.getSoleLiteral()!,
                        ),
                        p.value,
                        explore,
                        p.tags,
                    );
                    index += p.value.binarySize();
                    return [
                        ts.factory.createExpressionStatement(
                            ts.factory.createIdentifier(
                                `// property "${p.key.getSoleLiteral()!}"`,
                            ),
                        ),
                        ...block.statements,
                    ];
                })
                .flat();

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                TypeFactory.keyword("any"),
                undefined,
                ts.factory.createBlock(body, true),
            );
        };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number | null) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const wrapper: (block: ts.Block) => ts.Block =
                meta.isRequired() && meta.nullable === false
                    ? (block) => block
                    : meta.isRequired() === false && meta.nullable === false
                    ? (block) =>
                          ts.factory.createBlock(
                              [
                                  ts.factory.createIfStatement(
                                      ts.factory.createLogicalAnd(
                                          ts.factory.createInequality(
                                              ts.factory.createIdentifier(
                                                  "undefined",
                                              ),
                                              input,
                                          ),
                                          ts.factory.createInequality(
                                              ts.factory.createNull(),
                                              input,
                                          ),
                                      ),
                                      block,
                                  ),
                              ],
                              true,
                          )
                    : meta.isRequired() === false
                    ? (block) =>
                          ts.factory.createBlock(
                              [
                                  ts.factory.createIfStatement(
                                      ts.factory.createInequality(
                                          ts.factory.createIdentifier(
                                              "undefined",
                                          ),
                                          input,
                                      ),
                                      block,
                                  ),
                              ],
                              true,
                          )
                    : (block) =>
                          ts.factory.createBlock(
                              [
                                  ts.factory.createIfStatement(
                                      ts.factory.createInequality(
                                          ts.factory.createNull(),
                                          input,
                                      ),
                                      block,
                                  ),
                              ],
                              true,
                          );

            // STARTS FROM ATOMIC TYPES
            const unions: IUnion[] = ProtobufUtil.getAtomics(meta).map(
                (type) => ({
                    type,
                    wire: () => null!,
                    is: () =>
                        ts.factory.createStrictEquality(
                            ts.factory.createStringLiteral(type),
                            ts.factory.createTypeOfExpression(input),
                        ),
                    value: (index) => decode_atomic(index!)(input, type, tags),
                }),
            );

            // CONSIDER BYTES
            if (meta.natives.length)
                unions.push({
                    type: "bytes",
                    is: () =>
                        ExpressionFactory.isInstanceOf("Uint8Array")(input),
                    value: (index) => decode_bytes("bytes")(index!)(input),
                });

            // CONSIDER ARRAYS
            if (meta.arrays.length)
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value: (index) =>
                        decode_array(project)(importer)(index!)(
                            input,
                            meta.arrays[0]!,
                            {
                                ...explore,
                                from: "array",
                            },
                            tags,
                        ),
                });

            // CONSIDER MAPS
            if (meta.maps.length)
                unions.push({
                    type: "map",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: (index) =>
                        decode_map(project)(importer)(index!)(
                            input,
                            meta.maps[0]!,
                            {
                                ...explore,
                                from: "array",
                            },
                            tags,
                        ),
                });

            // CONSIDER OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject({
                            checkNull: true,
                            checkArray: false,
                        })(input),
                    value: (index) =>
                        explore_objects(project)(importer)(0)(index)(
                            input,
                            meta.objects,
                            {
                                ...explore,
                                from: "object",
                            },
                            tags,
                        ),
                });

            // RETURNS
            if (unions.length === 1) return wrapper(unions[0]!.value(index));
            else
                return wrapper(
                    iterate(importer)(index)(unions)(meta.getName())(input),
                );
        };

    const iterate =
        (importer: FunctionImporter) =>
        (index: number | null) =>
        (unions: IUnion[]) =>
        (expected: string) =>
        (input: ts.Expression) =>
            ts.factory.createBlock(
                [
                    unions
                        .map((u, i) =>
                            ts.factory.createIfStatement(
                                u.is(),
                                u.value(index ? index + i : null),
                                i === unions.length - 1
                                    ? create_throw_error(importer)(expected)(
                                          input,
                                      )
                                    : undefined,
                            ),
                        )
                        .reverse()
                        .reduce((a, b) =>
                            ts.factory.createIfStatement(
                                b.expression,
                                b.thenStatement,
                                a,
                            ),
                        ),
                ],
                true,
            );

    const decode_map =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number) =>
        (
            input: ts.Expression,
            map: Metadata.Entry,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const each: ts.Statement[] = [
                ts.factory.createExpressionStatement(
                    decode_tag(ProtobufWire.LEN)(index),
                ),
                ts.factory.createExpressionStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())("fork"),
                        undefined,
                        undefined,
                    ),
                ),
                ...decode(project)(importer)(1)(
                    ts.factory.createIdentifier("key"),
                    map.key,
                    explore,
                    [],
                ).statements,
                ...decode(project)(importer)(2)(
                    ts.factory.createIdentifier("value"),
                    map.value,
                    explore,
                    tags,
                ).statements,
                ts.factory.createExpressionStatement(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(WRITER())("ldelim"),
                        undefined,
                        undefined,
                    ),
                ),
            ];
            return ts.factory.createBlock(
                [
                    ts.factory.createForOfStatement(
                        undefined,
                        StatementFactory.entry("key")("value"),
                        input,
                        ts.factory.createBlock(each),
                    ),
                ],
                true,
            );
        };

    const decode_object =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number | null) =>
        (
            input: ts.Expression,
            object: MetadataObject,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const top: MetadataProperty = object.properties[0]!;
            if (top.key.isSoleLiteral() === false)
                return decode_map(project)(importer)(index!)(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Object.entries"),
                        [],
                        [input],
                    ),
                    top,
                    explore,
                    tags,
                );
            return ts.factory.createBlock(
                [
                    ...(index !== null
                        ? [
                              decode_tag(ProtobufWire.LEN)(index),
                              ts.factory.createCallExpression(
                                  IdentifierFactory.access(WRITER())("fork"),
                                  undefined,
                                  undefined,
                              ),
                          ]
                        : []),
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier(
                            importer.useLocal(`${PREFIX}o${object.index}`),
                        ),
                        [],
                        [input],
                    ),
                    ...(index !== null
                        ? [
                              ts.factory.createCallExpression(
                                  IdentifierFactory.access(WRITER())("ldelim"),
                                  undefined,
                                  undefined,
                              ),
                          ]
                        : []),
                ].map((expr) => ts.factory.createExpressionStatement(expr)),
                true,
            );
        };

    const decode_array =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number) =>
        (
            input: ts.Expression,
            array: MetadataArray,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            const wire = get_standalone_wire(array.value, tags);
            const forLoop = (index: number | null) =>
                ts.factory.createForOfStatement(
                    undefined,
                    ts.factory.createVariableDeclarationList(
                        [ts.factory.createVariableDeclaration("elem")],
                        ts.NodeFlags.Const,
                    ),
                    input,
                    decode(project)(importer)(index)(
                        ts.factory.createIdentifier("elem"),
                        array.value,
                        explore,
                        tags,
                    ),
                );
            const length = (block: ts.Block) =>
                ts.factory.createBlock(
                    [
                        ts.factory.createIfStatement(
                            ts.factory.createStrictInequality(
                                ts.factory.createNumericLiteral(0),
                                IdentifierFactory.access(input)("length"),
                            ),
                            block,
                        ),
                    ],
                    true,
                );

            if (wire === ProtobufWire.LEN)
                return length(ts.factory.createBlock([forLoop(index)], true));
            return length(
                ts.factory.createBlock(
                    [
                        ts.factory.createExpressionStatement(
                            decode_tag(ProtobufWire.LEN)(index),
                        ),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(WRITER())("fork"),
                                undefined,
                                undefined,
                            ),
                        ),
                        forLoop(null),
                        ts.factory.createExpressionStatement(
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(WRITER())("ldelim"),
                                undefined,
                                undefined,
                            ),
                        ),
                    ],
                    true,
                ),
            );
        };

    const decode_atomic =
        (index: number | null) =>
        (
            input: ts.Expression,
            atomic: Atomic.Literal,
            tags: IMetadataTag[],
        ): ts.Block => {
            if (atomic === "string")
                return decode_bytes("string")(index!)(input);

            const out =
                (wire: ProtobufWire) =>
                (method: string): ts.Block =>
                    ts.factory.createBlock(
                        [
                            ...(index !== null
                                ? [decode_tag(wire)(index)]
                                : []),
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(WRITER())(method),
                                undefined,
                                [input],
                            ),
                        ].map((exp) =>
                            ts.factory.createExpressionStatement(exp),
                        ),
                        true,
                    );
            if (atomic === "boolean") return out(ProtobufWire.VARIANT)("bool");

            const type: IMetadataTag.INumberType | undefined = tags.find(
                (tag) => tag.kind === "type",
            ) as IMetadataTag.INumberType | undefined;
            if (atomic === "bigint")
                return out(ProtobufWire.VARIANT)(
                    type?.value === "uint64" ? "uint64" : "int64",
                );
            else if (type === undefined) return out(ProtobufWire.I64)("double");
            else if (type.value === "float")
                return out(ProtobufWire.I32)("float");
            return out(ProtobufWire.VARIANT)(
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
        (index: number) =>
        (input: ts.Expression): ts.Block =>
            ts.factory.createBlock(
                [
                    decode_tag(ProtobufWire.LEN)(index),
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

    const get_standalone_wire = (
        meta: Metadata,
        tags: IMetadataTag[],
    ): ProtobufWire => {
        if (
            meta.arrays.length ||
            meta.objects.length ||
            meta.maps.length ||
            meta.natives.length
        )
            return ProtobufWire.LEN;

        const v = ProtobufUtil.getAtomics(meta)[0]!;
        if (v === "string") return ProtobufWire.LEN;
        else if (v === "boolean" || v === "bigint") return ProtobufWire.VARIANT;

        const type: IMetadataTag.INumberType | undefined = tags.find(
            (t) => t.kind === "type",
        ) as IMetadataTag.INumberType | undefined;
        if (type === undefined) return ProtobufWire.I64;
        else if (type.value === "float") return ProtobufWire.I32;
        return ProtobufWire.VARIANT;
    };

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (level: number) =>
        (index: number | null) =>
        (
            input: ts.Expression,
            targets: MetadataObject[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Block => {
            if (targets.length === 1)
                return decode_object(project)(importer)(index)(
                    input,
                    targets[0]!,
                    explore,
                    tags,
                );

            const expected: string = `(${targets
                .map((t) => t.name)
                .join(" | ")})`;

            // POSSIBLE TO SPECIALIZE?
            const specList = UnionPredicator.object(targets);
            if (specList.length === 0) {
                const condition: ts.Expression = decode_union_object(
                    IsProgrammer.decode_object(importer),
                )((i, o, e) =>
                    ExpressionFactory.selfCall(
                        decode_object(project)(importer)(index)(i, o, e, tags),
                    ),
                )((expr) => expr)((value, expected) =>
                    create_throw_error(importer)(expected)(value),
                )(input, targets, explore);
                return StatementFactory.block(condition);
            }
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const condition: ts.IfStatement = specList
                .filter((spec) => spec.property.key.getSoleLiteral() !== null)
                .map((spec, i, array) => {
                    const key: string = spec.property.key.getSoleLiteral()!;
                    const accessor: ts.Expression =
                        IdentifierFactory.access(input)(key);
                    const pred: ts.Expression = spec.neighbour
                        ? IsProgrammer.decode(project)(importer)(
                              accessor,
                              spec.property.value,
                              {
                                  ...explore,
                                  tracable: false,
                                  postfix: IdentifierFactory.postfix(key),
                              },
                              tags,
                              [],
                          )
                        : ExpressionFactory.isRequired(accessor);
                    return ts.factory.createIfStatement(
                        pred,
                        ts.factory.createReturnStatement(
                            ExpressionFactory.selfCall(
                                decode_object(project)(importer)(index)(
                                    input,
                                    spec.object,
                                    explore,
                                    tags,
                                ),
                            ),
                        ),
                        i === array.length - 1
                            ? remained.length
                                ? ts.factory.createReturnStatement(
                                      ExpressionFactory.selfCall(
                                          explore_objects(project)(importer)(
                                              level + 1,
                                          )(index)(
                                              input,
                                              remained,
                                              explore,
                                              tags,
                                          ),
                                      ),
                                  )
                                : create_throw_error(importer)(expected)(input)
                            : undefined,
                    );
                })
                .reverse()
                .reduce((a, b) =>
                    ts.factory.createIfStatement(
                        b.expression,
                        b.thenStatement,
                        a,
                    ),
                );

            // RETURNS WITH CONDITIONS
            return ts.factory.createBlock([condition], true);
        };

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$pe";

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
    is: () => ts.Expression;
    value: (index: number | null) => ts.Block;
}
