import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataArray } from "../schemas/metadata/MetadataArray";
import { MetadataConstant } from "../schemas/metadata/MetadataConstant";
import { MetadataObject } from "../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../schemas/metadata/MetadataTupleType";

import { ITypiaContext } from "../transformers/ITypiaContext";
import { TransformerError } from "../transformers/TransformerError";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { AtomicPredicator } from "./helpers/AtomicPredicator";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { ICheckEntry } from "./helpers/ICheckEntry";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { check_array_length } from "./internal/check_array_length";
import { check_bigint } from "./internal/check_bigint";
import { check_native } from "./internal/check_native";
import { check_number } from "./internal/check_number";
import { check_string } from "./internal/check_string";
import { check_template } from "./internal/check_template";
import { decode_union_object } from "./internal/decode_union_object";
import { postfix_of_tuple } from "./internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "./internal/wrap_metadata_rest_tuple";

export namespace CheckerProgrammer {
  export interface IConfig {
    prefix: string;
    path: boolean;
    trace: boolean;
    equals: boolean;
    numeric: boolean;
    addition?: () => ts.Statement[];
    decoder?: () => FeatureProgrammer.Decoder<Metadata, ts.Expression>;
    combiner: IConfig.Combiner;
    atomist: (
      explore: IExplore,
    ) => (check: ICheckEntry) => (input: ts.Expression) => ts.Expression;
    joiner: IConfig.IJoiner;
    success: ts.Expression;
  }
  export namespace IConfig {
    export interface Combiner {
      (explorer: IExplore): {
        (logic: "and" | "or"): {
          (
            input: ts.Expression,
            binaries: IBinary[],
            expected: string,
          ): ts.Expression;
        };
      };
    }
    export interface IJoiner {
      object(props: {
        input: ts.Expression;
        entries: IExpressionEntry[];
      }): ts.Expression;
      array(props: {
        input: ts.Expression;
        arrow: ts.ArrowFunction;
      }): ts.Expression;
      tuple?: undefined | ((exprs: ts.Expression[]) => ts.Expression);

      failure(
        value: ts.Expression,
        expected: string,
        explore?: undefined | FeatureProgrammer.IExplore,
      ): ts.Expression;
      is?(expression: ts.Expression): ts.Expression;
      required?(exp: ts.Expression): ts.Expression;
      full?:
        | undefined
        | ((
            condition: ts.Expression,
          ) => (
            input: ts.Expression,
            expected: string,
            explore: IExplore,
          ) => ts.Expression);
    }
  }
  export type IExplore = FeatureProgrammer.IExplore;

  export interface IBinary {
    expression: ts.Expression;
    combined: boolean;
  }

  /* -----------------------------------------------------------
        WRITERS
    ----------------------------------------------------------- */
  export const compose = (props: {
    context: ITypiaContext;
    config: IConfig;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }) =>
    FeatureProgrammer.compose({
      ...props,
      config: configure(props.context)(props.config)(props.importer),
    });

  export const write =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
      FeatureProgrammer.write(project)(configure(project)(config)(importer))(
        importer,
      );

  export const write_object_functions =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
      FeatureProgrammer.write_object_functions(
        configure(project)(config)(importer),
      )(importer);

  export const write_union_functions =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
      FeatureProgrammer.write_union_functions(
        configure(project)({ ...config, numeric: false })(importer),
      );

  export const write_array_functions =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .arrays()
        .filter((a) => a.recursive)
        .map((type, i) =>
          StatementFactory.constant(
            `${config.prefix}a${i}`,
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              FeatureProgrammer.parameterDeclarations(config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
              TypeFactory.keyword("any"),
              undefined,
              decode_array_inline(project)(config)(importer)(
                ts.factory.createIdentifier("input"),
                MetadataArray.create({
                  type,
                  tags: [],
                }),
                {
                  tracable: config.trace,
                  source: "function",
                  from: "array",
                  postfix: "",
                },
              ),
            ),
          ),
        );

