import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataArray } from "../schemas/metadata/MetadataArray";
import { MetadataObject } from "../schemas/metadata/MetadataObject";

import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace FeatureProgrammer {
  /* -----------------------------------------------------------
        PARAMETERS
    ----------------------------------------------------------- */
  export interface IConfig<Output extends ts.ConciseBody = ts.ConciseBody> {
    types: IConfig.ITypes;

    /**
     * Prefix name of internal functions for specific types.
     */
    prefix: string;

    /**
     * Whether to archive access path or not.
     */
    path: boolean;

    /**
     * Whether to trace exception or not.
     */
    trace: boolean;

    addition?: undefined | ((collection: MetadataCollection) => ts.Statement[]);

    /**
     * Initializer of metadata.
     */
    initializer: (
      context: ITypiaContext,
    ) => (
      importer: FunctionImporter,
    ) => (type: ts.Type) => [MetadataCollection, Metadata];

    /**
     * Decoder, station of every types.
     */
    decoder: () => Decoder<Metadata, Output>;

    /**
     * Object configurator.
     */
    objector: IConfig.IObjector<Output>;

    /**
     * Generator of functions for object types.
     */
    generator: IConfig.IGenerator;
  }
  export namespace IConfig {
    export interface ITypes {
      input: (type: ts.Type, name?: undefined | string) => ts.TypeNode;
      output: (type: ts.Type, name?: undefined | string) => ts.TypeNode;
    }

    export interface IObjector<Output extends ts.ConciseBody = ts.ConciseBody> {
      /**
       * Type checker when union object type comes.
       */
      checker: () => Decoder<Metadata, ts.Expression>;

      /**
       * Decoder, function call expression generator of specific typed objects.
       */
      decoder: () => Decoder<MetadataObject, ts.Expression>;

      /**
       * Joiner of expressions from properties.
       */
      joiner(props: {
        entries: IExpressionEntry<Output>[];
        input?: ts.Expression;
        object?: MetadataObject;
      }): ts.ConciseBody;

      /**
       * Union type specificator.
       *
       * Expression of an algorithm specifying object type and calling
       * the `decoder` function of the specified object type.
       */
      unionizer: Decoder<MetadataObject[], ts.Expression>;

      /**
       * Handler of union type specification failure.
       *
       * @param value Expression of input parameter
       * @param expected Expected type name
       * @param explore Exploration info
       * @returns Statement of failure
       */
      failure(
        value: ts.Expression,
        expected: string,
        explore?: undefined | IExplore,
      ): ts.Statement;

      /**
       * Transformer of type checking expression by discrimination.
       *
       * When an object type has been specified by a discrimination without full
       * iteration, the `unionizer` will decode the object instance after
       * the last type checking.
       *
       * In such circumtance, you can transform the last type checking function.
       *
       * @param exp Current expression about type checking
       * @returns Transformed expression
       * @deprecated
       */
      is?: undefined | ((exp: ts.Expression) => ts.Expression);

      /**
       * Transformer of non-undefined type checking by discrimination.
       *
       * When specifying an union type of objects, `typia` tries to find
       * descrimination way just by checking only one property type.
       * If succeeded to find the discrimination way, `typia` will check the target
       * property type and in the checking, non-undefined type checking would be
       * done.
       *
       * In such process, you can transform the non-undefined type checking.
       *
       * @param exp
       * @returns Transformed expression
       * @deprecated
       */
      required?: undefined | ((exp: ts.Expression) => ts.Expression);

      /**
       * Conditon wrapper when unable to specify any object type.
       *
       * When failed to specify an object type through discrimination, full
       * iteration type checking would be happend. In such circumstance, you
       * can wrap the condition with additional function.
       *
       * @param condition Current condition
       * @returns A function wrapped current condition
       */
      full?:
        | undefined
        | ((
            condition: ts.Expression,
          ) => (
            input: ts.Expression,
            expected: string,
            explore: IExplore,
          ) => ts.Expression);

      /**
       * Return type.
       */
      type?: undefined | ts.TypeNode;
    }
    export interface IGenerator {
      objects?:
        | undefined
        | (() => (col: MetadataCollection) => ts.VariableStatement[]);
      unions?:
        | undefined
        | (() => (col: MetadataCollection) => ts.VariableStatement[]);
      arrays(): (col: MetadataCollection) => ts.VariableStatement[];
      tuples(): (col: MetadataCollection) => ts.VariableStatement[];
    }
  }

  export interface IExplore {
    tracable: boolean;
    source: "top" | "function";
    from: "top" | "array" | "object";
    postfix: string;
    start?: undefined | number;
  }

  export interface Decoder<T, Output extends ts.ConciseBody = ts.ConciseBody> {
    (input: ts.Expression, target: T, explore: IExplore): Output;
  }

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
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): IComposed => {
    const [collection, meta] = props.config.initializer(props.context)(
      props.importer,
    )(props.type);
    return {
      body: props.config.decoder()(ValueFactory.INPUT(), meta, {
        tracable: props.config.path || props.config.trace,
        source: "top",
        from: "top",
        postfix: '""',
      }),
      statements: props.config.addition
        ? props.config.addition(collection)
        : [],
      functions: {
        ...Object.fromEntries(
          (
            props.config.generator.objects?.()(collection) ??
            write_object_functions({
              ...props,
              collection,
            })
          ).map((v, i) => [`${props.config.prefix}o${i}`, v]),
        ),
        ...Object.fromEntries(
          (
            props.config.generator.unions?.() ??
            write_union_functions(props.config)
          )(collection).map((v, i) => [`${props.config.prefix}u${i}`, v]),
        ),
        ...Object.fromEntries(
          props.config.generator
            .arrays()(collection)
            .map((v, i) => [`${props.config.prefix}a${i}`, v]),
        ),
        ...Object.fromEntries(
          props.config.generator
            .tuples()(collection)
            .map((v, i) => [`${props.config.prefix}t${i}`, v]),
        ),
      },
      parameters: parameterDeclarations(props.config)(
        props.config.types.input(props.type, props.name),
      )(ValueFactory.INPUT()),
      response: props.config.types.output(props.type, props.name),
    };
  };

  export const writeDecomposed = (props: {
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    result: IDecomposed;
  }): ts.CallExpression =>
    ts.factory.createCallExpression(
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        undefined,
        ts.factory.createBlock([
          ...props.importer.declare(props.modulo),
          ...Object.entries(props.result.functions)
            .filter(([k]) => props.importer.hasLocal(k))
            .map(([_k, v]) => v),
          ...props.result.statements,
          ts.factory.createReturnStatement(props.result.arrow),
        ]),
      ),
      undefined,
      undefined,
    );

  export const write =
    (context: ITypiaContext) =>
    (config: IConfig) =>
    (importer: FunctionImporter) =>
    (type: ts.Type, name?: string): ts.ArrowFunction => {
      const [collection, meta] = config.initializer(context)(importer)(type);

      // ITERATE OVER ALL METADATA
      const output: ts.ConciseBody = config.decoder()(
        ValueFactory.INPUT(),
        meta,
        {
          tracable: config.path || config.trace,
          source: "top",
          from: "top",
          postfix: '""',
        },
      );

      // RETURNS THE OPTIMAL ARROW FUNCTION
      const functions = {
        objects:
          config.generator.objects?.()(collection) ??
          write_object_functions({
            config,
            importer,
            collection,
          }),
        unions: (config.generator.unions?.() ?? write_union_functions(config))(
          collection,
        ),
        arrays: config.generator.arrays()(collection),
        tuples: config.generator.tuples()(collection),
      };
      const added: ts.Statement[] = (config.addition ?? (() => []))(collection);

      return ts.factory.createArrowFunction(
        undefined,
        undefined,
        parameterDeclarations(config)(config.types.input(type, name))(
          ValueFactory.INPUT(),
        ),
        config.types.output(type, name),
        undefined,
        ts.factory.createBlock(
          [
            ...added,
            ...functions.objects.filter((_, i) =>
              importer.hasLocal(`${config.prefix}o${i}`),
            ),
            ...functions.unions.filter((_, i) =>
              importer.hasLocal(`${config.prefix}u${i}`),
            ),
            ...functions.arrays.filter((_, i) =>
              importer.hasLocal(`${config.prefix}a${i}`),
            ),
            ...functions.tuples.filter((_, i) =>
              importer.hasLocal(`${config.prefix}t${i}`),
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
    importer: FunctionImporter;
    collection: MetadataCollection;
  }) =>
    props.collection.objects().map((object) =>
      StatementFactory.constant(
        `${props.config.prefix}o${object.index}`,
        ts.factory.createArrowFunction(
          undefined,
          undefined,
          parameterDeclarations(props.config)(TypeFactory.keyword("any"))(
            ValueFactory.INPUT(),
          ),
          props.config.objector.type ?? TypeFactory.keyword("any"),
          undefined,
          props.config.objector.joiner({
            input: ts.factory.createIdentifier("input"),
            entries: feature_object_entries(props.config)(props.importer)(
              object,
            )(ts.factory.createIdentifier("input")),
            object,
          }),
        ),
      ),
    );

  export const write_union_functions =
    (config: IConfig) => (collection: MetadataCollection) =>
      collection
        .unions()
        .map((union, i) =>
          StatementFactory.constant(
            `${config.prefix}u${i}`,
            write_union(config)(union),
          ),
        );

  const write_union = (config: IConfig) => {
    const explorer = UnionExplorer.object(config);
    const input = ValueFactory.INPUT();

    return (meta: MetadataObject[]) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        parameterDeclarations(config)(TypeFactory.keyword("any"))(
          ValueFactory.INPUT(),
        ),
        TypeFactory.keyword("any"),
        undefined,
        explorer(input, meta, {
          tracable: config.path || config.trace,
          source: "function",
          from: "object",
          postfix: "",
        }),
      );
  };

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  export const decode_array =
    (config: Pick<IConfig, "trace" | "path" | "decoder" | "prefix">) =>
    (importer: FunctionImporter) =>
    (
      combiner: (props: {
        input: ts.Expression;
        arrow: ts.ArrowFunction;
      }) => ts.Expression,
    ) => {
      const rand: string = importer.increment().toString();
      const tail =
        config.path || config.trace
          ? [
              IdentifierFactory.parameter(
                "_index" + rand,
                TypeFactory.keyword("number"),
              ),
            ]
          : [];
      return (
        input: ts.Expression,
        array: MetadataArray,
        explore: IExplore,
      ) => {
        const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
          undefined,
          undefined,
          [
            IdentifierFactory.parameter("elem", TypeFactory.keyword("any")),
            ...tail,
          ],
          undefined,
          undefined,
          config.decoder()(ValueFactory.INPUT("elem"), array.type.value, {
            tracable: explore.tracable,
            source: explore.source,
            from: "array",
            postfix: index(explore.start ?? null)(explore.postfix)(rand),
          }),
        );
        return combiner({
          input,
          arrow,
        });
      };
    };

  export const decode_object =
    (config: Pick<IConfig, "trace" | "path" | "prefix">) =>
    (importer: FunctionImporter) =>
    (input: ts.Expression, obj: MetadataObject, explore: IExplore) =>
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(
          importer.useLocal(`${config.prefix}o${obj.index}`),
        ),
        undefined,
        argumentsArray(config)(explore)(input),
      );

  /* -----------------------------------------------------------
        UTILITIES FOR INTERNAL FUNCTIONS
    ----------------------------------------------------------- */
  export const index =
    (start: number | null) => (prev: string) => (rand: string) => {
      const tail: string =
        start !== null
          ? `"[" + (${start} + _index${rand}) + "]"`
          : `"[" + _index${rand} + "]"`;
      if (prev === "") return tail;
      else if (prev[prev.length - 1] === `"`)
        return prev.substring(0, prev.length - 1) + tail.substring(1);
      return prev + ` + ${tail}`;
    };

  export const argumentsArray =
    (config: Pick<IConfig, "path" | "trace">) =>
    (explore: FeatureProgrammer.IExplore) => {
      const tail: ts.Expression[] =
        config.path === false && config.trace === false
          ? []
          : config.path === true && config.trace === true
            ? [
                ts.factory.createIdentifier(
                  explore.postfix ? `_path + ${explore.postfix}` : "_path",
                ),
                explore.source === "function"
                  ? ts.factory.createIdentifier(
                      `${explore.tracable} && _exceptionable`,
                    )
                  : explore.tracable
                    ? ts.factory.createTrue()
                    : ts.factory.createFalse(),
              ]
            : config.path === true
              ? [
                  ts.factory.createIdentifier(
                    explore.postfix ? `_path + ${explore.postfix}` : "_path",
                  ),
                ]
              : [
                  explore.source === "function"
                    ? ts.factory.createIdentifier(
                        `${explore.tracable} && _exceptionable`,
                      )
                    : explore.tracable
                      ? ts.factory.createTrue()
                      : ts.factory.createFalse(),
                ];
      return (input: ts.Expression) => [input, ...tail];
    };

  export const parameterDeclarations =
    (props: Pick<CheckerProgrammer.IConfig, "path" | "trace">) =>
    (type: ts.TypeNode) => {
      const tail: ts.ParameterDeclaration[] = [];
      if (props.path)
        tail.push(
          IdentifierFactory.parameter("_path", TypeFactory.keyword("string")),
        );
      if (props.trace)
        tail.push(
          IdentifierFactory.parameter(
            "_exceptionable",
            TypeFactory.keyword("boolean"),
            ts.factory.createTrue(),
          ),
        );
      return (input: ts.Identifier): ts.ParameterDeclaration[] => [
        IdentifierFactory.parameter(input, type),
        ...tail,
      ];
    };
}
