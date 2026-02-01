import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { ValueFactory } from "../factories/ValueFactory";

import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

import { IProgrammerProps } from "../transformers/IProgrammerProps";
import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";

export namespace IsProgrammer {
  export const configure = (props: {
    options?: Partial<CONFIG.IOptions>;
    context: ITypiaContext;
    functor: FunctionProgrammer;
  }): CheckerProgrammer.IConfig => ({
    prefix: "_i",
    equals: !!props.options?.object,
    trace: false,
    path: false,
    numeric: OptionPredicator.numeric({
      numeric: props.options?.numeric,
    }),
    atomist: ({ entry }) =>
      [
        ...(entry.expression ? [entry.expression] : []),
        ...(entry.conditions.length === 0
          ? []
          : [
              entry.conditions
                .map((set) =>
                  set
                    .map((s) => s.expression)
                    .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
                )
                .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
            ]),
      ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
    combiner: (next) => {
      const initial: ts.TrueLiteral | ts.FalseLiteral =
        next.logic === "and"
          ? ts.factory.createTrue()
          : ts.factory.createFalse();
      const binder =
        next.logic === "and"
          ? ts.factory.createLogicalAnd
          : ts.factory.createLogicalOr;
      return next.binaries.length
        ? next.binaries.map((binary) => binary.expression).reduce(binder)
        : initial;
    },
    joiner: {
      object: props.options?.object
        ? (v) => props.options!.object!(v)
        : (v) =>
            check_object({
              config: {
                equals: !!props.options?.object,
                undefined: OptionPredicator.undefined({
                  undefined: props.options?.undefined,
                }),
                assert: true,
                reduce: ts.factory.createLogicalAnd,
                positive: ts.factory.createTrue(),
                superfluous: () => ts.factory.createFalse(),
              },
              context: props.context,
              entries: v.entries,
              input: v.input,
            }),
      array: (props) =>
        ts.factory.createCallExpression(
          IdentifierFactory.access(props.input, "every"),
          undefined,
          [props.arrow],
        ),
      failure: () => ts.factory.createFalse(),
    },
    success: ts.factory.createTrue(),
  });

  export namespace CONFIG {
    export interface IOptions {
      numeric: boolean;
      undefined: boolean;
      object: (props: {
        input: ts.Expression;
        entries: IExpressionEntry<ts.Expression>[];
      }) => ts.Expression;
    }
  }

  /* -----------------------------------------------------------
    WRITERS
  ----------------------------------------------------------- */
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    config: IConfig;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // CONFIGURATION
    const config: CheckerProgrammer.IConfig = {
      ...configure({
        options: {
          object: (v) =>
            check_object({
              config: {
                equals: props.config.equals,
                undefined: OptionPredicator.undefined(props.context.options),
                assert: true,
                reduce: ts.factory.createLogicalAnd,
                positive: ts.factory.createTrue(),
                superfluous: () => ts.factory.createFalse(),
              },
              context: props.context,
              entries: v.entries,
              input: v.input,
            }),
          numeric: OptionPredicator.numeric(props.context.options),
        },
        context: props.context,
        functor: props.functor,
      }),
      trace: props.config.equals,
    };

    // COMPOSITION
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
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

  export const write = (props: IProps) => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      config: props.config,
      context: props.context,
      functor,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  export const write_function_statements = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    collection: MetadataCollection;
  }) => {
    const config: CheckerProgrammer.IConfig = configure(props);
    const next = {
      ...props,
      config,
    };
    const objects: ts.VariableStatement[] =
      CheckerProgrammer.write_object_functions(next);
    const unions: ts.VariableStatement[] =
      CheckerProgrammer.write_union_functions(next);
    const arrays: ts.VariableStatement[] =
      CheckerProgrammer.write_array_functions(next);
    const tuples: ts.VariableStatement[] =
      CheckerProgrammer.write_tuple_functions(next);

    return [
      ...objects.filter((_, i) =>
        props.functor.hasLocal(`${config.prefix}o${i}`),
      ),
      ...unions.filter((_, i) =>
        props.functor.hasLocal(`${config.prefix}u${i}`),
      ),
      ...arrays.filter((_, i) =>
        props.functor.hasLocal(`${config.prefix}a${i}`),
      ),
      ...tuples.filter((_, i) =>
        props.functor.hasLocal(`${config.prefix}t${i}`),
      ),
    ];
  };

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  export const decode = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    metadata: Metadata;
    input: ts.Expression;
    explore: CheckerProgrammer.IExplore;
  }) =>
    CheckerProgrammer.decode({
      context: props.context,
      config: configure(props),
      functor: props.functor,
      metadata: props.metadata,
      input: props.input,
      explore: props.explore,
    });

  export const decode_object = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    object: MetadataObjectType;
    input: ts.Expression;
    explore: FeatureProgrammer.IExplore;
  }) =>
    CheckerProgrammer.decode_object({
      config: configure(props),
      functor: props.functor,
      object: props.object,
      input: props.input,
      explore: props.explore,
    });

  export const decode_to_json = (props: {
    input: ts.Expression;
    checkNull: boolean;
  }): ts.Expression =>
    ts.factory.createLogicalAnd(
      ExpressionFactory.isObject({
        checkArray: false,
        checkNull: props.checkNull,
        input: props.input,
      }),
      ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("function"),
        ValueFactory.TYPEOF(IdentifierFactory.access(props.input, "toJSON")),
      ),
    );

  export const decode_functional = (input: ts.Expression) =>
    ts.factory.createStrictEquality(
      ts.factory.createStringLiteral("function"),
      ValueFactory.TYPEOF(input),
    );
}
