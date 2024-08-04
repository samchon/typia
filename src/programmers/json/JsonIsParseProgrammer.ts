import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";

export namespace JsonIsParseProgrammer {
  export const decompose = (props: {
    project: IProject;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose({
      ...props,
      project: {
        ...props.project,
        options: {
          ...props.project.options,
          functional: false,
          numeric: false,
        },
      },
      equals: false,
    });
    return {
      functions: is.functions,
      statements: [
        ...is.statements,
        StatementFactory.constant("__is", is.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("string"))],
        ts.factory.createUnionTypeNode([
          ts.factory.createImportTypeNode(
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral("typia"),
            ),
            undefined,
            ts.factory.createIdentifier("Primitive"),
            [
              ts.factory.createTypeReferenceNode(
                props.name ??
                  TypeFactory.getFullName(props.project.checker)(props.type),
              ),
            ],
            false,
          ),
          ts.factory.createTypeReferenceNode("null"),
        ]),
        undefined,
        ts.factory.createBlock([
          ts.factory.createExpressionStatement(
            ts.factory.createBinaryExpression(
              ts.factory.createIdentifier("input"),
              ts.SyntaxKind.EqualsToken,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("JSON.parse"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createConditionalExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
              undefined,
              ts.factory.createAsExpression(
                ts.factory.createIdentifier("input"),
                TypeFactory.keyword("any"),
              ),
              undefined,
              ts.factory.createNull(),
            ),
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
