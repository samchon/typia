import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { JsonMetadataFactory } from "../../factories/JsonMetadataFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { ValueFactory } from "../../factories/ValueFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { AtomicPredicator } from "../helpers/AtomicPredicator";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { OptionPredicator } from "../helpers/OptionPredicator";
import { StringifyJoiner } from "../helpers/StringifyJoinder";
import { StringifyPredicator } from "../helpers/StringifyPredicator";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { check_native } from "../internal/check_native";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace JsonStringifyProgrammer {
  /* -----------------------------------------------------------
    WRITER
  ----------------------------------------------------------- */
  export const decompose = (props: {
    validated: boolean;
    context: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config: FeatureProgrammer.IConfig = configure(props.context)(
      props.importer,
    );
    if (props.validated === false)
      config.addition = (collection) =>
        IsProgrammer.write_function_statements(props.context)(props.importer)(
          collection,
        );
    const composed: FeatureProgrammer.IComposed = FeatureProgrammer.compose({
      ...props,
      config,
    });
    return {
      functions: composed.functions,
      statements: composed.statements,
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        composed.parameters,
        composed.response,
        undefined,
        composed.body,
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      validated: false,
      importer,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };

  const write_array_functions =
    (config: FeatureProgrammer.IConfig) =>
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
              decode_array_inline(config)(importer)(
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

  const write_tuple_functions =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
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

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  const decode =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      metadata: Metadata,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      // ANY TYPE
      if (metadata.any === true)
        return wrap_required(
          input,
          metadata,
          explore,
        )(
          wrap_functional({
            input,
            metadata,
            explore,
            expression: ts.factory.createCallExpression(
              ts.factory.createIdentifier("JSON.stringify"),
              undefined,
              [input],
            ),
          }),
        );

      // ONLY NULL OR UNDEFINED
      const size: number = metadata.size();
      if (
        size === 0 &&
        (metadata.isRequired() === false || metadata.nullable === true)
      ) {
        if (metadata.isRequired() === false && metadata.nullable === true)
          return explore.from === "array"
            ? ts.factory.createStringLiteral("null")
            : ts.factory.createConditionalExpression(
                ts.factory.createStrictEquality(ts.factory.createNull(), input),
                undefined,
                ts.factory.createStringLiteral("null"),
                undefined,
                ts.factory.createIdentifier("undefined"),
              );
        else if (metadata.isRequired() === false)
          return explore.from === "array"
            ? ts.factory.createStringLiteral("null")
            : ts.factory.createIdentifier("undefined");
        else return ts.factory.createStringLiteral("null");
      }

      //----
      // LIST UP UNION TYPES
      //----
      const unions: IUnion[] = [];

      // toJSON() METHOD
      if (metadata.escaped !== null)
        unions.push({
          type: "resolved",
          is:
            metadata.escaped.original.size() === 1 &&
            metadata.escaped.original.natives[0] === "Date"
              ? () => check_native("Date")(input)
              : () => IsProgrammer.decode_to_json(false)(input),
          value: () =>
            decode_to_json(project)(config)(importer)(
              input,
              metadata.escaped!.returns,
              explore,
            ),
        });
      else if (metadata.functions.length)
        unions.push({
          type: "functional",
          is: () => IsProgrammer.decode_functional(input),
          value: () => decode_functional(explore),
        });

      // TEMPLATES
      if (
        metadata.templates.length ||
        ArrayUtil.has(metadata.constants, (c) => c.type === "string")
      )
        if (AtomicPredicator.template(metadata)) {
          const partial = Metadata.initialize();
          partial.atomics.push(
            MetadataAtomic.create({ type: "string", tags: [] }),
          ),
            unions.push({
              type: "template literal",
              is: () =>
                IsProgrammer.decode(project)(importer)(input, partial, explore),
              value: () =>
                decode_atomic(project)(importer)(input, "string", explore),
            });
        }

      // CONSTANTS
      for (const constant of metadata.constants)
        if (
          AtomicPredicator.constant({
            metadata,
            name: constant.type,
          }) === false
        )
          continue;
        else if (constant.type !== "string")
          unions.push({
            type: "atomic",
            is: () =>
              IsProgrammer.decode(project)(importer)(
                input,
                (() => {
                  const partial = Metadata.initialize();
                  partial.atomics.push(
                    MetadataAtomic.create({
                      type: constant.type,
                      tags: [],
                    }),
                  );
                  return partial;
                })(),
                explore,
              ),
            value: () =>
              decode_atomic(project)(importer)(input, constant.type, explore),
          });
        else if (metadata.templates.length === 0)
          unions.push({
            type: "const string",
            is: () =>
              IsProgrammer.decode(project)(importer)(
                input,
                (() => {
                  const partial = Metadata.initialize();
                  partial.atomics.push(
                    MetadataAtomic.create({
                      type: "string",
                      tags: [],
                    }),
                  );
                  return partial;
                })(),
                explore,
              ),
            value: () =>
              decode_constant_string(project)(importer)(
                input,
                [...constant.values.map((v) => v.value)] as string[],
                explore,
              ),
          });

      /// ATOMICS
      for (const a of metadata.atomics)
        if (
          AtomicPredicator.atomic({
            metadata,
            name: a.type,
          })
        )
          unions.push({
            type: "atomic",
            is: () =>
              IsProgrammer.decode(project)(importer)(
                input,
                (() => {
                  const partial = Metadata.initialize();
                  partial.atomics.push(a);
                  return partial;
                })(),
                explore,
              ),
            value: () =>
              decode_atomic(project)(importer)(input, a.type, explore),
          });

      // TUPLES
      for (const tuple of metadata.tuples)
        unions.push({
          type: "tuple",
          is: () =>
            IsProgrammer.decode(project)(importer)(
              input,
              (() => {
                const partial = Metadata.initialize();
                partial.tuples.push(tuple);
                return partial;
              })(),
              explore,
            ),
          value: () =>
            decode_tuple(project)(config)(importer)(input, tuple, explore),
        });

      // ARRAYS
      if (metadata.arrays.length) {
        const value: () => ts.Expression =
          metadata.arrays.length === 1
            ? () =>
                decode_array(config)(importer)(input, metadata.arrays[0]!, {
                  ...explore,
                  from: "array",
                })
            : metadata.arrays.some((elem) => elem.type.value.any)
              ? () =>
                  ts.factory.createCallExpression(
                    ts.factory.createIdentifier("JSON.stringify"),
                    undefined,
                    [input],
                  )
              : () =>
                  explore_arrays(project)(config)(importer)(
                    input,
                    metadata.arrays,
                    {
                      ...explore,
                      from: "array",
                    },
                  );

        unions.push({
          type: "array",
          is: () => ExpressionFactory.isArray(input),
          value,
        });
      }

      // BUILT-IN CLASSES
      if (metadata.natives.length)
        for (const native of metadata.natives)
          unions.push({
            type: "object",
            is: () => check_native(native)(input),
            value: () =>
              AtomicPredicator.native(native)
                ? decode_atomic(project)(importer)(
                    input,
                    native.toLowerCase() as Atomic.Literal,
                    explore,
                  )
                : ts.factory.createStringLiteral("{}"),
          });

      // SETS
      if (metadata.sets.length)
        unions.push({
          type: "object",
          is: () => ExpressionFactory.isInstanceOf("Set")(input),
          value: () => ts.factory.createStringLiteral("{}"),
        });

      // MAPS
      if (metadata.maps.length)
        unions.push({
          type: "object",
          is: () => ExpressionFactory.isInstanceOf("Map")(input),
          value: () => ts.factory.createStringLiteral("{}"),
        });

      // OBJECTS
      if (metadata.objects.length)
        unions.push({
          type: "object",
          is: () =>
            ExpressionFactory.isObject({
              checkNull: true,
              checkArray: metadata.objects.some((obj) =>
                obj.properties.every(
                  (prop) =>
                    !prop.key.isSoleLiteral() || !prop.value.isRequired(),
                ),
              ),
            })(input),
          value: () =>
            explore_objects(config)(importer)(input, metadata, {
              ...explore,
              from: "object",
            }),
        });

      //----
      // RETURNS
      //----
      // CHECK NULL AND UNDEFINED
      const wrapper = (output: ts.Expression) =>
        wrap_required(
          input,
          metadata,
          explore,
        )(wrap_nullable(input, metadata)(output));

      // DIRECT RETURN
      if (unions.length === 0)
        return ts.factory.createCallExpression(
          ts.factory.createIdentifier("JSON.stringify"),
          undefined,
          [input],
        );
      else if (unions.length === 1) return wrapper(unions[0]!.value());

      // RETURN WITH TYPE CHECKING
      return wrapper(
        ts.factory.createCallExpression(
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            undefined,
            iterate({
              importer,
              input,
              unions,
              expected: metadata.getName(),
            }),
          ),
          undefined,
          undefined,
        ),
      );
    };

  const decode_object = (importer: FunctionImporter) =>
    FeatureProgrammer.decode_object({
      trace: false,
      path: false,
      prefix: PREFIX,
    })(importer);

  const decode_array =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      array: MetadataArray,
      explore: FeatureProgrammer.IExplore,
    ) =>
      array.type.recursive
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${config.prefix}a${array.type.index}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)({
              ...explore,
              source: "function",
              from: "array",
            })(input),
          )
        : decode_array_inline(config)(importer)(input, array, explore);

  const decode_array_inline =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      array: MetadataArray,
      explore: FeatureProgrammer.IExplore,
    ) =>
      FeatureProgrammer.decode_array(config)(importer)(StringifyJoiner.array)(
        input,
        array,
        explore,
      );

  const decode_tuple =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTuple,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      tuple.type.recursive
        ? ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${config.prefix}t${tuple.type.index}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)({
              ...explore,
              source: "function",
            })(input),
          )
        : decode_tuple_inline(project)(config)(importer)(
            input,
            tuple.type,
            explore,
          );

  const decode_tuple_inline =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      tuple: MetadataTupleType,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      const elements: ts.Expression[] = tuple.elements
        .filter((elem) => elem.rest === null)
        .map((elem, index) =>
          decode(project)(config)(importer)(
            ts.factory.createElementAccessExpression(input, index),
            elem,
            {
              ...explore,
              from: "array",
              postfix: explore.postfix.length
                ? `${postfix_of_tuple(explore.postfix)}[${index}]"`
                : `"[${index}]"`,
            },
          ),
        );
      const rest = (() => {
        if (tuple.elements.length === 0) return null;
        const last = tuple.elements.at(-1)!;
        if (last.rest === null) return null;

        const code = decode(project)(config)(importer)(
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
        );
        return ts.factory.createCallExpression(
          importer.use("rest"),
          undefined,
          [code],
        );
      })();
      return StringifyJoiner.tuple({
        elements,
        rest,
      });
    };

  const decode_atomic =
    (project: ITypiaContext) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      type: string,
      explore: FeatureProgrammer.IExplore,
    ) => {
      if (type === "string")
        return ts.factory.createCallExpression(
          importer.use("string"),
          undefined,
          [input],
        );
      else if (type === "number" && OptionPredicator.numeric(project.options))
        input = ts.factory.createCallExpression(
          importer.use("number"),
          undefined,
          [input],
        );

      return explore.from !== "top"
        ? input
        : ts.factory.createCallExpression(
            IdentifierFactory.access(input)("toString"),
            undefined,
            undefined,
          );
    };

  const decode_constant_string =
    (project: ITypiaContext) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      values: string[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      if (values.every((v) => !StringifyPredicator.require_escape(v)))
        return [
          ts.factory.createStringLiteral('"'),
          input,
          ts.factory.createStringLiteral('"'),
        ].reduce((x, y) => ts.factory.createAdd(x, y));
      else return decode_atomic(project)(importer)(input, "string", explore);
    };

  const decode_to_json =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      resolved: Metadata,
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      return decode(project)(config)(importer)(
        ts.factory.createCallExpression(
          IdentifierFactory.access(input)("toJSON"),
          undefined,
          [],
        ),
        resolved,
        explore,
      );
    };

  const decode_functional = (explore: FeatureProgrammer.IExplore) =>
    explore.from === "array"
      ? ts.factory.createStringLiteral("null")
      : ts.factory.createIdentifier("undefined");

  /* -----------------------------------------------------------
    EXPLORERS
  ----------------------------------------------------------- */
  const explore_objects =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      meta: Metadata,
      explore: FeatureProgrammer.IExplore,
    ) =>
      meta.objects.length === 1
        ? decode_object(importer)(input, meta.objects[0]!, explore)
        : ts.factory.createCallExpression(
            ts.factory.createIdentifier(
              importer.useLocal(`${PREFIX}u${meta.union_index!}`),
            ),
            undefined,
            FeatureProgrammer.argumentsArray(config)(explore)(input),
          );

  const explore_arrays =
    (project: ITypiaContext) =>
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    (
      input: ts.Expression,
      elements: MetadataArray[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression =>
      explore_array_like_union_types(config)(importer)(
        UnionExplorer.array({
          checker: IsProgrammer.decode(project)(importer),
          decoder: decode_array(config)(importer),
          empty: ts.factory.createStringLiteral("[]"),
          success: ts.factory.createTrue(),
          failure: (input, expected) =>
            create_throw_error({ importer, expected, input }),
        }),
      )(input, elements, explore);

  const explore_array_like_union_types =
    (config: FeatureProgrammer.IConfig) =>
    (importer: FunctionImporter) =>
    <T extends MetadataArray | MetadataTuple>(
      factory: (
        parameters: ts.ParameterDeclaration[],
      ) => (
        input: ts.Expression,
        elements: T[],
        explore: FeatureProgrammer.IExplore,
      ) => ts.ArrowFunction,
    ) =>
    (
      input: ts.Expression,
      elements: T[],
      explore: FeatureProgrammer.IExplore,
    ): ts.Expression => {
      const arrow =
        (parameters: ts.ParameterDeclaration[]) =>
        (explore: FeatureProgrammer.IExplore) =>
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
      return ts.factory.createCallExpression(
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
      );
    };

  /* -----------------------------------------------------------
    RETURN SCRIPTS
  ----------------------------------------------------------- */
  const wrap_required = (
    input: ts.Expression,
    meta: Metadata,
    explore: FeatureProgrammer.IExplore,
  ): ((expression: ts.Expression) => ts.Expression) => {
    if (meta.isRequired() === true && meta.any === false)
      return (expression) => expression;
    return (expression) =>
      ts.factory.createConditionalExpression(
        ts.factory.createStrictInequality(
          ts.factory.createIdentifier("undefined"),
          input,
        ),
        undefined,
        expression,
        undefined,
        explore.from === "array"
          ? ts.factory.createStringLiteral("null")
          : ts.factory.createIdentifier("undefined"),
      );
  };

  const wrap_nullable = (
    input: ts.Expression,
    meta: Metadata,
  ): ((expression: ts.Expression) => ts.Expression) => {
    if (meta.nullable === false) return (expression) => expression;
    return (expression) =>
      ts.factory.createConditionalExpression(
        ts.factory.createStrictInequality(ts.factory.createNull(), input),
        undefined,
        expression,
        undefined,
        ts.factory.createStringLiteral("null"),
      );
  };

  const wrap_functional = (props: {
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
    expression: ts.Expression;
  }): ts.Expression => {
    if (props.metadata.functions.length === 0) return props.expression;
    return ts.factory.createConditionalExpression(
      ts.factory.createStrictInequality(
        ts.factory.createStringLiteral("function"),
        ValueFactory.TYPEOF(props.input),
      ),
      undefined,
      props.expression,
      undefined,
      decode_functional(props.explore),
    );
  };

  const iterate = (props: {
    importer: FunctionImporter;
    input: ts.Expression;
    unions: IUnion[];
    expected: string;
  }) =>
    ts.factory.createBlock(
      [
        ...props.unions.map((u) =>
          ts.factory.createIfStatement(
            u.is(),
            ts.factory.createReturnStatement(u.value()),
          ),
        ),
        create_throw_error(props),
      ],
      true,
    );

  /* -----------------------------------------------------------
    CONFIGURATIONS
  ----------------------------------------------------------- */
  const PREFIX = "$s";

  const configure =
    (project: ITypiaContext) =>
    (importer: FunctionImporter): FeatureProgrammer.IConfig => {
      const config: FeatureProgrammer.IConfig<ts.Expression> = {
        types: {
          input: (type, name) =>
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          output: () => TypeFactory.keyword("string"),
        },
        prefix: PREFIX,
        trace: false,
        path: false,
        initializer,
        decoder: () => decode(project)(config)(importer),
        objector: {
          checker: () => IsProgrammer.decode(project)(importer),
          decoder: () => decode_object(importer),
          joiner: (props) =>
            StringifyJoiner.object({
              ...props,
              importer,
            }),
          unionizer: decode_union_object(
            IsProgrammer.decode_object(project)(importer),
          )(decode_object(importer))((exp) => exp)((input, expected) =>
            create_throw_error({ importer, expected, input }),
          ),
          failure: (input, expected) =>
            create_throw_error({ importer, expected, input }),
        },
        generator: {
          arrays: () => write_array_functions(config)(importer),
          tuples: () => write_tuple_functions(project)(config)(importer),
        },
      };
      return config;
    };

  const initializer: FeatureProgrammer.IConfig["initializer"] =
    (project) => (importer) => (type) =>
      JsonMetadataFactory.analyze({
        method: `typia.json.${importer.method}`,
        checker: project.checker,
        transformer: project.transformer,
        type,
      });

  const create_throw_error = (props: {
    importer: FunctionImporter;
    expected: string;
    input: ts.Expression;
  }) =>
    ts.factory.createExpressionStatement(
      ts.factory.createCallExpression(
        props.importer.use("throws"),
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

interface IUnion {
  type: string;
  is: () => ts.Expression;
  value: () => ts.Expression;
}
