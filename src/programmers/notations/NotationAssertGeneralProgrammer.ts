import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationAssertGeneralProgrammer {
  export const write =
    (rename: (str: string) => string) =>
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createTypeReferenceNode(
          NotationGeneralProgrammer.returnType(rename)(
            name ?? TypeFactory.getFullName(project.checker)(type),
          ),
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write(project)(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "general",
            NotationGeneralProgrammer.write(rename)({
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
              [ts.factory.createIdentifier("input")],
            ),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("general"),
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
