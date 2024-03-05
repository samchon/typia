import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { IsProgrammer } from "../IsProgrammer";
import { HttpQueryProgrammer } from "./HttpQueryProgrammer";

export namespace HttpIsQueryProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.ArrowFunction =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(HttpQueryProgrammer.INPUT_TYPE),
          ),
        ],
        ts.factory.createUnionTypeNode([
          ts.factory.createImportTypeNode(
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral("typia"),
            ),
            undefined,
            ts.factory.createIdentifier("Resolved"),
            [
              ts.factory.createTypeReferenceNode(
                name ?? TypeFactory.getFullName(project.checker)(type),
              ),
            ],
            false,
          ),
          ts.factory.createLiteralTypeNode(ts.factory.createNull()),
        ]),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "is",
            IsProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "decode",
            HttpQueryProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createIfStatement(
            ts.factory.createPrefixUnaryExpression(
              ts.SyntaxKind.ExclamationToken,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("is"),
                undefined,
                [ts.factory.createIdentifier("output")],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createNull()),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ]),
      );
}
