import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { PruneJoiner } from "../helpers/PruneJoiner";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace MiscPruneProgrammer {
  export const decompose = (props: {
    validated: boolean;
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config = configure(props);
    if (props.validated === false)
      config.addition = (collection) =>
        IsProgrammer.write_function_statements({
          context: props.context,
          functor: props.functor,
          collection,
        });
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
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      validated: false,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  const write_array_functions = (props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .arrays()
      .filter((a) => a.recursive)
      .map((type, i) =>
        StatementFactory.constant({
          name: `${props.config.prefix}a${i}`,
          value: ts.factory.createArrowFunction(
            undefined,
            undefined,
            FeatureProgrammer.parameterDeclarations({
              config: props.config,
              type: TypeFactory.keyword("any"),
              input: ts.factory.createIdentifier("input"),
            }),
            TypeFactory.keyword("any"),
            undefined,
            decode_array_inline({
              config: props.config,
              functor: props.functor,
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
        }),
      );

  const write_tuple_functions = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }): ts.VariableStatement[] =>
    props.collection
      .tuples()
      .filter((t) => t.recursive)
      .map((tuple, i) =>
        StatementFactory.constant({
          name: `${props.config.prefix}t${i}`,
          value: ts.factory.createArrowFunction(
            undefined,
            undefined,
            FeatureProgrammer.parameterDeclarations({
              config: props.config,
              type: TypeFactory.keyword("any"),
              input: ts.factory.createIdentifier("input"),
            }),
            TypeFactory.keyword("any"),
            undefined,
            decode_tuple_inline({
              context: props.context,
              config: props.config,
              functor: props.functor,
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
        }),
      );

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  const decode = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }): ts.ConciseBody => {
    if (filter(props.metadata) === false) return ts.factory.createBlock([]);

    interface IUnion {
      type: string;
      is: () => ts.Expression;
      value: () => ts.Expression | ts.Block | ts.ReturnStatement;
    }
    const unions: IUnion[] = [];

    //----
    // LIST UP UNION TYPES
    //----
    // TUPLES
    for (const tuple of props.metadata.tuples.filter((tuple) =>
      tuple.type.elements.some((e) => filter(e.rest ?? e)),
    ))
      unions.push({
        type: "tuple",
        is: () =>
          IsProgrammer.decode({
            ...props,
            metadata: (() => {
              const partial = Metadata.initialize();
              partial.tuples.push(tuple);
              return partial;
            })(),
          }),
        value: () =>
          decode_tuple({
            ...props,
            tuple,
          }),
      });

    // ARRAYS
    if (props.metadata.arrays.filter((a) => filter(a.type.value)).length)
      unions.push({
        type: "array",
        is: () => ExpressionFactory.isArray(props.input),
        value: () =>
          explore_arrays({
            ...props,
            arrays: props.metadata.arrays,
            explore: {
              ...props.explore,
              from: "array",
            },
          }),
      });

    // BUILT-IN CLASSES
    if (props.metadata.natives.length)
      for (const native of props.metadata.natives)
        unions.push({
          type: "native",
          is: () => ExpressionFactory.isInstanceOf(native.name, props.input),
          value: () => ts.factory.createReturnStatement(),
        });
    if (props.metadata.sets.length)
      unions.push({
        type: "set",
        is: () => ExpressionFactory.isInstanceOf("Set", props.input),
        value: () => ts.factory.createReturnStatement(),
      });
    if (props.metadata.maps.length)
      unions.push({
        type: "map",
        is: () => ExpressionFactory.isInstanceOf("Map", props.input),
        value: () => ts.factory.createReturnStatement(),
      });

    // OBJECTS
    if (props.metadata.objects.length)
      unions.push({
        type: "object",
        is: () =>
          ExpressionFactory.isObject({
            checkNull: true,
            checkArray: false,
            input: props.input,
          }),
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
    // STATEMENTS
    //----
    const converter = (v: ts.Expression | ts.Block | ts.ReturnStatement) =>
      ts.isReturnStatement(v) || ts.isBlock(v)
        ? v
        : ts.factory.createExpressionStatement(v);

    const statements: ts.Statement[] = unions.map((u) =>
      ts.factory.createIfStatement(u.is(), converter(u.value())),
    );
    return ts.factory.createBlock(statements, true);
  };

  const decode_object = (props: {
    functor: FunctionProgrammer;
    input: ts.Expression;
    object: MetadataObjectType;
    explore: FeatureProgrammer.IExplore;
  }) =>
    FeatureProgrammer.decode_object({
      config: {
        trace: false,
        path: false,
        prefix: PREFIX,
      },
      functor: props.functor,
      object: props.object,
      input: props.input,
      explore: props.explore,
    });

  const decode_array = (props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    array: MetadataArray;
    explore: FeatureProgrammer.IExplore;
  }) =>
    props.array.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(
              `${props.config.prefix}a${props.array.type.index}`,
            ),
          ),
          undefined,
          FeatureProgrammer.argumentsArray({
            config: props.config,
            explore: {
              ...props.explore,
              source: "function",
              from: "array",
            },
            input: props.input,
          }),
        )
      : decode_array_inline(props);

  const decode_array_inline = (props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    array: MetadataArray;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    FeatureProgrammer.decode_array({
      config: props.config,
      functor: props.functor,
      combiner: PruneJoiner.array,
      array: props.array,
      input: props.input,
      explore: props.explore,
    });

  const decode_tuple = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    tuple: MetadataTuple;
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression | ts.Block =>
    props.tuple.type.recursive
      ? ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(
              `${props.config.prefix}t${props.tuple.type.index}`,
            ),
          ),
          undefined,
          FeatureProgrammer.argumentsArray({
            config: props.config,
            explore: {
              ...props.explore,
              source: "function",
            },
            input: props.input,
          }),
        )
      : decode_tuple_inline({
          ...props,
          tuple: props.tuple.type,
        });

  const decode_tuple_inline = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    tuple: MetadataTupleType;
    explore: FeatureProgrammer.IExplore;
  }): ts.Block => {
    const elements: ts.ConciseBody[] = props.tuple.elements
      .map((elem, index) => [elem, index] as const)
      .filter(([elem]) => filter(elem) && elem.rest === null)
      .map(([elem, index]) =>
        decode({
          context: props.context,
          config: props.config,
          functor: props.functor,
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
      if (rest === null || filter(rest) === false) return null;

      return decode({
        context: props.context,
        config: props.config,
        functor: props.functor,
        input: ts.factory.createCallExpression(
          IdentifierFactory.access(props.input, "slice"),
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
    return PruneJoiner.tuple({
      elements,
      rest,
    });
  };

  /* -----------------------------------------------------------
        UNION TYPE EXPLORERS
    ----------------------------------------------------------- */
  const explore_objects = (props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }) => {
    if (props.metadata.objects.length === 1)
      return decode_object({
        ...props,
        object: props.metadata.objects[0]!.type,
      });

    return ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.functor.useLocal(`${PREFIX}u${props.metadata.union_index!}`),
      ),
      undefined,
      FeatureProgrammer.argumentsArray(props),
    );
  };

  const explore_arrays = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    arrays: MetadataArray[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    explore_array_like_union_types({
      ...props,
      elements: props.arrays,
      factory: (next) =>
        UnionExplorer.array({
          config: {
            checker: (v) =>
              IsProgrammer.decode({
                context: props.context,
                functor: props.functor,
                metadata: v.definition,
                input: v.input,
                explore: v.explore,
              }),
            decoder: (v) =>
              decode_array({
                config: props.config,
                functor: props.functor,
                input: v.input,
                array: v.definition,
                explore: v.explore,
              }),
            empty: ts.factory.createStringLiteral("[]"),
            success: ts.factory.createTrue(),
            failure: (v) =>
              create_throw_error({
                context: props.context,
                functor: props.functor,
                expected: v.expected,
                input: v.input,
              }),
          },
          parameters: next.parameters,
          input: next.input,
          arrays: next.definitions,
          explore: next.explore,
        }),
    });
  //(next.parameters)(next.input, next.elements, next.explore),

  const explore_array_like_union_types = <
    T extends MetadataArray | MetadataTuple,
  >(props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    factory: (next: {
      parameters: ts.ParameterDeclaration[];
      input: ts.Expression;
      definitions: T[];
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
        definitions: props.elements,
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

    const arrayExplore: FeatureProgrammer.IExplore = {
      ...props.explore,
      source: "function",
      from: "array",
    };
    return ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.functor.emplaceUnion(
          props.config.prefix,
          props.elements.map((e) => e.type.name).join(" | "),
          () =>
            arrow({
              parameters: FeatureProgrammer.parameterDeclarations({
                config: props.config,
                type: TypeFactory.keyword("any"),
                input: ts.factory.createIdentifier("input"),
              }),
              explore: {
                ...arrayExplore,
                postfix: "",
              },
              input: ts.factory.createIdentifier("input"),
            }),
        ),
      ),
      undefined,
      FeatureProgrammer.argumentsArray(props),
    );
  };

  // @todo -> must filter out recursive visit
  const filter = (metadata: Metadata): boolean =>
    metadata.any === false &&
    (metadata.objects.length !== 0 ||
      metadata.tuples.some(
        (t) =>
          !!t.type.elements.length &&
          t.type.elements.some((e) => filter(e.rest ?? e)),
      ) ||
      metadata.arrays.some((e) => filter(e.type.value)));

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "_p";

  const configure = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
  }): FeatureProgrammer.IConfig => {
    const config: FeatureProgrammer.IConfig = {
      types: {
        input: (type, name) =>
          ts.factory.createTypeReferenceNode(
            name ??
              TypeFactory.getFullName({ checker: props.context.checker, type }),
          ),
        output: () => TypeFactory.keyword("void"),
      },
      prefix: PREFIX,
      trace: false,
      path: false,
      initializer,
      decoder: (next) =>
        decode({
          context: props.context,
          functor: props.functor,
          config,
          input: next.input,
          metadata: next.metadata,
          explore: next.explore,
        }),
      objector: {
        checker: (next) =>
          IsProgrammer.decode({
            context: props.context,
            functor: props.functor,
            input: next.input,
            metadata: next.metadata,
            explore: next.explore,
          }),
        decoder: (next) =>
          decode_object({
            functor: props.functor,
            input: next.input,
            object: next.object,
            explore: next.explore,
          }),
        joiner: PruneJoiner.object,
        unionizer: (next) =>
          decode_union_object({
            checker: (v) =>
              IsProgrammer.decode_object({
                context: props.context,
                functor: props.functor,
                input: v.input,
                object: v.object,
                explore: v.explore,
              }),
            decoder: (v) =>
              decode_object({
                functor: props.functor,
                input: v.input,
                object: v.object,
                explore: v.explore,
              }),
            success: (exp) => exp,
            escaper: (v) =>
              create_throw_error({
                context: props.context,
                functor: props.functor,
                expected: v.expected,
                input: v.input,
              }),
            input: next.input,
            objects: next.objects,
            explore: next.explore,
          }),
        failure: (next) =>
          create_throw_error({
            context: props.context,
            functor: props.functor,
            expected: next.expected,
            input: next.input,
          }),
      },
      generator: {
        arrays: (collection) =>
          write_array_functions({
            config,
            functor: props.functor,
            collection,
          }),
        tuples: (collection) =>
          write_tuple_functions({
            config,
            context: props.context,
            functor: props.functor,
            collection,
          }),
      },
    };
    return config;
  };

  const initializer: FeatureProgrammer.IConfig["initializer"] = (props) => {
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from({
        code: props.functor.method,
        errors: result.errors,
      });
    return {
      collection,
      metadata: result.data,
    };
  };

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
