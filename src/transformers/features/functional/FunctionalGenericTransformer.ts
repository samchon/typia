import ts from "typescript";

import { TypeFactory } from "../../../factories/TypeFactory";

import { ITransformProps } from "../../ITransformProps";
import { ITypiaContext } from "../../ITypiaContext";
import { TransformerError } from "../../TransformerError";

export namespace FunctionalGenericTransformer {
  export interface IConfig {
    equals: boolean;
  }
  export interface ISpecification {
    method: string;
    config: IConfig;
    programmer: (p: {
      context: ITypiaContext;
      modulo: ts.LeftHandSideExpression;
      expression: ts.Expression;
      declaration: ts.FunctionDeclaration;
      config: IConfig;
      init?: ts.Expression;
    }) => ts.Expression;
  }
  export const transform =
    (spec: ISpecification) =>
    (props: ITransformProps): ts.Expression => {
      // CHECK PARAMETER
      if (props.expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.functional.${spec.method}`,
          message: `no input value.`,
        });

      // GET TYPE INFO
      const type: ts.Type =
        props.expression.typeArguments && props.expression.typeArguments[0]
          ? props.context.checker.getTypeFromTypeNode(
              props.expression.typeArguments[0],
            )
          : props.context.checker.getTypeAtLocation(
              props.expression.arguments[0]!,
            );
      if (TypeFactory.isFunction(type) === false)
        throw new TransformerError({
          code: `typia.functional.${spec.method}`,
          message: `input value is not a function.`,
        });
      return spec.programmer({
        ...props,
        config: spec.config,
        expression: props.expression.arguments[0] as ts.Expression,
        declaration: type.symbol!.declarations![0] as ts.FunctionDeclaration,
        init: props.expression.arguments[1],
      });
    };
}
