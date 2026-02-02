import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataMap } from "../../schemas/metadata/MetadataMap";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataSet } from "../../schemas/metadata/MetadataSet";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../schemas/metadata/MetadataTupleType";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { CloneJoiner } from "../helpers/CloneJoiner";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { UnionExplorer } from "../helpers/UnionExplorer";
import { decode_union_object } from "../internal/decode_union_object";
import { postfix_of_tuple } from "../internal/postfix_of_tuple";
import { wrap_metadata_rest_tuple } from "../internal/wrap_metadata_rest_tuple";

export namespace MiscCloneProgrammer {
  export const decompose = (props: {
    validated: boolean;
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const config: FeatureProgrammer.IConfig = configure(props);
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
              config: props.config,
              context: props.context,
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
        props.context.importer.internal("miscCloneAny"),
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
    if (props.metadata.arrays.length)
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

    // NATIVE TYPES
    if (props.metadata.sets.length)
      unions.push({
        type: "set",
        is: () => ExpressionFactory.isInstanceOf("Set", props.input),
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
        is: () => ExpressionFactory.isInstanceOf("Map", props.input),
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
    for (const native of props.metadata.natives)
      unions.push({
        type: "native",
        is: () => ExpressionFactory.isInstanceOf(native.name, props.input),
        value: () =>
          native.name === "Boolean" ||
          native.name === "Number" ||
          native.name === "String"
            ? ts.factory.createCallExpression(
                IdentifierFactory.access(props.input, "valueOf"),
                undefined,
                undefined,
              )
            : decode_native({
                type: native.name,
                input: props.input,
              }),
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
      input: props.input,
      object: props.object,
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
  }) =>
    FeatureProgrammer.decode_array({
      config: props.config,
      functor: props.functor,
      combiner: CloneJoiner.array,
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
  }): ts.Expression =>
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
  }): ts.Expression => {
    const elements: ts.Expression[] = props.tuple.elements
      .filter((m) => m.rest === null)
      .map((elem, index) =>
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
      if (rest === null) return null;

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
    return CloneJoiner.tuple({
      elements,
      rest,
    });
  };

  /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
  const decode_native = (props: { type: string; input: ts.Expression }) =>
    props.type === "Date" ||
    props.type === "Uint8Array" ||
    props.type === "Uint8ClampedArray" ||
    props.type === "Uint16Array" ||
    props.type === "Uint32Array" ||
    props.type === "BigUint64Array" ||
    props.type === "Int8Array" ||
    props.type === "Int16Array" ||
    props.type === "Int32Array" ||
    props.type === "BigInt64Array" ||
    props.type === "Float32Array" ||
    props.type === "Float64Array" ||
    props.type === "RegExp"
      ? decode_native_copyable(props)
      : props.type === "ArrayBuffer" || props.type === "SharedArrayBuffer"
        ? decode_native_buffer({
            type: props.type,
            input: props.input,
          })
        : props.type === "DataView"
          ? decode_native_data_view(props.input)
          : ts.factory.createCallExpression(
              ts.factory.createIdentifier(props.type),
              undefined,
              [],
            );

  const decode_native_copyable = (props: {
    type: string;
    input: ts.Expression;
  }) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier(props.type),
      undefined,
      [props.input],
    );

  const decode_native_buffer = (props: {
    type: "ArrayBuffer" | "SharedArrayBuffer";
    input: ts.Expression;
  }) =>
    ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          StatementFactory.constant({
            name: "buffer",
            value: ts.factory.createNewExpression(
              ts.factory.createIdentifier(props.type),
              undefined,
              [IdentifierFactory.access(props.input, "byteLength")],
            ),
          }),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              IdentifierFactory.access(
                ts.factory.createNewExpression(
                  ts.factory.createIdentifier("Uint8Array"),
                  undefined,
                  [ts.factory.createIdentifier("buffer")],
                ),
                "set",
              ),
              undefined,
              [
                ts.factory.createNewExpression(
                  ts.factory.createIdentifier("Uint8Array"),
                  undefined,
                  [props.input],
                ),
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

  const decode_native_data_view = (input: ts.Expression) =>
    ts.factory.createNewExpression(
      ts.factory.createIdentifier("DataView"),
      undefined,
      [IdentifierFactory.access(input, "buffer")],
    );

  /* -----------------------------------------------------------
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
  const explore_sets = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    sets: MetadataSet[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    ts.factory.createCallExpression(
      UnionExplorer.set({
        config: {
          checker: (v) =>
            IsProgrammer.decode({
              context: props.context,
              functor: props.functor,
              input: v.input,
              metadata: v.definition,
              explore: v.explore,
            }),
          decoder: (v) =>
            ts.factory.createNewExpression(
              ts.factory.createIdentifier("Set"),
              [TypeFactory.keyword("any")],
              [
                decode_array({
                  config: props.config,
                  functor: props.functor,
                  input: v.input,
                  array: v.definition,
                  explore: v.explore,
                }),
              ],
            ),
          empty: ts.factory.createNewExpression(
            ts.factory.createIdentifier("Set"),
            [TypeFactory.keyword("any")],
            [],
          ),
          success: ts.factory.createTrue(),
          failure: (v) =>
            create_throw_error({
              context: props.context,
              functor: props.functor,
              expected: v.expected,
              input: v.input,
            }),
        },
        parameters: [],
        input: props.input,
        sets: props.sets,
        explore: props.explore,
      }),
      undefined,
      undefined,
    );

  const explore_maps = (props: {
    context: ITypiaContext;
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    maps: MetadataMap[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression =>
    ts.factory.createCallExpression(
      UnionExplorer.map({
        config: {
          checker: (v) =>
            ts.factory.createLogicalAnd(
              IsProgrammer.decode({
                context: props.context,
                functor: props.functor,
                input: ts.factory.createElementAccessExpression(v.input, 0),
                metadata: v.definition[0],
                explore: {
                  ...v.explore,
                  postfix: `${v.explore.postfix}[0]`,
                },
              }),
              IsProgrammer.decode({
                context: props.context,
                functor: props.functor,
                input: ts.factory.createElementAccessExpression(v.input, 1),
                metadata: v.definition[1],
                explore: {
                  ...v.explore,
                  postfix: `${v.explore.postfix}[1]`,
                },
              }),
            ),
          decoder: (v) =>
            ts.factory.createNewExpression(
              ts.factory.createIdentifier("Map"),
              [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
              [
                decode_array({
                  config: props.config,
                  functor: props.functor,
                  input: v.input,
                  array: v.definition,
                  explore: v.explore,
                }),
              ],
            ),
          empty: ts.factory.createNewExpression(
            ts.factory.createIdentifier("Map"),
            [TypeFactory.keyword("any"), TypeFactory.keyword("any")],
            [],
          ),
          success: ts.factory.createTrue(),
          failure: (v) =>
            create_throw_error({
              context: props.context,
              functor: props.functor,
              expected: v.expected,
              input: v.input,
            }),
        },
        parameters: [],
        input: props.input,
        maps: props.maps,
        explore: props.explore,
      }),
      // ([])(props.input, props.maps, props.explore),
      undefined,
      undefined,
    );

  const explore_objects = (props: {
    config: FeatureProgrammer.IConfig;
    functor: FunctionProgrammer;
    input: ts.Expression;
    metadata: Metadata;
    explore: FeatureProgrammer.IExplore;
  }) =>
    props.metadata.objects.length === 1
      ? decode_object({
          ...props,
          object: props.metadata.objects[0]!.type,
        })
      : ts.factory.createCallExpression(
          ts.factory.createIdentifier(
            props.functor.useLocal(`${PREFIX}u${props.metadata.union_index!}`),
          ),
          undefined,
          FeatureProgrammer.argumentsArray(props),
        );

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
      definitions: props.arrays,
      factory: (next) =>
        UnionExplorer.array({
          config: {
            checker: (v) =>
              IsProgrammer.decode({
                context: props.context,
                functor: props.functor,
                input: v.input,
                metadata: v.definition,
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
            empty: ts.factory.createIdentifier("[]"),
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
          arrays: next.definitions,
          input: next.input,
          explore: next.explore,
        }),
    });

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
    definitions: T[];
    explore: FeatureProgrammer.IExplore;
  }): ts.Expression => {
    const arrow = (next: {
      parameters: ts.ParameterDeclaration[];
      explore: FeatureProgrammer.IExplore;
      input: ts.Expression;
    }): ts.ArrowFunction =>
      props.factory({
        definitions: props.definitions,
        parameters: next.parameters,
        input: next.input,
        explore: next.explore,
      });
    if (props.definitions.every((e) => e.type.recursive === false))
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
          props.definitions.map((e) => e.type.name).join(" | "),
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
      FeatureProgrammer.argumentsArray({
        config: props.config,
        input: props.input,
        explore: arrayExplore,
      }),
    );
  };

  /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
  const PREFIX = "_c";

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
        output: (type, name) =>
          props.context.importer.type({
            file: "typia",
            name: "Resolved",
            arguments: [
              ts.factory.createTypeReferenceNode(
                name ??
                  TypeFactory.getFullName({
                    checker: props.context.checker,
                    type,
                  }),
              ),
            ],
          }),
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
        joiner: CloneJoiner.object,
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
            functor: props.functor,
            config,
            collection,
          }),
        tuples: (collection) =>
          write_tuple_functions({
            context: props.context,
            functor: props.functor,
            config,
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
        validate: (metadata) => {
          const output: string[] = [];
          if (metadata.natives.some((native) => native.name === "WeakSet"))
            output.push("unable to clone WeakSet");
          else if (metadata.natives.some((native) => native.name === "WeakMap"))
            output.push("unable to clone WeakMap");
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

  const is_instance = (metadata: Metadata): boolean =>
    !!metadata.objects.length ||
    !!metadata.arrays.length ||
    !!metadata.tuples.length ||
    !!metadata.sets.length ||
    !!metadata.maps.length ||
    !!metadata.natives.length ||
    (metadata.rest !== null && is_instance(metadata.rest));
}
