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

import { IProject } from "../transformers/IProject";
import { TransformerError } from "../transformers/TransformerError";

import { Escaper } from "../utils/Escaper";

import { Format } from "../tags";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { RandomRanger } from "./helpers/RandomRanger";
import { random_custom } from "./internal/random_custom";

export namespace RandomProgrammer {
  export const decompose = (props: {
    project: IProject;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze(
      props.project.checker,
      props.project.context,
    )({
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
    })(collection)(props.type);
    if (result.success === false)
      throw TransformerError.from(`typia.${props.importer.method}`)(
        result.errors,
      );

    // GENERATE FUNCTION
    const functions: Record<string, ts.VariableStatement> = Object.fromEntries([
      ...write_object_functions(props.importer)(collection).map((v, i) => [
        Prefix.object(i),
        v,
      ]),
      ...write_array_functions(props.importer)(collection).map((v, i) => [
        Prefix.array(i),
        v,
      ]),
      ...write_tuple_functions(props.importer)(collection).map((v, i) => [
        Prefix.tuple(i),
        v,
      ]),
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
              TypeFactory.getFullName(props.project.checker)(props.type),
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
            decode(props.importer)({
              function: false,
              recursive: false,
            })(result.data),
          ),
        ],
        true,
      ),
    );
    return {
      functions,
      statements: [StatementFactory.mut("_generator")],
      arrow,
    };
  };

  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (init?: ts.Expression) =>
    (type: ts.Type, name?: string) => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        project,
        importer,
        type,
        name,
        init,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };

  const write_object_functions =
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection.objects().map((obj, i) =>
        StatementFactory.constant(
          Prefix.object(i),
          ts.factory.createArrowFunction(
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
            RandomJoiner.object(COALESCE(importer))(
              decode(importer)({
                recursive: obj.recursive,
                function: true,
              }),
            )(obj),
          ),
        ),
      );

  const write_array_functions =
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .arrays()
        .filter((a) => a.recursive)
        .map((array, i) =>
          StatementFactory.constant(
            Prefix.array(i),
            ts.factory.createArrowFunction(
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
              RandomJoiner.array(COALESCE(importer))(
                decode(importer)({
                  recursive: true,
                  function: true,
                }),
              )({
                recursive: true,
                function: true,
              })(
                ts.factory.createIdentifier("length"),
                ts.factory.createIdentifier("unique"),
              )(array.value),
            ),
          ),
        );

  const write_tuple_functions =
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .tuples()
        .filter((a) => a.recursive)
        .map((tuple, i) =>
          StatementFactory.constant(
            Prefix.tuple(i),
            ts.factory.createArrowFunction(
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
              RandomJoiner.tuple(
                decode(importer)({
                  function: true,
                  recursive: true,
                }),
              )(tuple.elements),
            ),
          ),
        );

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  const decode =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (meta: Metadata): ts.Expression => {
      const expressions: ts.Expression[] = [];
      if (meta.any)
        expressions.push(ts.factory.createStringLiteral("any type used..."));

      // NULL COALESCING
      if (meta.isRequired() === false || meta.functions.length)
        expressions.push(ts.factory.createIdentifier("undefined"));
      if (meta.nullable === true) expressions.push(ts.factory.createNull());

      // CONSTANT TYPES
      for (const constant of meta.constants)
        for (const { value } of constant.values)
          expressions.push(decode_atomic(value));

      // ATOMIC VARIABLES
      for (const template of meta.templates)
        expressions.push(decode_template(importer)(explore)(template));
      for (const atomic of meta.atomics)
        if (atomic.type === "boolean")
          expressions.push(decode_boolean(importer));
        else if (atomic.type === "number")
          expressions.push(...decode_number(importer)(atomic));
        else if (atomic.type === "string")
          expressions.push(...decode_string(importer)(atomic));
        else if (atomic.type === "bigint")
          expressions.push(...decode_bigint(importer)(atomic));

      // INSTANCE TYPES
      if (meta.escaped)
        expressions.push(decode(importer)(explore)(meta.escaped.returns));
      for (const array of meta.arrays)
        expressions.push(...decode_array(importer)(explore)(array));
      for (const tuple of meta.tuples)
        expressions.push(decode_tuple(importer)(explore)(tuple));
      for (const o of meta.objects)
        expressions.push(decode_object(importer)(explore)(o));
      for (const native of meta.natives)
        expressions.push(decode_native(importer)(native));
      for (const set of meta.sets)
        expressions.push(decode_set(importer)(explore)(set));
      for (const map of meta.maps)
        expressions.push(decode_map(importer)(explore)(map));

      // PICK UP A TYPE
      if (expressions.length === 1) return expressions[0]!;
      return ts.factory.createCallExpression(
        ts.factory.createCallExpression(importer.use("pick"), undefined, [
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
      COALESCE(importer)("boolean"),
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

  const decode_template =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (template: MetadataTemplate) =>
      TemplateFactory.generate(
        template.row.map((meta) => decode(importer)(explore)(meta)),
      );

  const decode_number =
    (importer: FunctionImporter) =>
    (atomic: MetadataAtomic): ts.Expression[] =>
      (atomic.tags.length ? atomic.tags : [[]]).map((tags) => {
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
        return random_custom(COALESCE(importer))("number")(tags)(
          RandomRanger.number({
            type,
            transform: (value) => ExpressionFactory.number(value),
            setter: (args) =>
              ts.factory.createCallExpression(
                type !== "double" || multiply !== undefined
                  ? COALESCE(importer)("integer")
                  : COALESCE(importer)("number"),
                undefined,
                args.map((val) => ExpressionFactory.number(val)),
              ),
          })({
            minimum: 0,
            maximum: 100,
            gap: 10,
          })(tags),
        );
      });

  const decode_bigint =
    (importer: FunctionImporter) =>
    (atomic: MetadataAtomic): ts.Expression[] =>
      (atomic.tags.length ? atomic.tags : [[]]).map((tags) =>
        random_custom(COALESCE(importer))("bigint")(tags)(
          RandomRanger.number({
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
                COALESCE(importer)("bigint"),
                undefined,
                args.map((value) => ExpressionFactory.bigint(value)),
              ),
          })({
            minimum: 0,
            maximum: 100,
            gap: 10,
          })(tags),
        ),
      );

  const decode_string =
    (importer: FunctionImporter) =>
    (atomic: MetadataAtomic): ts.Expression[] =>
      (atomic.tags.length ? atomic.tags : [[]]).map((tags) =>
        random_custom(COALESCE(importer))("string")(tags)(
          (() => {
            for (const t of tags)
              if (t.kind === "format")
                return ts.factory.createCallExpression(
                  COALESCE(importer)(emendFormat(t.value)),
                  undefined,
                  undefined,
                );
              else if (t.kind === "pattern")
                return ts.factory.createCallExpression(
                  COALESCE(importer)("pattern"),
                  undefined,
                  [
                    ts.factory.createIdentifier(
                      `RegExp(${JSON.stringify(t.value)})`,
                    ),
                  ],
                );

            const tail = RandomRanger.length(COALESCE(importer))({
              minimum: 5,
              maximum: 25,
              gap: 5,
            })({
              minimum: "minLength",
              maximum: "maxLength",
            })(tags);
            return ts.factory.createCallExpression(
              COALESCE(importer)("string"),
              undefined,
              tail ? [tail] : undefined,
            );
          })(),
        ),
      );

  const decode_array =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (array: MetadataArray): ts.Expression[] => {
      const fixed: Array<
        [ts.Expression | undefined, ts.Expression | undefined]
      > = (array.tags.length ? array.tags : [[]]).map((tags) => [
        RandomRanger.length(COALESCE(importer))({
          minimum: 0,
          maximum: 3,
          gap: 3,
        })({
          minimum: "minItems",
          maximum: "maxItems",
        })(tags),
        (() => {
          const uniqueItems = tags.find((t) => t.kind === "uniqueItems");
          return uniqueItems === undefined
            ? undefined
            : uniqueItems.value === false
              ? ts.factory.createFalse()
              : ts.factory.createTrue();
        })(),
      ]);
      if (array.type.recursive)
        return fixed.map(([len, unique]) =>
          ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(Prefix.array(array.type.index!)),
            ),
            undefined,
            [
              len ?? COALESCE(importer)("length"),
              unique ?? ts.factory.createFalse(),
              ts.factory.createTrue(),
              explore.recursive
                ? ts.factory.createAdd(
                    ExpressionFactory.number(1),
                    ts.factory.createIdentifier("_depth"),
                  )
                : ExpressionFactory.number(0),
            ],
          ),
        );
      return fixed.map(([len, unique]) => {
        const expr: ts.Expression = RandomJoiner.array(COALESCE(importer))(
          decode(importer)(explore),
        )(explore)(
          len,
          unique,
        )(array.type.value);
        return explore.recursive
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

  const decode_tuple =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (tuple: MetadataTuple): ts.Expression =>
      tuple.type.recursive
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(Prefix.tuple(tuple.type.index!)),
            ),
            undefined,
            [
              ts.factory.createTrue(),
              explore.recursive
                ? ts.factory.createAdd(
                    ExpressionFactory.number(1),
                    ts.factory.createIdentifier("_depth"),
                  )
                : ExpressionFactory.number(0),
            ],
          )
        : RandomJoiner.tuple(decode(importer)(explore))(tuple.type.elements);

  const decode_object =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (object: MetadataObject) =>
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(
          importer.useLocal(Prefix.object(object.index)),
        ),
        undefined,
        explore.function
          ? [
              explore.recursive
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
  const decode_set =
    (importer: FunctionImporter) => (explore: IExplore) => (meta: Metadata) =>
      ts.factory.createNewExpression(
        ts.factory.createIdentifier("Set"),
        undefined,
        [
          decode_array(importer)(explore)(
            MetadataArray.create({
              tags: [],
              type: MetadataArrayType.create({
                value: meta,
                recursive: false,
                index: null,
                nullables: [],
                name: `Set<${meta.getName()}>`,
              }),
            }),
          )[0]!,
        ],
      );

  const decode_map =
    (importer: FunctionImporter) =>
    (explore: IExplore) =>
    (map: Metadata.Entry) =>
      ts.factory.createNewExpression(
        ts.factory.createIdentifier("Map"),
        undefined,
        [
          decode_array(importer)(explore)(
            MetadataArray.create({
              tags: [],
              type: MetadataArrayType.create({
                name: `Map<${map.key.getName()}, ${map.value.getName()}>`,
                index: null,
                recursive: false,
                nullables: [],
                value: Metadata.create({
                  ...Metadata.initialize(),
                  tuples: [
                    (() => {
                      const type = MetadataTupleType.create({
                        name: `[${map.key.getName()}, ${map.value.getName()}]`,
                        index: null,
                        recursive: false,
                        nullables: [],
                        elements: [map.key, map.value],
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
          )[0]!,
        ],
      );

  const decode_native =
    (importer: FunctionImporter) =>
    (type: string): ts.Expression => {
      if (type === "Boolean") return decode_boolean(importer);
      else if (type === "Number")
        return decode_number(importer)(
          MetadataAtomic.create({
            type: "number",
            tags: [],
          }),
        )[0]!;
      else if (type === "String")
        return decode_string(importer)(
          MetadataAtomic.create({
            type: "string",
            tags: [],
          }),
        )[0]!;
      else if (type === "Date") return decode_native_date(importer);
      else if (
        type === "Uint8Array" ||
        type === "Uint8ClampedArray" ||
        type === "Uint16Array" ||
        type === "Uint32Array" ||
        type === "BigUint64Array" ||
        type === "Int8Array" ||
        type === "Int16Array" ||
        type === "Int32Array" ||
        type === "BigInt64Array" ||
        type === "Float32Array" ||
        type === "Float64Array"
      )
        return decode_native_byte_array(importer)(type);
      else if (type === "ArrayBuffer" || type === "SharedArrayBuffer")
        return decode_native_array_buffer(importer)(type);
      else if (type === "DataView") return decode_native_data_view(importer);
      else if (type === "Blob") return decode_native_blob(importer);
      else if (type === "File") return decode_native_file(importer);
      else if (type === "RegExp") return decode_regexp();
      else
        return ts.factory.createNewExpression(
          ts.factory.createIdentifier(type),
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
          COALESCE(importer)("datetime"),
          undefined,
          [],
        ),
      ],
    );

  const decode_native_byte_array =
    (importer: FunctionImporter) =>
    (
      type:
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
        | "Float64Array",
    ): ts.Expression => {
      new BigInt64Array();
      const [minimum, maximum]: [number, number] = (() => {
        if (type === "Uint8Array" || type === "Uint8ClampedArray")
          return [0, 255];
        else if (type === "Uint16Array") return [0, 65535];
        else if (type === "Uint32Array") return [0, 4294967295];
        else if (type === "BigUint64Array") return [0, 18446744073709551615];
        else if (type === "Int8Array") return [-128, 127];
        else if (type === "Int16Array") return [-32768, 32767];
        else if (type === "Int32Array") return [-2147483648, 2147483647];
        else if (type === "BigInt64Array")
          return [-9223372036854775808, 9223372036854775807];
        else if (type === "Float32Array")
          return [-1.175494351e38, 3.4028235e38];
        return [Number.MIN_VALUE, Number.MAX_VALUE];
      })();
      const literal =
        type === "BigInt64Array" || type === "BigUint64Array"
          ? ExpressionFactory.bigint
          : ExpressionFactory.number;
      return ts.factory.createNewExpression(
        ts.factory.createIdentifier(type),
        [],
        [
          ts.factory.createCallExpression(
            COALESCE(importer)("array"),
            undefined,
            [
              ts.factory.createArrowFunction(
                undefined,
                undefined,
                [],
                TypeFactory.keyword("any"),
                undefined,
                ts.factory.createCallExpression(
                  COALESCE(importer)(
                    type === "Float32Array" || type === "Float64Array"
                      ? "number"
                      : type === "BigInt64Array" || type === "BigUint64Array"
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
          [decode_native_byte_array(importer)("Uint8Array")],
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
          [decode_native_byte_array(importer)("Uint8Array")],
          true,
        ),
        ts.factory.createTemplateExpression(ts.factory.createTemplateHead(""), [
          ts.factory.createTemplateSpan(
            ts.factory.createCallExpression(
              COALESCE(importer)("string"),
              undefined,
              [ts.factory.createNumericLiteral(8)],
            ),
            ts.factory.createTemplateMiddle("."),
          ),
          ts.factory.createTemplateSpan(
            ts.factory.createCallExpression(
              COALESCE(importer)("string"),
              undefined,
              [ts.factory.createNumericLiteral(3)],
            ),
            ts.factory.createTemplateTail(""),
          ),
        ]),
      ],
    );

  const decode_native_array_buffer =
    (importer: FunctionImporter) =>
    (type: "ArrayBuffer" | "SharedArrayBuffer"): ts.Expression =>
      type === "ArrayBuffer"
        ? IdentifierFactory.access(
            decode_native_byte_array(importer)("Uint8Array"),
          )("buffer")
        : ExpressionFactory.selfCall(
            ts.factory.createBlock(
              [
                StatementFactory.constant(
                  "length",
                  ts.factory.createCallExpression(
                    COALESCE(importer)("integer"),
                    undefined,
                    [],
                  ),
                ),
                StatementFactory.constant(
                  "buffer",
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("SharedArrayBuffer"),
                    [],
                    [ts.factory.createIdentifier("length")],
                  ),
                ),
                StatementFactory.constant(
                  "bytes",
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("Uint8Array"),
                    [],
                    [ts.factory.createIdentifier("buffer")],
                  ),
                ),
                ts.factory.createExpressionStatement(
                  ts.factory.createCallExpression(
                    IdentifierFactory.access(
                      ts.factory.createIdentifier("bytes"),
                    )("set"),
                    undefined,
                    [
                      ts.factory.createCallExpression(
                        COALESCE(importer)("array"),
                        undefined,
                        [
                          ts.factory.createArrowFunction(
                            undefined,
                            undefined,
                            [],
                            TypeFactory.keyword("any"),
                            undefined,
                            ts.factory.createCallExpression(
                              COALESCE(importer)("integer"),
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
          decode_native_byte_array(importer)("Uint8Array"),
        )("buffer"),
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

const COALESCE = (importer: FunctionImporter) => (name: string) =>
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
  )(IdentifierFactory.access(importer.use("generator"))(name));

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
