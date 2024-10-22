import { OpenApi } from "@samchon/openapi";
import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { LiteralFactory } from "../factories/LiteralFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataCommentTagFactory } from "../factories/MetadataCommentTagFactory";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TemplateFactory } from "../factories/TemplateFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataArray } from "../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../schemas/metadata/MetadataArrayType";
import { MetadataAtomic } from "../schemas/metadata/MetadataAtomic";
import { MetadataMap } from "../schemas/metadata/MetadataMap";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";
import { MetadataSet } from "../schemas/metadata/MetadataSet";
import { MetadataTemplate } from "../schemas/metadata/MetadataTemplate";
import { MetadataTuple } from "../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";

import { ITypiaContext } from "../transformers/ITypiaContext";
import { TransformerError } from "../transformers/TransformerError";

import { StringUtil } from "../utils/StringUtil";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { json_schema_array } from "./internal/json_schema_array";
import { json_schema_bigint } from "./internal/json_schema_bigint";
import { json_schema_boolean } from "./internal/json_schema_boolean";
import { json_schema_number } from "./internal/json_schema_number";
import { json_schema_string } from "./internal/json_schema_string";

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
          if (meta.natives.some((native) => native.name === "WeakSet"))
            output.push(`WeakSet is not supported.`);
          else if (meta.natives.some((native) => native.name === "WeakMap"))
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
          ts.factory.createTypeReferenceNode("Partial", [
            props.context.importer.type({
              file: "typia",
              name: "IRandomGenerator",
            }),
          ]),
          props.init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken),
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
      statements: [
        StatementFactory.mut({
          name: "_generator",
          type: ts.factory.createUnionTypeNode([
            ts.factory.createTypeReferenceNode("Partial", [
              props.context.importer.type({
                file: "typia",
                name: "IRandomGenerator",
              }),
            ]),
            ts.factory.createTypeReferenceNode("undefined"),
          ]),
        }),
      ],
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
              recursive: true,
              expression: coalesce({
                context: props.context,
                method: "array",
                internal: "randomArray",
              }),
              array,
              schema: undefined,
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
            ? value === true
              ? ts.factory.createTrue()
              : ts.factory.createFalse()
            : constant.type === "bigint"
              ? ExpressionFactory.bigint(value as bigint)
              : constant.type === "number"
                ? ExpressionFactory.number(value as number)
                : ts.factory.createStringLiteral(value as string),
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
          object: object.type,
        }),
      );
    for (const native of props.metadata.natives)
      expressions.push(
        decode_native({
          context: props.context,
          functor: props.functor,
          explore: props.explore,
          name: native.name,
        }),
      );
    for (const set of props.metadata.sets)
      expressions.push(
        decode_set({
          ...props,
          set,
        }),
      );
    for (const entry of props.metadata.maps)
      expressions.push(
        decode_map({
          ...props,
          map: entry,
        }),
      );

    // PICK UP A TYPE
    if (expressions.length === 1) return expressions[0]!;
    return ts.factory.createCallExpression(
      ts.factory.createCallExpression(
        props.context.importer.internal("randomPick"),
        undefined,
        [
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
        ],
      ),
      undefined,
      undefined,
    );
  };

  const decode_atomic = (props: {
    context: ITypiaContext;
    atomic: MetadataAtomic;
  }) => {
    const schemaList: OpenApi.IJsonSchema[] =
      props.atomic.type === "boolean"
        ? json_schema_boolean(props.atomic)
        : props.atomic.type === "string"
          ? json_schema_string(props.atomic)
          : props.atomic.type === "bigint"
            ? json_schema_bigint(props.atomic)
            : json_schema_number(props.atomic);
    return schemaList.map((schema) => {
      interface IComposed {
        method: string;
        internal: string;
        arguments: ts.Expression[];
      }
      const composed = ((): IComposed => {
        if (props.atomic.type === "string") {
          const string: OpenApi.IJsonSchema.IString =
            schema as OpenApi.IJsonSchema.IString;
          if (string.format !== undefined) {
            const format: string = string.format!;
            if (format === "date-time")
              return {
                method: "datetime",
                internal: "randomFormatDatetime",
                arguments: [],
              };
            return {
              method: format
                .split("-")
                .map((s, i) => (i === 0 ? s : StringUtil.capitalize(s)))
                .join(""),
              internal: `randomFormat${format
                .split("-")
                .map(StringUtil.capitalize)
                .join("")}`,
              arguments: [],
            };
          } else if (string.pattern !== undefined)
            return {
              method: "pattern",
              internal: "randomPattern",
              arguments: [
                ts.factory.createNewExpression(
                  ts.factory.createIdentifier("RegExp"),
                  undefined,
                  [
                    ts.factory.createStringLiteral(
                      (schema as OpenApi.IJsonSchema.IString).pattern!,
                    ),
                  ],
                ),
              ],
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
              arguments: [LiteralFactory.write(schema)],
            };
        }
        return {
          method: props.atomic.type,
          internal: `random${StringUtil.capitalize(props.atomic.type)}`,
          arguments: [LiteralFactory.write(schema)],
        };
      })();
      return ts.factory.createCallExpression(
        ExpressionFactory.coalesce(
          ts.factory.createPropertyAccessChain(
            ts.factory.createIdentifier("_generator"),
            ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
            ts.factory.createIdentifier(composed.method),
          ),
          props.context.importer.internal(composed.internal),
        ),
        undefined,
        composed.arguments,
      );
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
    const schemaList: OpenApi.IJsonSchema.IArray[] = json_schema_array({
      components,
      array: props.array,
    }) as OpenApi.IJsonSchema.IArray[];
    if (props.array.type.recursive)
      return schemaList.map((schema) =>
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(Prefix.array(props.array.type.index!)),
          ),
          undefined,
          [
            ts.factory.createObjectLiteralExpression(
              Object.entries(schema)
                .filter(([key]) => key !== "items")
                .map(([key, value]) =>
                  ts.factory.createPropertyAssignment(
                    key,
                    LiteralFactory.write(value),
                  ),
                ),
              true,
            ),
          ],
        ),
      );
    return schemaList.map((schema) =>
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
        recursive: props.explore.recursive,
        schema,
      }),
    );
  };

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
    object: MetadataObjectType;
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
    set: MetadataSet;
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
              value: props.set.value,
              recursive: false,
              index: null,
              nullables: [],
              name: props.set.getName(),
            }),
          }),
        })[0]!,
      ],
    );

  const decode_map = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    map: MetadataMap;
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
              name: props.map.getName(),
              index: null,
              recursive: false,
              nullables: [],
              value: Metadata.create({
                ...Metadata.initialize(),
                tuples: [
                  (() => {
                    const type = MetadataTupleType.create({
                      name: `[${props.map.key.getName()}, ${props.map.value.getName()}]`,
                      index: null,
                      recursive: false,
                      nullables: [],
                      elements: [props.map.key, props.map.value],
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
    functor: FunctionProgrammer;
    explore: IExplore;
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
    else if (props.name === "DataView") return decode_native_data_view(props);
    else if (props.name === "Blob") return decode_native_blob(props);
    else if (props.name === "File") return decode_native_file(props);
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
    functor: FunctionProgrammer;
    explore: IExplore;
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
    const [type, minimum, maximum]: [string, number, number] = (() => {
      if (props.name === "Uint8Array" || props.name === "Uint8ClampedArray")
        return ["uint32", 0, 255];
      else if (props.name === "Uint16Array") return ["uint32", 0, 65535];
      else if (props.name === "Uint32Array") return ["uint32", 0, 4294967295];
      else if (props.name === "BigUint64Array")
        return ["uint64", 0, 18446744073709551615];
      else if (props.name === "Int8Array") return ["int32", -128, 127];
      else if (props.name === "Int16Array") return ["int32", -32768, 32767];
      else if (props.name === "Int32Array")
        return ["int32", -2147483648, 2147483647];
      else if (props.name === "BigInt64Array")
        return ["uint64", -9223372036854775808, 9223372036854775807];
      else if (props.name === "Float32Array")
        return ["float", -1.175494351e38, 3.4028235e38];
      return ["double", Number.MIN_VALUE, Number.MAX_VALUE];
    })();
    const atomic: "bigint" | "number" =
      props.name === "BigInt64Array" || props.name === "BigUint64Array"
        ? "bigint"
        : "number";
    const value: Metadata = Metadata.create({
      ...Metadata.initialize(),
      atomics: [
        MetadataAtomic.create({
          type: atomic,
          tags: [
            [
              ...MetadataCommentTagFactory.get({
                kind: "type",
                type: atomic,
                value: type,
              }),
              ...MetadataCommentTagFactory.get({
                kind: "minimum",
                type: "number",
                value: minimum.toString(),
              }),
              ...MetadataCommentTagFactory.get({
                kind: "maximum",
                type: "number",
                value: maximum.toString(),
              }),
            ],
          ],
        }),
      ],
    });
    return ts.factory.createNewExpression(
      ts.factory.createIdentifier(props.name),
      [],
      decode_array({
        context: props.context,
        functor: props.functor,
        explore: props.explore,
        array: MetadataArray.create({
          tags: [],
          type: MetadataArrayType.create({
            name: `${props.name}<${atomic}>`,
            value,
            recursive: false,
            index: null,
            nullables: [],
          }),
        }),
      }),
    );
  };

  const decode_native_blob = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Blob"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              context: props.context,
              functor: props.functor,
              explore: props.explore,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
      ],
    );

  const decode_native_file = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("File"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              context: props.context,
              functor: props.functor,
              explore: props.explore,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
        ts.factory.createTemplateExpression(ts.factory.createTemplateHead(""), [
          ts.factory.createTemplateSpan(
            writeRangedString({
              context: props.context,
              minLength: 1,
              maxLength: 8,
            }),
            ts.factory.createTemplateMiddle("."),
          ),
          ts.factory.createTemplateSpan(
            writeRangedString({
              context: props.context,
              minLength: 3,
              maxLength: 3,
            }),
            ts.factory.createTemplateTail(""),
          ),
        ]),
      ],
    );

  const decode_native_array_buffer = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
    name: "ArrayBuffer" | "SharedArrayBuffer";
  }): ts.Expression =>
    props.name === "ArrayBuffer"
      ? IdentifierFactory.access(
          decode_native_byte_array({
            context: props.context,
            functor: props.functor,
            explore: props.explore,
            name: "Uint8Array",
          }),
          "buffer",
        )
      : ExpressionFactory.selfCall(
          ts.factory.createBlock(
            [
              StatementFactory.constant({
                name: "length",
                value: decode_atomic({
                  context: props.context,
                  atomic: MetadataAtomic.create({
                    type: "number",
                    tags: [
                      MetadataCommentTagFactory.get({
                        type: "number",
                        kind: "type",
                        value: "uint32",
                      }),
                    ],
                  }),
                })[0]!,
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
                      ts.factory.createPropertyAccessExpression(
                        ts.factory.createCallExpression(
                          ts.factory.createPropertyAccessExpression(
                            ts.factory.createNewExpression(
                              ts.factory.createIdentifier("Array"),
                              undefined,
                              [ts.factory.createIdentifier("length")],
                            ),
                            ts.factory.createIdentifier("fill"),
                          ),
                          undefined,
                          [ts.factory.createNumericLiteral("0")],
                        ),
                        ts.factory.createIdentifier("map"),
                      ),
                      undefined,
                      [
                        ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [],
                          undefined,
                          undefined,
                          decode_atomic({
                            context: props.context,
                            atomic: MetadataAtomic.create({
                              type: "number",
                              tags: [
                                [
                                  ...MetadataCommentTagFactory.get({
                                    kind: "type",
                                    type: "number",
                                    value: "uint32",
                                  }),
                                  ...MetadataCommentTagFactory.get({
                                    kind: "minimum",
                                    type: "number",
                                    value: "0",
                                  }),
                                  ...MetadataCommentTagFactory.get({
                                    kind: "maximum",
                                    type: "number",
                                    value: "255",
                                  }),
                                ],
                              ],
                            }),
                          })[0]!,
                        ),
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

  const decode_native_data_view = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    explore: IExplore;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("DataView"),
      [],
      [
        IdentifierFactory.access(
          decode_native_byte_array({
            context: props.context,
            functor: props.functor,
            explore: props.explore,
            name: "Uint8Array",
          }),
          "buffer",
        ),
      ],
    );

  const decode_regexp = (context: ITypiaContext) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("RegExp"),
      [],
      [
        ts.factory.createCallExpression(
          coalesce({
            context,
            method: "regex",
            internal: "randomFormatRegex",
          }),
          undefined,
          undefined,
        ),
      ],
    );

  const writeRangedString = (props: {
    context: ITypiaContext;
    minLength: number;
    maxLength: number;
  }): ts.CallExpression =>
    decode_atomic({
      context: props.context,
      atomic: MetadataAtomic.create({
        type: "string",
        tags: [
          [
            ...MetadataCommentTagFactory.get({
              kind: "minLength",
              type: "string",
              value: props.minLength.toString(),
            }),
            ...MetadataCommentTagFactory.get({
              kind: "maxLength",
              type: "string",
              value: props.maxLength.toString(),
            }),
          ],
        ],
      }),
    })[0]!;
}

const coalesce = (props: {
  context: ITypiaContext;
  method: string;
  internal: string;
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
  object: (i: number) => `_ro${i}`,
  array: (i: number) => `_ra${i}`,
  tuple: (i: number) => `_rt${i}`,
};
