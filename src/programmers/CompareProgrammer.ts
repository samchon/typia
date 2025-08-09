import ts from "typescript";

import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";

import { Metadata } from "../schemas/metadata/Metadata";

import { IProgrammerProps } from "../transformers/IProgrammerProps";
import { ITypiaContext } from "../transformers/ITypiaContext";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { FunctionProgrammer } from "./helpers/FunctionProgrammer";

export namespace CompareProgrammer {
  /* -----------------------------------------------------------
    INTERFACES
  ----------------------------------------------------------- */
  export interface IConfig {
    equals: boolean;
    covers?: boolean;
    less?: boolean;
  }
  
  export interface IProps extends IProgrammerProps {
    config: IConfig;
  }

  /* -----------------------------------------------------------
    MAIN FUNCTIONS
  ----------------------------------------------------------- */
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    config: IConfig;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // CONFIGURATION - simplified for compare
    const config: CheckerProgrammer.IConfig = {
      prefix: "_c",
      equals: false,
      trace: false,
      path: false,
      numeric: true,
      atomist: ({ entry }) => entry.expression ?? ts.factory.createTrue(),
      combiner: () => ts.factory.createTrue(),
      joiner: {
        object: () => ts.factory.createTrue(),
        array: () => ts.factory.createTrue(),
        failure: () => ts.factory.createFalse(),
      },
      success: ts.factory.createTrue(),
    };

    // COMPOSITION
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config,
    });
    return {
      functions: composed.functions,
      statements: composed.statements,
      arrow: writeComparison(props),
    };
  };

  export const write = (props: IProps): ts.Expression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.config.equals ? "compare.equals" : 
      props.config.covers ? "compare.covers" : "compare.less"
    );

    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  /* -----------------------------------------------------------
    COMPARISON WRITER
  ----------------------------------------------------------- */
  const writeComparison = (props: {
    context: ITypiaContext;
    config: IConfig;
    type: ts.Type;
  }): ts.ArrowFunction => {
    // Generate metadata for the type
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        absorb: true,
        functional: false,
        escape: false,
        constant: true,
      },
      collection,
      type: props.type,
    });

    const metadata = result.success ? result.data : (() => {
      throw new Error("Failed to analyze metadata");
    })();

    // Generate comparison function parameters
    const xParam = ts.factory.createIdentifier("x");
    const yParam = ts.factory.createIdentifier("y");
    
    const comparison = write_comparison({
      context: props.context,
      metadata,
      config: props.config,
      xExpr: xParam,
      yExpr: yParam,
    });

    return ts.factory.createArrowFunction(
      undefined,
      undefined,
      [
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          xParam,
          undefined,
          undefined,
          undefined,
        ),
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          yParam,
          undefined,
          undefined,
          undefined,
        ),
      ],
      undefined,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      comparison,
    );
  };

  /* -----------------------------------------------------------
    COMPARISON LOGIC
  ----------------------------------------------------------- */
  const write_comparison = (props: {
    context: ITypiaContext;
    metadata: Metadata;
    config: IConfig;
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression => {
    // Handle null/undefined first
    const nullCheck = write_null_check(props);
    if (nullCheck) return nullCheck;

    // Handle primitive types
    if (props.metadata.atomics.length || props.metadata.constants.length) {
      return write_atomic_comparison(props);
    }

    // Handle arrays
    if (props.metadata.arrays.length) {
      return write_array_comparison(props);
    }

    // Handle objects
    if (props.metadata.objects.length) {
      return write_object_comparison(props);
    }

    // Handle tuples  
    if (props.metadata.tuples.length) {
      return write_tuple_comparison(props);
    }

    // Default fallback
    return ts.factory.createStrictEquality(props.xExpr, props.yExpr);
  };

  const write_null_check = (props: {
    metadata: Metadata;
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression | null => {
    const hasNull = props.metadata.nullable;
    const hasUndefined = props.metadata.required === false;
    
    if (!hasNull && !hasUndefined) {
      return null;
    }

    let expr: ts.Expression | null = null;
    
    if (hasNull) {
      const nullComparison = ts.factory.createConditionalExpression(
        ts.factory.createStrictEquality(
          props.xExpr,
          ts.factory.createNull(),
        ),
        ts.factory.createToken(ts.SyntaxKind.QuestionToken),
        ts.factory.createStrictEquality(
          props.yExpr,
          ts.factory.createNull(),
        ),
        ts.factory.createToken(ts.SyntaxKind.ColonToken),
        ts.factory.createFalse(),
      );
      expr = expr ? ts.factory.createLogicalOr(expr, nullComparison) : nullComparison;
    }

    if (hasUndefined) {
      const undefinedComparison = ts.factory.createConditionalExpression(
        ts.factory.createStrictEquality(
          props.xExpr,
          ts.factory.createIdentifier("undefined"),
        ),
        ts.factory.createToken(ts.SyntaxKind.QuestionToken),
        ts.factory.createStrictEquality(
          props.yExpr,
          ts.factory.createIdentifier("undefined"),
        ),
        ts.factory.createToken(ts.SyntaxKind.ColonToken),
        ts.factory.createFalse(),
      );
      expr = expr ? ts.factory.createLogicalOr(expr, undefinedComparison) : undefinedComparison;
    }

    return expr;
  };

  const write_atomic_comparison = (props: {
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression => {
    return ts.factory.createStrictEquality(props.xExpr, props.yExpr);
  };

  const write_array_comparison = (props: {
    context: ITypiaContext;
    metadata: Metadata;
    config: IConfig;
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression => {
    // Simple array comparison for now
    return ts.factory.createLogicalAnd(
      ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createIdentifier("Array"),
          "isArray",
        ),
        undefined,
        [props.xExpr],
      ),
      ts.factory.createLogicalAnd(
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier("Array"),
            "isArray",
          ),
          undefined,
          [props.yExpr],
        ),
        ts.factory.createStrictEquality(
          ts.factory.createPropertyAccessExpression(props.xExpr, "length"),
          ts.factory.createPropertyAccessExpression(props.yExpr, "length"),
        ),
      ),
    );
  };

  const write_object_comparison = (props: {
    context: ITypiaContext;
    metadata: Metadata;
    config: IConfig;
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression => {
    // Simple object comparison for now  
    return ts.factory.createStrictEquality(props.xExpr, props.yExpr);
  };

  const write_tuple_comparison = (props: {
    context: ITypiaContext;
    metadata: Metadata;
    config: IConfig;
    xExpr: ts.Expression;
    yExpr: ts.Expression;
  }): ts.Expression => {
    // Simple tuple comparison for now
    return ts.factory.createStrictEquality(props.xExpr, props.yExpr);
  };
}