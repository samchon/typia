import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { MiscCloneProgrammer } from "./MiscCloneProgrammer";

export namespace MiscAssertCloneProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(init),
        ],
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
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write(project)(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "clone",
            MiscCloneProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("assert"),
              undefined,
              [
                ts.factory.createIdentifier("input"),
                AssertProgrammer.Guardian.identifier(),
              ],
            ),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("clone"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ]),
      );
}
