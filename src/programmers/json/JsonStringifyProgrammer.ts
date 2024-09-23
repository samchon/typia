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
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { Atomic } from "../../typings/Atomic";

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
    const config: FeatureProgrammer.IConfig = configure(props);
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

  const write_array_functions = (props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .arrays()
      .filter((a) => a.recursive)
      .map((type, i) =>
        StatementFactory.constant(
          `${props.config.prefix}a${i}`,
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            FeatureProgrammer.parameterDeclarations(props.config)(
              TypeFactory.keyword("any"),
            )(ts.factory.createIdentifier("input")),
            TypeFactory.keyword("any"),
            undefined,
            decode_array_inline({
              config: props.config,
              importer: props.importer,
              input: ts.factory.createIdentifier("input"),
              array: MetadataArray.create({
                type,
                tags: [],
              }),
              explore: {
                tracable: props.config.trace,
                source: "function",
                from: "array",
                postfix: "",
              },
            }),
          ),
        ),
      );

  const write_tuple_functions = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .tuples()
      .filter((t) => t.recursive)
      .map((tuple, i) =>
        StatementFactory.constant(
          `${props.config.prefix}t${i}`,
          ts.factory.createArrowFunction(
            undefined,
            undefined,
            FeatureProgrammer.parameterDeclarations(props.config)(
              TypeFactory.keyword("any"),
            )(ts.factory.createIdentifier("input")),
            TypeFactory.keyword("any"),
            undefined,
            decode_tuple_inline({
              context: props.context,
              config: props.config,
              importer: props.importer,
              input: ts.factory.createIdentifier("input"),
              tuple,
              explore: {
                tracable: props.config.trace,
                source: "function",
                from: "array",
                postfix: "",
              },
            }),
          ),
        ),
      );

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  const decode = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    // ANY TYPE
    if (props.metadata.any === true)
      return wrap_required({
        input: props.input,
        metadata: props.metadata,
        explore: props.explore,
        expression: wrap_functional({
          input: props.input,
          metadata: props.metadata,
          explore: props.explore,
          expression: ts.factory.createCallExpression(
            ts.factory.createIdentifier("JSON.stringify"),
            undefined,
            [props.input],
          ),
        }),
      });

    // ONLY NULL OR UNDEFINED
    const size: number = props.metadata.size();
    if (
      size === 0 &&
      (props.metadata.isRequired() === false ||
        props.metadata.nullable === true)
    ) {
      if (
        props.metadata.isRequired() === false &&
        props.metadata.nullable === true
      )
        return props.explore.from === "array"
          ? ts.factory.createStringLiteral("null")
          : ts.factory.createConditionalExpression(
              ts.factory.createStrictEquality(
                ts.factory.createNull(),
                props.input,
              ),
              undefined,
              ts.factory.createStringLiteral("null"),
              undefined,
              ts.factory.createIdentifier("undefined"),
            );
      else if (props.metadata.isRequired() === false)
        return props.explore.from === "array"
          ? ts.factory.createStringLiteral("null")
          : ts.factory.createIdentifier("undefined");
      else return ts.factory.createStringLiteral("null");
    }

    //----
    // LIST UP UNION TYPES
    //----
    const unions: IUnion[] = [];

    // toJSON() METHOD
    if (props.metadata.escaped !== null)
      unions.push({
        type: "resolved",
        is:
          props.metadata.escaped.original.size() === 1 &&
          props.metadata.escaped.original.natives[0] === "Date"
            ? () => check_native("Date")(props.input)
            : () => IsProgrammer.decode_to_json(false)(props.input),
        value: () =>
          decode_to_json({
            ...props,
            metadata: props.metadata.escaped!.returns,
          }),
      });
    else if (props.metadata.functions.length)
      unions.push({
        type: "functional",
        is: () => IsProgrammer.decode_functional(props.input),
        value: () => decode_functional(props.explore),
      });

    // TEMPLATES
    if (props.metadata.templates.length)
      if (AtomicPredicator.template(props.metadata)) {
        const partial = Metadata.initialize();
        partial.atomics.push(
          MetadataAtomic.create({ type: "string", tags: [] }),
        ),
          unions.push({
            type: "template literal",
            is: () =>
              IsProgrammer.decode(props.context)(props.importer)(
                props.input,
                partial,
                props.explore,
              ),
            value: () =>
              decode_atomic({
                ...props,
                type: "string",
              }),
          });
      }

    // CONSTANTS
    for (const constant of props.metadata.constants)
      if (
        AtomicPredicator.constant({
          metadata: props.metadata,
          name: constant.type,
        }) === false
      )
        continue;
      else if (constant.type !== "string")
        unions.push({
          type: "atomic",
          is: () =>
            IsProgrammer.decode(props.context)(props.importer)(
              props.input,
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
              props.explore,
            ),
          value: () =>
            decode_atomic({
              ...props,
              type: constant.type,
            }),
        });
      else if (props.metadata.templates.length === 0)
        unions.push({
          type: "const string",
          is: () =>
            IsProgrammer.decode(props.context)(props.importer)(
              props.input,
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
              props.explore,
            ),
          value: () =>
            decode_constant_string({
              ...props,
              values: [...constant.values.map((v) => v.value)] as string[],
            }),
        });

    /// ATOMICS
    for (const a of props.metadata.atomics)
      if (
        AtomicPredicator.atomic({
          metadata: props.metadata,
          name: a.type,
        })
      )
        unions.push({
          type: "atomic",
          is: () =>
            IsProgrammer.decode(props.context)(props.importer)(
              props.input,
              (() => {
                const partial = Metadata.initialize();
                partial.atomics.push(a);
                return partial;
              })(),
              props.explore,
            ),
          value: () =>
            decode_atomic({
              ...props,
              type: a.type,
            }),
        });

    // TUPLES
    for (const tuple of props.metadata.tuples)
      unions.push({
        type: "tuple",
        is: () =>
          IsProgrammer.decode(props.context)(props.importer)(
            props.input,
            (() => {
              const partial = Metadata.initialize();
              partial.tuples.push(tuple);
              return partial;
            })(),
            props.explore,
          ),
        value: () =>
          decode_tuple({
            ...props,
            tuple,
          }),
      });

    // ARRAYS
    if (props.metadata.arrays.length) {
      const value: () => ts.Expression =
        props.metadata.arrays.length === 1
          ? () =>
              decode_array({
                ...props,
                array: props.metadata.arrays[0]!,
                explore: {
                  ...props.explore,
                  from: "array",
                },
              })
          : props.metadata.arrays.some((elem) => elem.type.value.any)
            ? () =>
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("JSON.stringify"),
                  undefined,
                  [props.input],
                )
            : () =>
                explore_arrays({
                  ...props,
                  elements: props.metadata.arrays,
                  explore: {
                    ...props.explore,
                    from: "array",
                  },
                });

      unions.push({
        type: "array",
        is: () => ExpressionFactory.isArray(props.input),
        value,
      });
    }

    // BUILT-IN CLASSES
    if (props.metadata.natives.length)
      for (const native of props.metadata.natives)
        unions.push({
          type: "object",
          is: () => check_native(native)(props.input),
          value: () =>
            AtomicPredicator.native(native)
              ? decode_atomic({
                  ...props,
                  type: native.toLowerCase() as Atomic.Literal,
                })
              : ts.factory.createStringLiteral("{}"),
        });

    // SETS
    if (props.metadata.sets.length)
      unions.push({
        type: "object",
        is: () => ExpressionFactory.isInstanceOf("Set")(props.input),
        value: () => ts.factory.createStringLiteral("{}"),
      });

    // MAPS
    if (props.metadata.maps.length)
      unions.push({
        type: "object",
        is: () => ExpressionFactory.isInstanceOf("Map")(props.input),
        value: () => ts.factory.createStringLiteral("{}"),
      });

    // OBJECTS
    if (props.metadata.objects.length)
      unions.push({
        type: "object",
        is: () =>
          ExpressionFactory.isObject({
            checkNull: true,
            checkArray: props.metadata.objects.some((objects) =>
              objects.properties.every(
                (prop) => !prop.key.isSoleLiteral() || !prop.value.isRequired(),
              ),
            ),
          })(props.input),
        value: () =>
          explore_objects({
            ...props,
            explore: {
              ...props.explore,
              from: "object",
            },
          }),
      });

    //----
    // RETURNS
    //----
    // CHECK NULL AND UNDEFINED
    const wrapper = (output: ts.Expression) =>
      wrap_required({
        input: props.input,
        metadata: props.metadata,
        explore: props.explore,
        expression: wrap_nullable({
          input: props.input,
          metadata: props.metadata,
          expression: output,
        }),
      });

    // DIRECT RETURN
    if (unions.length === 0)
      return ts.factory.createCallExpression(
        ts.factory.createIdentifier("JSON.stringify"),
        undefined,
        [props.input],
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
            importer: props.importer,
            input: props.input,
            expected: props.metadata.getName(),
            unions,
          }),
        ),
        undefined,
        undefined,
      ),
    );
  };

  const decode_object = (props: {
    importer: FunctionImporter;
    input: ts.Expression;
    object: MetadataObject;
    explore: FeatureProgrammer.IExplore;
  }): ts.CallExpression =>
    FeatureProgrammer.decode_object({
      trace: false,
      path: false,
      prefix: PREFIX,
    })(props.importer)(props.input, props.object, props.explore);

  const decode_array = (props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    array: MetadataArray;
    explore: FeatureProgrammer.IExplore;
  }) =>
    props.array.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.importer.useLocal(
              `${props.config.prefix}a${props.array.type.index}`,
            ),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(props.config)({
            ...props.explore,
            source: "function",
            from: "array",
          })(props.input),
        )
      : decode_array_inline(props);

  const decode_array_inline = (props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    array: MetadataArray;
    explore: FeatureProgrammer.IExplore;
  }) =>
    FeatureProgrammer.decode_array(props.config)(props.importer)(
      StringifyJoiner.array,
    )(props.input, props.array, props.explore);

  const decode_tuple = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    tuple: MetadataTuple;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    props.tuple.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.importer.useLocal(
              `${props.config.prefix}t${props.tuple.type.index}`,
            ),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(props.config)({
            ...props.explore,
            source: "function",
          })(props.input),
        )
      : decode_tuple_inline({
          ...props,
          tuple: props.tuple.type,
        });

  const decode_tuple_inline = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    tuple: MetadataTupleType;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    const elements: ts.Expression[] = props.tuple.elements
      .filter((elem) => elem.rest === null)
      .map((elem, index) =>
        decode({
          ...props,
          input: ts.factory.createElementAccessExpression(props.input, index),
          metadata: elem,
          explore: {
            ...props.explore,
            from: "array",
            postfix: props.explore.postfix.length
              ? `${postfix_of_tuple(props.explore.postfix)}[${index}]"`
              : `"[${index}]"`,
          },
        }),
      );
    const rest = (() => {
      if (props.tuple.elements.length === 0) return null;
      const last = props.tuple.elements.at(-1)!;
      if (last.rest === null) return null;

      const code = decode({
        ...props,
        input: ts.factory.createCallExpression(
          IdentifierFactory.access(props.input)("slice"),
          undefined,
          [ExpressionFactory.number(props.tuple.elements.length - 1)],
        ),
        metadata: wrap_metadata_rest_tuple(props.tuple.elements.at(-1)!.rest!),
        explore: {
          ...props.explore,
          start: props.tuple.elements.length - 1,
        },
      });
      return ts.factory.createCallExpression(
        props.importer.use("rest"),
        undefined,
        [code],
      );
    })();
    return StringifyJoiner.tuple({
      elements,
      rest,
    });
  };

  const decode_atomic = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    input: ts.Expression;
    type: string;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    if (props.type === "string")
      return ts.factory.createCallExpression(
        props.importer.use("string"),
        undefined,
        [props.input],
      );
    else if (
      props.type === "number" &&
      OptionPredicator.numeric(props.context.options)
    )
      props = {
        ...props,
        input: ts.factory.createCallExpression(
          props.importer.use("number"),
          undefined,
          [props.input],
        ),
      };

    return props.explore.from !== "top"
      ? props.input
      : ts.factory.createCallExpression(
          IdentifierFactory.access(props.input)("toString"),
          undefined,
          undefined,
        );
  };

  const decode_constant_string = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
    input: ts.Expression;
    values: string[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    if (props.values.every((v) => !StringifyPredicator.require_escape(v)))
      return [
        ts.factory.createStringLiteral('"'),
        props.input,
        ts.factory.createStringLiteral('"'),
      ].reduce((x, y) => ts.factory.createAdd(x, y));
    return decode_atomic({
      ...props,
      type: "string",
    });
  };

  const decode_to_json = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    return decode({
      ...props,
      input: ts.factory.createCallExpression(
        IdentifierFactory.access(props.input)("toJSON"),
        undefined,
        [],
      ),
    });
  };

  const decode_functional = (explore: FeatureProgrammer.IExplore) =>
    explore.from === "array"
      ? ts.factory.createStringLiteral("null")
      : ts.factory.createIdentifier("undefined");

  /* -----------------------------------------------------------
    EXPLORERS
  ----------------------------------------------------------- */
  const explore_objects = (props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }) =>
    props.metadata.objects.length === 1
      ? decode_object({
          importer: props.importer,
          input: props.input,
          object: props.metadata.objects[0]!,
          explore: props.explore,
        })
      : ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.importer.useLocal(`${PREFIX}u${props.metadata.union_index!}`),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(props.config)(props.explore)(
            props.input,
          ),
        );

  const explore_arrays = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    elements: MetadataArray[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    explore_array_like_union_types({
      ...props,
      factory: (next) =>
        UnionExplorer.array({
          checker: IsProgrammer.decode(props.context)(props.importer),
          decoder: (input, array, explore) =>
            decode_array({
              config: props.config,
              importer: props.importer,
              input,
              array,
              explore,
            }),
          empty: ts.factory.createStringLiteral("[]"),
          success: ts.factory.createTrue(),
          failure: (input, expected) =>
            create_throw_error({
              importer: props.importer,
              expected,
              input,
            }),
        })(next.parameters)(next.input, next.elements, next.explore),
    });

  const explore_array_like_union_types = <
    T extends MetadataArray | MetadataTuple,
  >(props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    factory: (next: {
      parameters: ts.ParameterDeclaration[];
      input: ts.Expression;
      elements: T[];
      explore: FeatureProgrammer.IExplore;
    }) => ts.ArrowFunction;
    input: ts.Expression;
    elements: T[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    const arrow = (next: {
      parameters: ts.ParameterDeclaration[];
      explore: FeatureProgrammer.IExplore;
      input: ts.Expression;
    }): ts.ArrowFunction =>
      props.factory({
        elements: props.elements,
        parameters: next.parameters,
        input: next.input,
        explore: next.explore,
      });
    if (props.elements.every((e) => e.type.recursive === false))
      ts.factory.createCallExpression(
        arrow({
          parameters: [],
          explore: props.explore,
          input: props.input,
        }),
        undefined,
        [],
      );

    const explore: FeatureProgrammer.IExplore = {
      ...props.explore,
      source: "function",
      from: "array",
    };
    return ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.importer.emplaceUnion(
          props.config.prefix,
          props.elements.map((e) => e.type.name).join(" | "),
          () =>
            arrow({
              parameters: FeatureProgrammer.parameterDeclarations(props.config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
              explore: {
                ...explore,
                postfix: "",
              },
              input: ts.factory.createIdentifier("input"),
            }),
        ),
      ),
      undefined,
      FeatureProgrammer.argumentsArray(props.config)(explore)(props.input),
    );
  };

  /* -----------------------------------------------------------
    RETURN SCRIPTS
  ----------------------------------------------------------- */
  const wrap_required = (props: {
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
    expression: ts.Expression;
  }): ts.Expression => {
    if (props.metadata.isRequired() === true && props.metadata.any === false)
      return props.expression;
    return ts.factory.createConditionalExpression(
      ts.factory.createStrictInequality(
        ts.factory.createIdentifier("undefined"),
        props.input,
      ),
      undefined,
      props.expression,
      undefined,
      props.explore.from === "array"
        ? ts.factory.createStringLiteral("null")
        : ts.factory.createIdentifier("undefined"),
    );
  };

  const wrap_nullable = (props: {
    input: ts.Expression;
    metadata: Metadata;
    expression: ts.Expression;
  }): ts.Expression => {
    if (props.metadata.nullable === false) return props.expression;
    return ts.factory.createConditionalExpression(
      ts.factory.createStrictInequality(ts.factory.createNull(), props.input),
      undefined,
      props.expression,
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

  const configure = (props: {
    context: ITypiaContext;
    importer: FunctionImporter;
  }): FeatureProgrammer.IConfig => {
    const config: FeatureProgrammer.IConfig<ts.Expression> = {
      types: {
        input: (type, name) =>
          ts.factory.createTypeReferenceNode(
            name ?? TypeFactory.getFullName(props.context.checker)(type),
          ),
        output: () => TypeFactory.keyword("string"),
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: () => (input, metadata, explore) =>
        decode({
          config,
          context: props.context,
          importer: props.importer,
          input,
          metadata,
          explore,
        }),
      objector: {
        checker: () => IsProgrammer.decode(props.context)(props.importer),
        decoder: () => (input, object, explore) =>
          decode_object({
            importer: props.importer,
            input,
            object,
            explore,
          }),
        joiner: (next) =>
          StringifyJoiner.object({
            ...next,
            importer: props.importer,
          }),
        unionizer: decode_union_object(
          IsProgrammer.decode_object(props.context)(props.importer),
        )((input, object, explore) =>
          decode_object({
            importer: props.importer,
            input,
            object,
            explore,
          }),
        )((exp) => exp)((input, expected) =>
          create_throw_error({
            importer: props.importer,
            expected,
            input,
          }),
        ),
        failure: (input, expected) =>
          create_throw_error({
            importer: props.importer,
            expected,
            input,
          }),
      },
      generator: {
        arrays: () => (collection) =>
          write_array_functions({
            config,
            importer: props.importer,
            collection,
          }),
        tuples: () => (collection) =>
          write_tuple_functions({
            config,
            context: props.context,
            importer: props.importer,
            collection,
          }),
      },
    };
    return config;
  };

  const initializer: FeatureProgrammer.IConfig["initializer"] =
    (context) => (importer) => (type) =>
      JsonMetadataFactory.analyze({
        method: `typia.json.${importer.method}`,
        checker: context.checker,
        transformer: context.transformer,
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
