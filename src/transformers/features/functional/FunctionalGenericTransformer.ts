import ts from "typescript";
import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";
import { TypeFactory } from "../../../factories/TypeFactory";

export namespace FunctionalGenericTransformer {
  export const transform =
    (props: {
      method: string;
      programmer: (
        project: IProject,
      ) => (
        modulo: ts.LeftHandSideExpression,
      ) => (
        equals: boolean,
      ) => (
        expression: ts.CallExpression,
        declaration: ts.FunctionDeclaration,
        init?: ts.Expression,
      ) => ts.Expression;
      equals: boolean;
    }) =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (expression: ts.CallExpression) => {
      // CHECK PARAMETER
      if (expression.arguments.length === 0)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `no input value.`,
        });

      // GET TYPE INFO
      const [type, generic]: [ts.Type, boolean] =
        expression.typeArguments && expression.typeArguments[0]
          ? [
              project.checker.getTypeFromTypeNode(expression.typeArguments[0]),
              true,
            ]
          : [
              project.checker.getTypeAtLocation(expression.arguments[0]!),
              false,
            ];
      if (generic === true)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `non-specified generic argument.`,
        });
      else if (TypeFactory.isFunction(type) === false)
        throw new TransformerError({
          code: `typia.functional.${props.method}`,
          message: `input value is not a function.`,
        });
      return props.programmer(project)(modulo)(props.equals)(
        expression,
        type.symbol!.declarations![0] as ts.FunctionDeclaration,
        expression.arguments[1],
      );
    };
}