  export const write_tuple_functions =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (collection: MetadataCollection): ts.VariableStatement[] =>
      collection
        .tuples()
        .filter((t) => t.recursive)
        .map((tuple, i) =>
          StatementFactory.constant(
            `${config.prefix}t${i}`,
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              FeatureProgrammer.parameterDeclarations(config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
              TypeFactory.keyword("any"),
              undefined,
              decode_tuple_inline(project)(config)(importer)(
                ts.factory.createIdentifier("input"),
                tuple,
                {
                  tracable: config.trace,
                  source: "function",
                  from: "array",
                  postfix: "",
                },
              ),
            ),
          ),
        );

  const configure =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter): FeatureProgrammer.IConfig => ({
      types: {
        input: () => TypeFactory.keyword("any"),
        output: (type, name) =>
          ts.factory.createTypePredicateNode(
            undefined,
            "input",
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          ),
      },
      trace: config.trace,
      path: config.path,
      prefix: config.prefix,
      initializer: (project) => (importer) => (type) => {
        const collection: MetadataCollection = new MetadataCollection();
        const result = MetadataFactory.analyze({
          checker: project.checker,
          transformer: project.transformer,
          options: {
            escape: false,
            constant: true,
            absorb: true,
          },
          collection,
          type,
        });
        if (result.success === false)
          throw TransformerError.from(`typia.${importer.method}`)(
            result.errors,
          );
        return [collection, result.data];
      },
      addition: config.addition,
      decoder: () => config.decoder?.() ?? decode(project)(config)(importer),
      objector: {
        checker: () => config.decoder?.() ?? decode(project)(config)(importer),
        decoder: () => decode_object(config)(importer),
        joiner: config.joiner.object,
        unionizer: config.equals
          ? decode_union_object(decode_object(config)(importer))(
              (input, obj, explore) =>
                decode_object(config)(importer)(input, obj, {
                  ...explore,
                  tracable: true,
                }),
            )(config.joiner.is ?? ((expr) => expr))((value, expected) =>
              ts.factory.createReturnStatement(
                config.joiner.failure(value, expected),
              ),
            )
          : (input, targets, explore) =>
              config.combiner(explore)("or")(
                input,
                targets.map((obj) => ({
                  expression: decode_object(config)(importer)(
                    input,
                    obj,
                    explore,
                  ),
                  combined: true,
                })),
                `(${targets.map((t) => t.name).join(" | ")})`,
              ),
        failure: (value, expected) =>
          ts.factory.createReturnStatement(
            config.joiner.failure(value, expected),
          ),
        is: config.joiner.is,
        required: config.joiner.required,
        full: config.joiner.full,
        type: TypeFactory.keyword("boolean"),
      },
      generator: {
        unions: config.numeric
          ? () =>
              FeatureProgrammer.write_union_functions(
                configure(project)({ ...config, numeric: false })(importer),
              )
          : undefined,
        arrays: () => write_array_functions(project)(config)(importer),
        tuples: () => write_tuple_functions(project)(config)(importer),
      },
    });

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  /**
   * @internal
   */
  export const decode =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      metadata: Metadata,
      explore: IExplore,
    ): ts.Expression => {
      if (metadata.any) return config.success;

      const top: IBinary[] = [];
      const binaries: IBinary[] = [];
      const add = create_add(binaries)(input);
      const getConstantValue = (value: number | string | bigint | boolean) => {
        if (typeof value === "string")
          return ts.factory.createStringLiteral(value);
        else if (typeof value === "bigint")
          return ExpressionFactory.bigint(value);
        return ts.factory.createIdentifier(value.toString());
      };

      //----
      // CHECK OPTIONAL
      //----
      // @todo -> should be elaborated
      const checkOptional: boolean =
        metadata.empty() || metadata.isUnionBucket();

      // NULLABLE
      if (checkOptional || metadata.nullable)
        (metadata.nullable ? add : create_add(top)(input))(
          metadata.nullable,
          ValueFactory.NULL(),
        );

      // UNDEFINDABLE
      if (checkOptional || !metadata.isRequired())
        (metadata.isRequired() ? create_add(top)(input) : add)(
          !metadata.isRequired(),
          ValueFactory.UNDEFINED(),
        );

      // FUNCTIONAL
      if (metadata.functions.length)
        if (
          OptionPredicator.functional(project.options) ||
          metadata.size() !== 1
        )
          add(
            true,
            ts.factory.createStringLiteral("function"),
            ValueFactory.TYPEOF(input),
          );
        else
          binaries.push({
            combined: false,
            expression: config.success,
          });

      //----
      // VALUES
      //----
      // CONSTANT VALUES
      const constants: MetadataConstant[] = metadata.constants.filter((c) =>
        AtomicPredicator.constant({
          metadata,
          name: c.type,
        }),
      );
      const constantLength: number = constants
        .map((c) => c.values.length)
        .reduce((a, b) => a + b, 0);
      if (constantLength >= 10) {
        const values: Array<boolean | number | string | bigint> = constants
          .map((c) => c.values.map((v) => v.value))
          .flat();
        add(
          true,
          ts.factory.createTrue(),
          ts.factory.createCallExpression(
            IdentifierFactory.access(
              importer.emplaceVariable(
                `${config.prefix}v${importer.increment()}`,
                ts.factory.createNewExpression(
                  ts.factory.createIdentifier("Set"),
                  undefined,
                  [
                    ts.factory.createArrayLiteralExpression(
                      values.map((v) =>
                        typeof v === "boolean"
                          ? v === true
                            ? ts.factory.createTrue()
                            : ts.factory.createFalse()
                          : typeof v === "bigint"
                            ? ExpressionFactory.bigint(v)
                            : typeof v === "number"
                              ? ExpressionFactory.number(v)
                              : ts.factory.createStringLiteral(v.toString()),
                      ),
                    ),
                  ],
                ),
              ),
            )("has"),
            undefined,
            [input],
          ),
        );
      } else
        for (const c of constants)
          if (
            AtomicPredicator.constant({
              metadata,
              name: c.type,
            })
          )
            for (const v of c.values) add(true, getConstantValue(v.value));

      // ATOMIC VALUES
      for (const atom of metadata.atomics)
        if (
          AtomicPredicator.atomic({
            metadata,
            name: atom.type,
          }) === false
        )
          continue;
        else if (atom.type === "number")
          binaries.push({
            expression: config.atomist(explore)(
              check_number(project, config.numeric)(atom)(input),
            )(input),
            combined: false,
          });
        else if (atom.type === "bigint")
          binaries.push({
            expression: config.atomist(explore)(
              check_bigint(project)(atom)(input),
            )(input),
            combined: false,
          });
        else if (atom.type === "string")
          binaries.push({
            expression: config.atomist(explore)(
              check_string(project)(atom)(input),
            )(input),
            combined: false,
          });
        else
          add(
            true,
            ts.factory.createStringLiteral(atom.type),
            ValueFactory.TYPEOF(input),
          );

      // TEMPLATE LITERAL VALUES
      if (metadata.templates.length)
        if (AtomicPredicator.template(metadata))
          binaries.push({
            expression: config.atomist(explore)(
              check_template(metadata.templates)(input),
            )(input),
            combined: false,
          });

      // NATIVE CLASSES
      for (const native of metadata.natives)
        binaries.push({
          expression: check_native(native)(input),
          combined: false,
        });

      //----
      // INSTANCES
      //----
      interface IInstance {
        pre: ts.Expression;
        body: ts.Expression | null;
        expected: string;
      }
      const instances: IInstance[] = [];
      const prepare =
        (pre: ts.Expression, expected: string) =>
        (body: ts.Expression | null) =>
          instances.push({
            pre,
            expected,
            body,
          });

      // SETS
      if (metadata.sets.length) {
        const install = prepare(
          check_native("Set")(input),
          metadata.sets.map((elem) => `Set<${elem.getName()}>`).join(" | "),
        );
        if (metadata.sets.some((elem) => elem.any)) install(null);
        else
          install(
            explore_sets(project)(config)(importer)(input, metadata.sets, {
              ...explore,
              from: "array",
            }),
          );
      }

      // MAPS
      if (metadata.maps.length) {
        const install = prepare(
          check_native("Map")(input),
          metadata.maps
            .map(({ key, value }) => `Map<${key}, ${value}>`)
            .join(" | "),
        );
        if (metadata.maps.some((elem) => elem.key.any && elem.value.any))
          install(null);
        else
          install(
            explore_maps(project)(config)(importer)(input, metadata.maps, {
              ...explore,
              from: "array",
            }),
          );
      }

      // ARRAYS AND TUPLES
      if (metadata.tuples.length + metadata.arrays.length > 0) {
        const install = prepare(
          config.atomist(explore)({
            expected: [
              ...metadata.tuples.map((t) => t.type.name),
              ...metadata.arrays.map((a) => a.getName()),
            ].join(" | "),
            expression: ExpressionFactory.isArray(input),
            conditions: [],
          })(input),
          [...metadata.tuples, ...metadata.arrays]
            .map((elem) => elem.type.name)
            .join(" | "),
        );
        if (metadata.arrays.length === 0)
          if (metadata.tuples.length === 1)
            install(
              decode_tuple(project)(config)(importer)(
                input,
                metadata.tuples[0]!,
                {
                  ...explore,
                  from: "array",
                },
              ),
            );
          // TUPLE ONLY
          else
            install(
              explore_tuples(project)(config)(importer)(
                input,
                metadata.tuples,
                {
                  ...explore,
                  from: "array",
                },
              ),
            );
        else if (metadata.arrays.some((elem) => elem.type.value.any))
          install(null);
        else if (metadata.tuples.length === 0)
          if (metadata.arrays.length === 1)
            // ARRAY ONLY
            install(
              decode_array(project)(config)(importer)(
                input,
                metadata.arrays[0]!,
                {
                  ...explore,
                  from: "array",
                },
              ),
            );
          else
            install(
              explore_arrays(project)(config)(importer)(
                input,
                metadata.arrays,
                {
                  ...explore,
                  from: "array",
                },
              ),
            );
        else
          install(
            explore_arrays_and_tuples(project)(config)(importer)(
              input,
              [...metadata.tuples, ...metadata.arrays],
              explore,
            ),
          );
      }

      // OBJECT
      if (metadata.objects.length > 0)
        prepare(
          ExpressionFactory.isObject({
            checkNull: true,
            checkArray: metadata.objects.some((obj) =>
              obj.properties.every(
                (prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired(),
              ),
            ),
          })(input),
          metadata.objects.map((obj) => obj.name).join(" | "),
        )(
          explore_objects(config)(importer)(input, metadata, {
            ...explore,
            from: "object",
          }),
        );

      if (instances.length) {
        const transformer =
          (merger: (x: ts.Expression, y: ts.Expression) => ts.Expression) =>
          (ins: IInstance) =>
            ins.body
              ? {
                  expression: merger(ins.pre, ins.body),
                  combined: true,
                }
              : {
                  expression: ins.pre,
                  combined: false,
                };
        if (instances.length === 1)
          binaries.push(
            transformer((pre, body) =>
              config.combiner(explore)("and")(
                input,
                [pre, body].map((expression) => ({
                  expression,
                  combined: expression !== pre,
                })),
                metadata.getName(),
              ),
            )(instances[0]!),
          );
        else
          binaries.push({
            expression: config.combiner(explore)("or")(
              input,
              instances.map(transformer(ts.factory.createLogicalAnd)),
              metadata.getName(),
            ),
            combined: true,
          });
      }

      // ESCAPED CASE
      if (metadata.escaped !== null)
        binaries.push({
          combined: false,
          expression:
            metadata.escaped.original.size() === 1 &&
            metadata.escaped.original.natives.length === 1
              ? check_native(metadata.escaped.original.natives[0]!)(input)
              : ts.factory.createLogicalAnd(
                  decode(project)(config)(importer)(
                    input,
                    metadata.escaped.original,
                    explore,
                  ),
                  ts.factory.createLogicalAnd(
                    IsProgrammer.decode_to_json(false)(input),
                    decode_escaped(project)(config)(importer)(
                      input,
                      metadata.escaped.returns,
                      explore,
                    ),
                  ),
                ),
        });

      //----
      // COMBINE CONDITIONS
      //----
      return top.length && binaries.length
        ? config.combiner(explore)("and")(
            input,
            [
              ...top,
              {
                expression: config.combiner(explore)("or")(
                  input,
                  binaries,
                  metadata.getName(),
                ),
                combined: true,
              },
            ],
            metadata.getName(),
          )
        : binaries.length
          ? config.combiner(explore)("or")(input, binaries, metadata.getName())
          : config.success;
    };

  export const decode_object =
    (config: IConfig) => (importer: FunctionImporter) => {
      const func = FeatureProgrammer.decode_object(config)(importer);
      return (input: ts.Expression, obj: MetadataObject, explore: IExplore) => {
        obj.validated = true;
        return func(input, obj, explore);
      };
    };

  const decode_array =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (input: ts.Expression, array: MetadataArray, explore: IExplore) => {
      if (array.type.recursive === false)
        return decode_array_inline(project)(config)(importer)(
          input,
          array,
          explore,
        );

      explore = {
        ...explore,
        source: "function",
        from: "array",
      };
      return ts.factory.createLogicalOr(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            importer.useLocal(`${config.prefix}a${array.type.index}`),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
            from: "array",
          })(input),
        ),
        config.joiner.failure(input, array.type.name, explore),
      );
    };

  const decode_array_inline =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      array: MetadataArray,
      explore: IExplore,
    ): ts.Expression => {
      const length = check_array_length(project)(array)(input);
      const main = FeatureProgrammer.decode_array({
        prefix: config.prefix,
        trace: config.trace,
        path: config.path,
        decoder: () => decode(project)(config)(importer),
      })(importer)(config.joiner.array)(input, array, explore);
      return length.expression === null && length.conditions.length === 0
        ? main
        : ts.factory.createLogicalAnd(
            config.atomist(explore)(length)(input),
            main,
          );
    };

  const decode_tuple =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTuple,
      explore: IExplore,
    ): ts.Expression => {
      if (tuple.type.recursive === false)
        return decode_tuple_inline(project)(config)(importer)(
          input,
          tuple.type,
          explore,
        );
      explore = {
        ...explore,
        source: "function",
        from: "array",
      };
      return ts.factory.createLogicalOr(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            importer.useLocal(`${config.prefix}t${tuple.type.index}`),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
          })(input),
        ),
        config.joiner.failure(input, tuple.type.name, explore),
      );
    };

  const decode_tuple_inline =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTupleType,
      explore: IExplore,
    ): ts.Expression => {
      const binaries: ts.Expression[] = tuple.elements
        .filter((meta) => meta.rest === null)
        .map((meta, index) =>
          decode(project)(config)(importer)(
            ts.factory.createElementAccessExpression(input, index),
            meta,
            {
              ...explore,
              from: "array",
              postfix: explore.postfix.length
                ? `${postfix_of_tuple(explore.postfix)}[${index}]"`
                : `"[${index}]"`,
            },
          ),
        );
      const rest: ts.Expression | null =
        tuple.elements.length && tuple.elements.at(-1)!.rest !== null
          ? decode(project)(config)(importer)(
              ts.factory.createCallExpression(
                IdentifierFactory.access(input)("slice"),
                undefined,
                [ExpressionFactory.number(tuple.elements.length - 1)],
              ),
              wrap_metadata_rest_tuple(tuple.elements.at(-1)!.rest!),
              {
                ...explore,
                start: tuple.elements.length - 1,
              },
            )
          : null;

      const arrayLength = ts.factory.createPropertyAccessExpression(
        input,
        "length",
      );
      return config.combiner(explore)("and")(
        input,
        [
          ...(rest === null
            ? tuple.elements.every((t) => t.optional === false)
              ? [
                  {
                    combined: false,
                    expression: ts.factory.createStrictEquality(
                      arrayLength,
                      ExpressionFactory.number(tuple.elements.length),
                    ),
                  },
                ]
              : [
                  {
                    combined: false,
                    expression: ts.factory.createLogicalAnd(
                      ts.factory.createLessThanEquals(
                        ExpressionFactory.number(
                          tuple.elements.filter((t) => t.optional === false)
                            .length,
                        ),
                        arrayLength,
                      ),
                      ts.factory.createGreaterThanEquals(
                        ExpressionFactory.number(tuple.elements.length),
                        arrayLength,
                      ),
                    ),
                  },
                ]
            : []),
          ...(config.joiner.tuple
            ? [
                {
                  expression: config.joiner.tuple(binaries),
                  combined: true,
                },
              ]
            : binaries.map((expression) => ({
                expression,
                combined: true,
              }))),
          ...(rest !== null
            ? [
                {
                  expression: rest,
                  combined: true,
                },
              ]
            : []),
        ],
        `[${tuple.elements.map((t) => t.getName()).join(", ")}]`,
      );
    };

  const decode_escaped =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (input: ts.Expression, meta: Metadata, explore: IExplore): ts.Expression =>
      ts.factory.createCallExpression(
        ts.factory.createParenthesizedExpression(
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
            undefined,
            undefined,
            decode(project)(config)(importer)(
              ts.factory.createIdentifier("input"),
              meta,
              explore,
            ),
          ),
        ),
        undefined,
        [
          ts.factory.createCallExpression(
            IdentifierFactory.access(input)("toJSON"),
            undefined,
            [],
          ),
        ],
      );

  /* -----------------------------------------------------------
        UNION TYPE EXPLORERS
    ----------------------------------------------------------- */
  const explore_sets =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      sets: Metadata[],
      explore: IExplore,
    ): ts.Expression =>
      ts.factory.createCallExpression(
        UnionExplorer.set({
          checker: decode(project)(config)(importer),
          decoder: decode_array(project)(config)(importer),
          empty: config.success,
          success: config.success,
          failure: (input, expected, explore) =>
            ts.factory.createReturnStatement(
              config.joiner.failure(input, expected, explore),
            ),
        })([])(input, sets, explore),
        undefined,
        undefined,
      );

  const explore_maps =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      maps: Metadata.Entry[],
      explore: IExplore,
    ): ts.Expression =>
      ts.factory.createCallExpression(
        UnionExplorer.map({
          checker: (input, entry, explore) => {
            const func = decode(project)(config)(importer);
            return ts.factory.createLogicalAnd(
              func(
                ts.factory.createElementAccessExpression(input, 0),
                entry[0],
                {
                  ...explore,
                  postfix: `${explore.postfix}[0]`,
                },
              ),
              func(
                ts.factory.createElementAccessExpression(input, 1),
                entry[1],
                {
                  ...explore,
                  postfix: `${explore.postfix}[1]`,
                },
              ),
            );
          },
          decoder: decode_array(project)(config)(importer),
          empty: config.success,
          success: config.success,
          failure: (input, expected, explore) =>
            ts.factory.createReturnStatement(
              config.joiner.failure(input, expected, explore),
            ),
        })([])(input, maps, explore),
        undefined,
        undefined,
      );

  const explore_tuples =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuples: MetadataTuple[],
      explore: IExplore,
    ): ts.Expression =>
      explore_array_like_union_types(config)(importer)(
        UnionExplorer.tuple({
          checker: decode_tuple(project)(config)(importer),
          decoder: decode_tuple(project)(config)(importer),
          empty: config.success,
          success: config.success,
          failure: (input, expected, explore) =>
            ts.factory.createReturnStatement(
              config.joiner.failure(input, expected, explore),
            ),
        }),
      )(input, tuples, explore);

  const explore_arrays =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      arrays: MetadataArray[],
      explore: IExplore,
    ): ts.Expression =>
      explore_array_like_union_types(config)(importer)(
        UnionExplorer.array({
          checker: decode(project)(config)(importer),
          decoder: decode_array(project)(config)(importer),
          empty: config.success,
          success: config.success,
          failure: (input, expected, explore) =>
            ts.factory.createReturnStatement(
              config.joiner.failure(input, expected, explore),
            ),
        }),
      )(input, arrays, explore);

  const explore_arrays_and_tuples =
    (project: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      elements: Array<MetadataArray | MetadataTuple>,
      explore: IExplore,
    ): ts.Expression =>
      explore_array_like_union_types(config)(importer)(
        UnionExplorer.array_or_tuple({
          checker: (front, target, explore, array) =>
            target instanceof MetadataTuple
              ? decode_tuple(project)(config)(importer)(front, target, explore)
              : config.atomist(explore)({
                  expected: elements
                    .map((elem) =>
                      elem instanceof MetadataArray
                        ? elem.getName()
                        : elem.type.name,
                    )
                    .join(" | "),
                  expression: decode(project)(config)(importer)(
                    front,
                    target,
                    explore,
                  ),
                  conditions: [],
                })(array),
          decoder: (input, target, explore) =>
            target instanceof MetadataTuple
              ? decode_tuple(project)(config)(importer)(input, target, explore)
              : decode_array(project)(config)(importer)(input, target, explore),
          empty: config.success,
          success: config.success,
          failure: (input, expected, explore) =>
            ts.factory.createReturnStatement(
              config.joiner.failure(input, expected, explore),
            ),
        }),
      )(input, elements, explore);

  const explore_array_like_union_types =
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    <T extends MetadataArray | MetadataTuple>(
      factory: (
        parameters: ts.ParameterDeclaration[],
      ) => (
        input: ts.Expression,
        elements: T[],
        explore: IExplore,
      ) => ts.ArrowFunction,
    ) =>
    (input: ts.Expression, elements: T[], explore: IExplore): ts.Expression => {
      const arrow =
        (parameters: ts.ParameterDeclaration[]) =>
        (explore: IExplore) =>
        (input: ts.Expression): ts.ArrowFunction =>
          factory(parameters)(input, elements, explore);
      if (elements.every((e) => e.type.recursive === false))
        ts.factory.createCallExpression(
          arrow([])(explore)(input),
          undefined,
          [],
        );
      explore = {
        ...explore,
        source: "function",
        from: "array",
      };
      return ts.factory.createLogicalOr(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            importer.emplaceUnion(
              config.prefix,
              elements.map((e) => e.type.name).join(" | "),
              () =>
                arrow(
                  FeatureProgrammer.parameterDeclarations(config)(
                    TypeFactory.keyword("any"),
                  )(ts.factory.createIdentifier("input")),
                )({
                  ...explore,
                  postfix: "",
                })(ts.factory.createIdentifier("input")),
            ),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(config)(explore)(input),
        ),
        config.joiner.failure(
          input,
          elements.map((e) => e.type.name).join(" | "),
          explore,
        ),
      );
    };

  const explore_objects =
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (input: ts.Expression, meta: Metadata, explore: IExplore) =>
      meta.objects.length === 1
        ? decode_object(config)(importer)(input, meta.objects[0]!, explore)
        : ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${config.prefix}u${meta.union_index!}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)(explore)(input),
          );
}

const create_add =
  (binaries: CheckerProgrammer.IBinary[]) =>
  (defaultInput: ts.Expression) =>
  (
    exact: boolean,
    left: ts.Expression,
    right: ts.Expression = defaultInput,
  ) => {
    const factory = exact
      ? ts.factory.createStrictEquality
      : ts.factory.createStrictInequality;
    binaries.push({
      expression: factory(left, right),
      combined: false,
    });
  };
