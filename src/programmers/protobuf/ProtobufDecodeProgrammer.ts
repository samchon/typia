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
            const importer: FunctionImporter = new FunctionImporter();
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata = ProtobufFactory.metadata(modulo.getText())(
                project.checker,
            )(collection)(type);

            const functors = collection
                .objects()
                .filter((obj) => obj._Messagable())
                .map((obj) =>
                    StatementFactory.constant(
                        `${PREFIX}o${obj.index}`,
                        write_object_function(project)(importer)(obj),
                    ),
                );

            importer.use("Reader");

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
                    name ?? TypeFactory.getFullName(project.checker)(type),
                ),
                undefined,
                ts.factory.createBlock(
                    [
                        ...importer.declare(modulo),
                        ...functors,
                        StatementFactory.constant(
                            "reader",
                            ts.factory.createNewExpression(
                                importer.use("Reader"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                        ),
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
                        StatementFactory.constant(
                            "output",
                            ts.factory.createObjectLiteralExpression(),
                        ),
                        write_while_statement(project)(importer)({
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

    const write_while_statement =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (props: { condition: ts.Expression; tag: string; output: string }) =>
        (properties: MetadataProperty[]): ts.WhileStatement => {
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
            return ts.factory.createWhileStatement(
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
            );
        };

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
            const emplace = (v: ts.Expression | ts.Statement[]) =>
                clauses.push(
                    ts.factory.createCaseClause(
                        ts.factory.createNumericLiteral(index++),
                        Array.isArray(v)
                            ? [...v, ts.factory.createBreakStatement()]
                            : [
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
            for (const atomic of ProtobufUtil.atomics(meta))
                emplace(decode_atomic(atomic, tags));
            if (meta.natives.length) emplace(decode_bytes("bytes"));
            for (const array of meta.arrays)
                emplace(decode_array(project)(importer)(index)(array, tags));
            for (const map of meta.maps)
                emplace(decode_map(project)(importer)(accessor, map, tags));
            for (const obj of meta.objects)
                emplace(
                    obj._Messagable()
                        ? decode_regular_object(false)(obj)
                        : decode_dynamic_object(project)(importer)(
                              accessor,
                              obj,
                          ),
                );
            return clauses;
        };

    const decode_atomic = (
        atomic: Atomic.Literal,
        tags: IMetadataTag[],
    ): ts.Expression =>
        atomic === "string"
            ? decode_bytes("string")
            : ts.factory.createCallExpression(
                  IdentifierFactory.access(
                      ts.factory.createIdentifier("reader"),
                  )(
                      atomic === "bigint"
                          ? tags.find(
                                (t) =>
                                    t.kind === "type" && t.value === "uint64",
                            )
                              ? "uint64"
                              : "int64"
                          : atomic === "number"
                          ? (() => {
                                const type = tags.find(
                                    (t) => t.kind === "type",
                                );
                                if (type === undefined) return "double";
                                return type.value === "int" ||
                                    type.value === "int32"
                                    ? "int32"
                                    : type.value === "uint" ||
                                      type.value === "uint32"
                                    ? "uint32"
                                    : type.value === "int64"
                                    ? "int64"
                                    : type.value === "uint64"
                                    ? "uint64"
                                    : type.value === "float"
                                    ? "float"
                                    : "double";
                            })()
                          : "bool",
                  ),
                  undefined,
                  undefined,
              );

    const decode_bytes = (method: "bytes" | "string"): ts.Expression =>
        ts.factory.createCallExpression(
            IdentifierFactory.access(ts.factory.createIdentifier("reader"))(
                method,
            ),
            undefined,
            undefined,
        );

    const decode_array =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (index: number) =>
        (meta: MetadataArray, tags: IMetadataTag[]): ts.Expression => {
            project;
            importer;
            index;
            meta;
            tags;
            return null!;
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
                        ts.factory.createIdentifier("entry.key"),
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        ts.factory.createIdentifier("entry.value"),
                    ),
            })(top, top.tags);
        };

    const decode_map =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression,
            map: Metadata.Entry,
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
            })(map, tags);

    const decode_entry =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (props: {
            initializer: () => ts.Expression;
            setter: () => ts.Expression;
        }) =>
        (map: Metadata.Entry, tags: IMetadataTag[]): ts.Statement[] => {
            const statements: ts.Statement[] = [
                ts.factory.createExpressionStatement(props.initializer()),
                StatementFactory.constant(
                    "piece",
                    ts.factory.createAdd(
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(READER())("index"),
                            undefined,
                            undefined,
                        ),
                        ts.factory.createCallExpression(
                            IdentifierFactory.access(READER())("uint32"),
                            undefined,
                            undefined,
                        ),
                    ),
                ),
                StatementFactory.constant(
                    "entry",
                    ts.factory.createObjectLiteralExpression(),
                ),
                write_while_statement(project)(importer)({
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
