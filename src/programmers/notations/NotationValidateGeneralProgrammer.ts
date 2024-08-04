import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationValidateGeneralProgrammer {
  export const decompose = (props: {
    rename: (str: string) => string;
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const validate = ValidateProgrammer.decompose({
      ...props,
      equals: false,
    });
    const notation = NotationGeneralProgrammer.decompose({
      ...props,
      validated: true,
    });
    return {
      functions: {
        ...validate.functions,
        ...notation.functions,
      },
      statements: [
        ...validate.statements,
        ...notation.statements,
        StatementFactory.constant("__validate", validate.arrow),
        StatementFactory.constant("__notation", notation.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          notation.arrow.type ?? TypeFactory.keyword("any"),
        ]),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant(
              "result",
              ts.factory.createAsExpression(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__validate"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
                TypeFactory.keyword("any"),
              ),
            ),
            ts.factory.createIfStatement(
              ts.factory.createIdentifier("result.success"),
              ts.factory.createExpressionStatement(
                ts.factory.createBinaryExpression(
                  ts.factory.createIdentifier("result.data"),
                  ts.SyntaxKind.EqualsToken,
                  ts.factory.createCallExpression(
                    ts.factory.createIdentifier("__notation"),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                  ),
                ),
              ),
            ),
            ts.factory.createReturnStatement(
              ts.factory.createIdentifier("result"),
            ),
          ],
          true,
        ),
      ),
    };
  };

  export const write =
    (rename: (str: string) => string) =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        rename,
        project,
        modulo,
        importer,
        type,
        name,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };
}
