import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { NumericRangeFactory } from "../../factories/NumericRangeFactory";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataMap } from "../../schemas/metadata/MetadataMap";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { IProtobufProperty } from "../../schemas/protobuf/IProtobufProperty";
import { IProtobufPropertyType } from "../../schemas/protobuf/IProtobufPropertyType";
import { IProtobufSchema } from "../../schemas/protobuf/IProtobufSchema";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { ProtobufUtil } from "../helpers/ProtobufUtil";
import { ProtobufWire } from "../helpers/ProtobufWire";

export namespace ProtobufEncodeProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const collection: MetadataCollection = new MetadataCollection();
    const metadata: Metadata = ProtobufFactory.metadata({
      method: props.modulo.getText(),
      checker: props.context.checker,
      transformer: props.context.transformer,
      collection,
      type: props.type,
    });

    const callEncoder = (writer: string, factory: ts.NewExpression) =>
      StatementFactory.constant({
        name: writer,
        value: ts.factory.createCallExpression(
          ts.factory.createIdentifier("encoder"),
          undefined,
          [factory, ts.factory.createIdentifier("input")],
        ),
      });
    return {
      functions: {
        encoder: StatementFactory.constant({
          name: props.functor.useLocal("encoder"),
          value: write_encoder({
            context: props.context,
            functor: props.functor,
            collection,
            metadata,
          }),
        }),
      },
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ),
        ],
        ts.factory.createTypeReferenceNode("Uint8Array"),
        undefined,
        ts.factory.createBlock(
          [
            callEncoder(
              "sizer",
              ts.factory.createNewExpression(
                props.context.importer.internal("ProtobufSizer"),
                undefined,
                [],
              ),
            ),
            callEncoder(
              "writer",
              ts.factory.createNewExpression(
                props.context.importer.internal("ProtobufWriter"),
                undefined,
                [ts.factory.createIdentifier("sizer")],
              ),
            ),
            ts.factory.createReturnStatement(callWriter("buffer")),
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

  const write_encoder = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
    metadata: Metadata;
  }): ts.ArrowFunction => {
    const functors = props.collection
      .objects()
      .filter((obj) => ProtobufUtil.isStaticObject(obj))
      .map((object) =>
        StatementFactory.constant({
          name: `${PREFIX}o${object.index}`,
          value: write_object_function({
            context: props.context,
            functor: props.functor,
            input: ts.factory.createIdentifier("input"),
            object,
            explore: {
              source: "function",
              from: "object",
              tracable: false,
              postfix: "",
            },
          }),
        }),
      );
    const main: ts.Block = decode({
      context: props.context,
      functor: props.functor,
      index: null,
      input: ts.factory.createIdentifier("input"),
      metadata: props.metadata,
      explore: {
        source: "top",
        from: "top",
        tracable: false,
        postfix: "",
      },
    });
    return ts.factory.createArrowFunction(
      undefined,
      [
        ts.factory.createTypeParameterDeclaration(
          undefined,
          "Writer",
          props.context.importer.type({
            file: "typia/lib/internal/$IProtobufWriter.js",
            name: "$IProtobufWriter",
          }),
        ),
      ],
      [
        IdentifierFactory.parameter(
          "writer",
          ts.factory.createTypeReferenceNode("Writer"),
        ),
        IdentifierFactory.parameter("input"),
      ],
      ts.factory.createTypeReferenceNode("Writer"),
      undefined,
      ts.factory.createBlock(
        [
          ...props.functor.declareUnions(),
          ...functors,
          ...IsProgrammer.write_function_statements(props),
          ...main.statements,
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("writer"),
          ),
        ],
        true,
      ),
    );
  };

  const write_object_function = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    input: ts.Expression;
    object: MetadataObjectType;
    explore: FeatureProgrammer.IExplore;
  }): ts.ArrowFunction => {
    const body: ts.Statement[] = props.object.properties
      .map((p) => {
        const block = decode_property({
          context: props.context,
          functor: props.functor,
          explore: props.explore,
          metadata: p.value,
          protobuf: p.of_protobuf_!,
          input: IdentifierFactory.access(props.input, p.key.getSoleLiteral()!),
        });
        return [
          ts.factory.createExpressionStatement(
            ts.factory.createIdentifier(
              `// property ${JSON.stringify(p.key.getSoleLiteral())}: ${p.value.getName()}`,
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
    DECODER STATION
  ----------------------------------------------------------- */
  const decode_property = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    metadata: Metadata;
    protobuf: IProtobufProperty;
    input: ts.Expression;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
    const union: IUnion[] = [];
    for (const schema of props.protobuf.union) {
      //----
      // ATOMICS
      //----
      if (schema.type === "bool")
        union.push({
          is: () =>
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("boolean"),
              ts.factory.createTypeOfExpression(props.input),
            ),
          value: () =>
            decode_bool({
              input: props.input,
              index: schema.index,
            }),
        });
      else if (schema.type === "bigint")
        union.push(
          decode_bigint({
            input: props.input,
            type: schema.name,
            candidates: props.protobuf.union
              .filter((s) => s.type === "bigint")
              .map((s) => s.name),
            index: schema.index,
          }),
        );
      else if (schema.type === "number")
        union.push(
          decode_number({
            input: props.input,
            type: schema.name,
            candidates: props.protobuf.union
              .filter((s) => s.type === "number")
              .map((s) => s.name),
            index: schema.index,
          }),
        );
      else if (schema.type === "string")
        union.push({
          is: () =>
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("string"),
              ts.factory.createTypeOfExpression(props.input),
            ),
          value: () =>
            decode_bytes({
              method: "string",
              index: schema.index,
              input: props.input,
            }),
        });
      //----
      // INSTANCES
      //----
      else if (schema.type === "bytes")
        union.push({
          is: () => ExpressionFactory.isInstanceOf("Uint8Array", props.input),
          value: () =>
            decode_bytes({
              method: "bytes",
              index: schema.index,
              input: props.input,
            }),
        });
      else if (schema.type === "array")
        union.push({
          is: () => ExpressionFactory.isArray(props.input),
          value: () =>
            decode_array({
              context: props.context,
              functor: props.functor,
              input: props.input,
              schema,
            }),
        });
      else if (schema.type === "map" && schema.map instanceof MetadataMap) {
        const map: MetadataMap = schema.map;
        union.push({
          is: () => ExpressionFactory.isInstanceOf("Map", props.input),
          value: () =>
            decode_map({
              context: props.context,
              functor: props.functor,
              key: map.key,
              value: map.value,
              schema,
              required:
                props.metadata.isRequired() === true &&
                props.metadata.nullable === false,
            }),
        });
      }
    }

    // RETURNS
    const wrapper: (block: ts.Block) => ts.Block =
      props.metadata.isRequired() && props.metadata.nullable === false
        ? (block) => block
        : props.metadata.isRequired() === false &&
            props.metadata.nullable === true
          ? (block) =>
              ts.factory.createBlock(
                [
                  ts.factory.createIfStatement(
                    ts.factory.createLogicalAnd(
                      ts.factory.createStrictInequality(
                        ts.factory.createIdentifier("undefined"),
                        props.input,
                      ),
                      ts.factory.createStrictInequality(
                        ts.factory.createNull(),
                        props.input,
                      ),
                    ),
                    block,
                  ),
                ],
                true,
              )
          : props.metadata.isRequired() === false
            ? (block) =>
                ts.factory.createBlock(
                  [
                    ts.factory.createIfStatement(
                      ts.factory.createStrictInequality(
                        ts.factory.createIdentifier("undefined"),
                        props.input,
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
                      ts.factory.createStrictInequality(
                        ts.factory.createNull(),
                        props.input,
                      ),
                      block,
                    ),
                  ],
                  true,
                );
    if (union.length === 1) return wrapper(union[0]!.value());
    return wrapper(
      ts.factory.createBlock(
        [
          union
            .map((u, i) =>
              ts.factory.createIfStatement(
                u.is(),
                u.value(),
                i === union.length - 1
                  ? create_throw_error({
                      context: props.context,
                      functor: props.functor,
                      input: props.input,
                      expected: props.metadata.getName(),
                    })
                  : undefined,
              ),
            )
            .reverse()
            .reduce((a, b) =>
              ts.factory.createIfStatement(b.expression, b.thenStatement, a),
            ),
        ],
        true,
      ),
    );
  };

  /* -----------------------------------------------------------
    ATOMIC DECODERS
  ----------------------------------------------------------- */
  const decode_bool = (props: {
    input: ts.Expression;
    index: number | null;
  }): ts.Block =>
    ts.factory.createBlock(
      [
        ...(props.index !== null
          ? [
              decode_tag({
                wire: ProtobufWire.VARIANT,
                index: props.index,
              }),
            ]
          : []),
        callWriter("bool", [props.input]),
      ].map((exp) => ts.factory.createExpressionStatement(exp)),
      true,
    );

  const decode_bigint = (props: {
    candidates: ProtobufAtomic.BigNumeric[];
    type: ProtobufAtomic.BigNumeric;
    input: ts.Expression;
    index: number | null;
  }): IUnion => ({
    is: () =>
      props.candidates.length === 1
        ? ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("bigint"),
            ts.factory.createTypeOfExpression(props.input),
          )
        : ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("bigint"),
              ts.factory.createTypeOfExpression(props.input),
            ),
            NumericRangeFactory.bigint(props.type, props.input),
          ),
    value: () =>
      ts.factory.createBlock(
        [
          ...(props.index !== null
            ? [
                decode_tag({
                  wire: ProtobufWire.VARIANT,
                  index: props.index,
                }),
              ]
            : []),
          callWriter(props.type, [props.input]),
        ].map((exp) => ts.factory.createExpressionStatement(exp)),
        true,
      ),
  });

  const decode_number = (props: {
    candidates: ProtobufAtomic.Numeric[];
    type: ProtobufAtomic.Numeric;
    input: ts.Expression;
    index: number | null;
  }): IUnion => ({
    is: () =>
      props.candidates.length === 1
        ? ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("number"),
            ts.factory.createTypeOfExpression(props.input),
          )
        : ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("number"),
              ts.factory.createTypeOfExpression(props.input),
            ),
            NumericRangeFactory.number(props.type, props.input),
          ),
    value: () =>
      ts.factory.createBlock(
        [
          ...(props.index !== null
            ? [
                decode_tag({
                  wire: get_numeric_wire(props.type),
                  index: props.index,
                }),
              ]
            : []),
          callWriter(props.type, [props.input]),
        ].map((exp) => ts.factory.createExpressionStatement(exp)),
        true,
      ),
  });

  const decode_array_value = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    schema: IProtobufPropertyType.IArray["value"];
    index: number;
    input: ts.Expression;
  }): ts.Block => {
    if (props.schema.type === "bool")
      return decode_bool({
        input: props.input,
        index: null,
      });
    else if (props.schema.type === "bigint")
      return decode_bigint({
        input: props.input,
        type: props.schema.name,
        candidates: [props.schema.name],
        index: null,
      }).value();
    else if (props.schema.type === "number")
      return decode_number({
        input: props.input,
        type: props.schema.name,
        candidates: [props.schema.name],
        index: props.index,
      }).value();
    else if (props.schema.type === "string" || props.schema.type === "bytes")
      return decode_bytes({
        method: props.schema.type,
        index: props.index,
        input: props.input,
      });
    return decode_object({
      context: props.context,
      functor: props.functor,
      schema: props.schema,
      index: props.index,
      input: props.input,
    });
  };

  /* -----------------------------------------------------------
    INSTANCE DECODERS
  ----------------------------------------------------------- */
  const decode_bytes = (props: {
    method: "bytes" | "string";
    index: number;
    input: ts.Expression;
  }): ts.Block =>
    ts.factory.createBlock(
      [
        decode_tag({
          wire: ProtobufWire.LEN,
          index: props.index,
        }),
        callWriter(props.method, [props.input]),
      ].map((expr) => ts.factory.createExpressionStatement(expr)),
      true,
    );

  const decode_array = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    schema: IProtobufPropertyType.IArray;
    input: ts.Expression;
  }): ts.Block => {
    const value: IProtobufPropertyType.IArray["value"] = props.schema.value;
    const wire: ProtobufWire = (() => {
      if (
        value.type === "object" ||
        value.type === "bytes" ||
        value.type === "string"
      )
        return ProtobufWire.LEN;
      else if (value.type === "number" && value.name === "float")
        return ProtobufWire.I32;
      return ProtobufWire.VARIANT;
    })();
    const forLoop = () =>
      ts.factory.createForOfStatement(
        undefined,
        ts.factory.createVariableDeclarationList(
          [ts.factory.createVariableDeclaration("elem")],
          ts.NodeFlags.Const,
        ),
        props.input,
        decode_array_value({
          context: props.context,
          functor: props.functor,
          input: ts.factory.createIdentifier("elem"),
          index: props.schema.index,
          schema: props.schema.value,
        }),
      );
    const length = (block: ts.Block) =>
      ts.factory.createBlock(
        [
          ts.factory.createIfStatement(
            ts.factory.createStrictInequality(
              ExpressionFactory.number(0),
              IdentifierFactory.access(props.input, "length"),
            ),
            block,
          ),
        ],
        true,
      );
    if (wire === ProtobufWire.LEN)
      return length(ts.factory.createBlock([forLoop()], true));
    return length(
      ts.factory.createBlock(
        [
          ts.factory.createExpressionStatement(
            decode_tag({
              wire: ProtobufWire.LEN,
              index: props.schema.index,
            }),
          ),
          ts.factory.createExpressionStatement(callWriter("fork")),
          forLoop(),
          ts.factory.createExpressionStatement(callWriter("ldelim")),
        ],
        true,
      ),
    );
  };

  const decode_object = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    schema: IProtobufSchema.IObject;
    index: number;
    input: ts.Expression;
  }): ts.Block =>
    ts.factory.createBlock(
      [
        decode_tag({
          wire: ProtobufWire.LEN,
          index: props.index,
        }),
        callWriter("fork"),
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(`${PREFIX}o${props.schema.object.index}`),
          ),
          [],
          [props.input],
        ),
        callWriter("ldelim"),
      ].map(ts.factory.createExpressionStatement),
      true,
    );

  const decode_map = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    key: Metadata;
    value: Metadata;
    schema: IProtobufPropertyType.IMap;
    required: boolean;
  }): ts.Block => {};

  /* -----------------------------------------------------------
    BACKGROUND FUNCTIONS
  ----------------------------------------------------------- */
  const PREFIX = "$pe";

  const decode_tag = (props: {
    wire: ProtobufWire;
    index: number;
  }): ts.CallExpression =>
    callWriter("uint32", [
      ExpressionFactory.number((props.index << 3) | props.wire),
    ]);

  const get_numeric_wire = (type: ProtobufAtomic.Numeric) =>
    type === "double"
      ? ProtobufWire.I64
      : type === "float"
        ? ProtobufWire.I32
        : ProtobufWire.VARIANT;

  const create_throw_error = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    expected: string;
    input: ts.Expression;
  }) =>
    ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(
        props.context.importer.internal("throwTypeGuardError"),
        [],
        [
          ts.factory.createObjectLiteralExpression(
            [
              ts.factory.createPropertyAssignment(
                "method",
                ts.factory.createStringLiteral(props.functor.method),
              ),
              ts.factory.createPropertyAssignment(
                "expected",
                ts.factory.createStringLiteral(props.expected),
              ),
              ts.factory.createPropertyAssignment("value", props.input),
            ],
            true,
          ),
        ],
      ),
    );
}

const callWriter = (
  method: string,
  args?: ts.Expression[],
): ts.CallExpression =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(ts.factory.createIdentifier("writer"), method),
    undefined,
    args,
  );

interface IUnion {
  is: () => ts.Expression;
  value: () => ts.Block;
}
