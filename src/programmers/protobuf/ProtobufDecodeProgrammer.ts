import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { ProtobufUtil } from "../helpers/ProtobufUtil";

export namespace ProtobufDecodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const collection: MetadataCollection = new MetadataCollection();
    const meta: Metadata = ProtobufFactory.metadata({
      method: props.modulo.getText(),
      checker: props.context.checker,
      transformer: props.context.transformer,
      collection,
      type: props.type,
    });
    return {
      functions: Object.fromEntries(
        collection
          .objects()
          .filter((object) => ProtobufUtil.isStaticObject(object))
          .map((object) => [
            `${PREFIX}o${object.index}`,
            StatementFactory.constant({
              name: props.functor.useLocal(`${PREFIX}o${object.index}`),
              value: write_object_function({
                context: props.context,
                functor: props.functor,
                object,
              }),
            }),
          ]),
      ),
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode("Uint8Array"),
          ),
        ],
        props.context.importer.type({
          file: "typia",
          name: "Resolved",
          arguments: [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
        }),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant({
              name: "reader",
              value: ts.factory.createNewExpression(
                props.context.importer.internal("ProtobufReader"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            }),
            ts.factory.createReturnStatement(
              decode_regular_object({
                top: true,
                object: meta.objects[0]!.type,
              }),
            ),
          ],
          true,
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  const write_object_function = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    object: MetadataObjectType;
  }): ts.ArrowFunction =>
    ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        IdentifierFactory.parameter("reader"),
        IdentifierFactory.parameter(
          "length",
          TypeFactory.keyword("number"),
          ExpressionFactory.number(-1),
        ),
      ],
      TypeFactory.keyword("any"),
      undefined,
      ts.factory.createBlock(
        [
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createIdentifier("length"),
              ts.factory.createToken(ts.SyntaxKind.EqualsToken),
              ts.factory.createConditionalExpression(
                ts.factory.createLessThan(
                  ts.factory.createIdentifier("length"),
                  ExpressionFactory.number(0),
                ),
                undefined,
                ts.factory.createCallExpression(
                  IdentifierFactory.access(READER(), "size"),
                  undefined,
                  undefined,
                ),
                undefined,
                ts.factory.createAdd(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(READER(), "index"),
                    undefined,
                    undefined,
                  ),
                  ts.factory.createIdentifier("length"),
                ),
              ),
            ),
          ),
          ...write_object_function_body({
            context: props.context,
            functor: props.functor,
            condition: ts.factory.createLessThan(
              ts.factory.createCallExpression(
                IdentifierFactory.access(READER(), "index"),
                undefined,
                undefined,
              ),
              ts.factory.createIdentifier("length"),
            ),
            tag: "tag",
            output: "output",
            properties: props.object.properties,
          }),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ],
        true,
      ),
    );

  const write_object_function_body = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    condition: ts.Expression;
    tag: string;
    output: string;
    properties: MetadataProperty[];
  }): ts.Statement[] => {
    let index: number = 1;
    const clauses: ts.CaseClause[] = props.properties
      .map((p) => {
        const clause = decode_property({
          context: props.context,
          functor: props.functor,
          index,
          accessor: IdentifierFactory.access(
            ts.factory.createIdentifier(props.output),
            p.key.getSoleLiteral()!,
          ),
          metadata: p.value,
        });
        index += ProtobufUtil.size(p.value);
        return clause;
      })
      .flat();
    return [
      StatementFactory.constant({
        name: props.output,
        value: ts.factory.createAsExpression(
          ts.factory.createObjectLiteralExpression(
            props.properties
              .filter(
                (p) =>
                  !(
                    props.context.compilerOptions.exactOptionalPropertyTypes ===
                      true && p.value.optional === true
                  ),
              )
              .map((p) =>
                ts.factory.createPropertyAssignment(
                  IdentifierFactory.identifier(p.key.getSoleLiteral()!),
                  write_property_default_value(p.value),
                ),
              ),
            true,
          ),
          TypeFactory.keyword("any"),
        ),
      }),
      ts.factory.createWhileStatement(
        props.condition,
        ts.factory.createBlock([
          StatementFactory.constant({
            name: props.tag,
            value: ts.factory.createCallExpression(
              IdentifierFactory.access(READER(), "uint32"),
              undefined,
              undefined,
            ),
          }),
          ts.factory.createSwitchStatement(
            ts.factory.createUnsignedRightShift(
              ts.factory.createIdentifier(props.tag),
              ExpressionFactory.number(3),
            ),
            ts.factory.createCaseBlock([
              ...clauses,
              ts.factory.createDefaultClause([
                ts.factory.createExpressionStatement(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(READER(), "skipType"),
                    undefined,
                    [
                      ts.factory.createBitwiseAnd(
                        ts.factory.createIdentifier(props.tag),
                        ExpressionFactory.number(7),
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
                    [ts.factory.createArrayLiteralExpression([])],
                  )
                : value.atomics.some((a) => a.type === "string") ||
                    value.constants.some(
                      (c) =>
                        c.type === "string" &&
                        c.values.some((v) => v.value === ""),
                    ) ||
                    value.templates.some(
                      (tpl) =>
                        tpl.row.length === 1 &&
                        tpl.row[0]!.getName() === "string",
                    )
                  ? ts.factory.createStringLiteral("")
                  : value.objects.length &&
                      value.objects.some(
                        (obj) => !ProtobufUtil.isStaticObject(obj.type),
                      )
                    ? ts.factory.createObjectLiteralExpression()
                    : ts.factory.createIdentifier("undefined"),
      TypeFactory.keyword("any"),
    );

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  const decode_property = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    index: number;
    accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression;
    metadata: Metadata;
  }): ts.CaseClause[] => {
    const clauses: ts.CaseClause[] = [];
    const emplace = (name: string, value: ts.Expression | ts.Statement[]) =>
      clauses.push(
        ts.factory.createCaseClause(
          ExpressionFactory.number(props.index++),
          Array.isArray(value)
            ? [
                ts.factory.createExpressionStatement(
                  ts.factory.createIdentifier(`// type: ${name}`),
                ),
                ...value,
                ts.factory.createBreakStatement(),
              ]
            : [
                ts.factory.createExpressionStatement(
                  ts.factory.createIdentifier(`// ${name}`),
                ),
                ts.factory.createExpressionStatement(
                  ts.factory.createBinaryExpression(
                    props.accessor,
                    ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                    value,
                  ),
                ),
                ts.factory.createBreakStatement(),
              ],
        ),
      );

    const required: boolean =
      props.metadata.isRequired() && !props.metadata.nullable;
    for (const atomic of ProtobufUtil.getAtomics(props.metadata))
      emplace(
        atomic,
        decode_atomic({
          metadata: props.metadata,
          type: atomic,
        }),
      );
    if (props.metadata.natives.length) emplace("bytes", decode_bytes("bytes"));
    for (const array of props.metadata.arrays)
      emplace(
        `Array<${array.type.value.getName()}>`,
        decode_array({
          accessor: props.accessor,
          array,
          required,
        }),
      );
    for (const entry of props.metadata.maps)
      emplace(
        `Map<string, ${entry.value.getName()}>`,
        decode_map({
          context: props.context,
          functor: props.functor,
          accessor: props.accessor,
          entry,
          required,
        }),
      );
    for (const object of props.metadata.objects)
      emplace(
        object.type.name,
        ProtobufUtil.isStaticObject(object.type)
          ? decode_regular_object({
              top: false,
              object: object.type,
            })
          : decode_dynamic_object({
              context: props.context,
              functor: props.functor,
              accessor: props.accessor,
              object: object.type,
              required,
            }),
      );
    return clauses;
  };

  const decode_atomic = (props: {
    metadata: Metadata;
    type: ProtobufAtomic;
  }): ts.Expression => {
    if (props.type === "string") return decode_bytes("string");

    const call: ts.CallExpression = ts.factory.createCallExpression(
      IdentifierFactory.access(READER(), props.type),
      undefined,
      undefined,
    );
    if (props.type !== "int64" && props.type !== "uint64") return call;

    const isNumber: boolean = ProtobufUtil.getNumbers(props.metadata).some(
      (n) => n === props.type,
    );
    return isNumber
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier("Number"),
          undefined,
          [call],
        )
      : call;
  };

  const decode_bytes = (method: "bytes" | "string"): ts.Expression =>
    ts.factory.createCallExpression(
      IdentifierFactory.access(READER(), method),
      undefined,
      undefined,
    );

  const decode_array = (props: {
    accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression;
    array: MetadataArray;
    required: boolean;
  }): ts.Statement[] => {
    const statements: Array<ts.Expression | ts.Statement> = [];
    if (props.required === false)
      statements.push(
        ts.factory.createBinaryExpression(
          props.accessor,
          ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken),
          ts.factory.createAsExpression(
            ts.factory.createArrayLiteralExpression(),
            ts.factory.createTypeReferenceNode("any[]"),
          ),
        ),
      );
    const atomics = ProtobufUtil.getAtomics(props.array.type.value);
    const decoder = atomics.length
      ? () =>
          decode_atomic({
            metadata: props.array.type.value,
            type: atomics[0]!,
          })
      : props.array.type.value.natives.length
        ? () => decode_bytes("bytes")
        : props.array.type.value.objects.length
          ? () =>
              decode_regular_object({
                top: false,
                object: props.array.type.value.objects[0]!.type,
              })
          : null;
    if (decoder === null) throw new Error("Never reach here.");
    else if (atomics.length && atomics[0] !== "string") {
      statements.push(
        ts.factory.createIfStatement(
          ts.factory.createStrictEquality(
            ExpressionFactory.number(2),
            ts.factory.createBitwiseAnd(
              ts.factory.createIdentifier("tag"),
              ExpressionFactory.number(7),
            ),
          ),
          ts.factory.createBlock(
            [
              StatementFactory.constant({
                name: "piece",
                value: ts.factory.createAdd(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(READER(), "uint32"),
                    undefined,
                    undefined,
                  ),
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(READER(), "index"),
                    undefined,
                    undefined,
                  ),
                ),
              }),
              ts.factory.createWhileStatement(
                ts.factory.createLessThan(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(READER(), "index"),
                    undefined,
                    undefined,
                  ),
                  ts.factory.createIdentifier("piece"),
                ),
                ts.factory.createExpressionStatement(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(props.accessor, "push"),
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
              IdentifierFactory.access(props.accessor, "push"),
              undefined,
              [decoder()],
            ),
          ),
        ),
      );
    } else
      statements.push(
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.accessor, "push"),
          undefined,
          [decoder()],
        ),
      );
    return statements.map((stmt) =>
      ts.isExpression(stmt) ? ts.factory.createExpressionStatement(stmt) : stmt,
    );
  };

  const decode_regular_object = (props: {
    top: boolean;
    object: MetadataObjectType;
  }): ts.Expression =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier(`${PREFIX}o${props.object.index}`),
      undefined,
      [
        ts.factory.createIdentifier("reader"),
        ...(props.top
          ? []
          : [
              ts.factory.createCallExpression(
                IdentifierFactory.access(READER(), "uint32"),
                undefined,
                undefined,
              ),
            ]),
      ],
    );

  const decode_dynamic_object = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression;
    object: MetadataObjectType;
    required: boolean;
  }): ts.Statement[] => {
    const top: MetadataProperty = props.object.properties[0]!;
    return decode_entry({
      context: props.context,
      functor: props.functor,
      initializer: () =>
        ts.factory.createBinaryExpression(
          props.accessor,
          ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken),
          ts.factory.createObjectLiteralExpression(),
        ),
      setter: () =>
        ts.factory.createBinaryExpression(
          ts.factory.createElementAccessExpression(
            props.accessor,
            ts.factory.createIdentifier("entry.key"),
          ),
          ts.factory.createToken(ts.SyntaxKind.EqualsToken),
          ts.factory.createIdentifier("entry.value"),
        ),
      entry: MetadataProperty.create({
        ...top,
        key: (() => {
          const key: Metadata = Metadata.initialize();
          key.atomics.push(
            MetadataAtomic.create({
              type: "string",
              tags: [],
            }),
          );
          return key;
        })(),
      }),
      required: props.required,
    });
  };

  const decode_map = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    accessor: ts.ElementAccessExpression | ts.PropertyAccessExpression;
    entry: Metadata.Entry;
    required: boolean;
  }): ts.Statement[] =>
    decode_entry({
      context: props.context,
      functor: props.functor,
      initializer: () =>
        ts.factory.createBinaryExpression(
          props.accessor,
          ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken),
          ts.factory.createNewExpression(
            ts.factory.createIdentifier("Map"),
            [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
            [],
          ),
        ),
      setter: () =>
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.accessor, "set"),
          undefined,
          [
            ts.factory.createIdentifier("entry.key"),
            ts.factory.createIdentifier("entry.value"),
          ],
        ),
      entry: props.entry,
      required: props.required,
    });

  const decode_entry = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    initializer: () => ts.Expression;
    setter: () => ts.Expression;
    entry: Metadata.Entry;
    required: boolean;
  }): ts.Statement[] => {
    const statements: ts.Statement[] = [
      ...(props.required
        ? []
        : [ts.factory.createExpressionStatement(props.initializer())]),
      StatementFactory.constant({
        name: "piece",
        value: ts.factory.createAdd(
          ts.factory.createCallExpression(
            IdentifierFactory.access(READER(), "uint32"),
            undefined,
            undefined,
          ),
          ts.factory.createCallExpression(
            IdentifierFactory.access(READER(), "index"),
            undefined,
            undefined,
          ),
        ),
      }),
      ...write_object_function_body({
        context: props.context,
        functor: props.functor,
        condition: ts.factory.createLessThan(
          ts.factory.createCallExpression(
            IdentifierFactory.access(READER(), "index"),
            undefined,
            undefined,
          ),
          ts.factory.createIdentifier("piece"),
        ),
        tag: "kind",
        output: "entry",
        properties: [
          MetadataProperty.create({
            key: MetadataFactory.soleLiteral("key"),
            value: props.entry.key,
            description: null,
            jsDocTags: [],
          }),
          MetadataProperty.create({
            key: MetadataFactory.soleLiteral("value"),
            value: props.entry.value,
            description: null,
            jsDocTags: [],
          }),
        ],
      }),
      ts.factory.createExpressionStatement(props.setter()),
    ];
    return [
      ts.factory.createExpressionStatement(
        ExpressionFactory.selfCall(ts.factory.createBlock(statements, true)),
      ),
    ];
  };
}

const PREFIX = "$pd";
const READER = () => ts.factory.createIdentifier("reader");
