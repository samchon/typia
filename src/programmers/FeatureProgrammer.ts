import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataArray } from "../schemas/metadata/MetadataArray";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace FeatureProgrammer {
  /* -----------------------------------------------------------
    PARAMETERS
  ----------------------------------------------------------- */
  export interface IConfig<Output extends ts.ConciseBody = ts.ConciseBody> {
    types: IConfig.ITypes;

    /** Prefix name of internal functions for specific types. */
    prefix: string;

    /** Whether to archive access path or not. */
    path: boolean;

    /** Whether to trace exception or not. */
    trace: boolean;

    addition?: undefined | ((collection: MetadataCollection) => ts.Statement[]);

    /** Initializer of metadata. */
    initializer: (props: {
      context: ITypiaContext;
      functor: FunctionProgrammer;
      type: ts.Type;
    }) => {
      collection: MetadataCollection;
      metadata: Metadata;
    };

    /** Decoder, station of every types. */
    decoder: (props: {
      metadata: Metadata;
      input: ts.Expression;
      explore: IExplore;
    }) => Output;

    /** Object configurator. */
    objector: IConfig.IObjector<Output>;

    /** Generator of functions for object types. */
    generator: IConfig.IGenerator;
  }
  export namespace IConfig {
    export interface ITypes {
      input: (type: ts.Type, name?: undefined | string) => ts.TypeNode;
      output: (type: ts.Type, name?: undefined | string) => ts.TypeNode;
    }

    export interface IObjector<Output extends ts.ConciseBody = ts.ConciseBody> {
      /** Type checker when union object type comes. */
      checker: (props: {
        metadata: Metadata;
        input: ts.Expression;
        explore: IExplore;
      }) => ts.Expression;

      /** Decoder, function call expression generator of specific typed objects. */
      decoder: (props: {
        input: ts.Expression;
        object: MetadataObjectType;
        explore: IExplore;
      }) => ts.Expression;

      /** Joiner of expressions from properties. */
      joiner(props: {
        entries: IExpressionEntry<Output>[];
        input?: ts.Expression;
        object?: MetadataObjectType;
      }): ts.ConciseBody;

      /**
       * Union type specificator.
       *
       * Expression of an algorithm specifying object type and calling the
       * `decoder` function of the specified object type.
       */
      unionizer: (props: {
        objects: MetadataObjectType[];
        input: ts.Expression;
        explore: IExplore;
      }) => ts.Expression;

      /**
       * Handler of union type specification failure.
       *
       * @param props Properties of failure
       * @returns Statement of failure
       */
      failure(props: {
        input: ts.Expression;
        expected: string;
        explore?: undefined | IExplore;
      }): ts.Statement;

      /**
       * Transformer of type checking expression by discrimination.
       *
       * When an object type has been specified by a discrimination without full
       * iteration, the `unionizer` will decode the object instance after the
       * last type checking.
       *
       * In such circumtance, you can transform the last type checking function.
       *
       * @deprecated
       * @param exp Current expression about type checking
       * @returns Transformed expression
       */
      is?: undefined | ((exp: ts.Expression) => ts.Expression);

      /**
       * Transformer of non-undefined type checking by discrimination.
       *
       * When specifying an union type of objects, `typia` tries to find
       * discrimination way just by checking only one property type. If
       * succeeded to find the discrimination way, `typia` will check the target
       * property type and in the checking, non-undefined type checking would be
       * done.
       *
       * In such process, you can transform the non-undefined type checking.
       *
       * @deprecated
       * @param exp
       * @returns Transformed expression
       */
      required?: undefined | ((exp: ts.Expression) => ts.Expression);

      /**
       * Condition wrapper when unable to specify any object type.
       *
       * When failed to specify an object type through discrimination, full
       * iteration type checking would be happened. In such circumstance, you
       * can wrap the condition with additional function.
       *
       * @param props Properties of condition
       * @returns The wrapper expression
       */
      full?:
        | undefined
        | ((props: {
            condition: ts.Expression;
            input: ts.Expression;
            expected: string;
            explore: IExplore;
          }) => ts.Expression);

      /** Return type. */
      type?: undefined | ts.TypeNode;
    }
    export interface IGenerator {
      objects?:
        | undefined
        | ((collection: MetadataCollection) => ts.VariableStatement[]);
      unions?:
        | undefined
        | ((collection: MetadataCollection) => ts.VariableStatement[]);
      arrays: (collection: MetadataCollection) => ts.VariableStatement[];
      tuples: (collection: MetadataCollection) => ts.VariableStatement[];
    }
  }

  export interface IExplore {
    tracable: boolean;
    source: "top" | "function";
    from: "top" | "array" | "object";
    postfix: string;
    start?: undefined | number;
  }

  export type Decoder<
    T,
    Output extends ts.ConciseBody = ts.ConciseBody,
  > = (props: {
    input: ts.Expression;
    definition: T;
    explore: IExplore;
  }) => Output;

  /* -----------------------------------------------------------
    GENERATORS
  ----------------------------------------------------------- */
  export interface IComposed {
    body: ts.ConciseBody;
    parameters: ts.ParameterDeclaration[];
    functions: Record<string, ts.VariableStatement>;
    statements: ts.Statement[];
    response: ts.TypeNode;
  }
  export interface IDecomposed {
    functions: Record<string, ts.VariableStatement>;
    statements: ts.Statement[];
    arrow: ts.ArrowFunction;
  }

  export const compose = (props: {
    context: ITypiaContext;
    config: IConfig;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): IComposed => {
    const { collection, metadata } = props.config.initializer(props);
    return {
      body: props.config.decoder({
        input: ValueFactory.INPUT(),
        metadata,
        explore: {
          tracable: props.config.path || props.config.trace,
          source: "top",
          from: "top",
          postfix: '""',
        },
      }),
      statements: props.config.addition
        ? props.config.addition(collection)
        : [],
      functions: {
        ...Object.fromEntries(
          (
            props.config.generator.objects?.(collection) ??
            write_object_functions({
              ...props,
              collection,
            })
          ).map((v, i) => [`${props.config.prefix}o${i}`, v]),
        ),
        ...Object.fromEntries(
          (
            props.config.generator.unions?.(collection) ??
            write_union_functions({
              config: props.config,
              collection,
            })
          ).map((v, i) => [`${props.config.prefix}u${i}`, v]),
        ),
        ...Object.fromEntries(
          props.config.generator
            .arrays(collection)
            .map((v, i) => [`${props.config.prefix}a${i}`, v]),
        ),
        ...Object.fromEntries(
          props.config.generator
            .tuples(collection)
            .map((v, i) => [`${props.config.prefix}t${i}`, v]),
        ),
      },
      parameters: parameterDeclarations({
        config: props.config,
        type: props.config.types.input(props.type, props.name),
        input: ValueFactory.INPUT(),
      }),
      response: props.config.types.output(props.type, props.name),
    };
  };

  export const writeDecomposed = (props: {
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    result: IDecomposed;
    returnWrapper?: (arrow: ts.ArrowFunction) => ts.Expression;
  }): ts.CallExpression =>
    ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        ts.factory.createBlock([
          ...props.functor.declare(),
          ...Object.entries(props.result.functions)
            .filter(([k]) => props.functor.hasLocal(k))
            .map(([_k, v]) => v),
          ...props.result.statements,
          ts.factory.createReturnStatement(
            props.returnWrapper
              ? props.returnWrapper(props.result.arrow)
              : props.result.arrow,
          ),
        ]),
      ),
      undefined,
      undefined,
    );

  export const write = (props: {
    context: ITypiaContext;
    config: IConfig;
    functor: FunctionProgrammer;
    type: ts.Type;
    name?: string | undefined;
  }): ts.ArrowFunction => {
    // ITERATE OVER ALL METADATA
    const { collection, metadata } = props.config.initializer(props);
    const output: ts.ConciseBody = props.config.decoder({
      metadata,
      input: ValueFactory.INPUT(),
      explore: {
        tracable: props.config.path || props.config.trace,
        source: "top",
        from: "top",
        postfix: '""',
      },
    });

    // RETURNS THE OPTIMAL ARROW FUNCTION
    const functions = {
      objects:
        props.config.generator.objects?.(collection) ??
        write_object_functions({
          config: props.config,
          context: props.context,
          collection,
        }),
      unions:
        props.config.generator.unions?.(collection) ??
        write_union_functions({
          config: props.config,
          collection,
        }),
      arrays: props.config.generator.arrays(collection),
      tuples: props.config.generator.tuples(collection),
    };
    const added: ts.Statement[] = (props.config.addition ?? (() => []))(
      collection,
    );

    return ts.factory.createArrowFunction(
      undefined,
      undefined,
      parameterDeclarations({
        config: props.config,
        type: props.config.types.input(props.type, props.name),
        input: ValueFactory.INPUT(),
      }),
      props.config.types.output(props.type, props.name),
      undefined,
      ts.factory.createBlock(
        [
          ...added,
          ...functions.objects.filter((_, i) =>
            props.functor.hasLocal(`${props.config.prefix}o${i}`),
          ),
          ...functions.unions.filter((_, i) =>
            props.functor.hasLocal(`${props.config.prefix}u${i}`),
          ),
          ...functions.arrays.filter((_, i) =>
            props.functor.hasLocal(`${props.config.prefix}a${i}`),
          ),
          ...functions.tuples.filter((_, i) =>
            props.functor.hasLocal(`${props.config.prefix}t${i}`),
          ),
          ...(ts.isBlock(output)
            ? output.statements
            : [ts.factory.createReturnStatement(output)]),
        ],
        true,
      ),
    );
  };

  export const write_object_functions = (props: {
    config: IConfig;
    context: ITypiaContext;
    collection: MetadataCollection;
  }) =>
    props.collection.objects().map((object) =>
      StatementFactory.constant({
        name: `${props.config.prefix}o${object.index}`,
        value: ts.factory.createArrowFunction(
          undefined,
          undefined,
          parameterDeclarations({
            config: props.config,
            type: TypeFactory.keyword("any"),
            input: ValueFactory.INPUT(),
          }),
          props.config.objector.type ?? TypeFactory.keyword("any"),
          undefined,
          props.config.objector.joiner({
            input: ts.factory.createIdentifier("input"),
            entries: feature_object_entries({
              config: props.config,
              context: props.context,
              input: ts.factory.createIdentifier("input"),
              object,
            }),
            object,
          }),
        ),
      }),
    );

  export const write_union_functions = (props: {
    config: IConfig;
    collection: MetadataCollection;
  }) =>
    props.collection.unions().map((union, i) =>
      StatementFactory.constant({
        name: `${props.config.prefix}u${i}`,
        value: write_union({
          config: props.config,
          objects: union,
        }),
      }),
    );

  const write_union = (props: {
    config: IConfig;
    objects: MetadataObjectType[];
  }) =>
    ts.factory.createArrowFunction(
      undefined,
      undefined,
      parameterDeclarations({
        config: props.config,
        type: TypeFactory.keyword("any"),
        input: ValueFactory.INPUT(),
      }),
      TypeFactory.keyword("any"),
      undefined,
      UnionExplorer.object({
        config: props.config,
        objects: props.objects,
        input: ValueFactory.INPUT(),
        explore: {
          tracable: props.config.path || props.config.trace,
          source: "function",
          from: "object",
          postfix: "",
        },
      }),
    );

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  export const decode_array = (props: {
    config: Pick<IConfig, "trace" | "path" | "decoder" | "prefix">;
    functor: FunctionProgrammer;
    combiner: (next: {
      input: ts.Expression;
      arrow: ts.ArrowFunction;
    }) => ts.Expression;
    array: MetadataArray;
    input: ts.Expression;
    explore: IExplore;
  }) => {
    const rand: string = props.functor.increment().toString();
    const tail =
      props.config.path || props.config.trace
        ? [
            IdentifierFactory.parameter(
              "_index" + rand,
              TypeFactory.keyword("number"),
            ),
          ]
        : [];
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        IdentifierFactory.parameter("elem", TypeFactory.keyword("any")),
        ...tail,
      ],
      undefined,
      undefined,
      props.config.decoder({
        input: ValueFactory.INPUT("elem"),
        metadata: props.array.type.value,
        explore: {
          tracable: props.explore.tracable,
          source: props.explore.source,
          from: "array",
          postfix: index({
            start: props.explore.start ?? null,
            postfix: props.explore.postfix,
            rand,
          }),
        },
      }),
    );
    return props.combiner({
      input: props.input,
      arrow,
    });
  };

  export const decode_object = (props: {
    config: Pick<IConfig, "trace" | "path" | "prefix">;
    functor: FunctionProgrammer;
    object: MetadataObjectType;
    input: ts.Expression;
    explore: IExplore;
  }) =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        props.functor.useLocal(`${props.config.prefix}o${props.object.index}`),
      ),
      undefined,
      argumentsArray(props),
    );

  /* -----------------------------------------------------------
        UTILITIES FOR INTERNAL FUNCTIONS
    ----------------------------------------------------------- */
  export const index = (props: {
    start: number | null;
    postfix: string;
    rand: string;
  }) => {
    const tail: string =
      props.start !== null
        ? `"[" + (${props.start} + _index${props.rand}) + "]"`
        : `"[" + _index${props.rand} + "]"`;
    if (props.postfix === "") return tail;
    else if (props.postfix[props.postfix.length - 1] === `"`)
      return (
        props.postfix.substring(0, props.postfix.length - 1) + tail.substring(1)
      );
    return props.postfix + ` + ${tail}`;
  };

  export const argumentsArray = (props: {
    config: Pick<IConfig, "path" | "trace">;
    input: ts.Expression;
    explore: FeatureProgrammer.IExplore;
  }) => {
    const tail: ts.Expression[] =
      props.config.path === false && props.config.trace === false
        ? []
        : props.config.path === true && props.config.trace === true
          ? [
              ts.factory.createIdentifier(
                props.explore.postfix
                  ? `_path + ${props.explore.postfix}`
                  : "_path",
              ),
              props.explore.source === "function"
                ? ts.factory.createIdentifier(
                    `${props.explore.tracable} && _exceptionable`,
                  )
                : props.explore.tracable
                  ? ts.factory.createTrue()
                  : ts.factory.createFalse(),
            ]
          : props.config.path === true
            ? [
                ts.factory.createIdentifier(
                  props.explore.postfix
                    ? `_path + ${props.explore.postfix}`
                    : "_path",
                ),
              ]
            : [
                props.explore.source === "function"
                  ? ts.factory.createIdentifier(
                      `${props.explore.tracable} && _exceptionable`,
                    )
                  : props.explore.tracable
                    ? ts.factory.createTrue()
                    : ts.factory.createFalse(),
              ];
    return [props.input, ...tail];
  };

  export const parameterDeclarations = (props: {
    config: Pick<CheckerProgrammer.IConfig, "path" | "trace">;
    type: ts.TypeNode;
    input: ts.Identifier;
  }) => {
    const tail: ts.ParameterDeclaration[] = [];
    if (props.config.path)
      tail.push(
        IdentifierFactory.parameter("_path", TypeFactory.keyword("string")),
      );
    if (props.config.trace)
      tail.push(
        IdentifierFactory.parameter(
          "_exceptionable",
          TypeFactory.keyword("boolean"),
          ts.factory.createTrue(),
        ),
      );
    return [IdentifierFactory.parameter(props.input, props.type), ...tail];
  };
}
