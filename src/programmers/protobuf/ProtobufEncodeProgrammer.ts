import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { NumericRangeFactory } from "../../factories/NumericRangeFactory";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { ProtobufUtil } from "../helpers/ProtobufUtil";
import { ProtobufWire } from "../helpers/ProtobufWire";
import { UnionPredicator } from "../helpers/UnionPredicator";
import { decode_union_object } from "../internal/decode_union_object";

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
                props.functor.use("Sizer"),
                undefined,
                [],
              ),
            ),
            callEncoder(
              "writer",
              ts.factory.createNewExpression(
                props.functor.use("Writer"),
                undefined,
                [ts.factory.createIdentifier("sizer")],
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                IdentifierFactory.access(WRITER(), "buffer"),
                undefined,
                undefined,
              ),
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
      undefined,
      [
        IdentifierFactory.parameter("writer"),
        IdentifierFactory.parameter("input"),
      ],
      TypeFactory.keyword("any"),
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
    object: MetadataObject;
    explore: FeatureProgrammer.IExplore;
  }): ts.ArrowFunction => {
    let index: number = 1;
    const body: ts.Statement[] = props.object.properties
      .map((p) => {
        const block = decode({
          ...props,
          index,
          input: IdentifierFactory.access(props.input, p.key.getSoleLiteral()!),
          metadata: p.value,
        });
        index += ProtobufUtil.size(p.value);
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
  const decode = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    index: number | null;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
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

    // STARTS FROM ATOMIC TYPES
    const unions: IUnion[] = [];
    const numbers = ProtobufUtil.getNumbers(props.metadata);
    const bigints = ProtobufUtil.getBigints(props.metadata);

    for (const atom of ProtobufUtil.getAtomics(props.metadata))
      if (atom === "bool")
        unions.push({
          type: "bool",
          is: () =>
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("boolean"),
              ts.factory.createTypeOfExpression(props.input),
            ),
          value: (index) =>
            decode_bool({
              index,
              input: props.input,
            }),
        });
      else if (
        atom === "int32" ||
        atom === "uint32" ||
        atom === "float" ||
        atom === "double"
      )
        unions.push(
          decode_number({
            candidates: numbers,
            type: atom,
            input: props.input,
          }),
        );
      else if (atom === "int64" || atom === "uint64")
        if (numbers.some((n) => n === atom))
          unions.push(
            decode_number({
              candidates: numbers,
              type: atom,
              input: props.input,
            }),
          );
        else
          unions.push(
            decode_bigint({
              candidates: bigints,
              type: atom,
              input: props.input,
            }),
          );
      else if (atom === "string")
        unions.push({
          type: "string",
          is: () =>
            ts.factory.createStrictEquality(
              ts.factory.createStringLiteral("string"),
              ts.factory.createTypeOfExpression(props.input),
            ),
          value: (index) =>
            decode_bytes({
              method: "string",
              index: index!,
              input: props.input,
            }),
        });

    // CONSIDER BYTES
    if (props.metadata.natives.length)
      unions.push({
        type: "bytes",
        is: () => ExpressionFactory.isInstanceOf("Uint8Array", props.input),
        value: (index) =>
          decode_bytes({
            method: "bytes",
            index: index!,
            input: props.input,
          }),
      });

    // CONSIDER ARRAYS
    if (props.metadata.arrays.length)
      unions.push({
        type: "array",
        is: () => ExpressionFactory.isArray(props.input),
        value: (index) =>
          decode_array({
            ...props,
            array: props.metadata.arrays[0]!,
            explore: {
              ...props.explore,
              from: "array",
            },
            index: index!,
          }),
      });

    // CONSIDER MAPS
    if (props.metadata.maps.length)
      unions.push({
        type: "map",
        is: () => ExpressionFactory.isInstanceOf("Map", props.input),
        value: (index) =>
          decode_map({
            ...props,
            index: index!,
            entry: props.metadata.maps[0]!,
            explore: {
              ...props.explore,
              from: "array",
            },
          }),
      });

    // CONSIDER OBJECTS
    if (props.metadata.objects.length)
      unions.push({
        type: "object",
        is: () =>
          ExpressionFactory.isObject({
            checkNull: true,
            checkArray: false,
            input: props.input,
          }),
        value: (index) =>
          explore_objects({
            ...props,
            level: 0,
            index,
            objects: props.metadata.objects,
            explore: {
              ...props.explore,
              from: "object",
            },
          }),
      });

    // RETURNS
    if (unions.length === 1) return wrapper(unions[0]!.value(props.index));
    else
      return wrapper(
        iterate({
          functor: props.functor,
          index: props.index,
          unions,
          expected: props.metadata.getName(),
          input: props.input,
        }),
      );
  };

  const iterate = (props: {
    functor: FunctionProgrammer;
    index: number | null;
    unions: IUnion[];
    expected: string;
    input: ts.Expression;
  }) =>
    ts.factory.createBlock(
      [
        props.unions
          .map((u, i) =>
            ts.factory.createIfStatement(
              u.is(),
              u.value(props.index ? props.index + i : null),
              i === props.unions.length - 1
                ? create_throw_error(props)
                : undefined,
            ),
          )
          .reverse()
          .reduce((a, b) =>
            ts.factory.createIfStatement(b.expression, b.thenStatement, a),
          ),
      ],
      true,
    );

  const decode_map = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    index: number;
    input: ts.Expression;
    entry: Metadata.Entry;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
    const each: ts.Statement[] = [
      ts.factory.createExpressionStatement(
        decode_tag({
          wire: ProtobufWire.LEN,
          index: props.index,
        }),
      ),
      ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
          IdentifierFactory.access(WRITER(), "fork"),
          undefined,
          undefined,
        ),
      ),
      ...decode({
        ...props,
        index: 1,
        input: ts.factory.createIdentifier("key"),
        metadata: props.entry.key,
      }).statements,
      ...decode({
        ...props,
        index: 2,
        input: ts.factory.createIdentifier("value"),
        metadata: props.entry.value,
      }).statements,
      ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
          IdentifierFactory.access(WRITER(), "ldelim"),
          undefined,
          undefined,
        ),
      ),
    ];
    return ts.factory.createBlock(
      [
        ts.factory.createForOfStatement(
          undefined,
          StatementFactory.entry({
            key: "key",
            value: "value",
          }),
          props.input,
          ts.factory.createBlock(each),
        ),
      ],
      true,
    );
  };

  const decode_object = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    index: number | null;
    input: ts.Expression;
    object: MetadataObject;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
    const top: MetadataProperty = props.object.properties[0]!;
    if (top.key.isSoleLiteral() === false)
      return decode_map({
        ...props,
        index: props.index!,
        input: ts.factory.createCallExpression(
          ts.factory.createIdentifier("Object.entries"),
          [],
          [props.input],
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
      });
    return ts.factory.createBlock(
      [
        ts.factory.createIdentifier(
          `//${props.index !== null ? ` ${props.index} -> ` : ""}${props.object.name}`,
        ),
        ...(props.index !== null
          ? [
              decode_tag({
                wire: ProtobufWire.LEN,
                index: props.index,
              }),
              ts.factory.createCallExpression(
                IdentifierFactory.access(WRITER(), "fork"),
                undefined,
                undefined,
              ),
            ]
          : []),
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(`${PREFIX}o${props.object.index}`),
          ),
          [],
          [props.input],
        ),
        ...(props.index !== null
          ? [
              ts.factory.createCallExpression(
                IdentifierFactory.access(WRITER(), "ldelim"),
                undefined,
                undefined,
              ),
            ]
          : []),
      ].map((expr) => ts.factory.createExpressionStatement(expr)),
      true,
    );
  };

  const decode_array = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    index: number;
    input: ts.Expression;
    array: MetadataArray;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
    const wire = get_standalone_wire(props.array.type.value);
    const forLoop = (index: number | null) =>
      ts.factory.createForOfStatement(
        undefined,
        ts.factory.createVariableDeclarationList(
          [ts.factory.createVariableDeclaration("elem")],
          ts.NodeFlags.Const,
        ),
        props.input,
        decode({
          ...props,
          input: ts.factory.createIdentifier("elem"),
          index,
          metadata: props.array.type.value,
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
      return length(ts.factory.createBlock([forLoop(props.index)], true));
    return length(
      ts.factory.createBlock(
        [
          ts.factory.createExpressionStatement(
            decode_tag({
              wire: ProtobufWire.LEN,
              index: props.index,
            }),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              IdentifierFactory.access(WRITER(), "fork"),
              undefined,
              undefined,
            ),
          ),
          forLoop(null),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              IdentifierFactory.access(WRITER(), "ldelim"),
              undefined,
              undefined,
            ),
          ),
        ],
        true,
      ),
    );
  };

  const decode_bool = (props: { index: number | null; input: ts.Expression }) =>
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
        ts.factory.createCallExpression(
          IdentifierFactory.access(WRITER(), "bool"),
          undefined,
          [props.input],
        ),
      ].map((exp) => ts.factory.createExpressionStatement(exp)),
      true,
    );

  const decode_number = (props: {
    candidates: ProtobufAtomic.Numeric[];
    type: ProtobufAtomic.Numeric;
    input: ts.Expression;
  }): IUnion => ({
    type: props.type,
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
    value: (index) =>
      ts.factory.createBlock(
        [
          ...(index !== null
            ? [
                decode_tag({
                  wire: get_numeric_wire(props.type),
                  index,
                }),
              ]
            : []),
          ts.factory.createCallExpression(
            IdentifierFactory.access(WRITER(), props.type),
            undefined,
            [props.input],
          ),
        ].map((exp) => ts.factory.createExpressionStatement(exp)),
        true,
      ),
  });

  const decode_bigint = (props: {
    candidates: ProtobufAtomic.BigNumeric[];
    type: ProtobufAtomic.BigNumeric;
    input: ts.Expression;
  }): IUnion => ({
    type: props.type,
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
    value: (index) =>
      ts.factory.createBlock(
        [
          ...(index !== null
            ? [
                decode_tag({
                  wire: ProtobufWire.VARIANT,
                  index,
                }),
              ]
            : []),
          ts.factory.createCallExpression(
            IdentifierFactory.access(WRITER(), props.type),
            undefined,
            [props.input],
          ),
        ].map((exp) => ts.factory.createExpressionStatement(exp)),
        true,
      ),
  });

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
        ts.factory.createCallExpression(
          IdentifierFactory.access(WRITER(), props.method),
          undefined,
          [props.input],
        ),
      ].map((expr) => ts.factory.createExpressionStatement(expr)),
      true,
    );

  const decode_tag = (props: {
    wire: ProtobufWire;
    index: number;
  }): ts.CallExpression =>
    ts.factory.createCallExpression(
      IdentifierFactory.access(WRITER(), "uint32"),
      undefined,
      [ExpressionFactory.number((props.index << 3) | props.wire)],
    );

  const get_standalone_wire = (metadata: Metadata): ProtobufWire => {
    if (
      metadata.arrays.length ||
      metadata.objects.length ||
      metadata.maps.length ||
      metadata.natives.length
    )
      return ProtobufWire.LEN;

    const v = ProtobufUtil.getAtomics(metadata)[0]!;
    if (v === "string") return ProtobufWire.LEN;
    else if (
      v === "bool" ||
      v === "int32" ||
      v === "uint32" ||
      v === "int64" ||
      v === "uint64"
    )
      return ProtobufWire.VARIANT;
    else if (v === "float") return ProtobufWire.I32;
    return ProtobufWire.I64;
  };

  const get_numeric_wire = (type: ProtobufAtomic.Numeric) =>
    type === "double"
      ? ProtobufWire.I64
      : type === "float"
        ? ProtobufWire.I32
        : ProtobufWire.VARIANT;

  /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
  const explore_objects = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    level: number;
    index: number | null;
    input: ts.Expression;
    objects: MetadataObject[];
    explore: FeatureProgrammer.IExplore;
    indexes?: Map<MetadataObject, number>;
  }): ts.Block => {
    if (props.objects.length === 1)
      return decode_object({
        context: props.context,
        functor: props.functor,
        index: props.indexes
          ? props.indexes.get(props.objects[0]!)!
          : props.index,
        input: props.input,
        object: props.objects[0]!,
        explore: props.explore,
      });

    const expected: string = `(${props.objects.map((t) => t.name).join(" | ")})`;

    // POSSIBLE TO SPECIALIZE?
    const specList: UnionPredicator.ISpecialized[] = UnionPredicator.object(
      props.objects,
    );
    const indexes: Map<MetadataObject, number> =
      props.indexes ??
      new Map(props.objects.map((t, i) => [t, props.index! + i]));

    if (specList.length === 0) {
      const condition: ts.Expression = decode_union_object({
        checker: (v) =>
          IsProgrammer.decode_object({
            context: props.context,
            functor: props.functor,
            object: v.object,
            input: v.input,
            explore: v.explore,
          }),
        decoder: (v) =>
          ExpressionFactory.selfCall(
            decode_object({
              context: props.context,
              functor: props.functor,
              index: indexes.get(v.object)!,
              input: v.input,
              object: v.object,
              explore: v.explore,
            }),
          ),
        success: (expr) => expr,
        escaper: (v) =>
          create_throw_error({
            functor: props.functor,
            expected: v.expected,
            input: v.input,
          }),
        input: props.input,
        objects: props.objects,
        explore: props.explore,
      });
      return StatementFactory.block(condition);
    }
    const remained: MetadataObject[] = props.objects.filter(
      (t) => specList.find((s) => s.object === t) === undefined,
    );

    // DO SPECIALIZE
    const condition: ts.IfStatement = specList
      .filter((spec) => spec.property.key.getSoleLiteral() !== null)
      .map((spec, i, array) => {
        const key: string = spec.property.key.getSoleLiteral()!;
        const accessor: ts.Expression = IdentifierFactory.access(
          props.input,
          key,
        );
        const pred: ts.Expression = spec.neighbour
          ? IsProgrammer.decode({
              context: props.context,
              functor: props.functor,
              input: accessor,
              metadata: spec.property.value,
              explore: {
                ...props.explore,
                tracable: false,
                postfix: IdentifierFactory.postfix(key),
              },
            })
          : ExpressionFactory.isRequired(accessor);
        return ts.factory.createIfStatement(
          pred,
          ts.factory.createExpressionStatement(
            ExpressionFactory.selfCall(
              decode_object({
                context: props.context,
                functor: props.functor,
                index: indexes.get(spec.object)!,
                input: props.input,
                object: spec.object,
                explore: props.explore,
              }),
            ),
          ),
          i === array.length - 1
            ? remained.length
              ? ts.factory.createExpressionStatement(
                  ExpressionFactory.selfCall(
                    explore_objects({
                      context: props.context,
                      functor: props.functor,
                      level: props.level + 1,
                      index: props.index,
                      input: props.input,
                      objects: remained,
                      explore: props.explore,
                      indexes,
                    }),
                  ),
                )
              : create_throw_error({
                  functor: props.functor,
                  input: props.input,
                  expected,
                })
            : undefined,
        );
      })
      .reverse()
      .reduce((a, b) =>
        ts.factory.createIfStatement(b.expression, b.thenStatement, a),
      );

    // RETURNS WITH CONDITIONS
    return ts.factory.createBlock([condition], true);
  };

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "$pe";

  const create_throw_error = (props: {
    functor: FunctionProgrammer;
    expected: string;
    input: ts.Expression;
  }) =>
    ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(
        props.functor.use("throws"),
        [],
        [
          ts.factory.createObjectLiteralExpression(
            [
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

const WRITER = () => ts.factory.createIdentifier("writer");

interface IUnion {
  type: string;
  is: () => ts.Expression;
  value: (index: number | null) => ts.Block;
}
