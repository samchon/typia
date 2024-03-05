import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { JsonMetadataFactory } from "../../factories/JsonMetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";

export namespace JsonAssertParseProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.ArrowFunction => {
      JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(
        project.checker,
        project.context,
      )(type);
      return ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("string")),
          AssertProgrammer.Guardian.parameter(init),
        ],
        ts.factory.createImportTypeNode(
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral("typia"),
          ),
          undefined,
          ts.factory.createIdentifier("Primitive"),
          [
            ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          ],
          false,
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(false)(type, name),
          ),
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
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("assert"),
                undefined,
                [
                  ts.factory.createIdentifier("input"),
                  AssertProgrammer.Guardian.identifier(),
                ],
              ),
              ts.factory.createTypeReferenceNode("any"),
            ),
          ),
        ]),
      );
    };
}
