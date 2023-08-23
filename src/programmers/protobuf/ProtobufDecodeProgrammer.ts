import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
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

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ProtobufUtil } from "../helpers/ProtobufUtil";

export namespace ProtobufDecodeProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
            const importer: FunctionImporter = new FunctionImporter(
                modulo.getText(),
            );
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata = ProtobufFactory.metadata(modulo.getText())(
                project.checker,
            )(collection)(type);

            const functors = collection
                .objects()
                .filter((obj) => ProtobufUtil.isStaticObject(obj))
                .map((obj) =>
                    StatementFactory.constant(
                        `${PREFIX}o${obj.index}`,
                        write_object_function(project)(importer)(obj),
                    ),
                );
            const reader = StatementFactory.constant(
                "reader",
                ts.factory.createNewExpression(
                    importer.use("Reader"),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                ),
            );

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        ts.factory.createTypeReferenceNode("Uint8Array"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.Resolved<${
                        name ?? TypeFactory.getFullName(project.checker)(type)
                    }>`,
                ),
                undefined,
                ts.factory.createBlock(
                    [
                        ...importer.declare(modulo),
                        ...functors,
                        reader,
                        ts.factory.createReturnStatement(
                            decode_regular_object(true)(meta.objects[0]!),
                        ),
                    ],
                    true,
                ),
            );
        };

    const write_object_function =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (obj: MetadataObject): ts.ArrowFunction =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter("reader"),
                    IdentifierFactory.parameter(
                        "length",
                        TypeFactory.keyword("number"),
                        ts.factory.createNumericLiteral(-1),
                    ),
                ],
                TypeFactory.keyword("any"),
                undefined,
                ts.factory.createBlock(
                    [
                        ts.factory.createExpressionStatement(
                            ts.factory.createBinaryExpression(
                                ts.factory.createIdentifier("length"),
                                ts.factory.createToken(
                                    ts.SyntaxKind.EqualsToken,
                                ),
                                ts.factory.createConditionalExpression(
                                    ts.factory.createLessThan(
                                        ts.factory.createIdentifier("length"),
                                        ts.factory.createNumericLiteral(0),
                                    ),
                                    undefined,
                                    ts.factory.createCallExpression(
                                        IdentifierFactory.access(READER())(
                                            "size",
                                        ),
                                        undefined,
                                        undefined,
                                    ),
                                    undefined,
                                    ts.factory.createAdd(
                                        ts.factory.createCallExpression(
                                            IdentifierFactory.access(READER())(
                                                "index",
                                            ),
                                            undefined,
                                            undefined,
                                        ),
                                        ts.factory.createIdentifier("length"),
                                    ),
                                ),
                            ),
                        ),
                        ...write_object_function_body(project)(importer)({
                            condition: ts.factory.createLessThan(
                                ts.factory.createCallExpression(
                                    IdentifierFactory.access(READER())("index"),
                                    undefined,
                                    undefined,
                                ),
                                ts.factory.createIdentifier("length"),
                            ),
                            tag: "tag",
                            output: "output",
                        })(obj.properties),
                        ts.factory.createReturnStatement(
                            ts.factory.createIdentifier("output"),
                        ),
                    ],
                    true,
                ),
            );

    const write_object_function_body =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (props: { condition: ts.Expression; tag: string; output: string }) =>
        (properties: MetadataProperty[]): ts.Statement[] => {
            let i: number = 1;
            const clauses: ts.CaseClause[] = properties
                .map((p) => {
                    const clause = decode_property(project)(importer)(i)(
                        IdentifierFactory.access(
                            ts.factory.createIdentifier(props.output),
                        )(p.key.getSoleLiteral()!),
                        p.value,
                        p.tags,
                    );
                    i += p.value.binarySize();
                    return clause;
                })
                .flat();
            return [
                StatementFactory.constant(
                    props.output,
                    ts.factory.createObjectLiteralExpression(
                        properties.map((p) =>
                            ts.factory.createPropertyAssignment(
                                IdentifierFactory.identifier(
                                    p.key.getSoleLiteral()!,
                                ),
                                write_property_default_value(p.value),
                            ),
                        ),
                        true,
                    ),
                ),
                ts.factory.createWhileStatement(
                    props.condition,
                    ts.factory.createBlock([
                        StatementFactory.constant(
                            props.tag,
                            ts.factory.createCallExpression(
                                IdentifierFactory.access(READER())("uint32"),
                                undefined,
                                undefined,
                            ),
                        ),
                        ts.factory.createSwitchStatement(
                            ts.factory.createUnsignedRightShift(
                                ts.factory.createIdentifier(props.tag),
                                ts.factory.createNumericLiteral(3),
                            ),
                            ts.factory.createCaseBlock([
                                ...clauses,
                                ts.factory.createDefaultClause([
                                    ts.factory.createExpressionStatement(
                                        ts.factory.createCallExpression(
                                            IdentifierFactory.access(READER())(
                                                "skipType",
                                            ),
                                            undefined,
                                            [
                                                ts.factory.createBitwiseAnd(
                                                    ts.factory.createIdentifier(
                                                        props.tag,
                                                    ),
                                                    ts.factory.createNumericLiteral(
                                                        7,
                                                    ),
                                                ),
                                            ],
                                        ),
                                    ),
                                    ts.factory.createBreakStatement(),
                                ]),
                            ]),
                        ),
                    ]),
                ),
            ];
        };

    const write_property_default_value = (value: Metadata) =>
        ts.factory.createAsExpression(
            value.nullable
                ? ts.factory.createNull()
                : value.isRequired() === false
                ? ts.factory.createIdentifier("undefined")
                : value.arrays.length
                ? ts.factory.createArrayLiteralExpression()
                : value.maps.length
                ? ts.factory.createNewExpression(
                      ts.factory.createIdentifier("Map"),
                      undefined,
                      [],
                  )
                : value.natives.length
                ? ts.factory.createNewExpression(
                      ts.factory.createIdentifier("Uint8Array"),
                      undefined,
                      [],
                  )
                : value.atomics.some((a) => a.type === "string") ||
                  value.constants.some(
                      (c) =>
                          c.type === "string" && c.values.some((v) => v === ""),
                  ) ||
                  value.templates.some(
                      (tpl) =>
                          tpl.length === 1 && tpl[0]!.getName() === "string",
                  )
                ? ts.factory.createStringLiteral("")
                : value.objects.length &&
                  value.objects.some((obj) => !ProtobufUtil.isStaticObject(obj))
                ? ts.factory.createObjectLiteralExpression()
                : ts.factory.createIdentifier("undefined"),
            TypeFactory.keyword("any"),
        );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode_property =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number) =>
        (
            accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression,
            meta: Metadata,
            tags: IMetadataTag[],
        ): ts.CaseClause[] => {
            const clauses: ts.CaseClause[] = [];
            const emplace =
                (name: string) => (v: ts.Expression | ts.Statement[]) =>
                    clauses.push(
                        ts.factory.createCaseClause(
                            ts.factory.createNumericLiteral(index++),
                            Array.isArray(v)
                                ? [
                                      ts.factory.createExpressionStatement(
                                          ts.factory.createIdentifier(
                                              `// type: ${name}`,
                                          ),
                                      ),
                                      ...v,
                                      ts.factory.createBreakStatement(),
                                  ]
                                : [
                                      ts.factory.createExpressionStatement(
                                          ts.factory.createIdentifier(
                                              `// ${name}`,
                                          ),
                                      ),
                                      ts.factory.createExpressionStatement(
                                          ts.factory.createBinaryExpression(
                                              accessor,
                                              ts.factory.createToken(
                                                  ts.SyntaxKind.EqualsToken,
                                              ),
                                              v,
                                          ),
                                      ),
                                      ts.factory.createBreakStatement(),
                                  ],
                        ),
                    );

            const required: boolean = meta.isRequired() && !meta.nullable;
            for (const atomic of ProtobufUtil.getAtomics(meta))
                emplace(atomic)(decode_atomic(atomic, tags));
            if (meta.natives.length) emplace("bytes")(decode_bytes("bytes"));
            for (const array of meta.arrays)
                emplace(`Array<${array.value.getName()}>`)(
                    decode_array(accessor, array, required, tags),
                );
            for (const map of meta.maps)
                emplace(`Map<string, ${map.value.getName()}>`)(
                    decode_map(project)(importer)(
                        accessor,
                        map,
                        required,
                        tags,
                    ),
                );
            for (const obj of meta.objects)
                emplace(obj.name)(
                    ProtobufUtil.isStaticObject(obj)
                        ? decode_regular_object(false)(obj)
                        : decode_dynamic_object(project)(importer)(
                              accessor,
                              obj,
                              required,
                          ),
                );
            return clauses;
        };

    const decode_atomic = (
        atomic: Atomic.Literal,
        tags: IMetadataTag[],
    ): ts.Expression => {
        if (atomic === "string") return decode_bytes("string");
        const method =
            atomic === "bigint"
                ? tags.find((t) => t.kind === "type" && t.value === "uint64")
                    ? "uint64"
                    : "int64"
                : atomic === "number"
                ? (() => {
                      const type = tags.find((t) => t.kind === "type");
                      if (type === undefined) return "double";
                      return type.value === "int" || type.value === "int32"
                          ? "int32"
                          : type.value === "uint" || type.value === "uint32"
                          ? "uint32"
                          : type.value === "int64"
                          ? "int64"
                          : type.value === "uint64"
                          ? "uint64"
                          : type.value === "float"
                          ? "float"
                          : "double";
                  })()
                : "bool";
        const call = ts.factory.createCallExpression(
            IdentifierFactory.access(ts.factory.createIdentifier("reader"))(
                method,
            ),
            undefined,
            undefined,
        );
        return atomic === "number" &&
            (method === "int64" || method === "uint64")
            ? ts.factory.createCallExpression(
                  ts.factory.createIdentifier("Number"),
                  undefined,
                  [call],
              )
            : call;
    };

    const decode_bytes = (method: "bytes" | "string"): ts.Expression =>
        ts.factory.createCallExpression(
            IdentifierFactory.access(ts.factory.createIdentifier("reader"))(
                method,
            ),
            undefined,
            undefined,
        );

    const decode_array = (
        accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression,
        array: MetadataArray,
        required: boolean,
        tags: IMetadataTag[],
    ): ts.Statement[] => {
        const statements: Array<ts.Expression | ts.Statement> = [];
        if (required === false)
            statements.push(
                ts.factory.createBinaryExpression(
                    accessor,
                    ts.factory.createToken(
                        ts.SyntaxKind.QuestionQuestionEqualsToken,
                    ),
                    ts.factory.createAsExpression(
                        ts.factory.createArrayLiteralExpression(),
                        ts.factory.createTypeReferenceNode("any[]"),
                    ),
                ),
            );
        const atomics = ProtobufUtil.getAtomics(array.value);
        const decoder = atomics.length
            ? () => decode_atomic(atomics[0]!, tags)
            : array.value.natives.length
            ? () => decode_bytes("bytes")
            : array.value.objects.length
            ? () => decode_regular_object(false)(array.value.objects[0]!)
            : null;
        if (decoder === null) throw new Error("Never reach here.");
        else if (atomics.length && atomics[0] !== "string") {
            statements.push(
                ts.factory.createIfStatement(
                    ts.factory.createStrictEquality(
                        ts.factory.createNumericLiteral(2),
                        ts.factory.createBitwiseAnd(
                            ts.factory.createIdentifier("tag"),
                            ts.factory.createNumericLiteral(7),
                        ),
                    ),
                    ts.factory.createBlock(
                        [
                            StatementFactory.constant(
                                "piece",
                                ts.factory.createAdd(
                                    ts.factory.createCallExpression(
                                        IdentifierFactory.access(READER())(
                                            "uint32",
                                        ),
                                        undefined,
                                        undefined,
                                    ),
                                    ts.factory.createCallExpression(
                                        IdentifierFactory.access(READER())(
                                            "index",
                                        ),
                                        undefined,
                                        undefined,
                                    ),
                                ),
                            ),
                            ts.factory.createWhileStatement(
                                ts.factory.createLessThan(
                                    ts.factory.createCallExpression(
                                        IdentifierFactory.access(READER())(
                                            "index",
                                        ),
                                        undefined,
                                        undefined,
                                    ),
                                    ts.factory.createIdentifier("piece"),
                                ),
                                ts.factory.createExpressionStatement(
                                    ts.factory.createCallExpression(
                                        IdentifierFactory.access(accessor)(
                                            "push",
                                        ),
                                        undefined,
                                        [decoder()],
                                    ),
                                ),
                            ),
                        ],
                        true,
                    ),
                    ts.factory.createExpressionStatement(
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(accessor)("push"),
                            undefined,
                            [decoder()],
                        ),
                    ),
                ),
            );
        } else
            statements.push(
                ts.factory.createCallExpression(
                    IdentifierFactory.access(accessor)("push"),
                    undefined,
                    [decoder()],
                ),
            );
        return statements.map((stmt) =>
            ts.isExpression(stmt)
                ? ts.factory.createExpressionStatement(stmt)
                : stmt,
        );
    };

    const decode_regular_object =
        (top: boolean) =>
        (obj: MetadataObject): ts.Expression =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier(`${PREFIX}o${obj.index}`),
                undefined,
                [
                    ts.factory.createIdentifier("reader"),
                    ...(top
                        ? []
                        : [
                              ts.factory.createCallExpression(
                                  IdentifierFactory.access(READER())("uint32"),
                                  undefined,
                                  undefined,
                              ),
                          ]),
                ],
            );

    const decode_dynamic_object =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression,
            obj: MetadataObject,
            required: boolean,
        ): ts.Statement[] => {
            const top = obj.properties[0]!;
            return decode_entry(project)(importer)({
                initializer: () =>
                    ts.factory.createBinaryExpression(
                        accessor,
                        ts.factory.createToken(
                            ts.SyntaxKind.QuestionQuestionEqualsToken,
                        ),
                        ts.factory.createObjectLiteralExpression(),
                    ),
                setter: () =>
                    ts.factory.createBinaryExpression(
                        ts.factory.createElementAccessExpression(
                            accessor,
                            ts.factory.createIdentifier("entry.key"),
                        ),
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        ts.factory.createIdentifier("entry.value"),
                    ),
            })(top, required, top.tags);
        };

    const decode_map =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression,
            map: Metadata.Entry,
            required: boolean,
            tags: IMetadataTag[],
        ): ts.Statement[] =>
            decode_entry(project)(importer)({
                initializer: () =>
                    ts.factory.createBinaryExpression(
                        accessor,
                        ts.factory.createToken(
                            ts.SyntaxKind.QuestionQuestionEqualsToken,
                        ),
                        ts.factory.createNewExpression(
                            ts.factory.createIdentifier("Map"),
                            [
                                TypeFactory.keyword("any"),
                                TypeFactory.keyword("any"),
                            ],
                            [],
                        ),
                    ),
                setter: () =>
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(accessor)("set"),
                        undefined,
                        [
                            ts.factory.createIdentifier("entry.key"),
                            ts.factory.createIdentifier("entry.value"),
                        ],
                    ),
            })(map, required, tags);

    const decode_entry =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (props: {
            initializer: () => ts.Expression;
            setter: () => ts.Expression;
        }) =>
        (
            map: Metadata.Entry,
            required: boolean,
            tags: IMetadataTag[],
        ): ts.Statement[] => {
            const statements: ts.Statement[] = [
                ...(required
                    ? []
                    : [
                          ts.factory.createExpressionStatement(
                              props.initializer(),
                          ),
                      ]),
                StatementFactory.constant(
                    "piece",
                    ts.factory.createAdd(
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(READER())("uint32"),
                            undefined,
                            undefined,
                        ),
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(READER())("index"),
                            undefined,
                            undefined,
                        ),
                    ),
                ),
                ...write_object_function_body(project)(importer)({
                    condition: ts.factory.createLessThan(
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(READER())("index"),
                            undefined,
                            undefined,
                        ),
                        ts.factory.createIdentifier("piece"),
                    ),
                    tag: "kind",
                    output: "entry",
                })([
                    MetadataProperty.create({
                        key: MetadataFactory.soleLiteral("key"),
                        value: map.key,
                        description: null,
                        tags: [],
                        jsDocTags: [],
                    }),
                    MetadataProperty.create({
                        key: MetadataFactory.soleLiteral("value"),
                        value: map.value,
                        description: null,
                        tags,
                        jsDocTags: [],
                    }),
                ]),
                ts.factory.createExpressionStatement(props.setter()),
            ];
            return [
                ts.factory.createExpressionStatement(
                    ExpressionFactory.selfCall(
                        ts.factory.createBlock(statements, true),
                    ),
                ),
            ];
        };
}

const PREFIX = "$pd";
const READER = () => ts.factory.createIdentifier("reader");
