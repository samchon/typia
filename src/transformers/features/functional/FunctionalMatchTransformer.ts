import ts from "typescript";

import { ExpressionFactory } from "../../../factories/ExpressionFactory";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace FunctionalMatchTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // CHECK PARAMETER COUNT
    if (props.expression.arguments.length < 2)
      throw new TransformerError({
        code: `typia.functional.match`,
        message: `at least 2 arguments required: input and cases.`,
      });

    const input = props.expression.arguments[0]!;
    const cases = props.expression.arguments[1]!;
    const otherwise = props.expression.arguments[2];

    // GET TYPE INFO
    const inputType: ts.Type = 
      props.expression.typeArguments && props.expression.typeArguments[0]
        ? props.context.checker.getTypeFromTypeNode(
            props.expression.typeArguments[0],
          )
        : props.context.checker.getTypeAtLocation(input);

    // For now, create a simple conditional structure
    // This will be expanded to generate optimized if-else chains
    return createMatchExpression({
      context: props.context,
      modulo: props.modulo,
      input,
      cases,
      otherwise,
      inputType,
    });
  };

  const createMatchExpression = (props: {
    context: any;
    modulo: any;
    input: ts.Expression;
    cases: ts.Expression;
    otherwise: ts.Expression | undefined;
    inputType: ts.Type;
  }): ts.Expression => {
    // Create an immediately invoked function expression (IIFE)
    // This is a placeholder that will be expanded with actual matching logic
    return ExpressionFactory.selfCall(
      ts.factory.createBlock([
        // Store input in a variable 
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "input",
              undefined,
              undefined,
              props.input,
            ),
          ], ts.NodeFlags.Const),
        ),
        
        // Store cases in a variable
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "cases",
              undefined,
              undefined,
              props.cases,
            ),
          ], ts.NodeFlags.Const),
        ),

        // For now, return a simple implementation
        // TODO: Replace with actual type-checking conditional logic
        ts.factory.createReturnStatement(
          props.otherwise
            ? ts.factory.createConditionalExpression(
                ts.factory.createTrue(), // placeholder condition
                undefined,
                ts.factory.createStringLiteral("matched"),
                undefined,
                ts.factory.createCallExpression(
                  props.otherwise,
                  undefined,
                  [ts.factory.createObjectLiteralExpression([
                    ts.factory.createPropertyAssignment("success", ts.factory.createFalse()),
                    ts.factory.createPropertyAssignment("errors", ts.factory.createArrayLiteralExpression([])),
                  ])],
                ),
              )
            : ts.factory.createStringLiteral("matched"),
        ),
      ], true),
    );
  };
}