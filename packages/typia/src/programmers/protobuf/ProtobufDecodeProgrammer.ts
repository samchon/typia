import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";
import { IProtobufProperty } from "../../schemas/protobuf/IProtobufProperty";
import { IProtobufPropertyType } from "../../schemas/protobuf/IProtobufPropertyType";
import { IProtobufSchema } from "../../schemas/protobuf/IProtobufSchema";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

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
                callReader("size"),
                undefined,
                ts.factory.createAdd(
                  callReader("index"),
                  ts.factory.createIdentifier("length"),
                ),
              ),
            ),
          ),
          ...write_object_function_body({
            context: props.context,
            condition: ts.factory.createLessThan(
              callReader("index"),
              ts.factory.createIdentifier("length"),
            ),
            tag: "tag",
            output: "output",
            object: props.object,
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
    condition: ts.Expression;
    tag: string;
    output: string;
    object: MetadataObjectType;
  }): ts.Statement[] => {
    if (props.object.properties.some((p) => p.of_protobuf_ === undefined))
      ProtobufFactory.emplaceObject(props.object);
    const clauses: ts.CaseClause[] = props.object.properties
      .map((p) =>
        decode_property({
          context: props.context,
          accessor: IdentifierFactory.access(
            ts.factory.createIdentifier(props.output),
            p.key.getSoleLiteral()!,
          ),
          protobuf: p.of_protobuf_!,
          metadata: p.value,
        }),
      )
      .flat();
    return [
      StatementFactory.constant({
        name: props.output,
        value: ts.factory.createAsExpression(
          ts.factory.createObjectLiteralExpression(
            props.object.properties
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
            value: callReader("uint32"),
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
                  callReader("skipType", [
                    ts.factory.createBitwiseAnd(
                      ts.factory.createIdentifier(props.tag),
                      ExpressionFactory.number(7),
                    ),
                  ]),
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
    metadata: Metadata;
    protobuf: IProtobufProperty;
    accessor: ts.Expression;
  }): ts.CaseClause[] =>
    props.protobuf.union.map((schema) =>
      decode_property_type({
        context: props.context,
        accessor: props.accessor,
        schema,
        required:
          props.metadata.isRequired() && props.metadata.nullable === false,
      }),
    );

  const decode_property_type = (props: {
    context: ITypiaContext;
    accessor: ts.Expression;
    schema: IProtobufPropertyType;
    required: boolean;
  }): ts.CaseClause => {
    const out = (
      title: string,
      value: ts.Expression | ts.Statement[],
    ): ts.CaseClause =>
      ts.factory.createCaseClause(
        ExpressionFactory.number(props.schema.index),
        [
          ts.factory.createExpressionStatement(
            ts.factory.createIdentifier(`// ${title}`),
          ),
          ...(Array.isArray(value)
            ? value
            : [
                ts.factory.createExpressionStatement(
                  ts.factory.createBinaryExpression(
                    props.accessor,
                    ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                    value,
                  ),
                ),
              ]),
          ts.factory.createBreakStatement(),
        ],
      );
    // ATOMICS
    if (props.schema.type === "bytes") return out("bytes", callReader("bytes"));
    else if (props.schema.type === "bool")
      return out("bool", callReader("bool"));
    else if (props.schema.type === "bigint")
      return out(props.schema.name, callReader(props.schema.name));
    else if (props.schema.type === "number")
      return out(props.schema.name, decode_number(props.schema));
    else if (props.schema.type === "string")
      return out("string", callReader("string"));
    // INSTANCES
    else if (props.schema.type === "array")
      return out(
        `Array<${props.schema.array.value.getName()}>`,
        decode_array({
          accessor: props.accessor,
          schema: props.schema,
          required: props.required,
        }),
      );
    else if (props.schema.type === "object")
      return out(
        props.schema.object.name,
        decode_regular_object({
          top: false,
          object: props.schema.object,
        }),
      );
    else if (props.schema.type === "map")
      if (props.schema.map instanceof MetadataObjectType) {
        const key: Metadata = props.schema.map.properties[0]!.key;
        const value: Metadata = props.schema.map.properties[0]!.value;
        return out(
          `Record<${key.getName()}, ${value.getName()}>`,
          decode_map({
            context: props.context,
            accessor: props.accessor,
            schema: props.schema,
            required: props.required,
            key,
            value,
            initializer: ts.factory.createObjectLiteralExpression([]),
            setter: () =>
              ts.factory.createBinaryExpression(
                ts.factory.createElementAccessExpression(
                  props.accessor,
                  ts.factory.createIdentifier("entry.key"),
                ),
                ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                ts.factory.createIdentifier("entry.value"),
              ),
          }),
        );
      } else {
        const key: Metadata = props.schema.map.key;
        const value: Metadata = props.schema.map.value;
        return out(
          `Map<${key.getName()}, ${value.getName()}>`,
          decode_map({
            context: props.context,
            accessor: props.accessor,
            schema: props.schema,
            required: props.required,
            key,
            value,
            initializer: ts.factory.createNewExpression(
              ts.factory.createIdentifier("Map"),
              [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
              [],
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
          }),
        );
      }
    throw new Error(
      "Error on ProtobufDecodeProgrammer.write(): unknown property type",
    );
  };

  const decode_number = (schema: IProtobufSchema.INumber): ts.Expression => {
    const value = callReader(schema.name);
    return schema.name === "int64" || schema.name === "uint64"
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier("Number"),
          undefined,
          [value],
        )
      : value;
  };

  const decode_array = (props: {
    accessor: ts.Expression;
    schema: IProtobufSchema.IArray;
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
    const decoder: ts.Expression = decode_array_value(props.schema.value);
    if (["bool", "bigint", "number"].includes(props.schema.value.type)) {
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
                  callReader("uint32"),
                  callReader("index"),
                ),
              }),
              ts.factory.createWhileStatement(
                ts.factory.createLessThan(
                  callReader("index"),
                  ts.factory.createIdentifier("piece"),
                ),
                ts.factory.createExpressionStatement(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(props.accessor, "push"),
                    undefined,
                    [decoder],
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
              [decoder],
            ),
          ),
        ),
      );
    } else
      statements.push(
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.accessor, "push"),
          undefined,
          [decoder],
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
        ...(props.top ? [] : [callReader("uint32")]),
      ],
    );

  const decode_map = (props: {
    context: ITypiaContext;
    accessor: ts.Expression;
    key: Metadata;
    value: Metadata;
    schema: IProtobufSchema.IMap;
    initializer: ts.Expression;
    required: boolean;
    setter: () => ts.Expression;
  }): ts.Statement[] => {
    const statements: Array<ts.Expression | ts.Statement> = [
      ...(props.required === true
        ? [
            ts.factory.createBinaryExpression(
              props.accessor,
              ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken),
              props.initializer,
            ),
          ]
        : []),
      StatementFactory.constant({
        name: "piece",
        value: ts.factory.createAdd(callReader("uint32"), callReader("index")),
      }),
      ...write_object_function_body({
        context: props.context,
        condition: ts.factory.createLessThan(
          callReader("index"),
          ts.factory.createIdentifier("piece"),
        ),
        tag: "kind",
        output: "entry",
        object: createObjectType([
          {
            key: "key",
            value: props.key,
          },
          {
            key: "value",
            value: props.value,
          },
        ]),
      }),
      ...(props.required === false
        ? [
            ts.factory.createBinaryExpression(
              props.accessor,
              ts.factory.createToken(ts.SyntaxKind.QuestionQuestionEqualsToken),
              props.initializer,
            ),
          ]
        : []),
      props.setter(),
    ];
    return [
      ts.factory.createExpressionStatement(
        ExpressionFactory.selfCall(
          ts.factory.createBlock(
            statements.map((stmt) =>
              ts.isExpression(stmt)
                ? ts.factory.createExpressionStatement(stmt)
                : stmt,
            ),
            true,
          ),
        ),
      ),
    ];
  };

  const decode_array_value = (
    schema: IProtobufSchema.IArray["value"],
  ): ts.Expression => {
    if (schema.type === "bytes") return callReader("bytes");
    else if (schema.type === "bool") return callReader("bool");
    else if (schema.type === "bigint") return callReader(schema.name);
    else if (schema.type === "number") return decode_number(schema);
    else if (schema.type === "string") return callReader("string");
    else if (schema.type === "object")
      return decode_regular_object({
        top: false,
        object: schema.object,
      });
    throw new Error("unreachable condition");
  };
}

const PREFIX = "_pd";
const callReader = (
  method: string,
  args?: ts.Expression[],
): ts.CallExpression =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(ts.factory.createIdentifier("reader"), method),
    undefined,
    args,
  );
const createObjectType = (
  definitions: Array<{
    key: string;
    value: Metadata;
  }>,
): MetadataObjectType => {
  const properties: MetadataProperty[] = definitions.map((def) =>
    MetadataProperty.create({
      key: MetadataFactory.soleLiteral(def.key),
      value: def.value,
      description: null,
      jsDocTags: [],
    }),
  );
  const obj: MetadataObjectType = MetadataObjectType.create({
    name: "object.o" + Math.random().toString().slice(2),
    properties,
    description: undefined,
    jsDocTags: [],
    index: -1,
    validated: true,
    recursive: false,
    nullables: [false],
  });
  ProtobufFactory.emplaceObject(obj);
  return obj;
};
