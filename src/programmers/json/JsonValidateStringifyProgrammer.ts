import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { JsonStringifyProgrammer } from "./JsonStringifyProgrammer";

export namespace JsonValidateStringifyProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name?: string;
  }): FeatureProgrammer.IDecomposed => {
    const validate: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
        ...props,
        project: {
          ...props.project,
          options: {
            ...props.project.options,
            functional: false,
            numeric: true,
          },
        },
        equals: false,
      });
    const stringify: FeatureProgrammer.IDecomposed =
      JsonStringifyProgrammer.decompose({
        ...props,
        validated: true,
      });
    return {
      functions: {
        ...validate.functions,
        ...stringify.functions,
      },
      statements: [
        ...validate.statements,
        ...stringify.statements,
        StatementFactory.constant("__validate", validate.arrow),
        StatementFactory.constant("__stringify", stringify.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          stringify.arrow.type ?? ts.factory.createTypeReferenceNode("string"),
        ]),
        undefined,
        ts.factory.createBlock([
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
                  ts.factory.createIdentifier("__stringify"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("result"),
          ),
        ]),
      ),
    };
  };

  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
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
