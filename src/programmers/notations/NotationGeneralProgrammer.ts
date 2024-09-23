import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { StringUtil } from "../../utils/StringUtil";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { NotationJoiner } from "../helpers/NotationJoiner";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace NotationGeneralProgrammer {
  export interface IProps extends IProgrammerProps {
    rename: (str: string) => string;
  }

  export const returnType =
    (rename: (str: string) => string) => (type: string) =>
      `typia.${StringUtil.capitalize(rename.name)}Case<${type}>`;

  export const decompose = (props: {
    rename: (str: string) => string;
    validated: boolean;
    context: ITypiaContext;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config = configure(props);
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
        ts.factory.createTypeReferenceNode(
          returnType(props.rename)(
            props.name ??
              TypeFactory.getFullName(props.context.checker)(props.type),
          ),
        ),
        undefined,
        composed.body,
      ),
    };
  };

  export const write = (props: IProps) => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
      validated: true,
    });
    return FeatureProgrammer.writeDecomposed({
      importer,
      modulo: props.modulo,
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
              ...props,
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
              ...props,
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
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
    input: ts.Expression;
  }): ts.Expression => {
    // ANY TYPE
    if (
      props.metadata.any ||
      props.metadata.arrays.some((a) => a.type.value.any) ||
      props.metadata.tuples.some(
        (t) => !!t.type.elements.length && t.type.elements.every((e) => e.any),
      )
    )
      return ts.factory.createCallExpression(
        props.importer.use("any"),
        undefined,
        [props.input],
      );

    interface IUnion {
      type: string;
      is: () => ts.Expression;
      value: () => ts.Expression;
    }
    const unions: IUnion[] = [];

    //----
    // LIST UP UNION TYPES
    //----
    // FUNCTIONAL
    if (props.metadata.functions.length)
      unions.push({
        type: "functional",
        is: () =>
          ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("function"),
            ts.factory.createTypeOfExpression(props.input),
          ),
        value: () => ts.factory.createIdentifier("undefined"),
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
    if (props.metadata.arrays.length)
      unions.push({
        type: "array",
        is: () => ExpressionFactory.isArray(props.input),
        value: () =>
          explore_arrays({
            ...props,
            elements: props.metadata.arrays,
            explore: {
              ...props.explore,
              from: "array",
            },
          }),
      });

    // NATIVE TYPES
    if (props.metadata.sets.length)
      unions.push({
        type: "set",
        is: () => ExpressionFactory.isInstanceOf("Set")(props.input),
        value: () =>
          explore_sets({
            ...props,
            sets: props.metadata.sets,
            explore: {
              ...props.explore,
              from: "array",
            },
          }),
      });
    if (props.metadata.maps.length)
      unions.push({
        type: "map",
        is: () => ExpressionFactory.isInstanceOf("Map")(props.input),
        value: () =>
          explore_maps({
            ...props,
            maps: props.metadata.maps,
            explore: {
              ...props.explore,
              from: "array",
            },
          }),
      });
    for (const native of props.metadata.natives) {
      if (native === "WeakSet" || native === "WeakMap") continue;
      unions.push({
        type: "native",
        is: () => ExpressionFactory.isInstanceOf(native)(props.input),
        value: () =>
          native === "Boolean" || native === "Number" || native === "String"
            ? ts.factory.createCallExpression(
                IdentifierFactory.access(props.input)("valueOf"),
                undefined,
                undefined,
              )
            : decode_native({
                name: native,
                input: props.input,
              }),
      });
    }

    // OBJECTS
    if (props.metadata.objects.length)
      unions.push({
        type: "object",
        is: () =>
          ExpressionFactory.isObject({
            checkNull: true,
            checkArray: false,
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

    // COMPOSITION
    if (unions.length === 0) return props.input;
    else if (unions.length === 1 && props.metadata.size() === 1) {
      const value: ts.Expression =
        (props.metadata.nullable || props.metadata.isRequired() === false) &&
        is_instance(props.metadata)
          ? ts.factory.createConditionalExpression(
              props.input,
              undefined,
              unions[0]!.value(),
              undefined,
              props.input,
            )
          : unions[0]!.value();
      return ts.factory.createAsExpression(value, TypeFactory.keyword("any"));
    } else {
      let last: ts.Expression = props.input;
      for (const u of unions.reverse())
        last = ts.factory.createConditionalExpression(
          u.is(),
          undefined,
          u.value(),
          undefined,
          last,
        );
      return ts.factory.createAsExpression(last, TypeFactory.keyword("any"));
    }
  };

  const decode_object = (importer: FunctionImporter) =>
    FeatureProgrammer.decode_object({
      trace: false,
      path: false,
      prefix: PREFIX,
    })(importer);

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
      NotationJoiner.array,
    )(props.input, props.array, props.explore);

  const decode_tuple = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    tuple: MetadataTuple;
    explore: FeatureProgrammer.IExplore;
    input: ts.Expression;
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
    explore: FeatureProgrammer.IExplore;
    tuple: MetadataTupleType;
    input: ts.Expression;
  }): ts.Expression => {
    const elements: ts.Expression[] = props.tuple.elements
      .filter((m) => m.rest === null)
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

      const last: Metadata = props.tuple.elements.at(-1)!;
      const rest: Metadata | null = last.rest;
      if (rest === null) return null;

      return decode({
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
    })();
    return NotationJoiner.tuple({
      elements,
      rest,
    });
  };

  /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
  const decode_native = (props: { name: string; input: ts.Expression }) =>
    props.name === "Date"
      ? ts.factory.createNewExpression(
          ts.factory.createIdentifier(props.name),
          undefined,
          [props.input],
        )
      : props.input;

  /* -----------------------------------------------------------
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
  const explore_sets = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    explore: FeatureProgrammer.IExplore;
    sets: Metadata[];
  }): ts.Expression =>
    ts.factory.createCallExpression(
      UnionExplorer.set({
        checker: IsProgrammer.decode(props.context)(props.importer),
        decoder: (input, array, explore) =>
          ts.factory.createNewExpression(
            ts.factory.createIdentifier("Set"),
            [TypeFactory.keyword("any")],
            [
              decode_array({
                config: props.config,
                importer: props.importer,
                input,
                array,
                explore,
              }),
            ],
          ),
        empty: ts.factory.createNewExpression(
          ts.factory.createIdentifier("Set"),
          [TypeFactory.keyword("any")],
          [],
        ),
        success: ts.factory.createTrue(),
        failure: (input, expected) =>
          create_throw_error({ importer: props.importer, expected, input }),
      })([])(props.input, props.sets, props.explore),
      undefined,
      undefined,
    );

  const explore_maps = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    maps: Metadata.Entry[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    ts.factory.createCallExpression(
      UnionExplorer.map({
        checker: (top, entry, explore) => {
          const func = IsProgrammer.decode(props.context)(props.importer);
          return ts.factory.createLogicalAnd(
            func(ts.factory.createElementAccessExpression(top, 0), entry[0], {
              ...explore,
              postfix: `${explore.postfix}[0]`,
            }),
            func(ts.factory.createElementAccessExpression(top, 1), entry[1], {
              ...explore,
              postfix: `${explore.postfix}[1]`,
            }),
          );
        },
        decoder: (input, array, explore) =>
          ts.factory.createNewExpression(
            ts.factory.createIdentifier("Map"),
            [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
            [
              decode_array({
                config: props.config,
                importer: props.importer,
                input,
                array,
                explore,
              }),
            ],
          ),
        empty: ts.factory.createNewExpression(
          ts.factory.createIdentifier("Map"),
          [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
          [],
        ),
        success: ts.factory.createTrue(),
        failure: (input, expected) =>
          create_throw_error({ importer: props.importer, expected, input }),
      })([])(props.input, props.maps, props.explore),
      undefined,
      undefined,
    );

  const explore_objects = (props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }) => {
    if (props.metadata.objects.length === 1)
      return decode_object(props.importer)(
        props.input,
        props.metadata.objects[0]!,
        props.explore,
      );
    return ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.importer.useLocal(`${PREFIX}u${props.metadata.union_index!}`),
      ),
      undefined,
      FeatureProgrammer.argumentsArray(props.config)(props.explore)(
        props.input,
      ),
    );
  };

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
      factory: UnionExplorer.array({
        checker: IsProgrammer.decode(props.context)(props.importer),
        decoder: (input, array, explore) =>
          decode_array({
            config: props.config,
            importer: props.importer,
            input,
            array,
            explore,
          }),
        empty: ts.factory.createIdentifier("[]"),
        success: ts.factory.createTrue(),
        failure: (input, expected) =>
          create_throw_error({
            importer: props.importer,
            expected,
            input,
          }),
      }),
    });

  const explore_array_like_union_types = <
    T extends MetadataArray | MetadataTuple,
  >(props: {
    config: FeatureProgrammer.IConfig;
    importer: FunctionImporter;
    factory: (
      parameters: ts.ParameterDeclaration[],
    ) => (
      input: ts.Expression,
      elements: T[],
      explore: FeatureProgrammer.IExplore,
    ) => ts.ArrowFunction;
    input: ts.Expression;
    elements: T[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    const arrow =
      (parameters: ts.ParameterDeclaration[]) =>
      (explore: FeatureProgrammer.IExplore) =>
      (input: ts.Expression): ts.ArrowFunction =>
        props.factory(parameters)(input, props.elements, explore);
    if (props.elements.every((e) => e.type.recursive === false))
      ts.factory.createCallExpression(
        arrow([])(props.explore)(props.input),
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
            arrow(
              FeatureProgrammer.parameterDeclarations(props.config)(
                TypeFactory.keyword("any"),
              )(ts.factory.createIdentifier("input")),
            )({
              ...explore,
              postfix: "",
            })(ts.factory.createIdentifier("input")),
        ),
      ),
      undefined,
      FeatureProgrammer.argumentsArray(props.config)(explore)(props.input),
    );
  };

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "$c";

  const configure = (props: {
    rename: (str: string) => string;
    context: ITypiaContext;
    importer: FunctionImporter;
  }): FeatureProgrammer.IConfig => {
    const config: FeatureProgrammer.IConfig = {
      types: {
        input: (type, name) =>
          ts.factory.createTypeReferenceNode(
            name ?? TypeFactory.getFullName(props.context.checker)(type),
          ),
        output: (type, name) =>
          ts.factory.createTypeReferenceNode(
            returnType(props.rename)(
              name ?? TypeFactory.getFullName(props.context.checker)(type),
            ),
          ),
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: () => (input, metadata, explore) =>
        decode({
          context: props.context,
          config,
          importer: props.importer,
          metadata,
          explore,
          input,
        }),
      objector: {
        checker: () => IsProgrammer.decode(props.context)(props.importer),
        decoder: () => decode_object(props.importer),
        joiner: NotationJoiner.object(props.rename),
        unionizer: decode_union_object(
          IsProgrammer.decode_object(props.context)(props.importer),
        )(decode_object(props.importer))((exp) => exp)((input, expected) =>
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
            importer: props.importer,
            config,
            collection,
          }),
        tuples: () => (collection) =>
          write_tuple_functions({
            context: props.context,
            importer: props.importer,
            config,
            collection,
          }),
      },
    };
    return config;
  };

  const initializer: FeatureProgrammer.IConfig["initializer"] =
    (project) => (importer) => (type) => {
      const collection = new MetadataCollection();
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
        throw TransformerError.from(`typia.misc.${importer.method}`)(
          result.errors,
        );
      return [collection, result.data];
    };

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

  const is_instance = (meta: Metadata): boolean =>
    !!meta.objects.length ||
    !!meta.arrays.length ||
    !!meta.tuples.length ||
    !!meta.sets.length ||
    !!meta.maps.length ||
    !!meta.natives.length ||
    (meta.rest !== null && is_instance(meta.rest));
}
