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

import { Escaper } from "../utils/Escaper";

import { Format } from "../tags";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { RandomRanger } from "./helpers/RandomRanger";
import { random_custom } from "./internal/random_custom";

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
    importer: FunctionImporter;
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
      throw TransformerError.from(`typia.${props.importer.method}`)(
        result.errors,
      );

    // GENERATE FUNCTION
    const functions: Record<string, ts.VariableStatement> = Object.fromEntries([
      ...write_object_functions({
        importer: props.importer,
        collection,
      }).map((v, i) => [Prefix.object(i), v]),
      ...write_array_functions({
        importer: props.importer,
        collection,
      }).map((v, i) => [Prefix.array(i), v]),
      ...write_tuple_functions({
        importer: props.importer,
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
              importer: props.importer,
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
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };

  const write_object_functions = (props: {
    importer: FunctionImporter;
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
            coalesce: coalesce(props.importer),
            decode: (metadata) =>
              decode({
                importer: props.importer,
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
    importer: FunctionImporter;
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
                "length",
                TypeFactory.keyword("number"),
              ),
              IdentifierFactory.parameter(
                "unique",
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
              coalesce: coalesce(props.importer),
              decode: (metadata) =>
                decode({
                  importer: props.importer,
                  explore: {
                    recursive: true,
                    function: true,
                  },
                  metadata,
                }),
              explore: {
                recursive: true,
                function: true,
              },
              length: ts.factory.createIdentifier("length"),
              unique: ts.factory.createIdentifier("unique"),
              metadata: array.value,
            }),
          ),
        }),
      );

  const write_tuple_functions = (props: {
    importer: FunctionImporter;
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
                  importer: props.importer,
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
    importer: FunctionImporter;
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
        expressions.push(decode_atomic(value));

    // ATOMIC VARIABLES
    for (const template of props.metadata.templates)
      expressions.push(
        decode_template({
          ...props,
          template,
        }),
      );
    for (const atomic of props.metadata.atomics)
      if (atomic.type === "boolean")
        expressions.push(decode_boolean(props.importer));
      else if (atomic.type === "number")
        expressions.push(
          ...decode_number({
            importer: props.importer,
            atomic,
          }),
        );
      else if (atomic.type === "string")
        expressions.push(
          ...decode_string({
            importer: props.importer,
            atomic,
          }),
        );
      else if (atomic.type === "bigint")
        expressions.push(
          ...decode_bigint({
            importer: props.importer,
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
          importer: props.importer,
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
      ts.factory.createCallExpression(props.importer.use("pick"), undefined, [
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

  const decode_boolean = (importer: FunctionImporter) =>
    ts.factory.createCallExpression(
      coalesce(importer)("boolean"),
      undefined,
      undefined,
    );

  const decode_atomic = (value: Atomic) =>
    typeof value === "boolean"
      ? ts.factory.createIdentifier(value.toString())
      : typeof value === "number"
        ? ExpressionFactory.number(value)
        : typeof value === "string"
          ? ts.factory.createStringLiteral(value)
          : ExpressionFactory.bigint(Number(value));

  const decode_template = (props: {
    importer: FunctionImporter;
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

  const decode_number = (props: {
    importer: FunctionImporter;
    atomic: MetadataAtomic;
  }): ts.Expression[] =>
    (props.atomic.tags.length ? props.atomic.tags : [[]]).map((tags) => {
      const type = tags.find(
        (t) =>
          t.kind === "type" && (t.value === "int32" || t.value === "int64"),
      )
        ? "int"
        : tags.find(
              (t) =>
                t.kind === "type" &&
                (t.value === "uint32" || t.value === "uint64"),
            )
          ? "uint"
          : "double";
      const multiply = tags.find((t) => t.kind === "multipleOf");
      return random_custom({
        accessor: coalesce(props.importer),
        type: "number",
        tags,
        expression: RandomRanger.number({
          config: {
            type,
            transform: (value) => ExpressionFactory.number(value),
            setter: (args) =>
              ts.factory.createCallExpression(
                type !== "double" || multiply !== undefined
                  ? coalesce(props.importer)("integer")
                  : coalesce(props.importer)("number"),
                undefined,
                args.map((val) => ExpressionFactory.number(val)),
              ),
          },
          defaults: {
            minimum: 0,
            maximum: 100,
            gap: 10,
          },
          tags,
        }),
      });
    });

  const decode_bigint = (props: {
    importer: FunctionImporter;
    atomic: MetadataAtomic;
  }): ts.Expression[] =>
    (props.atomic.tags.length ? props.atomic.tags : [[]]).map((tags) =>
      random_custom({
        accessor: coalesce(props.importer),
        type: "bigint",
        tags,
        expression: RandomRanger.number({
          config: {
            type: tags.find(
              (t) =>
                t.kind === "type" &&
                (t.value === "uint" || t.value === "uint64"),
            )
              ? "uint"
              : "int",
            transform: (value) => ExpressionFactory.bigint(value),
            setter: (args) =>
              ts.factory.createCallExpression(
                coalesce(props.importer)("bigint"),
                undefined,
                args.map((value) => ExpressionFactory.bigint(value)),
              ),
          },
          defaults: {
            minimum: 0,
            maximum: 100,
            gap: 10,
          },
          tags,
        }),
      }),
    );

  const decode_string = (props: {
    importer: FunctionImporter;
    atomic: MetadataAtomic;
  }): ts.Expression[] =>
    (props.atomic.tags.length ? props.atomic.tags : [[]]).map((tags) =>
      random_custom({
        accessor: coalesce(props.importer),
        type: "string",
        tags,
        expression: (() => {
          for (const t of tags)
            if (t.kind === "format")
              return ts.factory.createCallExpression(
                coalesce(props.importer)(emendFormat(t.value)),
                undefined,
                undefined,
              );
            else if (t.kind === "pattern")
              return ts.factory.createCallExpression(
                coalesce(props.importer)("pattern"),
                undefined,
                [
                  ts.factory.createIdentifier(
                    `RegExp(${JSON.stringify(t.value)})`,
                  ),
                ],
              );

          const tail = RandomRanger.length({
            coalesce: coalesce(props.importer),
            defaults: {
              minimum: 5,
              maximum: 25,
              gap: 5,
            },
            accessors: {
              minimum: "minLength",
              maximum: "maxLength",
            },
            tags,
          });
          return ts.factory.createCallExpression(
            coalesce(props.importer)("string"),
            undefined,
            tail ? [tail] : undefined,
          );
        })(),
      }),
    );

  const decode_array = (props: {
    importer: FunctionImporter;
    explore: IExplore;
    array: MetadataArray;
  }): ts.Expression[] => {
    const fixed: Array<[ts.Expression | undefined, ts.Expression | undefined]> =
      (props.array.tags.length ? props.array.tags : [[]]).map((tags) => [
        RandomRanger.length({
          coalesce: coalesce(props.importer),
          defaults: {
            minimum: 0,
            maximum: 3,
            gap: 3,
          },
          accessors: {
            minimum: "minItems",
            maximum: "maxItems",
          },
          tags,
        }),
        (() => {
          const uniqueItems = tags.find((t) => t.kind === "uniqueItems");
          return uniqueItems === undefined
            ? undefined
            : uniqueItems.value === false
              ? ts.factory.createFalse()
              : ts.factory.createTrue();
        })(),
      ]);
    if (props.array.type.recursive)
      return fixed.map(([len, unique]) =>
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.importer.useLocal(Prefix.array(props.array.type.index!)),
          ),
          undefined,
          [
            len ?? coalesce(props.importer)("length"),
            unique ?? ts.factory.createFalse(),
            ts.factory.createTrue(),
            props.explore.recursive
              ? ts.factory.createAdd(
                  ExpressionFactory.number(1),
                  ts.factory.createIdentifier("_depth"),
                )
              : ExpressionFactory.number(0),
          ],
        ),
      );
    return fixed.map(([len, unique]) => {
      const expr: ts.Expression = RandomJoiner.array({
        coalesce: coalesce(props.importer),
        decode: (metadata) =>
          decode({
            ...props,
            metadata,
          }),
        explore: props.explore,
        length: len,
        unique,
        metadata: props.array.type.value,
      });
      return props.explore.recursive
        ? ts.factory.createConditionalExpression(
            ts.factory.createLogicalAnd(
              ts.factory.createIdentifier("_recursive"),
              ts.factory.createLessThan(
                ExpressionFactory.number(5),
                ts.factory.createIdentifier("_depth"),
              ),
            ),
            undefined,
            ts.factory.createIdentifier("[]"),
            undefined,
            expr,
          )
        : expr;
    });
  };

  const decode_tuple = (props: {
    importer: FunctionImporter;
    explore: IExplore;
    tuple: MetadataTuple;
  }): ts.Expression =>
    props.tuple.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.importer.useLocal(Prefix.tuple(props.tuple.type.index!)),
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
    importer: FunctionImporter;
    explore: IExplore;
    object: MetadataObject;
  }) =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.importer.useLocal(Prefix.object(props.object.index)),
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
    importer: FunctionImporter;
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
    importer: FunctionImporter;
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
    importer: FunctionImporter;
    name: string;
  }): ts.Expression => {
    if (props.name === "Boolean") return decode_boolean(props.importer);
    else if (props.name === "Number")
      return decode_number({
        importer: props.importer,
        atomic: MetadataAtomic.create({
          type: "number",
          tags: [],
        }),
      })[0]!;
    else if (props.name === "String")
      return decode_string({
        importer: props.importer,
        atomic: MetadataAtomic.create({
          type: "string",
          tags: [],
        }),
      })[0]!;
    else if (props.name === "Date") return decode_native_date(props.importer);
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
      return decode_native_data_view(props.importer);
    else if (props.name === "Blob") return decode_native_blob(props.importer);
    else if (props.name === "File") return decode_native_file(props.importer);
    else if (props.name === "RegExp") return decode_regexp();
    else
      return ts.factory.createNewExpression(
        ts.factory.createIdentifier(props.name),
        undefined,
        [],
      );
  };

  const decode_native_date = (importer: FunctionImporter) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Date"),
      undefined,
      [
        ts.factory.createCallExpression(
          coalesce(importer)("datetime"),
          undefined,
          [],
        ),
      ],
    );

  const decode_native_byte_array = (props: {
    importer: FunctionImporter;
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
    return ts.factory.createNewExpression(
      ts.factory.createIdentifier(props.name),
      [],
      [
        ts.factory.createCallExpression(
          coalesce(props.importer)("array"),
          undefined,
          [
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [],
              TypeFactory.keyword("any"),
              undefined,
              ts.factory.createCallExpression(
                coalesce(props.importer)(
                  props.name === "Float32Array" || props.name === "Float64Array"
                    ? "number"
                    : props.name === "BigInt64Array" ||
                        props.name === "BigUint64Array"
                      ? "bigint"
                      : "integer",
                ),
                undefined,
                [literal(minimum), literal(maximum)],
              ),
            ),
          ],
        ),
      ],
    );
  };

  const decode_native_blob = (importer: FunctionImporter) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("Blob"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              importer,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
      ],
    );

  const decode_native_file = (importer: FunctionImporter) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("File"),
      undefined,
      [
        ts.factory.createArrayLiteralExpression(
          [
            decode_native_byte_array({
              importer,
              name: "Uint8Array",
            }),
          ],
          true,
        ),
        ts.factory.createTemplateExpression(ts.factory.createTemplateHead(""), [
          ts.factory.createTemplateSpan(
            ts.factory.createCallExpression(
              coalesce(importer)("string"),
              undefined,
              [ts.factory.createNumericLiteral(8)],
            ),
            ts.factory.createTemplateMiddle("."),
          ),
          ts.factory.createTemplateSpan(
            ts.factory.createCallExpression(
              coalesce(importer)("string"),
              undefined,
              [ts.factory.createNumericLiteral(3)],
            ),
            ts.factory.createTemplateTail(""),
          ),
        ]),
      ],
    );

  const decode_native_array_buffer = (props: {
    importer: FunctionImporter;
    name: "ArrayBuffer" | "SharedArrayBuffer";
  }): ts.Expression =>
    props.name === "ArrayBuffer"
      ? IdentifierFactory.access(
          decode_native_byte_array({
            importer: props.importer,
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
                  coalesce(props.importer)("integer"),
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
                      coalesce(props.importer)("array"),
                      undefined,
                      [
                        ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [],
                          TypeFactory.keyword("any"),
                          undefined,
                          ts.factory.createCallExpression(
                            coalesce(props.importer)("integer"),
                            undefined,
                            [
                              ExpressionFactory.number(0),
                              ExpressionFactory.number(255),
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

  const decode_native_data_view = (importer: FunctionImporter) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("DataView"),
      [],
      [
        IdentifierFactory.access(
          decode_native_byte_array({
            importer,
            name: "Uint8Array",
          }),
          "buffer",
        ),
      ],
    );

  const decode_regexp = () =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("RegExp"),
      [],
      [ts.factory.createIdentifier("/(?:)/")],
    );
}

type Atomic = boolean | number | string | bigint;
interface IExplore {
  function: boolean;
  recursive: boolean;
}

const Prefix = {
  object: (i: number) => `$ro${i}`,
  array: (i: number) => `$ra${i}`,
  tuple: (i: number) => `$rt${i}`,
};

const coalesce = (importer: FunctionImporter) => (name: string) =>
  ExpressionFactory.coalesce(
    Escaper.variable(name)
      ? ts.factory.createPropertyAccessChain(
          ts.factory.createIdentifier("_generator"),
          ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
          ts.factory.createIdentifier(name),
        )
      : ts.factory.createElementAccessChain(
          ts.factory.createIdentifier("_generator"),
          ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
          ts.factory.createStringLiteral(name),
        ),
    IdentifierFactory.access(importer.use("generator"), name),
  );

const emendFormat = (key: keyof Format.Validator) =>
  key === "date-time"
    ? "datetime"
    : key
        .split("-")
        .map((str, i) =>
          i === 0 || str.length === 0
            ? str
            : str[0]!.toUpperCase() + str.substring(1),
        )
        .join("");
