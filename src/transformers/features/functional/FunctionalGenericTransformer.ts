import ts from "typescript";

import { TypeFactory } from "../../../factories/TypeFactory";

import { ITypiaContext } from "../../ITypiaContext";
import { TransformerError } from "../../TransformerError";

export namespace FunctionalGenericTransformer {
  export const transform =
    (props: {
      method: string;
      programmer: (
        project: ITypiaContext,
      ) => (
        modulo: ts.LeftHandSideExpression,
      ) => (
        equals: boolean,
      ) => (
        expression: ts.Expression,
        declaration: ts.FunctionDeclaration,
        init?: ts.Expression,
      ) => ts.Expression;
      equals: boolean;
    }) =>
    (project: ITypiaContext) =>
    (modulo: ts.LeftHandSideExpression) =>
    (expression: ts.CallExpression) => {
      // CHECK PARAMETER
      if (expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `no input value.`,
        });

      // GET TYPE INFO
      const type: ts.Type =
        expression.typeArguments && expression.typeArguments[0]
          ? project.checker.getTypeFromTypeNode(expression.typeArguments[0])
          : project.checker.getTypeAtLocation(expression.arguments[0]!);
      if (TypeFactory.isFunction(type) === false)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `input value is not a function.`,
        });
      return props.programmer(project)(modulo)(props.equals)(
        expression.arguments[0]!,
        type.symbol!.declarations![0] as ts.FunctionDeclaration,
        expression.arguments[1],
      );
    };
}
