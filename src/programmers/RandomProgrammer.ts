import { OpenApi } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TemplateFactory } from "../factories/TemplateFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataArray } from "../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataAtomic } from "../schemas/metadata/MetadataAtomic";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataTemplate } from "../schemas/metadata/MetadataTemplate";
import { MetadataTuple } from "../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";

import { ITypiaContext } from "../transformers/ITypiaContext";
import { TransformerError } from "../transformers/TransformerError";

import { StringUtil } from "../utils/StringUtil";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { application_boolean } from "./internal/application_boolean";
import { application_number } from "./internal/application_number";
import { application_string } from "./internal/application_string";
import { LiteralFactory } from "../factories/LiteralFactory";
import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { application_array } from "./internal/application_array";
import { application_v31_schema } from "./internal/application_v31_schema";

export namespace RandomProgrammer {
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }
  export interface IDecomposeProps {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }

  export const decompose = (
    props: IDecomposeProps,
  ): FeatureProgrammer.IDecomposed => {
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
        validate: (meta) => {
          const output: string[] = [];
          if (meta.natives.some((n) => n === "WeakSet"))
            output.push(`WeakSet is not supported.`);
          else if (meta.natives.some((n) => n === "WeakMap"))
            output.push(`WeakMap is not supported.`);
          return output;
        },
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from({
        code: props.functor.method,
        errors: result.errors,
      });

    // GENERATE FUNCTION
    const functions: Record<string, ts.VariableStatement> = Object.fromEntries([
      ...write_object_functions({
        context: props.context,
        functor: props.functor,
        collection,
      }).map((v, i) => [Prefix.object(i), v]),
      ...write_array_functions({
        context: props.context,
        functor: props.functor,
        collection,
      }).map((v, i) => [Prefix.array(i), v]),
      ...write_tuple_functions({
        context: props.context,
        functor: props.functor,
        collection,
      }).map((v, i) => [Prefix.tuple(i), v]),
    ]);
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        IdentifierFactory.parameter(
          "generator",
          ts.factory.createTypeReferenceNode("Partial<typia.IRandomGenerator>"),
          props.init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken),
        ),
      ],
      ts.factory.createImportTypeNode(
        ts.factory.createLiteralTypeNode(
          ts.factory.createStringLiteral("typia"),
        ),
        undefined,
        ts.factory.createIdentifier("Resolved"),
        [
          ts.factory.createTypeReferenceNode(
            props.name ??
              TypeFactory.getFullName({
                checker: props.context.checker,
                type: props.type,
              }),
          ),
        ],
        false,
      ),
      undefined,
      ts.factory.createBlock(
        [
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createIdentifier("_generator"),
              ts.SyntaxKind.EqualsToken,
              ts.factory.createIdentifier("generator"),
            ),
          ),
          ts.factory.createReturnStatement(
            decode({
              context: props.context,
              functor: props.functor,
              explore: {
                function: false,
                recursive: false,
              },
              metadata: result.data,
            }),
          ),
        ],
        true,
      ),
    );
    return {
      functions,
      statements: [StatementFactory.mut({ name: "_generator" })],
      arrow,
    };
  };

  export const write = (props: IProps) => {
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

  const write_object_functions = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection.objects().map((obj, i) =>
      StatementFactory.constant({
        name: Prefix.object(i),
        value: ts.factory.createArrowFunction(
          undefined,
          undefined,
          [
            IdentifierFactory.parameter(
              "_recursive",
              TypeFactory.keyword("boolean"),
              ts.factory.createIdentifier(String(obj.recursive)),
            ),
            IdentifierFactory.parameter(
              "_depth",
              TypeFactory.keyword("number"),
              ExpressionFactory.number(0),
            ),
          ],
          TypeFactory.keyword("any"),
          undefined,
          RandomJoiner.object({
            decode: (metadata) =>
              decode({
                context: props.context,
                functor: props.functor,
                explore: {
                  recursive: obj.recursive,
                  function: true,
                },
                metadata,
              }),
            object: obj,
          }),
        ),
      }),
    );

  const write_array_functions = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .arrays()
      .filter((a) => a.recursive)
      .map((array, i) =>
        StatementFactory.constant({
          name: Prefix.array(i),
          value: ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
              IdentifierFactory.parameter(
                "_schema",
                TypeFactory.keyword("boolean"),
              ),
              IdentifierFactory.parameter(
                "_recursive",
                TypeFactory.keyword("boolean"),
                ts.factory.createTrue(),
              ),
              IdentifierFactory.parameter(
                "_depth",
                TypeFactory.keyword("number"),
                ExpressionFactory.number(0),
              ),
            ],
            TypeFactory.keyword("any"),
            undefined,
            RandomJoiner.array({
              decode: (metadata) =>
                decode({
                  context: props.context,
                  functor: props.functor,
                  explore: {
                    recursive: true,
                    function: true,
                  },
                  metadata,
                }),
              expression: coalesce({
                context: props.context,
                method: "array",
                internal: "randomArray",
              }),
              array,
              schema: undefined
            }),
          ),
        }),
      );

  const write_tuple_functions = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .tuples()
      .filter((a) => a.recursive)
      .map((tuple, i) =>
        StatementFactory.constant({
          name: Prefix.tuple(i),
          value: ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
              IdentifierFactory.parameter(
                "_recursive",
                TypeFactory.keyword("boolean"),
                ts.factory.createTrue(),
              ),
              IdentifierFactory.parameter(
                "_depth",
                TypeFactory.keyword("number"),
                ExpressionFactory.number(0),
              ),
            ],
            TypeFactory.keyword("any"),
            undefined,
            RandomJoiner.tuple({
              decode: (metadata) =>
                decode({
                  context: props.context,
                  functor: props.functor,
                  explore: {
                    function: true,
                    recursive: true,
                  },
                  metadata,
                }),
              elements: tuple.elements,
            }),
          ),
        }),
      );

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  const decode = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    metadata: Metadata;
  }): ts.Expression => {
    const expressions: ts.Expression[] = [];
    if (props.metadata.any === true)
      expressions.push(ts.factory.createStringLiteral("any type used..."));

    // NULL COALESCING
    if (
      props.metadata.isRequired() === false ||
      props.metadata.functions.length !== 0
    )
      expressions.push(ts.factory.createIdentifier("undefined"));
    if (props.metadata.nullable === true)
      expressions.push(ts.factory.createNull());

    // CONSTANT TYPES
    for (const constant of props.metadata.constants)
      for (const { value } of constant.values)
        expressions.push(
          constant.type === "boolean"
            ? value === true ? ts.factory.createTrue() : ts.factory.createFalse()
            : constant.type === "bigint"
            ? ExpressionFactory.bigint(<bigint>value)
            : constant.type === "number"
            ? ExpressionFactory.number(<number>value)
            : ts.factory.createStringLiteral(<string>value),
        );

    // ATOMIC VARIABLES
    for (const template of props.metadata.templates)
      expressions.push(
        decode_template({
          ...props,
          template,
        }),
      );
    for (const atomic of props.metadata.atomics)
      expressions.push(
        ...decode_atomic({
          context: props.context,
          atomic,
        }),
      );

    // INSTANCE TYPES
    if (props.metadata.escaped)
      expressions.push(
        decode({
          ...props,
          metadata: props.metadata.escaped.returns,
        }),
      );
    for (const array of props.metadata.arrays)
      expressions.push(
        ...decode_array({
          ...props,
          array,
        }),
      );
    for (const tuple of props.metadata.tuples)
      expressions.push(
        decode_tuple({
          ...props,
          tuple,
        }),
      );
    for (const object of props.metadata.objects)
      expressions.push(
        decode_object({
          ...props,
          object,
        }),
      );
    for (const name of props.metadata.natives)
      expressions.push(
        decode_native({
          context: props.context,
          name,
        }),
      );
    for (const metadata of props.metadata.sets)
      expressions.push(
        decode_set({
          ...props,
          metadata,
        }),
      );
    for (const entry of props.metadata.maps)
      expressions.push(
        decode_map({
          ...props,
          entry,
        }),
      );

    // PICK UP A TYPE
    if (expressions.length === 1) return expressions[0]!;
    return ts.factory.createCallExpression(
      ts.factory.createCallExpression(props.context.importer.internal("randomPick"), undefined, [
        ts.factory.createArrayLiteralExpression(
          expressions.map((expr) =>
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [],
              undefined,
              undefined,
              expr,
            ),
          ),
          true,
        ),
      ]),
      undefined,
      undefined,
    );
  };

  const decode_atomic = (props: {
    context: ITypiaContext;
    atomic: MetadataAtomic;
  }) => {
    // const schemaList: OpenApi.IJsonSchema[] =
    //   props.atomic.type === "boolean"
    //     ? application_boolean<"3.1">(props.atomic)
    //     : props.atomic.type === "number" || props.atomic.type === "bigint"
    //       ? application_number<"3.1">(props.atomic)
    //       : application_string<"3.1">(props.atomic);
    const schemaList: OpenApi.IJsonSchema[] = [
      {
        type: props.atomic.type === "bigint" ? "integer" : props.atomic.type,
      }
    ];
    application_number;
    application_string;
    application_boolean;
    return schemaList.map((schema) => {
      const { method, internal } = (() => {
        if (props.atomic.type === "string") {
          const string: OpenApi.IJsonSchema.IString =
            schema as OpenApi.IJsonSchema.IString;
          if (string.format !== undefined) {
            const format: string = string.format!;
            if (format === "date-time")
              return {
                method: "datetime",
                internal: "randomFormatDatetime",
              };
            return {
              method: format
                .split("-")
                .map((s, i) => (i === 0 ? s : StringUtil.capitalize(s)))
                .join(""),
              internal: `randomFormat${StringUtil.capitalize(format)}`,
            };
          } else if (string.pattern !== undefined)
            return {
              method: "pattern",
              internal: "randomPattern",
            };
        } else if (props.atomic.type === "number") {
          const number:
            | OpenApi.IJsonSchema.INumber
            | OpenApi.IJsonSchema.IInteger = schema as
            | OpenApi.IJsonSchema.INumber
            | OpenApi.IJsonSchema.IInteger;
          if (number.type === "integer")
            return {
              method: "integer",
              internal: "randomInteger",
            };
        }
        return {
          method: props.atomic.type,
          internal: `random${StringUtil.capitalize(props.atomic.type)}`,
        };
      })();
      return ts.factory.createCallExpression(
        ExpressionFactory.coalesce(
        ts.factory.createPropertyAccessChain(
          ts.factory.createIdentifier("_generator"),
          ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
          ts.factory.createIdentifier(method),
        ),
        props.context.importer.internal(internal),
      ),
      undefined,
      [
        LiteralFactory.write(schema)
      ]
    )
    });
  };

  const decode_template = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    template: MetadataTemplate;
  }) =>
    TemplateFactory.generate(
      props.template.row.map((metadata) =>
        decode({
          ...props,
          metadata,
        }),
      ),
    );

  const decode_array = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    array: MetadataArray;
  }): ts.Expression[] => {
    const components: OpenApi.IComponents = {};
    const schemaList: OpenApi.IJsonSchema.IArray[] = application_array<"3.1">({
      generator: (value) => application_v31_schema({
        blockNever: true,
        components,
        attribute: {},
        metadata: value,
      })!,
      components,
      array: props.array,
    }) as OpenApi.IJsonSchema.IArray[];
    if (props.array.type.recursive)
      return schemaList.map(schema =>
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(Prefix.array(props.array.type.index!)),
          ),
          undefined,
          [
            ts.factory.createObjectLiteralExpression(Object.entries(schema)
            .filter(([key]) => key !== "items")
            .map(([key, value]) =>
              ts.factory.createPropertyAssignment(
                key,
                LiteralFactory.write(value),
              ),
            ), true),
          ],
        ),
      );
    return schemaList.map(schema => 
      RandomJoiner.array({
        decode: (metadata) =>
          decode({
            ...props,
            metadata,
          }),
        expression: coalesce({
          context: props.context,
          method: "array",
          internal: "randomArray",
        }),
        array: props.array.type,
        schema,
      })
    );
  }

  const decode_tuple = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    tuple: MetadataTuple;
  }): ts.Expression =>
    props.tuple.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(Prefix.tuple(props.tuple.type.index!)),
          ),
          undefined,
          [
            ts.factory.createTrue(),
            props.explore.recursive
              ? ts.factory.createAdd(
                  ExpressionFactory.number(1),
                  ts.factory.createIdentifier("_depth"),
                )
              : ExpressionFactory.number(0),
          ],
        )
      : RandomJoiner.tuple({
          decode: (metadata) =>
            decode({
              ...props,
              metadata,
            }),
          elements: props.tuple.type.elements,
        });

  const decode_object = (props: {
    functor: FunctionProgrammer;
    explore: IExplore;
    object: MetadataObject;
  }) =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.functor.useLocal(Prefix.object(props.object.index)),
      ),
      undefined,
      props.explore.function
        ? [
            props.explore.recursive
              ? ts.factory.createTrue()
              : ts.factory.createIdentifier("_recursive"),
            ts.factory.createConditionalExpression(
              ts.factory.createIdentifier("_recursive"),
              undefined,
              ts.factory.createAdd(
                ExpressionFactory.number(1),
                ts.factory.createIdentifier("_depth"),
              ),
              undefined,
              ts.factory.createIdentifier("_depth"),
            ),
          ]
        : undefined,
    );

  /* -----------------------------------------------------------
    NATIVE CLASSES
  ----------------------------------------------------------- */
  const decode_set = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    metadata: Metadata;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Set"),
      undefined,
      [
        decode_array({
          ...props,
          array: MetadataArray.create({
            tags: [],
            type: MetadataArrayType.create({
              value: props.metadata,
              recursive: false,
              index: null,
              nullables: [],
              name: `Set<${props.metadata.getName()}>`,
            }),
          }),
        })[0]!,
      ],
    );

  const decode_map = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    entry: Metadata.Entry;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Map"),
      undefined,
      [
        decode_array({
          ...props,
          array: MetadataArray.create({
            tags: [],
            type: MetadataArrayType.create({
              name: `Map<${props.entry.key.getName()}, ${props.entry.value.getName()}>`,
              index: null,
              recursive: false,
              nullables: [],
              value: Metadata.create({
                ...Metadata.initialize(),
                tuples: [
                  (() => {
                    const type = MetadataTupleType.create({
                      name: `[${props.entry.key.getName()}, ${props.entry.value.getName()}]`,
                      index: null,
                      recursive: false,
                      nullables: [],
                      elements: [props.entry.key, props.entry.value],
                    });
                    type.of_map = true;
                    return MetadataTuple.create({
                      type,
                      tags: [],
                    });
                  })(),
                ],
              }),
            }),
          }),
        })[0]!,
      ],
    );

  const decode_native = (props: {
    context: ITypiaContext;
    name: string;
  }): ts.Expression => {
    if (
      props.name === "Boolean" ||
      props.name === "Number" ||
      props.name === "BigInt" ||
      props.name === "String"
    )
      return decode_atomic({
        context: props.context,
        atomic: MetadataAtomic.create({
          type: props.name.toLowerCase() as "string",
          tags: [],
        }),
      })[0]!;
    else if (props.name === "Date") return decode_native_date(props.context);
    else if (
      props.name === "Uint8Array" ||
      props.name === "Uint8ClampedArray" ||
      props.name === "Uint16Array" ||
      props.name === "Uint32Array" ||
      props.name === "BigUint64Array" ||
      props.name === "Int8Array" ||
      props.name === "Int16Array" ||
      props.name === "Int32Array" ||
      props.name === "BigInt64Array" ||
      props.name === "Float32Array" ||
      props.name === "Float64Array"
    )
      return decode_native_byte_array({
        ...props,
        name: props.name,
      });
    else if (props.name === "ArrayBuffer" || props.name === "SharedArrayBuffer")
      return decode_native_array_buffer({
        ...props,
        name: props.name,
      });
    else if (props.name === "DataView")
      return decode_native_data_view(props.context);
    else if (props.name === "Blob") return decode_native_blob(props.context);
    else if (props.name === "File") return decode_native_file(props.context);
    else if (props.name === "RegExp") return decode_regexp(props.context);
    else
      return ts.factory.createNewExpression(
        ts.factory.createIdentifier(props.name),
        undefined,
        [],
      );
  };

  const decode_native_date = (context: ITypiaContext) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Date"),
      undefined,
      [
        ts.factory.createCallExpression(
          coalesce({
            context,
            method: "datetime",
            internal: "randomFormatDatetime",
         }),
          undefined,
          [],
        ),
      ],
    );

  const decode_native_byte_array = (props: {
    context: ITypiaContext;
    name:
      | "Uint8Array"
      | "Uint8ClampedArray"
      | "Uint16Array"
      | "Uint32Array"
      | "BigUint64Array"
      | "Int8Array"
      | "Int16Array"
      | "Int32Array"
      | "BigInt64Array"
      | "Float32Array"
      | "Float64Array";
  }): ts.Expression => {
    new BigInt64Array();
    const [minimum, maximum]: [number, number] = (() => {
      if (props.name === "Uint8Array" || props.name === "Uint8ClampedArray")
        return [0, 255];
      else if (props.name === "Uint16Array") return [0, 65535];
      else if (props.name === "Uint32Array") return [0, 4294967295];
      else if (props.name === "BigUint64Array")
        return [0, 18446744073709551615];
      else if (props.name === "Int8Array") return [-128, 127];
      else if (props.name === "Int16Array") return [-32768, 32767];
      else if (props.name === "Int32Array") return [-2147483648, 2147483647];
      else if (props.name === "BigInt64Array")
        return [-9223372036854775808, 9223372036854775807];
      else if (props.name === "Float32Array")
        return [-1.175494351e38, 3.4028235e38];
      return [Number.MIN_VALUE, Number.MAX_VALUE];
    })();
    const literal =
      props.name === "BigInt64Array" || props.name === "BigUint64Array"
        ? ExpressionFactory.bigint
        : ExpressionFactory.number;
    const atomic = props.name === "Float32Array" || props.name === "Float64Array"
    ? "number"
    : props.name === "BigInt64Array" ||
        props.name === "BigUint64Array"
      ? "bigint"
      : "integer"
    return ts.factory.createNewExpression(
      ts.factory.createIdentifier(props.name),
      [],
      [
        ts.factory.createCallExpression(
          coalesce({
            context: props.context,
            method: "array",
            internal: "randomArray"
          }),
          undefined,
          [
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [],
              TypeFactory.keyword("any"),
              undefined,
              ts.factory.createCallExpression(
                coalesce({
                  context: props.context,
                  method: atomic,
                  internal: `random${StringUtil.capitalize(atomic)}`,
                }),
                undefined,
                [literal(minimum), literal(maximum)],
              ),
            ),
          ],
        ),
      ],
    );
  };

  const decode_native_blob = (context: ITypiaContext) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Blob"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              context,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
      ],
    );

  const decode_native_file = (context: ITypiaContext) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("File"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              context,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
        ts.factory.createTemplateExpression(ts.factory.createTemplateHead(""), [
          ts.factory.createTemplateSpan(
            writeFixedStringLength({
              context,
              length: 8,
            }),
            ts.factory.createTemplateMiddle("."),
          ),
          ts.factory.createTemplateSpan(
            writeFixedStringLength({
              context,
              length: 3,
            }),
            ts.factory.createTemplateTail(""),
          ),
        ]),
      ],
    );

  const decode_native_array_buffer = (props: {
    context: ITypiaContext;
    name: "ArrayBuffer" | "SharedArrayBuffer";
  }): ts.Expression =>
    props.name === "ArrayBuffer"
      ? IdentifierFactory.access(
          decode_native_byte_array({
            context: props.context,
            name: "Uint8Array",
          }),
          "buffer",
        )
      : ExpressionFactory.selfCall(
          ts.factory.createBlock(
            [
              StatementFactory.constant({
                name: "length",
                value: ts.factory.createCallExpression(
                  coalesce({
                    context: props.context,
                    method: "integer",
                    internal: "randomInteger",
                  }),
                  undefined,
                  [],
                ),
              }),
              StatementFactory.constant({
                name: "buffer",
                value: ts.factory.createNewExpression(
                  ts.factory.createIdentifier("SharedArrayBuffer"),
                  [],
                  [ts.factory.createIdentifier("length")],
                ),
              }),
              StatementFactory.constant({
                name: "bytes",
                value: ts.factory.createNewExpression(
                  ts.factory.createIdentifier("Uint8Array"),
                  [],
                  [ts.factory.createIdentifier("buffer")],
                ),
              }),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  IdentifierFactory.access(
                    ts.factory.createIdentifier("bytes"),
                    "set",
                  ),
                  undefined,
                  [
                    ts.factory.createCallExpression(
                      coalesce({
                        context: props.context,
                        method: "array",
                        internal: "randomArray",
                      }),
                      undefined,
                      [
                        ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [],
                          TypeFactory.keyword("any"),
                          undefined,
                          ts.factory.createCallExpression(
                            coalesce({
                              context: props.context,
                              method: "integer",
                              internal: "randomInteger",
                            }),
                            undefined,
                            [
                              LiteralFactory.write({
                                minimum: 0,
                                maximum: 255,
                              }),
                            ],
                          ),
                        ),
                        ts.factory.createIdentifier("length"),
                      ],
                    ),
                    ExpressionFactory.number(0),
                  ],
                ),
              ),
              ts.factory.createReturnStatement(
                ts.factory.createIdentifier("buffer"),
              ),
            ],
            true,
          ),
        );

  const decode_native_data_view = (context: ITypiaContext) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("DataView"),
      [],
      [
        IdentifierFactory.access(
          decode_native_byte_array({
            context,
            name: "Uint8Array",
          }),
          "buffer",
        ),
      ],
    );

  const decode_regexp = (context: ITypiaContext) =>
    ts.factory.createCallExpression(
    coalesce({
      context,
      method: "regex",
      internal: "randomRegex",
    }),
    undefined,
    undefined,
  );

  const writeFixedStringLength = (props: {
    context: ITypiaContext;
    length: number;
  }): ts.CallExpression =>
    decode_atomic({
      context: props.context,
      atomic: MetadataAtomic.create({
        type: "string",
        tags: [[
          {
            target: "string",
            name: `MinLength<${props.length}>`,
            kind: "minLength",
            value: `${props.length}`,
            validate: `${props.length} <= $input.length`,
            exclusive: true,
            schema: {
              minLength: props.length,
            }
          } satisfies IMetadataTypeTag,
          {
            target: "string",
            name: `MaxLength<${props.length}>`,
            kind: "maxLength",
            value: `${props.length}`,
            validate: `$input.length <= ${props.length}`,
            exclusive: true,
            schema: {
              maxLength: props.length,
            }
          } satisfies IMetadataTypeTag,
        ]],
      }),
    })[0]!;
}

const coalesce = (props: {
  context: ITypiaContext, 
  method: string,
  internal: string,
}): ts.Expression => 
  ExpressionFactory.coalesce(
    ts.factory.createPropertyAccessChain(
      ts.factory.createIdentifier("_generator"),
      ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
      ts.factory.createIdentifier(props.method),
    ),
    props.context.importer.internal(props.internal),
  );

interface IExplore {
  function: boolean;
  recursive: boolean;
}

const Prefix = {
  object: (i: number) => `$ro${i}`,
  array: (i: number) => `$ra${i}`,
  tuple: (i: number) => `$rt${i}`,
};
