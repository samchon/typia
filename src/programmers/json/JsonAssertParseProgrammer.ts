import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";

export namespace JsonAssertParseProgrammer {
  export const decompose = (props: {
    project: IProject;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    init: ts.Expression | undefined;
  }): FeatureProgrammer.IDecomposed => {
    const assert: FeatureProgrammer.IDecomposed = AssertProgrammer.decompose({
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
      guard: false,
    });
    return {
      functions: assert.functions,
      statements: [
        ...assert.statements,
        StatementFactory.constant("__assert", assert.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("string")),
          AssertProgrammer.Guardian.parameter(props.init),
        ],
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
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__assert"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("JSON.parse"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
            AssertProgrammer.Guardian.identifier(),
          ],
        ),
      ),
    };
  };

  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression): ts.CallExpression => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        project,
        importer,
        type,
        name,
        init,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };
}
