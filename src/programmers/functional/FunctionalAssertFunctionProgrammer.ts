import ts from "typescript";
import { IProject } from "../../transformers/IProject";
import { FunctionalAssertParametersProgrammer } from "./FunctionalAssertParametersProgrammer";
import { FunctionAssertReturnProgrammer } from "./FunctionalAssertReturnProgrammer";

export namespace FunctionalAssertFunctionProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (
      expression: ts.Expression,
      declaration: ts.FunctionDeclaration,
      init?: ts.Expression,
    ): ts.ArrowFunction => {
      const params = FunctionalAssertParametersProgrammer.prepare(project)(
        modulo,
      )(equals)(declaration, init);
      const output = FunctionAssertReturnProgrammer.prepare(project)(modulo)(
        equals,
      )(expression, declaration, init);
      return ts.factory.createArrowFunction(
        output.async
          ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
          : undefined,
        undefined,
        declaration.parameters,
        declaration.type,
        undefined,
        ts.factory.createBlock(
          [
            params.assert,
            output.assert,
            params.call,
            output.variable,
            output.call,
            output.returns,
          ],
          true,
        ),
      );
    };
}
